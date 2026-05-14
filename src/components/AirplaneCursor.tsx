import { useState, useEffect, useRef } from "react";

const TRAIL_LENGTH = 18;

const AirplaneCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);
  const posHistory = useRef([]);
  const animRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const prev = useRef({ x: -200, y: -200 });
  const angle = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      const { x, y } = mouse.current;
      const dx = x - prev.current.x;
      const dy = y - prev.current.y;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        angle.current = Math.atan2(dy, dx) * (180 / Math.PI) + 45;
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${angle.current}deg)`;
        cursorRef.current.style.opacity = visible ? 1 : 0;
      }

      posHistory.current.push({ x, y });
      if (posHistory.current.length > TRAIL_LENGTH) posHistory.current.shift();

      trailRef.current.forEach((el, i) => {
        if (!el) return;
        const idx = posHistory.current.length - 1 - i * 2;
        const pos = posHistory.current[Math.max(0, idx)];
        if (pos) {
          const opacity = ((TRAIL_LENGTH - i) / TRAIL_LENGTH) * 0.55;
          const scale = 1 - i * 0.055;
          el.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
          el.style.opacity = opacity;
        }
      });

      prev.current = { x, y };
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  // ✅ Path pesawat yang benar — badan, sayap kiri, sayap kanan, ekor
  const AirplaneShape = ({ size = 36 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Badan pesawat */}
      <path
        d="M32 4 C34 4 36 6 36 10 L36 38 L32 42 L28 38 L28 10 C28 6 30 4 32 4Z"
        fill="#16a34a"
      />
      {/* Sayap kiri */}
      <path d="M28 20 L6 36 L6 40 L28 30 Z" fill="#15803d" />
      {/* Sayap kanan */}
      <path d="M36 20 L58 36 L58 40 L36 30 Z" fill="#15803d" />
      {/* Ekor kiri */}
      <path d="M28 38 L16 48 L16 51 L28 44 Z" fill="#15803d" />
      {/* Ekor kanan */}
      <path d="M36 38 L48 48 L48 51 L36 44 Z" fill="#15803d" />
      {/* Jendela kokpit */}
      <ellipse cx="32" cy="12" rx="2.5" ry="3.5" fill="#bbf7d0" opacity="0.8" />
    </svg>
  );

  const trailColors = [
    "#3b82f6",
    "#60a5fa",
    "#93c5fd",
    "#bfdbfe",
    "#dbeafe",
    "#e0f2fe",
    "#cffafe",
  ];

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {Array.from({ length: 9 }).map((_, i) => {
        const sz = Math.max(5, 13 - i * 1.2);
        return (
          <div
            key={i}
            ref={(el) => (trailRef.current[i] = el)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 99997,
              width: sz,
              height: sz,
              borderRadius: "50%",
              background: trailColors[Math.min(i, trailColors.length - 1)],
              marginLeft: -sz / 2,
              marginTop: -sz / 2,
              willChange: "transform, opacity",
            }}
          />
        );
      })}

      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 99999,
          marginLeft: -18,
          marginTop: -18,
          willChange: "transform",
          transition: "opacity 0.2s",
          filter: "drop-shadow(0 2px 8px rgba(59,130,246,0.6))",
        }}
      >
        <AirplaneShape size={36} />
      </div>
    </>
  );
};

export default AirplaneCursor;
