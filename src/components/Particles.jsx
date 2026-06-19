import { useMemo } from "react";

export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        size: Math.random() * 6 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 5 + 2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-green-400/70 blur-[2px] animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}