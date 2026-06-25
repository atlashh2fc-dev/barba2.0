"use client";

import { useRef, useState } from "react";

export function SeamlessHeroVideo() {
  const first = useRef<HTMLVideoElement>(null);
  const second = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<0 | 1>(0);
  const switching = useRef(false);

  function handleTimeUpdate(videoIndex: 0 | 1) {
    const current = videoIndex === 0 ? first.current : second.current;
    const next = videoIndex === 0 ? second.current : first.current;
    if (!current || !next || !current.duration || switching.current) return;

    if (current.duration - current.currentTime < 1.15) {
      switching.current = true;
      next.currentTime = 0;
      next.play().catch(() => undefined);
      setActive(videoIndex === 0 ? 1 : 0);
      window.setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        switching.current = false;
      }, 1200);
    }
  }

  const videoClass =
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out";

  return (
    <>
      <video
        ref={first}
        className={`${videoClass} ${active === 0 ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        playsInline
        poster="/images/current/barba-skyline.jpg"
        onTimeUpdate={() => handleTimeUpdate(0)}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
      <video
        ref={second}
        className={`${videoClass} ${active === 1 ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        poster="/images/current/barba-skyline.jpg"
        onTimeUpdate={() => handleTimeUpdate(1)}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
}
