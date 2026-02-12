"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
  wobble: number;
}

export default function BubbleEffect({ count = 20 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: count }, (_, i) => {
      // Create natural size distribution: mostly small/medium, a few big ones
      const rand = Math.random();
      let size: number;
      if (rand < 0.3) {
        // 30% tiny bubbles (6-14px)
        size = 6 + Math.random() * 8;
      } else if (rand < 0.65) {
        // 35% small-medium (15-30px)
        size = 15 + Math.random() * 15;
      } else if (rand < 0.85) {
        // 20% medium-large (30-55px)
        size = 30 + Math.random() * 25;
      } else {
        // 15% big beautiful bubbles (55-90px)
        size = 55 + Math.random() * 35;
      }

      // Bigger bubbles rise slower and are slightly more transparent
      const baseDuration = 8 + (size / 90) * 10;

      return {
        id: i,
        left: `${2 + Math.random() * 96}%`,
        size,
        delay: `${Math.random() * 12}s`,
        duration: `${baseDuration + Math.random() * 6}s`,
        opacity: size > 50 ? 0.55 + Math.random() * 0.25 : 0.6 + Math.random() * 0.35,
        wobble: 5 + Math.random() * 20,
      };
    });
    setBubbles(generated);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDelay: b.delay,
            animationDuration: b.duration,
            // @ts-expect-error CSS custom property
            "--bubble-opacity": b.opacity,
            "--bubble-wobble": `${b.wobble}px`,
          }}
        />
      ))}
    </div>
  );
}
