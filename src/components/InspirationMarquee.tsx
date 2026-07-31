import { useEffect, useState } from 'react';
import MarqueeAlongSvgPath from '@/components/ui/marquee-along-svg-path';

const path =
  'M1 165C58.5 210 388 280 483 165C601 20 526 -85 428 -20C330 45 353 200 515 225C645 245 944 140 995 115';

const tokens = [
  { label: 'framing', kind: 'word' },
  { label: '&', kind: 'glyph' },
  { label: 'sistemi', kind: 'word' },
  { label: '§', kind: 'glyph' },
  { label: 'decisioni', kind: 'word' },
  { label: '?', kind: 'glyph' },
  { label: 'outcome', kind: 'word' },
  { label: '01', kind: 'num' },
  { label: 'ricerca', kind: 'word' },
  { label: '02', kind: 'num' },
  { label: 'trade-off', kind: 'word' },
  { label: '03', kind: 'num' },
] as const;

export default function InspirationMarquee() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div
      // touch-action pan-y = permette allo scroll verticale di passare oltre la marquee
      // touch-none disabilita solo se drag interattivo; qui ambient auto-scroll: pan-y ok
      className="relative w-full h-[140px] sm:h-[220px] md:h-[280px] overflow-hidden"
      style={{ touchAction: 'pan-y' }}
      aria-label="Il mio vocabolario progettuale — animazione decorativa"
    >
      <MarqueeAlongSvgPath
        path={path}
        viewBox="0 0 996 330"
        baseVelocity={reducedMotion ? 0 : 6}
        slowdownOnHover
        draggable={false}
        repeat={2}
        className="w-full h-full"
        responsive
      >
        {tokens.map((t, i) => {
          const isGlyph = t.kind === 'glyph';
          const isNum = t.kind === 'num';
          return (
            <div
              key={i}
              className="flex items-center justify-center px-4 py-2 select-none"
              style={{
                fontFamily: isGlyph || isNum
                  ? 'Fraunces, ui-serif, Georgia, serif'
                  : 'Inter, system-ui, sans-serif',
                fontStyle: isGlyph ? 'italic' : 'normal',
                fontWeight: isGlyph ? 300 : isNum ? 300 : 500,
                fontSize: isGlyph ? '4rem' : isNum ? '2.4rem' : '0.72rem',
                letterSpacing: isGlyph ? '-0.03em' : isNum ? '-0.02em' : '0.14em',
                textTransform: isGlyph || isNum ? 'none' : 'uppercase',
                color: isGlyph || isNum ? '#14213D' : '#5A5D6E',
                whiteSpace: 'nowrap',
              }}
              aria-hidden="true"
            >
              {t.label}
            </div>
          );
        })}
      </MarqueeAlongSvgPath>
    </div>
  );
}
