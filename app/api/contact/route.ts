import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import { google } from "googleapis";

function clean(v: unknown) {
  return String(v ?? "").trim();
}

function notificationHtml(params: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const { name, email, phone, service, message } = params;

  return `
  <div style="background:#fff7fb;padding:20px;font-family:Arial,sans-serif;color:#2b2b2b;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #ffd1e5;border-radius:14px;overflow:hidden;">
      <div style="padding:16px 18px;background:linear-gradient(90deg,#ff5aa5,#ffc2dd);color:#fff;font-weight:700;">
        Jenny Rinn — Nová zpráva
      </div>
      <div style="padding:18px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;color:#7a5b67;width:120px;">Jméno</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:6px 0;color:#7a5b67;">E-mail</td><td style="padding:6px 0;font-weight:600;">${email}</td></tr>
          ${phone ? `<tr><td style="padding:6px 0;color:#7a5b67;">Telefon</td><td style="padding:6px 0;font-weight:600;">${phone}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:6px 0;color:#7a5b67;">Služba</td><td style="padding:6px 0;font-weight:600;">${service}</td></tr>` : ""}
        </table>

        <div style="margin-top:14px;padding:12px 14px;border:1px solid #ffd1e5;background:#fff7fb;border-radius:12px;">
          <div style="font-size:12px;letter-spacing:0.12em;color:#7a5b67;text-transform:uppercase;margin-bottom:8px;">
            Zpráva
          </div>
          <div style="white-space:pre-wrap;line-height:1.6;font-size:14px;">${message}</div>
        </div>
      </div>
    </div>
  </div>`;
}

function autoReplyHtml(params: { name: string; message: string }) {
  const { name, message } = params;

  return `
  <div style="background:#fff7fb;padding:20px;font-family:Arial,sans-serif;color:#2b2b2b;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #ffd1e5;border-radius:14px;overflow:hidden;">
      <div style="padding:16px 18px;background:linear-gradient(90deg,#ff5aa5,#ffc2dd);color:#fff;font-weight:700;">
        Jenny Rinn
      </div>
      <div style="padding:18px;">
        <p style="margin:0 0 10px 0;">Ahoj ${name},</p>
        <p style="margin:0 0 10px 0;line-height:1.6;">
          děkuji za tvou zprávu! Přijala jsem ji a ozvu se ti co nejdříve.
        </p>

        <div style="margin-top:14px;padding:12px 14px;border:1px solid #ffd1e5;background:#fff7fb;border-radius:12px;">
          <div style="font-size:12px;letter-spacing:0.12em;color:#7a5b67;text-transform:uppercase;margin-bottom:8px;">
            Kopie tvé zprávy
          </div>
          <div style="white-space:pre-wrap;line-height:1.6;font-size:14px;">${message}</div>
        </div>

        <p style="margin:14px 0 0 0;">Měj se krásně,<br />Jenny</p>
      </div>
    </div>
  </div>`;
}

async function createGmailTransporter() {
  const user = process.env.GMAIL_USER;
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  if (!user || !clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Gmail OAuth env vars.");
  }

  const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);
  oAuth2Client.setCredentials({ refresh_token: refreshToken });

  const tokenResponse = await oAuth2Client.getAccessToken();
  const accessToken = tokenResponse.token;

  if (!accessToken) {
    throw new Error("Failed to obtain Gmail access token.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user,
      clientId,
      clientSecret,
      refreshToken,
      accessToken,
    },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const message = clean(body.message);

    const phone = clean(body.phone);
    const service = clean(body.service);

    // Honeypot anti-spam
    const company = clean(body.company);
    if (company) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message." },
        { status: 400 }
      );
    }

    const toJenny = process.env.JENNY_TO_EMAIL;
    const gmailUser = process.env.GMAIL_USER;

    if (!toJenny || !gmailUser) {
      throw new Error("Missing JENNY_TO_EMAIL or GMAIL_USER env var.");
    }

    const transporter = await createGmailTransporter();

    // 1) Email to Jenny
    await transporter.sendMail({
      from: `Jenny Rinn <${gmailUser}>`,
      to: toJenny,
      subject: `Nová zpráva: ${name}`,
      replyTo: email,
      html: notificationHtml({
        name,
        email,
        phone: phone || undefined,
        service: service || undefined,
        message,
      }),
      text: `Nová zpráva z webu\nJméno: ${name}\nE-mail: ${email}\nTelefon: ${phone}\nSlužba: ${service}\n\nZpráva:\n${message}`,
    });

    // 2) Auto-reply to visitor
    await transporter.sendMail({
      from: `Jenny Rinn <${gmailUser}>`,
      to: email,
      subject: "Děkuji za zprávu — Jenny Rinn",
      replyTo: toJenny,
      html: autoReplyHtml({ name, message }),
      text: `Ahoj ${name},\n\nDěkuji za tvou zprávu! Přijala jsem ji a ozvu se ti co nejdříve.\n\nKopie tvé zprávy:\n${message}\n\nMěj se krásně,\nJenny`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { error: "Server error sending email." },
      { status: 500 }
    );
  }
}