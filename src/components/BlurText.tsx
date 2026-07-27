import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  id?: string;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = '', id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const words = text.split(' ');

  return (
    <div
      id={id}
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            isVisible
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : { filter: 'blur(10px)', opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * 100) / 1000,
          }}
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
