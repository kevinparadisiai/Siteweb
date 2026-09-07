import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from '../chunks/astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base, a as $$SiteSidebar, b as $$SiteFooter } from '../chunks/SiteFooter_yqd3yLzb.mjs';
import { $ as $$FeatureHero } from '../chunks/FeatureHero_Dk2xPcW-.mjs';
import { $ as $$SectionAnchor } from '../chunks/SectionAnchor_BST3wAXF.mjs';
export { renderers } from '../renderers.mjs';

const $$LabList = createComponent(($$result, $$props, $$slots) => {
  const base = "/Siteweb".replace(/\/$/, "");
  const notes = [
    {
      tag: "AI · Metodo",
      hint: "?",
      title: "Cosa succede se chiedo a un LLM di argomentare contro le mie decisioni di design?",
      description: 'Un LLM è comodo quando mi dà idee. È scomodo quando gli chiedo di demolire le mie. Ho testato su 3 progetti reali un prompt "avvocato del diavolo strutturato" — su 2 su 3 le prime due obiezioni erano lacune che avevo davvero sotto-esplorato. Il valore non è la lista di obiezioni: è che scriverle in prompt mi obbliga a vedere cosa avevo evitato di guardare.',
      meta: "Giugno 2024 · 3 min · prompt template",
      href: `${base}/lab-ai`,
      strip: "bg-card-1"
    },
    {
      tag: "Metodo · Ricerca",
      hint: "§",
      title: "Perché invito support al primo workshop di framing (anche se non ha voce sul design)",
      description: 'Il team support conosce i pain point con 6 mesi di anticipo rispetto a quando arrivano in analytics. Ho smesso di trattarli come "chi risponde dopo il lancio" e ho iniziato a trattarli come co-ricercatori del framing. Nota su come li invito, cosa gli chiedo, e perché il costo è zero.',
      meta: "Maggio 2024 · 4 min · template invito",
      href: "#",
      strip: "bg-card-3"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-accent-weak pb-20 md:pb-28" id="lab" aria-labelledby="lab-anchor"> <div class="container-editorial"> ${renderComponent($$result, "SectionAnchor", $$SectionAnchor, { "chapter": "IV", "label": "Lab", "verb": "Provo.", "subtitle": "Cosa ho pensato ultimamente. Esperimenti brevi su AI, metodo e strumenti." })} <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${notes.map((n, i) => renderTemplate`<article class="group rounded overflow-hidden bg-bg border border-border flex flex-col transition-[border-color,transform,box-shadow] duration-300 ease-editorial hover:border-fg hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(20,26,42,0.35)]" data-reveal${addAttribute(`--reveal-delay: ${i + 1};`, "style")}> <div${addAttribute(`relative overflow-hidden ${n.strip}`, "class")}> <div class="py-4 px-6 text-on-card flex items-center justify-between gap-3 transition-[padding] duration-300 ease-editorial group-hover:py-6"> <div class="eyebrow" style="color: currentColor; opacity: 0.95;">${n.tag}</div> <span aria-hidden="true" class="font-display italic font-light text-step-2 leading-none opacity-70 transition-[transform,opacity] duration-300 ease-editorial group-hover:opacity-100 group-hover:scale-110" style="font-variation-settings: 'opsz' 72, 'SOFT' 100;">${n.hint}</span> </div> </div> <div class="p-6 flex-1 flex flex-col"> <h3 class="font-display font-normal text-step-2 leading-[1.2] tracking-tight m-0 mb-3"> <a${addAttribute(n.href, "href")} class="no-underline hover:underline">${n.title}</a> </h3> <p class="m-0 text-muted text-step-0 leading-relaxed">${n.description}</p> <p class="mt-auto pt-5 text-[0.7rem] uppercase tracking-[0.12em] font-medium text-muted-2">${n.meta}</p> </div> </article>`)} </div> </div> </section>`;
}, "/home/user/Siteweb/src/components/LabList.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Lab \u2014 Kevin Paradisi" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FeatureHero", $$FeatureHero, { "crumb": "Portfolio / Lab", "glyph": "L", "title": "Ipotesi che provo, non tesi che difendo.", "titleEmWord": "provo,", "lede": "Note brevi da esperimenti in corso. AI, metodo, ricerca. Metto in pubblico anche quello che non funziona ancora \u2014 \xE8 dove si impara pi\xF9 in fretta." })} ${renderComponent($$result2, "LabList", $$LabList, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "slot": "footer" })}`, "sidebar": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteSidebar", $$SiteSidebar, { "slot": "sidebar", "current": "lab" })}` })}`;
}, "/home/user/Siteweb/src/pages/lab/index.astro", void 0);

const $$file = "/home/user/Siteweb/src/pages/lab/index.astro";
const $$url = "/Siteweb/lab";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
