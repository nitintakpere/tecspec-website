/**
 * LogoMark — text-based Tecspec Imex logo.
 *
 * Visual:  [ gold-bordered navy circle with gold "TI" ]  TECSPEC IMEX
 *
 * Props:
 *   tone   "dark" (cream wordmark, used on navy backgrounds) | "light" (navy wordmark)
 *   size   "sm" | "md" | "lg"
 *   showWordmark  hide the wordmark and render just the monogram
 */
export default function LogoMark({
  tone = 'dark',
  size = 'md',
  showWordmark = true,
}) {
  const isDark = tone === 'dark'

  const dims =
    size === 'lg'
      ? { circle: 'w-12 h-12', mono: 'text-base', word: 'text-2xl md:text-[1.65rem]' }
      : size === 'sm'
      ? { circle: 'w-8 h-8',  mono: 'text-[0.7rem]', word: 'text-sm' }
      : { circle: 'w-11 h-11', mono: 'text-[0.95rem]', word: 'text-xl' }

  return (
    <span className="inline-flex items-center gap-3">
      {/* Monogram — navy disc, gold border, gold "TI" */}
      <span
        className={`${dims.circle} rounded-full flex items-center justify-center font-serif font-bold text-gold shrink-0 leading-none`}
        style={{
          backgroundColor: 'var(--color-navy)',
          border: '1.5px solid var(--color-gold)',
          letterSpacing: '0.02em',
        }}
      >
        <span className={dims.mono} style={{ paddingTop: '1px' }}>TI</span>
      </span>

      {showWordmark && (
        <span
          className={`font-serif font-semibold tracking-wide leading-none ${dims.word} ${
            isDark ? 'text-cream' : 'text-navy'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          TECSPEC IMEX
        </span>
      )}
    </span>
  )
}
