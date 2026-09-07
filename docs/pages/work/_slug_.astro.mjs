import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, e as defineScriptVars, r as renderComponent } from '../../chunks/astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base, a as $$SiteSidebar, b as $$SiteFooter } from '../../chunks/SiteFooter_yqd3yLzb.mjs';
import { $ as $$FeatureHero } from '../../chunks/FeatureHero_Dk2xPcW-.mjs';
import 'clsx';
/* empty css                                     */
import { p as projects } from '../../chunks/projects_C8ysihQl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://kevinparadisiai.github.io");
const $$MockupBrowser = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MockupBrowser;
  const {
    signatureColor,
    dark = false,
    variant = "overview",
    caption,
    urlHint = "portfolio.kevinparadisi.it",
    shape = "browser",
    alt
  } = Astro2.props;
  const surface = "#F7F5F0";
  const surfaceDim = "#EDEAE3";
  const stroke = "rgba(10,10,10,0.10)";
  const ink = "#1A1A1A";
  const inkSoft = "rgba(26,26,26,0.55)";
  const onSig = dark ? "#0A0A0A" : "#FFFFFF";
  const rows = variant === "form" ? [8, 5, 7, 4, 6] : variant === "tree" ? [3, 5, 4, 6, 5, 4] : variant === "grid" ? [6, 6, 6, 6] : variant === "detail" ? [7, 4, 6, 5] : (
    /* overview */
    [7, 5, 6, 4, 5]
  );
  const isPortrait = shape === "portrait";
  const vbW = isPortrait ? 720 : 1600;
  const vbH = isPortrait ? 1440 : 1e3;
  return renderTemplate`${maybeRenderHead()}<figure class="mockup" role="figure"${addAttribute(alt, "aria-label")} data-astro-cid-mgbgntvh> <div class="mockup__frame" data-astro-cid-mgbgntvh> <svg${addAttribute(`0 0 ${vbW} ${vbH}`, "viewBox")} role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet" class="mockup__svg" data-astro-cid-mgbgntvh> <!-- Base surface --> <rect x="0" y="0"${addAttribute(vbW, "width")}${addAttribute(vbH, "height")}${addAttribute(surface, "fill")} data-astro-cid-mgbgntvh></rect> ${!isPortrait && renderTemplate`<g data-astro-cid-mgbgntvh> <!-- Chrome bar --> <rect x="0" y="0"${addAttribute(vbW, "width")} height="60"${addAttribute(surfaceDim, "fill")} data-astro-cid-mgbgntvh></rect> <line x1="0" y1="60"${addAttribute(vbW, "x2")} y2="60"${addAttribute(stroke, "stroke")} stroke-width="1" data-astro-cid-mgbgntvh></line> <!-- Traffic lights --> <circle cx="34" cy="30" r="9" fill="#E56060" data-astro-cid-mgbgntvh></circle> <circle cx="60" cy="30" r="9" fill="#E0B247" data-astro-cid-mgbgntvh></circle> <circle cx="86" cy="30" r="9" fill="#66B978" data-astro-cid-mgbgntvh></circle> <!-- Address bar --> <rect x="220" y="15"${addAttribute(vbW - 440, "width")} height="30" rx="6"${addAttribute(surface, "fill")}${addAttribute(stroke, "stroke")} data-astro-cid-mgbgntvh></rect> <text${addAttribute(vbW / 2, "x")} y="35" text-anchor="middle" font-family="ui-monospace, monospace" font-size="14"${addAttribute(inkSoft, "fill")} data-astro-cid-mgbgntvh>${urlHint}</text> </g>`} ${isPortrait && renderTemplate`<g data-astro-cid-mgbgntvh> <!-- Phone notch --> <rect${addAttribute(vbW / 2 - 90, "x")} y="30" width="180" height="26" rx="13" fill="#0A0A0A" data-astro-cid-mgbgntvh></rect> </g>`} <!-- Content area --> <g${addAttribute(`translate(0, ${isPortrait ? 100 : 60})`, "transform")} data-astro-cid-mgbgntvh> <!-- Left rail (browser only): logo + nav dots --> ${!isPortrait && renderTemplate`<g data-astro-cid-mgbgntvh> <rect x="60" y="60"${addAttribute(vbW - 120, "width")} height="1"${addAttribute(stroke, "fill")} data-astro-cid-mgbgntvh></rect> <text x="60" y="42" font-family="Inter, sans-serif" font-weight="700" font-size="20"${addAttribute(ink, "fill")} data-astro-cid-mgbgntvh>Kevin.</text> <g${addAttribute(inkSoft, "fill")} font-family="Inter, sans-serif" font-size="12" letter-spacing="1.6" data-astro-cid-mgbgntvh> <text${addAttribute(vbW - 260, "x")} y="42" data-astro-cid-mgbgntvh>WORK</text> <text${addAttribute(vbW - 180, "x")} y="42" data-astro-cid-mgbgntvh>LAB</text> <text${addAttribute(vbW - 120, "x")} y="42" data-astro-cid-mgbgntvh>CONTATTI</text> </g> </g>`} <!-- Hero block: signature color band with a title placeholder --> <g${addAttribute(`translate(${isPortrait ? 40 : 80}, ${isPortrait ? 40 : 110})`, "transform")} data-astro-cid-mgbgntvh> <rect x="0" y="0"${addAttribute(vbW - (isPortrait ? 80 : 160), "width")}${addAttribute(isPortrait ? 360 : 300, "height")}${addAttribute(signatureColor, "fill")} data-astro-cid-mgbgntvh></rect> <!-- Title bars (short + long) --> <rect x="30"${addAttribute(isPortrait ? 60 : 40, "y")}${addAttribute(isPortrait ? 260 : 320, "width")}${addAttribute(isPortrait ? 22 : 28, "height")} rx="2"${addAttribute(onSig, "fill")} opacity="0.85" data-astro-cid-mgbgntvh></rect> <rect x="30"${addAttribute(isPortrait ? 100 : 90, "y")}${addAttribute(isPortrait ? 520 : 780, "width")}${addAttribute(isPortrait ? 40 : 60, "height")} rx="4"${addAttribute(onSig, "fill")} opacity="0.95" data-astro-cid-mgbgntvh></rect> <rect x="30"${addAttribute(isPortrait ? 160 : 170, "y")}${addAttribute(isPortrait ? 420 : 560, "width")}${addAttribute(isPortrait ? 40 : 60, "height")} rx="4"${addAttribute(onSig, "fill")} opacity="0.75" data-astro-cid-mgbgntvh></rect> <!-- CTA pill --> <rect x="30"${addAttribute(isPortrait ? 260 : 240, "y")}${addAttribute(isPortrait ? 180 : 220, "width")}${addAttribute(isPortrait ? 46 : 46, "height")} rx="23"${addAttribute(onSig, "fill")} opacity="0.15"${addAttribute(onSig, "stroke")} stroke-opacity="0.6" data-astro-cid-mgbgntvh></rect> <rect x="60"${addAttribute(isPortrait ? 274 : 254, "y")}${addAttribute(isPortrait ? 90 : 100, "width")} height="18" rx="2"${addAttribute(onSig, "fill")} opacity="0.9" data-astro-cid-mgbgntvh></rect> </g> <!-- Content rows: stack of horizontal bars sized per variant --> <g${addAttribute(`translate(${isPortrait ? 40 : 80}, ${isPortrait ? 460 : 460})`, "transform")}${addAttribute(ink, "fill")} opacity="0.7" data-astro-cid-mgbgntvh> ${rows.map((cols, r) => renderTemplate`<g${addAttribute(`translate(0, ${r * (isPortrait ? 44 : 60)})`, "transform")} data-astro-cid-mgbgntvh> ${Array.from({ length: cols }).map((_, c) => {
    const totalW = vbW - (isPortrait ? 80 : 160);
    const gap = 12;
    const cellW = (totalW - gap * (cols - 1)) / cols;
    return renderTemplate`<rect${addAttribute(c * (cellW + gap), "x")} y="0"${addAttribute(cellW, "width")}${addAttribute(isPortrait ? 12 : 18, "height")} rx="2"${addAttribute(ink, "fill")}${addAttribute((0.55 - r * 0.06).toFixed(2), "opacity")} data-astro-cid-mgbgntvh></rect>`;
  })} </g>`)} </g> </g> </svg> </div> ${caption && renderTemplate`<figcaption class="mockup__caption" data-astro-cid-mgbgntvh> <span aria-hidden="true" class="mockup__tick"${addAttribute(`background:${signatureColor};`, "style")} data-astro-cid-mgbgntvh></span> ${caption} </figcaption>`} </figure> `;
}, "/home/user/Siteweb/src/components/MockupBrowser.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://kevinparadisiai.github.io");
const $$CaseStudyPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CaseStudyPage;
  const { project } = Astro2.props;
  const crumb = `Portfolio / Work / ${project.client}`;
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  // Set the theme-color meta so mobile UI chrome matches the case signature\n  const meta = document.createElement('meta');\n  meta.name = 'theme-color';\n  meta.content = signatureColor;\n  document.head.appendChild(meta);\n})();<\/script>"])), renderComponent($$result, "Base", $$Base, { "title": `${project.client} \u2014 ${project.title.replace(/\.$/, "")}` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FeatureHero", $$FeatureHero, { "crumb": crumb, "glyph": project.num, "title": project.title, "titleEmWord": project.titleEmWord, "lede": project.lede, "signatureColor": project.signatureColor, "onSignatureDark": project.onSignatureDark })}  ${maybeRenderHead()}<section class="border-b border-border py-12 md:py-16 bg-bg" aria-label="Meta progetto"> <div class="container-editorial grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6"> <div> <p class="text-[0.68rem] uppercase tracking-[0.16em] font-medium text-muted mb-2 flex items-center gap-2"> <span class="w-2 h-2 rounded-full"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Servizi
</p> <p class="font-body text-step-0 text-fg m-0 leading-tight"> ${project.services.map((s, i) => renderTemplate`<span>${s}${i < project.services.length - 1 ? ", " : ""}</span>`)} </p> </div> <div> <p class="text-[0.68rem] uppercase tracking-[0.16em] font-medium text-muted mb-2 flex items-center gap-2"> <span class="w-2 h-2 rounded-full"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Cliente
</p> <p class="font-body font-medium text-step-0 text-fg m-0 leading-tight">${project.client}</p> </div> <div> <p class="text-[0.68rem] uppercase tracking-[0.16em] font-medium text-muted mb-2 flex items-center gap-2"> <span class="w-2 h-2 rounded-full"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Industria
</p> <p class="font-body text-step-0 text-fg m-0 leading-tight">${project.sector}</p> </div> <div> <p class="text-[0.68rem] uppercase tracking-[0.16em] font-medium text-muted mb-2 flex items-center gap-2"> <span class="w-2 h-2 rounded-full"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Anno
</p> <p class="font-body text-step-0 text-fg m-0 leading-tight tabular-nums">${project.year}</p> </div> </div> </section>  <section class="container-editorial py-16 md:py-24" aria-labelledby="intro-anchor"> <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16"> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 flex items-center gap-3"> <span class="inline-block w-10 h-px"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Il progetto
</p> <div id="intro-anchor" class="text-step-0 md:text-step-1 leading-[1.6] text-fg max-w-[62ch]"> ${project.intro.map((p, i) => renderTemplate`<p${addAttribute([i < project.intro.length - 1 ? "mb-5" : "mb-0"], "class:list")}>${p}</p>`)} </div> </div> </section>  ${project.cover && renderTemplate`<section class="container-editorial pb-24 md:pb-32 overflow-visible" aria-label="Anteprima progetto"> <div class="relative"> <div class="md:-mr-16 lg:-mr-24 md:-rotate-[1deg] transition-transform duration-500"> ${renderComponent($$result2, "MockupBrowser", $$MockupBrowser, { "signatureColor": project.signatureColor, "dark": !!project.onSignatureDark, "caption": project.cover.caption, "urlHint": project.cover.urlHint, "variant": project.cover.variant, "shape": project.cover.shape, "alt": `Placeholder \u2014 ${project.cover.caption}. Mockup di anteprima; l'immagine reale del progetto \xE8 NDA.` })} </div> ${project.gallery && project.gallery[1] && renderTemplate`<div aria-hidden="true" class="hidden lg:block absolute right-0 -bottom-24 w-[220px] rotate-[3deg] pointer-events-none"> ${renderComponent($$result2, "MockupBrowser", $$MockupBrowser, { "signatureColor": project.signatureColor, "dark": !!project.onSignatureDark, "variant": project.gallery[1].variant, "shape": "portrait", "alt": "" })} </div>`} </div> </section>`} <section class="border-y border-border py-20 md:py-28 bg-bg" aria-labelledby="outcome-anchor"> <div class="container-editorial"> <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 mb-14 md:mb-20"> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 flex items-center gap-3"> <span class="inline-block w-10 h-px"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Risultati
</p> <h2 id="outcome-anchor" class="font-body font-black text-fg m-0" style="font-size: clamp(1.75rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.15;">Cosa è successo dopo il rilascio</h2> </div> ${(() => {
    const all = [
      { ...project.metric, primary: true },
      ...(project.metricsSecondary || []).map((m) => ({ ...m, primary: false }))
    ];
    const cols = all.length === 1 ? "md:grid-cols-1" : all.length === 2 ? "md:grid-cols-2" : all.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4";
    return renderTemplate`<div${addAttribute(["grid grid-cols-1 gap-y-14 md:gap-y-0 md:divide-x divide-border border-t border-border", cols], "class:list")}> ${all.map((m, i) => renderTemplate`<div${addAttribute(["flex flex-col justify-between min-h-[220px] md:min-h-[280px] pt-8 md:pt-10 md:pb-2", i > 0 ? "md:pl-8 lg:pl-12" : "md:pr-8 lg:pr-12"], "class:list")}> <p class="text-[0.68rem] uppercase tracking-[0.16em] font-medium text-muted m-0 flex items-center gap-2"> <span aria-hidden="true" class="w-1.5 h-1.5 rounded-full"${addAttribute(`background:${project.signatureColor};`, "style")}></span> ${i === 0 ? "Metrica principale" : `Metrica ${String(i + 1).padStart(2, "0")}`} </p> <div class="mt-8 md:mt-0"> <p class="font-body font-black m-0 leading-none tabular-nums"${addAttribute(`font-size: ${m.primary ? "clamp(5rem, 12vw, 10rem)" : "clamp(3.5rem, 7vw, 6rem)"}; letter-spacing: -0.045em; color: ${m.primary ? project.signatureColor : "#0A0A0A"};`, "style")}>${m.value}</p> <p class="mt-4 md:mt-5 text-step-0 leading-[1.35] text-muted max-w-[26ch] m-0">${m.label}</p> </div> </div>`)} </div>`;
  })()} </div> </section>  <section class="container-editorial py-16 md:py-24" aria-label="Processo"> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 mb-10 flex items-center gap-3"> <span class="inline-block w-10 h-px"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Il processo
</p> <div class="flex flex-col gap-14 md:gap-20"> ${project.phases.map((phase, i) => renderTemplate`<article class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 border-t border-border pt-10 md:pt-14"> <div> <p class="font-mono text-[0.68rem] font-medium tracking-[0.16em] uppercase m-0 mb-4"${addAttribute(`color:${project.signatureColor};`, "style")}>Fase ${String(i + 1).padStart(2, "0")}</p> <h3 class="font-body font-black text-fg m-0" style="font-size: clamp(1.75rem, 3.4vw, 2.6rem); letter-spacing: -0.025em; line-height: 1.05;">${phase.title}</h3> </div> <div class="text-step-0 md:text-step-1 leading-[1.65] text-fg max-w-[62ch]"> <p class="m-0">${phase.body}</p> </div> </article>`)} </div> </section>  ${project.gallery && project.gallery.length > 0 && renderTemplate`<section class="bg-bg py-16 md:py-24 md:pb-40 border-t border-border overflow-hidden" aria-labelledby="gallery-anchor"> <div class="container-editorial"> <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 mb-12"> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 flex items-center gap-3"> <span class="inline-block w-10 h-px"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Dettagli
</p> <h2 id="gallery-anchor" class="font-body font-black text-fg m-0" style="font-size: clamp(1.75rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.15;">Altre viste della soluzione</h2> </div> <!-- Bento layout: varied spans + subtle rotations + vertical offsets
             so the mockups read as a composition, not a uniform 3-col grid. --> <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-10 md:gap-y-16 items-start"> ${project.gallery.map((m, i) => {
    const layout = i === 0 ? "md:col-span-8 md:-rotate-[1deg] md:origin-top-left" : i === 1 ? "md:col-span-4 md:row-span-2 md:mt-16 md:rotate-[2deg] md:origin-top" : i === 2 ? "md:col-span-7 md:col-start-2 md:mt-14 md:-rotate-[1.5deg] md:origin-top-right" : "md:col-span-6";
    return renderTemplate`<div${addAttribute(["transition-transform duration-500", layout], "class:list")}> ${renderComponent($$result2, "MockupBrowser", $$MockupBrowser, { "signatureColor": project.signatureColor, "dark": !!project.onSignatureDark, "caption": m.caption, "variant": m.variant, "shape": m.shape, "alt": `Placeholder \u2014 ${m.caption}. Mockup di dettaglio, l'immagine reale del progetto \xE8 NDA.` })} </div>`;
  })} </div> </div> </section>`} <section class="border-t border-border py-16 md:py-24"${addAttribute(`background-color: ${project.signatureColor}0D;`, "style")} aria-labelledby="ruolo-anchor"> <div class="container-editorial grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16"> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 flex items-center gap-3"> <span class="inline-block w-10 h-px"${addAttribute(`background:${project.signatureColor};`, "style")} aria-hidden="true"></span>
Il mio ruolo
</p> <div> <h2 id="ruolo-anchor" class="font-body font-black text-fg m-0 mb-6" style="font-size: clamp(1.75rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.15;">Cosa ho posseduto</h2> <p class="text-step-0 md:text-step-1 leading-[1.65] text-fg max-w-[62ch] m-0">${project.role}</p> </div> </div> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "slot": "footer" })}`, "sidebar": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteSidebar", $$SiteSidebar, { "slot": "sidebar", "current": "work" })}` }), defineScriptVars({ signatureColor: project.signatureColor }));
}, "/home/user/Siteweb/src/components/CaseStudyPage.astro", void 0);

const $$Astro = createAstro("https://kevinparadisiai.github.io");
function getStaticPaths() {
  return projects.map((p) => ({
    params: { slug: p.slug },
    props: { project: p }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "CaseStudyPage", $$CaseStudyPage, { "project": project })}`;
}, "/home/user/Siteweb/src/pages/work/[slug].astro", void 0);

const $$file = "/home/user/Siteweb/src/pages/work/[slug].astro";
const $$url = "/Siteweb/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
