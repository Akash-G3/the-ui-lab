

export default function AboutBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base */}
      <div className="absolute inset-0 bg-[#f6f3ee]" />

      {/* Editorial Grid */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

     {/* Main Atmosphere */}
<div className="absolute left-1/2 top-[8%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-orange-300/35 blur-[260px]" />

{/* Secondary Warm Glow */}
<div className="absolute -left-56 top-[15%] h-[850px] w-[850px] rounded-full bg-orange-200/28 blur-[220px]" />

{/* Accent Glow */}
<div className="absolute right-[10%] top-[25%] h-[500px] w-[500px] rounded-full bg-amber-300/15 blur-[180px]" />

{/* Depth Glow */}
<div className="absolute right-[-15%] bottom-[5%] h-[800px] w-[800px] rounded-full bg-neutral-300/15 blur-[240px]" />

      {/* Large Editorial Typography */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      >
        {/* <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[22vw] font-black tracking-[-0.11em] text-black/[0.025]">
          ABOUT
        </h1> */}
      </div>

      {/* Optional Secondary Word */}
      <h2 className="absolute right-[-2%] top-[18%] whitespace-nowrap text-[10vw] font-black tracking-[-0.08em] text-black/[0.015] rotate-[-8deg]">
        CREATE
      </h2>

      {/* Center Illumination */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.55), transparent 70%)",
        }}
      />

      {/* Soft Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.045) 100%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}