import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Fotogalerie | Jenny Rinn - Mořská Panna & Influencer",
  description: "Prohlédněte si magické fotky Jenny Rinn – profesionální mořské panny a influencerky.",
};

export default function Fotogalerie() {
  return <GalleryContent />;
}
