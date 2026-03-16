"use client";

/**
 * Subtle structural background using CSS only.
 * Large, slow-moving gradient zones that give depth
 * without looking like noise or dirt.
 */
export default function BackgroundV2() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Primary green gradient — top area */}
      <div
        className="absolute w-[1000px] h-[800px] rounded-full"
        style={{
          top: "-10%",
          right: "-5%",
          background:
            "radial-gradient(ellipse, rgba(51, 171, 104, 0.06) 0%, rgba(51, 171, 104, 0.02) 40%, transparent 70%)",
          animation: "bgShift1 40s ease-in-out infinite",
        }}
      />

      {/* Blue gradient — mid-left */}
      <div
        className="absolute w-[800px] h-[600px] rounded-full"
        style={{
          top: "35%",
          left: "-10%",
          background:
            "radial-gradient(ellipse, rgba(97, 135, 226, 0.05) 0%, rgba(97, 135, 226, 0.015) 40%, transparent 70%)",
          animation: "bgShift2 50s ease-in-out infinite",
        }}
      />

      {/* Green gradient — bottom */}
      <div
        className="absolute w-[900px] h-[700px] rounded-full"
        style={{
          bottom: "-5%",
          right: "10%",
          background:
            "radial-gradient(ellipse, rgba(51, 171, 104, 0.04) 0%, transparent 60%)",
          animation: "bgShift3 45s ease-in-out infinite",
        }}
      />

      <style jsx>{`
        @keyframes bgShift1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-60px, 40px); }
        }
        @keyframes bgShift2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(50px, -30px); }
        }
        @keyframes bgShift3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, -50px); }
        }
      `}</style>
    </div>
  );
}
