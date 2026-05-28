

export default function ExhibitTitle() {
  return (
    <section className="relative w-full px-6 pt-28 md:pt-8 pb-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* subtle top label */}
        <span className="mb-5 text-[11px] md:text-xs uppercase tracking-[0.28em] text-neutral-400">
          curated digital exhibition
        </span>

        {/* heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide leading-[0.95] text-neutral-900">
          exhibition
          <span className="text-orange-500">_unfolds</span>
        </h1>

        {/* supporting text */}
        <p className="mt-7 max-w-2xl text-sm md:text-[15px] leading-7 text-neutral-500 tracking-[-0.01em]">
          A growing collection of interfaces, experiments, and digital
          experiences — built through curiosity, iteration, and a continuous
          pursuit of thoughtful design and smoother interaction.
        </p>

        {/* subtle divider */}
        <div className="mt-10 h-px w-24 bg-neutral-200" />

      </div>
    </section>
  )
}