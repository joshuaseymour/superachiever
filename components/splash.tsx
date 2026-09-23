import { SITE } from "@/lib/site"

/**
 * GitHub-original splash craft under the Avolve hard-black shell.
 * Four canon lines, one viewport: identity at the top, tagline commanding
 * the center, plain sentence at the bottom. No CTA.
 *
 * Entrance matches the GitHub Motion recipe (0.6s, ease [0.22, 1, 0.36, 1],
 * 0.09s stagger) via CSS so this shell does not take a new dependency.
 */
export function Splash() {
  return (
    <section className="relative flex w-full flex-1 flex-col overflow-hidden px-6 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-[calc(env(safe-area-inset-bottom)+2.25rem)] [@media(max-height:480px)]:pt-4 [@media(max-height:480px)]:pb-5 sm:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[34rem] w-[52rem] max-w-[170vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-3xl"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-between text-center">
        <div className="splash-item flex flex-col items-center">
          <p className="text-base font-medium tracking-tight text-[#fafafa] sm:text-lg">
            {SITE.name}
          </p>
          <p className="mt-2 font-mono text-xs tracking-[0.15em] text-zinc-400 uppercase">
            {SITE.descriptor}
          </p>
        </div>

        <h1 className="splash-item splash-item-delay-1 my-8 max-w-[18ch] text-[clamp(2.25rem,min(9vw,14svh),5.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-balance text-[#fafafa] [@media(max-height:480px)]:my-4">
          {SITE.tagline}
        </h1>

        <p className="splash-item splash-item-delay-2 max-w-[52ch] text-lg leading-relaxed text-pretty text-zinc-400 sm:text-xl md:text-2xl">
          {SITE.plain}
        </p>
      </div>
    </section>
  )
}
