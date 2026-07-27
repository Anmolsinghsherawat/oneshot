import React, { useEffect, useRef } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({
  src,
  className = '',
  style = {},
  id,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  const FADE_MS = 500;
  const FADE_OUT_LEAD = 0.55;

  const fadeTo = (targetOpacity: number, duration: number = FADE_MS) => {
    const video = videoRef.current;
    if (!video) return;

    if (rafIdRef.current !== null) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const currentStyleOpacity = video.style.opacity;
    const startOpacity = currentStyleOpacity !== '' ? parseFloat(currentStyleOpacity) : 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newOpacity = startOpacity + (targetOpacity - startOpacity) * progress;

      if (video) {
        video.style.opacity = newOpacity.toString();
      }

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      } else {
        rafIdRef.current = null;
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch(() => {});
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const remainingTime = video.duration - video.currentTime;

      if (!fadingOutRef.current && remainingTime <= FADE_OUT_LEAD && remainingTime > 0) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      if (videoRef.current) {
        videoRef.current.style.opacity = '0';
      }

      timeoutIdRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
          fadingOutRef.current = false;
          fadeTo(1);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // Initial check if video is already ready
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [src]);

  return (
    <video
      id={id}
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{
        ...style,
        opacity: 0,
      }}
    />
  );
};
