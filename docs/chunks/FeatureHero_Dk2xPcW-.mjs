import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from './astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';

const $$Astro = createAstro("https://kevinparadisiai.github.io");
const $$FeatureHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeatureHero;
  const { crumb, glyph, title, titleEmWord, lede, signatureColor, onSignatureDark = false } = Astro2.props;
  const base = "/Siteweb".replace(/\/$/, "");
  const [pre, post] = titleEmWord && title.includes(titleEmWord) ? title.split(titleEmWord) : [title, ""];
  const hasSignature = !!signatureColor;
  const light = hasSignature && !onSignatureDark;
  const dark = hasSignature && onSignatureDark;
  const wrapperClass = hasSignature ? light ? "relative overflow-hidden text-white border-b border-white/15" : "relative overflow-hidden text-fg border-b border-black/15" : "relative overflow-hidden bg-bg text-fg border-b border-border";
  const wrapperStyle = hasSignature ? `background-color: ${signatureColor};` : "";
  const crumbBase = light ? "text-white" : "text-fg";
  const crumbMuted = light ? "text-white/70" : dark ? "text-fg/70" : "text-muted";
  const crumbSep = light ? "text-white/40" : dark ? "text-fg/40" : "text-muted/60";
  const crumbBeforeClass = light ? "before:content-['—_'] before:text-white/70" : dark ? "before:content-['—_'] before:text-fg/70" : "before:content-['—_'] before:text-accent";
  const titleClass = light ? "text-white" : "text-fg";
  const titleEmClass = light ? "text-white/80" : dark ? "text-fg/70" : "text-accent";
  const ledeClass = light ? "text-white font-medium" : dark ? "text-fg/85 font-medium" : "text-muted";
  const glyphClass = light ? "text-white" : "text-fg";
  const glyphOpacity = hasSignature ? "0.10" : "0.05";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(wrapperClass, "class")}${addAttribute(wrapperStyle, "style")}> <!-- Glyph in filigrana --> <span aria-hidden="true"${addAttribute(`pointer-events-none select-none absolute -right-2 -bottom-8 font-display italic font-light leading-[0.85] z-0 ${glyphClass}`, "class")}${addAttribute(`font-size: clamp(22rem, 46vw, 46rem); font-variation-settings: 'opsz' 144, 'SOFT' 100; font-variant-numeric: tabular-nums; opacity: ${glyphOpacity};`, "style")}>${glyph}</span> <!-- Small accent tick in the corner --> ${!hasSignature && renderTemplate`<svg aria-hidden="true" class="pointer-events-none absolute top-24 right-[6vw] text-accent hidden lg:block z-0" width="42" height="42" viewBox="0 0 42 42" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"> <path d="M8 8l26 26M34 8L8 34"></path> </svg>`} <section class="container-editorial relative z-10 py-24 md:py-32 pb-16"> <p${addAttribute([
    "text-[0.72rem] uppercase tracking-[0.14em] font-medium",
    crumbMuted,
    crumbBeforeClass
  ], "class:list")}> <a${addAttribute(`${base}/`, "href")}${addAttribute([crumbBase, "no-underline hover:underline"], "class:list")}>Portfolio</a> ${crumb.split("/").slice(1).map((seg) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<span${addAttribute(["mx-3", crumbSep], "class:list")}>·</span>${seg.trim()}` })}`)} </p> <h1${addAttribute(["font-body font-black leading-[0.95] m-0 mt-5 mb-5 max-w-[20ch]", titleClass], "class:list")} style="font-size: clamp(3.5rem, 9vw + 1rem, 7.5rem); letter-spacing: -0.035em;"> ${pre}${titleEmWord && renderTemplate`<span${addAttribute(["font-display italic font-light", titleEmClass], "class:list")}> ${titleEmWord} </span>`}${post} </h1> <p${addAttribute(["text-step-2 leading-[1.4] max-w-[62ch] m-0", ledeClass], "class:list")}>${lede}</p> </section> </div>`;
}, "/home/user/Siteweb/src/components/FeatureHero.astro", void 0);

export { $$FeatureHero as $ };
