
export default function Miniature() {
  return (
    <section className="relative flex h-[72vh] items-center justify-center overflow-hidden px-6">

      {/* LIGHT EDITORIAL BASE (same as showcase) */}
      <div className="absolute inset-0 -z-10 bg-[#f7f7f4]" />

      {/* ambient orange glow */}
      <div className="absolute left-1/2 top-[-20%] -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-orange-100 blur-[120px]" />

      {/* soft bottom neutral glow */}
      <div className="absolute bottom-[-30%] right-[10%] -z-10 h-[300px] w-[300px] rounded-full bg-neutral-300 blur-[120px]" />

      {/* LIGHT GRID (same system as ExhibitionShowcase) */}
      {/* <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      /> */}

      {/* vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.03))]" />

      {/* FLOATING CARD CONTAINER */}
      <div className="relative flex w-full max-w-6xl items-center justify-center gap-10">

        {/* LEFT FLOATING CARD */}
        <div className="group relative h-[420px] w-1/2 overflow-hidden rounded-[2rem] border border-black/5 bg-white/70 shadow-[0_10px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">

          <img
            src="/2026.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* soft reflection */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        {/* RIGHT FLOATING PANEL */}
        <div className="group relative flex h-[420px] w-1/2 items-center justify-center overflow-hidden rounded-[2rem] border border-black/5 bg-white/60 shadow-[0_10px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2">

          {/* subtle glow */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/40 blur-[80px]" />

          <p className="relative text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            ui stage / 3d placeholder
          </p>

        </div>

      </div>
    </section>
  );
}   