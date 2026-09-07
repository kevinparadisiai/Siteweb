import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base, a as $$SiteSidebar, b as $$SiteFooter } from '../chunks/SiteFooter_yqd3yLzb.mjs';
import { $ as $$FeatureHero } from '../chunks/FeatureHero_Dk2xPcW-.mjs';
import 'clsx';
import { p as projects } from '../chunks/projects_C8ysihQl.mjs';
export { renderers } from '../renderers.mjs';

const $$WorkList = createComponent(($$result, $$props, $$slots) => {
  const base = "/Siteweb".replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<section class="bg-bg pb-20 md:pb-28 pt-12 md:pt-16" id="work" aria-label="Lista progetti"> <div class="container-editorial"> <ul class="list-none p-0 m-0 flex flex-col gap-6 md:gap-8"> ${projects.map((p) => {
    const dark = !!p.onSignatureDark;
    return renderTemplate`<li> <a${addAttribute(`${base}/work/${p.slug}/`, "href")}${addAttribute([
      "group relative block overflow-hidden no-underline min-h-[280px] md:min-h-[320px] p-8 md:p-10",
      "transition-transform duration-300 ease-editorial hover:-translate-y-1"
    ], "class:list")}${addAttribute(`background-color: ${p.signatureColor}; color: ${dark ? "#0A0A0A" : "#FFFFFF"};`, "style")} data-cursor-label="Leggi il case study"> <span aria-hidden="true" class="pointer-events-none absolute -right-2 -bottom-10 font-display italic font-light leading-[0.8] tracking-tighter z-0 transition-opacity duration-300 ease-editorial"${addAttribute(`font-size: clamp(12rem, 22vw, 20rem); font-variation-settings: 'opsz' 144, 'SOFT' 100; font-variant-numeric: tabular-nums; opacity: ${dark ? "0.12" : "0.14"};`, "style")}>${p.num}</span> <div class="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-8 md:gap-12 h-full"> <div class="flex flex-col"> <p${addAttribute([
      "text-[0.72rem] uppercase tracking-[0.14em] font-medium m-0 mb-4",
      dark ? "opacity-70" : "opacity-80"
    ], "class:list")}>${p.eyebrow}</p> <h3 class="font-body font-black leading-[1.02] tracking-tight m-0 mb-4" style="font-size: clamp(1.75rem, 3.6vw, 3rem); letter-spacing: -0.03em;">${p.title}</h3> <p${addAttribute([
      "text-step-0 leading-[1.5] max-w-[52ch] m-0",
      dark ? "opacity-80" : "opacity-85"
    ], "class:list")}>${p.lede}</p> </div> <div class="flex flex-col justify-between items-start md:items-end gap-8"> <div class="text-right md:text-right"> <p class="font-body font-black leading-none tracking-tight m-0 tabular-nums" style="font-size: clamp(3rem, 5.5vw, 4.5rem); letter-spacing: -0.035em;">${p.metric.value}</p> <p${addAttribute([
      "font-mono text-[0.68rem] tracking-[0.06em] max-w-[18ch] mt-2 ml-auto m-0",
      dark ? "opacity-70" : "opacity-80"
    ], "class:list")}>${p.metric.label}</p> </div> <div${addAttribute([
      "inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] font-medium",
      dark ? "opacity-90" : "opacity-95"
    ], "class:list")}> <span>${p.client} · ${p.year}</span> <span aria-hidden="true" class="inline-flex items-center justify-center w-11 h-11 rounded-full border transition-transform duration-300 ease-editorial group-hover:translate-x-1"${addAttribute(`border-color: ${dark ? "rgba(10,10,10,0.4)" : "rgba(255,255,255,0.5)"};`, "style")}> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="block"><path d="M2 8h11M9 4l4 4-4 4"></path></svg> </span> </div> </div> </div> </a> </li>`;
  })} </ul> </div> </section>`;
}, "/home/user/Siteweb/src/components/WorkList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Work \u2014 Kevin Paradisi" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FeatureHero", $$FeatureHero, { "crumb": "Portfolio / Work", "glyph": "W", "title": "Progetti che spostano decisioni.", "titleEmWord": "decisioni.", "lede": "Selezione di progetti in cui il framing e la ricerca hanno cambiato l'esito prima del pixel. Ogni scheda dichiara la posta in gioco, non la feature." })} ${renderComponent($$result2, "WorkList", $$WorkList, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "slot": "footer" })}`, "sidebar": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteSidebar", $$SiteSidebar, { "slot": "sidebar", "current": "work" })}` })}`;
}, "/home/user/Siteweb/src/pages/work/index.astro", void 0);

const $$file = "/home/user/Siteweb/src/pages/work/index.astro";
const $$url = "/Siteweb/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
