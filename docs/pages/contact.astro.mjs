import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from '../chunks/astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base, a as $$SiteSidebar, b as $$SiteFooter } from '../chunks/SiteFooter_yqd3yLzb.mjs';
import { $ as $$FeatureHero } from '../chunks/FeatureHero_Dk2xPcW-.mjs';
import { $ as $$SectionAnchor } from '../chunks/SectionAnchor_BST3wAXF.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const base = "/Siteweb".replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-bg text-fg border-t border-border"> <span aria-hidden="true" class="pointer-events-none select-none absolute -right-1 -bottom-8 font-display italic font-light text-fg opacity-[0.05] leading-[0.85] tracking-tight z-0" style="font-size: clamp(20rem, 44vw, 42rem); font-variation-settings: 'opsz' 144, 'SOFT' 100;">&amp;</span> <section id="contact" class="container-editorial relative z-10 pb-20 md:pb-28" aria-labelledby="contact-anchor"> ${renderComponent($$result, "SectionAnchor", $$SectionAnchor, { "chapter": "V", "label": "Contatti", "verb": "Scrivimi.", "subtitle": "Se cerchi qualcuno che pensi prima di disegnare." })} <ul class="list-none p-0 m-0 flex flex-wrap gap-x-8 gap-y-4 text-step-1" data-reveal> <li> <a href="mailto:kevinparadisiai@gmail.com?subject=Portfolio%20—%20&body=Ciao%2C" class="inline-flex items-center gap-2 min-h-[44px] py-2 text-fg" data-cursor-label="Scrivi email"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="1"></rect><path d="M3 7l9 6 9-6"></path></svg>
kevinparadisiai@gmail.com
</a> </li> <li> <a href="https://linkedin.com/in/kevinparadisi" rel="noopener" class="inline-flex items-center gap-2 min-h-[44px] py-2 text-fg"> <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
LinkedIn
</a> </li> <li> <a${addAttribute(`${base}/cv.pdf`, "href")} download class="inline-flex items-center gap-2 min-h-[44px] py-2 text-fg"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14"></path></svg>
Scarica CV (PDF)
</a> </li> </ul> </section> </div>`;
}, "/home/user/Siteweb/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Contatti \u2014 Kevin Paradisi" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FeatureHero", $$FeatureHero, { "crumb": "Portfolio / Contatti", "glyph": "@", "title": "Se cerchi qualcuno che pensi prima di disegnare.", "titleEmWord": "prima", "lede": "Disponibile da settembre per ruoli di design strategy, senior product design o principal, in remoto o a Milano. Fintech, SaaS B2B, servizi digitali." })} ${renderComponent($$result2, "Contact", $$Contact, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "slot": "footer" })}`, "sidebar": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteSidebar", $$SiteSidebar, { "slot": "sidebar", "current": "contact" })}` })}`;
}, "/home/user/Siteweb/src/pages/contact/index.astro", void 0);

const $$file = "/home/user/Siteweb/src/pages/contact/index.astro";
const $$url = "/Siteweb/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
