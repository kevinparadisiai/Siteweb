# Prototipo statico — Portfolio

**Cosa c'è dentro**

| File | Cosa fa |
|------|---------|
| `index.html` | Home: hero, sintesi, 3 progetti, lab, contatti |
| `case-study.html` | Template di case study: role box, decisione chiave, outcome |
| `styles.css` | Design system implementato (token, componenti, responsive) |

**Come guardarlo**

Apri `index.html` in un browser (doppio click) o servi la cartella:
```bash
cd prototype && python3 -m http.server 8080
# poi http://localhost:8080
```

**Cosa deve fare tu prima di condividerlo**

Cerca tutti i placeholder tra `[quadre]` e sostituiscili. Sono almeno:

- `[Nome Cognome]`, `[Nome]`, `[email@dominio.it]`, `[handle]` LinkedIn
- Hero: frase di posizionamento, anni, ultimo ruolo
- Sintesi: skill / settori / metodi reali
- 3 progetti: titolo che descrive il **problema**, non il prodotto; azienda, anno, ruolo
- 2 note Lab reali (una AI, una metodologica)
- CV PDF in `/cv.pdf` (aggiornato con la stessa frase di posizionamento dell'hero)

**Deviazioni motivate dal MASTER design system**

Il file `design-system/portfolio-kevin/MASTER.md` suggeriva Archivo + Space Grotesk con accento blu (`#2563EB`). Ho deviato:

- **Type**: Fraunces (display serif variabile, italico espressivo) + Inter (body). Motivo: il pairing Archivo/Grotesk è comune nei portfolio designer AI-generated; Fraunces con opsz variabile e italic dà un'aria editoriale reale, coerente con la tua scelta "editoriale minimale, tipografia protagonista".
- **Palette**: off-ivory `#FBFAF7` + near-black `#0F0F10` + accento sage `#3E4A3F`. Motivo: evita i tre default AI segnalati dalla skill `frontend-design` (cream+serif+terracotta / dark+acid / broadsheet).
- **Motion**: solo transizioni discrete (hover, focus). Nessun page transition o parallax — coerente con `--motion 2` e con il register editoriale.

**Rispetto delle regole ui-ux-pro-max verificato**

- §1 Accessibility: skip-link, focus rings visibili, contrasti ≥4.5:1 (fg su bg = ~17:1), heading hierarchy sequenziale, alt/aria-label su icone
- §2 Touch: nav-toggle 44×44, link contatti 44px min-height, spacing ≥8px
- §3 Performance: font `display=swap`, preconnect, nessuna immagine grande in prima riga
- §4 Style: SVG inline (no emoji), stroke consistency 1.8, iconografia coerente
- §5 Layout: mobile-first, breakpoint 720/860/900, viewport meta corretto, no scroll orizzontale
- §6 Typography: base 16px+, line-height 1.6 body, scale fluida clamp(), tabular-nums su outcome
- §7 Animation: 150–220ms, transform/opacity only, `prefers-reduced-motion` rispettato
- §9 Navigation: nav ≤4 voci, link CV sempre visibile, breadcrumb in case study

**Prossimi step consigliati**

1. Popolare i placeholder con contenuti reali (vedi §8 del documento strategico)
2. Testare in un browser mobile reale (375px)
3. Verificare con reduced-motion attivo
4. Se ti convince, scegliere lo stack di produzione (raccomando **Astro + MDX** dato l'approccio content-first)
