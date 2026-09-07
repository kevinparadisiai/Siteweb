import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as createAstro, r as renderComponent } from '../chunks/astro/server_thzPqhcw.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base, a as $$SiteSidebar, b as $$SiteFooter } from '../chunks/SiteFooter_yqd3yLzb.mjs';
import 'clsx';
/* empty css                                 */
import { p as projects } from '../chunks/projects_C8ysihQl.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroReveal = createComponent(($$result, $$props, $$slots) => {
  const phases = [
    ["Kevin", "Paradisi,", "UX", "Designer."],
    ["Sette", "anni", "tra", "TIM,", "Gruppo", "CAP", "ed", "Eni."],
    ["Sposto", "il", "focus", "verso", "design", "strategy."]
  ];
  const finale = ["Progetto", "sistemi,", "non", "schermate."];
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="hero-auto relative bg-bg h-dvh flex items-center overflow-hidden" aria-labelledby="hero-title" data-astro-cid-msohmvyq> <div class="container-editorial relative w-full pl-[5rem] md:pl-[10rem]" data-astro-cid-msohmvyq> <!-- Pulsing signature mark just above the phrase — sits inside the
         main content column so it doesn't collide with the sidebar nav. --> <span class="hero-auto__mark" aria-hidden="true" data-animation-mark data-astro-cid-msohmvyq> <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" data-astro-cid-msohmvyq> <path d="M14 0h4v13.2l9.3-4.6 2 3.5-9.3 4.6 9.3 4.6-2 3.5-9.3-4.6V32h-4V18.8L4.7 23.4l-2-3.5 9.3-4.6-9.3-4.6 2-3.5L14 12z" data-astro-cid-msohmvyq></path> </svg> </span> <!-- Slot: exactly one phrase visible at any moment. Each phrase
         reveals its words with a staggered timing so the reader
         actually reads it left-to-right, not all-at-once. --> <div class="hero-auto__slot" role="region" aria-live="polite" aria-atomic="true" data-astro-cid-msohmvyq> ${phases.map((words, i) => renderTemplate`<p class="hero-phase"${addAttribute(i, "data-phase")}${addAttribute(i === 0 ? void 0 : "true", "aria-hidden")} data-astro-cid-msohmvyq> ${words.map((w, j) => renderTemplate`<span class="hero-word"${addAttribute(`--i:${j};`, "style")} data-astro-cid-msohmvyq>${w}</span>`)} </p>`)} <h1 id="hero-title" class="hero-phase hero-phase--finale"${addAttribute(phases.length, "data-phase")} aria-hidden="true" data-astro-cid-msohmvyq> ${finale.map((w, j) => {
    const italic = /^sistemi/i.test(w);
    return renderTemplate`<span${addAttribute(["hero-word", italic && "font-display italic font-light text-accent"], "class:list")}${addAttribute(`--i:${j};`, "style")} data-astro-cid-msohmvyq>${w}</span>`;
  })} </h1> </div> </div> </section>  `;
}, "/home/user/Siteweb/src/components/HeroReveal.astro", void 0);

const $$Astro = createAstro("https://kevinparadisiai.github.io");
const $$ProjectArtwork = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectArtwork;
  const {
    signatureColor,
    onSignatureDark = false,
    client,
    num,
    alt,
    aspect = "aspect-[4/3]"
  } = Astro2.props;
  const onSig = onSignatureDark ? "#0A0A0A" : "#FFFFFF";
  return renderTemplate`${maybeRenderHead()}<figure${addAttribute(["project-artwork relative overflow-hidden", aspect], "class:list")}${addAttribute(alt, "aria-label")} role="figure"${addAttribute(`background-color: ${signatureColor};`, "style")} data-astro-cid-4n3o5nkh> <!-- Tiny number top-left --> <span class="absolute top-5 left-5 font-mono text-[0.68rem] tracking-[0.16em] uppercase opacity-70"${addAttribute(`color: ${onSig};`, "style")} data-astro-cid-4n3o5nkh>${num.padStart(2, "0")}</span> <!-- Small "placeholder" tag top-right --> <span class="absolute top-5 right-5 font-mono text-[0.62rem] tracking-[0.14em] uppercase opacity-55"${addAttribute(`color: ${onSig};`, "style")} data-astro-cid-4n3o5nkh>Placeholder</span> <!-- Big client wordmark centered / bottom-left --> <span class="absolute bottom-5 left-5 right-5 font-body font-black leading-[0.9] tracking-tight m-0"${addAttribute(`color: ${onSig}; font-size: clamp(2.5rem, 7vw, 5rem); letter-spacing: -0.035em;`, "style")} data-astro-cid-4n3o5nkh>${client}</span> </figure> `;
}, "/home/user/Siteweb/src/components/ProjectArtwork.astro", void 0);

const $$ProjectShowcase = createComponent(($$result, $$props, $$slots) => {
  const base = "/Siteweb".replace(/\/$/, "");
  const tim = projects.find((p) => p.slug === "tim");
  const cap = projects.find((p) => p.slug === "cap");
  const eni = projects.find((p) => p.slug === "eni");
  const lab = {
    slug: "lab-ai",
    href: `${base}/lab-ai/`,
    eyebrow: "Lab · AI",
    client: "Lab",
    num: "§",
    title: "Cosa succede se chiedo a un LLM di argomentare contro le mie decisioni?",
    signatureColor: "#0A0A0A",
    onSignatureDark: false,
    kind: "lab"
  };
  const rows = [
    [
      { data: tim, span: "md:col-span-7", aspect: "aspect-[4/3]", variant: "telco" },
      { data: eni, span: "md:col-span-5", aspect: "aspect-[3/4]", variant: "archive" }
    ],
    [
      { data: cap, span: "md:col-span-5", aspect: "aspect-[4/5]", variant: "water" },
      { data: lab, span: "md:col-span-7", aspect: "aspect-[4/3]", variant: "lab" }
    ]
  ];
  const kindLabel = (t) => t.kind === "lab" ? "Sperimentazione" : "Consulenza";
  return renderTemplate`${maybeRenderHead()}<section class="bg-bg py-20 md:py-28" id="work" aria-labelledby="work-anchor"> <div class="container-editorial"> <header class="mb-14 md:mb-20 max-w-[65ch]"> <p class="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 mb-5"> <span class="inline-block w-10 h-px bg-accent" aria-hidden="true"></span> <span class="tabular-nums">III</span> <span aria-hidden="true" class="opacity-40">—</span> <span id="work-anchor">Progetti &amp; Lab</span> </p> </header> <div class="flex flex-col gap-16 md:gap-24"> ${rows.map((row) => renderTemplate`<div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start"> ${row.map(({ data, span, aspect, variant }) => renderTemplate`<a${addAttribute(data.href, "href")}${addAttribute(["group block no-underline", span], "class:list")}${addAttribute(data.kind === "lab" ? "Leggi la nota" : "Leggi il case study", "data-cursor-label")}> <div class="mb-6 md:mb-8 transition-transform duration-500 ease-editorial group-hover:-translate-y-1"> ${renderComponent($$result, "ProjectArtwork", $$ProjectArtwork, { "signatureColor": data.signatureColor, "onSignatureDark": !!data.onSignatureDark, "client": data.client, "num": data.num, "variant": variant, "aspect": aspect, "alt": `Grafica editoriale — ${data.client}: ${data.title}` })} </div> <div class="max-w-[52ch]"> <p class="text-[0.72rem] uppercase tracking-[0.14em] font-medium text-muted m-0 mb-3"> <span>${kindLabel(data)}</span> <span class="mx-2 opacity-40" aria-hidden="true">·</span> <strong class="font-medium text-fg">${data.client}</strong> </p> <h3 class="font-body font-black text-fg m-0 leading-[1.05] group-hover:underline underline-offset-4 decoration-1" style="font-size: clamp(1.5rem, 2.6vw, 2.5rem); letter-spacing: -0.03em;">${data.title}</h3> </div> </a>`)} </div>`)} </div> </div> </section>`;
}, "/home/user/Siteweb/src/components/ProjectShowcase.astro", void 0);

const $$ContactCta = createComponent(($$result, $$props, $$slots) => {
  const base = "/Siteweb".replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden bg-bg text-fg border-t border-border" id="contact-cta" aria-labelledby="cta-anchor"> <!-- Small accent scribbles instead of a block --> <svg aria-hidden="true" class="pointer-events-none absolute top-20 right-[6vw] text-accent hidden md:block z-0" width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"> <path d="M8 8l28 28M36 8L8 36"></path> </svg> <svg aria-hidden="true" class="pointer-events-none absolute bottom-24 right-[8vw] text-fg opacity-35 hidden md:block z-0" width="80" height="60" viewBox="0 0 80 60" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"> <path d="M6 32c12-20 30-26 68-16"></path> </svg> <div class="container-editorial relative z-10 py-24 md:py-32"> <p class="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.18em] font-medium text-muted m-0 mb-8" data-reveal> <span class="inline-block w-10 h-px bg-accent" aria-hidden="true"></span> <span class="tabular-nums">V</span> <span aria-hidden="true" class="opacity-40">—</span> <span>Scrivimi</span> </p> <h2 id="cta-anchor" class="font-body font-bold leading-[1.02] m-0 text-fg max-w-[22ch]" style="font-size: clamp(2.25rem, 5vw, 4rem); letter-spacing: -0.03em;" data-reveal>
Cerchi qualcuno che <span class="font-display italic font-light text-accent">pensi prima</span> di disegnare.
</h2> <div class="mt-10 md:mt-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-10" data-reveal> <a${addAttribute(`${base}/contact/`, "href")} class="btn-fill relative overflow-hidden inline-flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] font-medium py-3 px-5 border border-fg no-underline text-fg self-start" data-cursor-label="Parliamone"> <span class="relative z-10">Parliamone</span> <svg class="relative z-10" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"></path></svg> </a> <a href="mailto:kevinparadisiai@gmail.com" class="font-display italic font-light text-fg text-step-1 underline underline-offset-4 decoration-1 hover:decoration-2" data-cursor-label="Scrivi email">kevinparadisiai@gmail.com</a> </div> <!-- Availability micro-info, moved from the hero where it was cluttering
         the animation. Two lines only — the sectors were already implied by
         the project tiles above. --> <p class="mt-10 md:mt-14 pt-6 border-t border-border font-mono text-[0.72rem] tracking-[0.12em] uppercase text-muted m-0 flex flex-wrap gap-x-8 gap-y-2 max-w-[70ch]" data-reveal> <span><span class="text-accent mr-1" aria-hidden="true">◦</span>Disponibile da settembre 2026</span> <span><span class="text-accent mr-1" aria-hidden="true">◦</span>Remoto o Milano</span> </p> </div> </section>`;
}, "/home/user/Siteweb/src/components/ContactCta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Kevin Paradisi \u2014 UX Designer moving to strategy", "bodyClass": "" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroReveal", $$HeroReveal, {})} ${renderComponent($$result2, "ProjectShowcase", $$ProjectShowcase, {})} ${renderComponent($$result2, "ContactCta", $$ContactCta, {})}  `, "footer": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "slot": "footer" })}`, "sidebar": ($$result2) => renderTemplate`${renderComponent($$result2, "SiteSidebar", $$SiteSidebar, { "slot": "sidebar", "current": "hero" })}` })}`;
}, "/home/user/Siteweb/src/pages/index.astro", void 0);

const $$file = "/home/user/Siteweb/src/pages/index.astro";
const $$url = "/Siteweb";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
