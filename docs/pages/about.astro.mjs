import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from '../chunks/astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base, a as $$SiteSidebar, b as $$SiteFooter } from '../chunks/SiteFooter_yqd3yLzb.mjs';
import { $ as $$FeatureHero } from '../chunks/FeatureHero_Dk2xPcW-.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const experience = [
    { years: "2024 \u2014 oggi", role: "Senior UX Designer", company: "TIM", note: "Self-caring digitale, KPI post-chiamata, coordinamento di un gruppo di designer." },
    { years: "2022 \u2014 2024", role: "UX Designer", company: "Unipol", note: "[Placeholder \u2014 sostituire con la sintesi reale del ruolo.]" },
    { years: "2021 \u2014 2022", role: "UX Designer", company: "Eolo", note: "[Placeholder \u2014 sostituire con la sintesi reale del ruolo.]" },
    { years: "2020 \u2014 2021", role: "UX Designer", company: "Gruppo CAP", note: "Redesign completo dell'area privata multi-profilo (10+ processi digitalizzati)." },
    { years: "2019 \u2014 2020", role: "UX Consultant", company: "Eni", note: "Archivio storico digitale \u2014 20+ pagine, migliaia di documenti indicizzati." },
    { years: "2018 \u2014 2019", role: "UX Consultant", company: "Lastminute.com", note: "[Placeholder \u2014 sostituire con la sintesi reale del ruolo.]" }
  ];
  const clients = [
    { slug: "lastminute", name: "lastminute.com", sector: "Travel", color: "#EC008C", casing: "lowercase", hasLogo: false },
    { slug: "eni", name: "eni", sector: "Energy", color: "#F5C518", casing: "lowercase", hasLogo: false },
    { slug: "tim", name: "TIM", sector: "Telco", color: "#0056A3", casing: "uppercase", hasLogo: false },
    { slug: "gruppo-cap", name: "Gruppo CAP", sector: "Utilities", color: "#2892C7", casing: "normal", hasLogo: false },
    { slug: "unipol", name: "Unipol", sector: "Insurance", color: "#007F3F", casing: "normal", hasLogo: true },
    { slug: "eolo", name: "eolo", sector: "Telco", color: "#00A6E4", casing: "lowercase", hasLogo: false }
  ];
  const sectors = [
    "Energy & Utilities",
    "Telco",
    "Insurance",
    "Travel",
    "Fintech",
    "Cultura & Archivi"
  ];
  const principi = [
    "Progetto da problema, non da mockup.",
    "Prototipo per decidere, non per illustrare.",
    "Metto le metriche prima del delivery.",
    "Sistemi, non schermate.",
    "La scrittura \xE8 artefatto di design.",
    "Non farei mai un design system senza governance.",
    "Preferisco decisioni tracciate a decisioni condivise."
  ];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "About \u2014 Kevin Paradisi", "data-astro-cid-fwdcsva6": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "FeatureHero", $$FeatureHero, { "crumb": "Portfolio / About", "glyph": "K", "title": "Chi sono, e cosa penso del mestiere.", "titleEmWord": "cosa penso", "lede": "Sette anni di UX tra prodotto e servizi digitali. Sposto il focus verso design strategy \u2014 dove il valore sta nel decidere cosa costruire, non nel disegnarlo tutto. Questa pagina \xE8 un placeholder in continua evoluzione.", "data-astro-cid-fwdcsva6": true })}  ${maybeRenderHead()}<section class="container-editorial py-16 md:py-24" aria-labelledby="esp-anchor" data-astro-cid-fwdcsva6> <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 mb-10" data-astro-cid-fwdcsva6> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 flex items-center gap-3" data-astro-cid-fwdcsva6> <span class="inline-block w-10 h-px bg-accent" aria-hidden="true" data-astro-cid-fwdcsva6></span> <span class="tabular-nums" data-astro-cid-fwdcsva6>I</span> <span aria-hidden="true" class="opacity-40" data-astro-cid-fwdcsva6>—</span> <span data-astro-cid-fwdcsva6>Esperienza</span> </p> <h2 id="esp-anchor" class="font-body font-bold text-fg m-0 max-w-[24ch]" style="font-size: clamp(1.75rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.15;" data-astro-cid-fwdcsva6>Dove ho lavorato, cosa ho posseduto.</h2> </div> <ol class="list-none p-0 m-0 flex flex-col" data-astro-cid-fwdcsva6> ${experience.map((e, i) => renderTemplate`<li${addAttribute(["grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,2fr)] gap-4 md:gap-10 items-baseline py-6 md:py-8", i < experience.length - 1 ? "border-b border-border" : ""], "class:list")} data-astro-cid-fwdcsva6> <p class="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-muted m-0 tabular-nums" data-astro-cid-fwdcsva6>${e.years}</p> <p class="font-body font-bold text-fg m-0 leading-tight" style="font-size: clamp(1.15rem, 1.6vw, 1.4rem);" data-astro-cid-fwdcsva6> ${e.role} <span class="block font-normal text-muted mt-1 text-step-0" data-astro-cid-fwdcsva6>${e.company}</span> </p> <p class="text-step-0 text-fg leading-[1.5] m-0 max-w-[52ch]" data-astro-cid-fwdcsva6>${e.note}</p> </li>`)} </ol> </section>  <section class="bg-bg border-y border-border py-20 md:py-28" aria-labelledby="loghi-anchor" data-astro-cid-fwdcsva6> <div class="container-editorial grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 lg:gap-16 items-start" data-astro-cid-fwdcsva6> <!-- LEFT — expertise --> <div data-astro-cid-fwdcsva6> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 mb-6 flex items-center gap-3" data-astro-cid-fwdcsva6> <span class="inline-block w-10 h-px bg-accent" aria-hidden="true" data-astro-cid-fwdcsva6></span> <span class="tabular-nums" data-astro-cid-fwdcsva6>II</span> <span aria-hidden="true" class="opacity-40" data-astro-cid-fwdcsva6>—</span> <span id="loghi-anchor" data-astro-cid-fwdcsva6>Clienti</span> </p> <p class="font-body font-black text-accent m-0 leading-none tabular-nums" style="font-size: clamp(5rem, 12vw, 10rem); letter-spacing: -0.045em;" data-astro-cid-fwdcsva6>6</p> <p class="font-body text-step-1 text-fg m-0 mt-3 max-w-[26ch] leading-[1.35]" data-astro-cid-fwdcsva6>
aziende enterprise con cui ho lavorato negli ultimi sette anni.
</p> <p class="text-[0.72rem] uppercase tracking-[0.16em] font-medium text-muted m-0 mt-12 mb-4" data-astro-cid-fwdcsva6>
Settori
</p> <p class="font-body text-fg text-step-0 leading-[1.65] m-0 max-w-[40ch]" data-astro-cid-fwdcsva6> ${sectors.map((s, i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-fwdcsva6": true }, { "default": ($$result3) => renderTemplate`<span data-astro-cid-fwdcsva6>${s}</span>${i < sectors.length - 1 ? renderTemplate`<span class="text-muted mx-2" aria-hidden="true" data-astro-cid-fwdcsva6>·</span>` : null}` })}`)} </p> </div> <!-- RIGHT — client cells. Per-client flag \`hasLogo\` decides whether
           the SVG file at public/logos/{slug}.svg is rendered, or a
           brand-colored wordmark placeholder. --> <ul class="list-none p-0 m-0 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6" data-astro-cid-fwdcsva6> ${clients.map((c) => renderTemplate`<li class="client-cell relative flex flex-col items-start justify-between p-6 min-h-[10rem] border border-border transition-colors duration-300 hover:border-fg" data-astro-cid-fwdcsva6> ${c.hasLogo ? renderTemplate`<img${addAttribute(`${base}/logos/${c.slug}.svg`, "src")}${addAttribute(c.name, "alt")} class="client-logo max-h-[3.5rem] w-auto" loading="lazy" decoding="async" data-astro-cid-fwdcsva6>` : renderTemplate`<span class="client-wordmark font-body font-black"${addAttribute(`color: ${c.color}; font-size: clamp(1.3rem, 2vw, 1.8rem); letter-spacing: -0.03em; line-height: 1; text-transform: ${c.casing === "lowercase" ? "lowercase" : c.casing === "uppercase" ? "uppercase" : "none"};`, "style")} data-astro-cid-fwdcsva6>${c.name}</span>`} <span class="font-mono text-[0.62rem] tracking-[0.16em] uppercase text-muted mt-4" data-astro-cid-fwdcsva6> ${c.sector} </span> </li>`)} </ul> </div> </section>  <section class="container-editorial py-16 md:py-24" aria-labelledby="princ-anchor" data-astro-cid-fwdcsva6> <div class="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 mb-10" data-astro-cid-fwdcsva6> <p class="text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 flex items-center gap-3" data-astro-cid-fwdcsva6> <span class="inline-block w-10 h-px bg-accent" aria-hidden="true" data-astro-cid-fwdcsva6></span> <span class="tabular-nums" data-astro-cid-fwdcsva6>III</span> <span aria-hidden="true" class="opacity-40" data-astro-cid-fwdcsva6>—</span> <span data-astro-cid-fwdcsva6>Principi</span> </p> <h2 id="princ-anchor" class="font-body font-bold text-fg m-0 max-w-[24ch]" style="font-size: clamp(1.75rem, 3vw, 2.25rem); letter-spacing: -0.02em; line-height: 1.15;" data-astro-cid-fwdcsva6>Cosa credo del mestiere.</h2> </div> <ol class="list-none p-0 m-0 flex flex-col divide-y divide-border" data-astro-cid-fwdcsva6> ${principi.map((p, i) => renderTemplate`<li class="grid grid-cols-[3rem_1fr] gap-4 py-5 items-baseline" data-astro-cid-fwdcsva6> <span class="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent tabular-nums" data-astro-cid-fwdcsva6>${String(i + 1).padStart(2, "0")}</span> <p class="font-body text-fg m-0" style="font-size: clamp(1.15rem, 2vw, 1.6rem); line-height: 1.35;" data-astro-cid-fwdcsva6>${p}</p> </li>`)} </ol> </section>  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "slot": "footer", "data-astro-cid-fwdcsva6": true })}`, "sidebar": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteSidebar", $$SiteSidebar, { "slot": "sidebar", "current": "about", "data-astro-cid-fwdcsva6": true })}` })} `;
}, "/home/user/Siteweb/src/pages/about/index.astro", void 0);

const $$file = "/home/user/Siteweb/src/pages/about/index.astro";
const $$url = "/Siteweb/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
