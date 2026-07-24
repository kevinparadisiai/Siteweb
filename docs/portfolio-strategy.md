# Portfolio — Documento strategico

**Obiettivo primario:** cambiare azienda, posizionandomi da UX Designer verso ruoli **UX Strategist / Senior UX / Design Lead**.

**Come:** un portfolio che convince due valutatori diversi in due momenti diversi dello stesso processo di selezione, spostando la conversazione dal "cosa ho fatto" al "come penso e che impatto genero".

---

## 1. Target e loro job-to-be-done

Il processo di selezione è **sequenziale**: prima HR, poi Design Lead. Il portfolio deve funzionare per entrambi senza compromessi.

### Target A — HR / Talent Acquisition
- **Job-to-be-done:** decidere in 90–180 secondi se passarmi al colloquio con il team design.
- **Cosa cerca:** ruolo dichiarato, seniority, stack di competenze mappabili al JD, aziende/settori toccati, disponibilità, contatti, coerenza con la vacancy.
- **Cosa NON vuole:** case study lunghi da leggere, gergo di ricerca, ambiguità sulle skill.
- **Contesto:** valuta 20–50 profili al giorno, spesso su mobile o in tab affiancate al JD e all'ATS.

### Target B — Design Lead / Head of Design / Senior Designer valutatore
- **Job-to-be-done:** capire se penso come uno strategico, se il mio lavoro reggerebbe il loro standard, se sono un pari o un +1 al team.
- **Cosa cerca:** framing dei problemi, decisioni motivate (non solo output), trade-off, outcome misurabili, opinioni sul mestiere, indizi di seniority (leadership, mentoring, discovery).
- **Cosa NON vuole:** showreel di UI, wireframe senza contesto, "ho fatto la ricerca" senza mostrare cosa ne è uscito.
- **Contesto:** apre il link dopo il go di HR, si prende 10–20 minuti, spesso legge 1 case study a fondo + scannerizza il resto.

---

## 2. Journey — mappa dei momenti di verità

Cinque fasi comuni a entrambi i target, con pain point specifici per ciascuno.

| # | Fase | HR — pain point | Design Lead — pain point |
|---|------|-----------------|--------------------------|
| 1 | **Arrivo (0–5s)** | "Che ruolo fa? Che seniority? Mi serve?" — se non lo capisco chiudo. | "Questo si posiziona come strategico o come pixel pusher?" |
| 2 | **Scan (5–60s)** | Non riesco a estrarre skill/settori senza scrollare tutto. Nessun CV scaricabile. | Vedo solo screenshot di UI: dov'è il pensiero? Nessun indizio di outcome. |
| 3 | **Approfondimento (1–5 min)** | Se apro un case study, non capisco cosa ha fatto lui specificamente vs il team. | Case study raccontati per fasi (Discover/Define/…) senza dire quali decisioni sono state prese e perché. |
| 4 | **Valutazione (5–15 min)** | Non trovo prova di continuità (freelance? full-time? gap?). | Non vedo trade-off, alternative scartate, metriche di successo, riflessioni. |
| 5 | **Azione (contatto)** | Email nascosta, form lunghi, PDF CV mancante. | Voglio un canale diretto o vedere il suo modo di scrivere prima di scrivergli. |

---

## 3. Mappa problemi → soluzioni

Ogni pain point sopra genera un requisito concreto. Numerati per essere referenziati dalle user story.

| Codice | Problema | Soluzione |
|--------|----------|-----------|
| **P1** | HR non capisce ruolo/seniority in 5s | **Above-the-fold statement**: nome + posizionamento in una frase ("UX Designer che si sta spostando su design strategy — 6 anni, ultimo ruolo in [azienda]"). Nessun claim vuoto ("passionate designer"). |
| **P2** | HR non estrae skill velocemente | **Blocco "In sintesi"** subito sotto l'hero: 3 colonne — *Cosa faccio meglio* (max 5 skill), *Settori* (max 5 tag), *Metodi di lavoro* (max 4). Nessun grafico di livello (arbitrario e datato). |
| **P3** | CV scaricabile mancante | **CV PDF** in header (link diretto), aggiornato, con la stessa frase di posizionamento. |
| **P4** | Design Lead non vede il pensiero, solo output | **Case study strutturati per decisione**, non per fase: ogni case study apre con *Problema*, *Decisione chiave che ho preso*, *Perché*, *Cosa non ho fatto e perché*, *Outcome*. |
| **P5** | Non è chiaro cosa ha fatto lui vs il team | **Box "Il mio ruolo"** all'inizio di ogni case study: ruolo, durata, team, cosa ho posseduto io, cosa no. Onesto. |
| **P6** | Nessuna traccia di sperimentazione / AI | **Sezione "Lab"** separata dai case study client: esperimenti personali (AI, workflow, tool interni), formato breve (200–400 parole + 1 artefatto). Segnala curiosità e aggiornamento. |
| **P7** | Nessun outcome misurabile | **Metriche o proxy** in ogni case study (adozione, task completion, tempo risparmiato, decisioni sbloccate). Se non c'è metrica, dichiarare *perché* e mostrare l'impatto qualitativo. |
| **P8** | Non emerge la voce/opinione | **Pagina "Come lavoro"** breve (o note in about): 5–7 principi/opinioni forti sul mestiere. Un designer strategico ha punti di vista. |
| **P9** | Contatto scomodo | **Email in chiaro** (mailto + copiabile) e link LinkedIn. Nessun form. Bottone visibile in header e in fondo. |
| **P10** | Percorsi HR e Lead si intralciano | **Un solo flusso** (non toggle): l'hero + sintesi soddisfa HR nei primi 60s, poi lo scroll conduce naturalmente ai case study per il Lead. Sezione Lab e Note sono opzionali per HR, essenziali per Lead. |
| **P11** | Portfolio troppo lungo, HR abbandona | **Home ≤ 4 sezioni scrollabili**: hero, sintesi, progetti selezionati (max 3–4), contatti. Lab/Note in pagine dedicate linkate. |
| **P12** | Nessuna prova di continuità / seniority | **Timeline sintetica** in about: ruoli, anni, aziende, 1 riga per ciascuno. Copre gap onestamente. |

---

## 4. Architettura informativa

Struttura minima, editoriale, senza toggle di target.

```
/
├── / (home)
│   ├── Hero → posizionamento in una frase (P1)
│   ├── In sintesi → skill / settori / metodi (P2)
│   ├── Progetti selezionati → 3–4 card con problema+outcome (P4, P7)
│   ├── Lab → 2 esperimenti in evidenza + link a /lab (P6)
│   └── Contatti → email, LinkedIn, CV (P3, P9)
│
├── /work/[slug] → case study (uno per progetto)
│   ├── Il mio ruolo (P5)
│   ├── Problema
│   ├── Decisione chiave + perché (P4)
│   ├── Cosa NON ho fatto (P4)
│   ├── Processo (compresso, non fase per fase)
│   ├── Outcome (P7)
│   └── Riflessione
│
├── /lab → esperimenti (AI, tool, workflow) (P6)
│   └── Griglia di note brevi con tag
│
├── /about → chi sono, timeline (P12), principi (P8), CV PDF (P3)
│
└── /contact (opzionale, o solo ancora in home) (P9)
```

**Persistenza cross-pagina:**
- Header: nome + posizionamento breve + link CV + email
- Footer: email, LinkedIn, ultimo aggiornamento del sito
- Nessuna hamburger su desktop; nav a 4 voci: Work · Lab · About · Contact

---

## 5. User stories (MoSCoW)

Formato: *Come [target], voglio [azione], così da [outcome]* → *Soluzione* (rif. problema).

### Must have (v1 — necessarie per pubblicare)

1. **Come HR**, voglio capire ruolo e seniority nei primi 5 secondi, così da decidere se investirci tempo. → Hero con posizionamento esplicito. (P1)
2. **Come HR**, voglio scaricare il CV senza registrarmi, così da inoltrarlo al team. → Link CV PDF in header e in contatti. (P3)
3. **Come HR**, voglio scorrere le skill in una schermata, così da matcharle al JD. → Sezione "In sintesi" con 3 colonne. (P2)
4. **Come HR**, voglio contattarti direttamente, così da chiudere lo screening. → Email in chiaro copiabile + LinkedIn. (P9)
5. **Come Design Lead**, voglio capire quali decisioni ha preso in ogni progetto, così da valutare il suo pensiero strategico. → Case study strutturati per decisione. (P4)
6. **Come Design Lead**, voglio sapere cosa ha posseduto lui vs il team, così da calibrare la seniority reale. → Box "Il mio ruolo" a inizio case study. (P5)
7. **Come Design Lead**, voglio vedere outcome o impatto, così da capire se il lavoro ha spostato qualcosa. → Metriche/proxy in chiusura di ogni case study. (P7)
8. **Come utente su mobile**, voglio leggere tutto senza scroll orizzontale e con testo ≥16px, così da usarlo in metropolitana. → Design mobile-first, base 16px, no fixed widths. (rif. §5 UX rules)

### Should have (v1.1 — subito dopo il lancio)

9. **Come Design Lead**, voglio vedere trade-off e alternative scartate, così da capire il rigore. → Sezione "Cosa NON ho fatto" nel case study.
10. **Come Design Lead**, voglio leggere la voce di chi sto valutando, così da capire compatibilità culturale. → Pagina About con principi (P8).
11. **Come Design Lead**, voglio prova di curiosità/aggiornamento (es. AI), così da capire se è al passo. → Sezione /lab. (P6)
12. **Come HR**, voglio vedere continuità di carriera, così da capire stabilità. → Timeline sintetica in /about. (P12)

### Could have (v2)

13. Filtri per settore/ruolo nella lista progetti.
14. Modalità di lettura "long form" vs "scan" nei case study.
15. Feed RSS su /lab per follower.
16. Analytics privacy-first (Plausible/Umami) per capire cosa leggono davvero.

### Won't have (in questa fase — decisioni motivate)

- **Toggle "Sei HR / Sei Lead"** → introduce attrito, chi non si riconosce nei ruoli è escluso. La stessa home serve entrambi con lettura in profondità diverse (P10).
- **Grafici skill "80% Figma / 70% Research"** → arbitrari, letti male, marker da junior.
- **Modalità dark obbligatoria** → editoriale minimale funziona meglio in light; dark come opzione futura.
- **Blog generalista** → diluisce il posizionamento; Lab è già un canale di scrittura mirato.
- **Form di contatto** → attrito inutile, mailto vince sempre.

---

## 6. Metriche di successo del portfolio stesso

Come capirò se sta funzionando:

| Metrica | Target v1 | Come misurare |
|---------|-----------|---------------|
| Bounce rate home | < 55% | Plausible/Umami |
| Scroll depth mediano home | ≥ 75% | Plausible/Umami |
| CV download / visita | ≥ 8% | Evento custom |
| Contatti in ingresso qualificati | ≥ 2/mese | Manuale (etichetta email) |
| Time-to-first-interview dopo apply | ↓ 30% vs baseline | Diario personale ricerca lavoro |

---

## 7. Vincoli e assunzioni

- **Contenuti sotto NDA:** non tutti i case study possono essere pubblici. Prevedere versione password-protetta o "on request" per 1–2 progetti chiave. Da confermare per ciascun progetto.
- **Lingua:** italiano di default; predisporre struttura per traduzione EN futura (se target include aziende non IT).
- **Manutenzione:** il sito deve essere aggiornabile in <30 min per aggiungere un progetto o una nota Lab, altrimenti si dequalifica in 6 mesi.
- **Stack di questa fase:** HTML statico self-contained per validare direzione e contenuti prima di scegliere lo stack di produzione.

---

## 8. Contenuti da produrre (checklist prima del go-live)

- [ ] Frase di posizionamento (1 riga, riscritta 5 volte, testata su 3 persone)
- [ ] 3–4 case study strutturati per decisione (target: 600–900 parole ciascuno)
- [ ] 2 note Lab (AI o esperimenti recenti)
- [ ] Bio breve + timeline + 5–7 principi
- [ ] CV PDF aggiornato con stessa frase di posizionamento dell'hero
- [ ] Foto: 1 ritratto sobrio (opzionale ma consigliato per Lead — mette una faccia sul lavoro)
- [ ] Meta: title, description, OG image per ogni pagina

---

## 9. Prossimi step operativi

1. **Ora:** genero design system + prototipo HTML statico (home + 1 case study template).
2. **Tu:** popoli i placeholder con contenuti reali (usa la checklist §8).
3. **Poi:** review insieme, iterazione, e scelta dello stack di produzione (Astro o Next.js in base a quanto scriverai in Lab).
