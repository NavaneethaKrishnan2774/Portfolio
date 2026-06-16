export default function Particles() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-green-400/70 blur-[2px] animate-pulse"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 2}s`
          }}
        />
      ))}

    </div>
  );
}