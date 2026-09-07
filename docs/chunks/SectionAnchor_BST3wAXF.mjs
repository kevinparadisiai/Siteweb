import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://kevinparadisiai.github.io");
const $$SectionAnchor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionAnchor;
  const { chapter, label, verb, subtitle, onDark = false } = Astro2.props;
  const cls = {
    wrap: onDark ? "border-b border-on-accent/15" : "border-b border-border",
    chapter: onDark ? "text-on-accent/70" : "text-muted",
    rule: onDark ? "bg-on-accent/60" : "bg-accent",
    verb: onDark ? "text-on-accent" : "text-fg",
    subtitle: onDark ? "text-on-accent/75" : "text-muted"
  };
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["pt-8 md:pt-12 pb-8 md:pb-10 mb-10 md:mb-14", cls.wrap], "class:list")}> <p${addAttribute(["flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-medium m-0 mb-6 md:mb-8", cls.chapter], "class:list")} data-reveal> <span${addAttribute(["inline-block w-10 h-px", cls.rule], "class:list")} aria-hidden="true"></span> <span class="tabular-nums">${chapter}</span> <span aria-hidden="true" class="opacity-40">—</span> <span>${label}</span> </p> <h2${addAttribute(["font-display italic font-light leading-[0.9] tracking-tight m-0", cls.verb], "class:list")} style="font-size: clamp(4.5rem, 15vw, 12rem); font-variation-settings: 'opsz' 144, 'SOFT' 100;" data-reveal data-reveal-delay="1">${verb}</h2> ${subtitle && renderTemplate`<p${addAttribute(["font-display font-normal leading-[1.35] max-w-[45ch] m-0 mt-6", cls.subtitle], "class:list")} style="font-size: clamp(1.15rem, 2vw, 1.5rem);" data-reveal data-reveal-delay="2">${subtitle}</p>`} </header> `;
}, "/home/user/Siteweb/src/components/SectionAnchor.astro", void 0);

export { $$SectionAnchor as $ };
