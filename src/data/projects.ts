export interface CaseMetric {
  value: string;
  label: string;
}

export interface CasePhase {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  num: string;
  client: string;
  year: string;
  sector: string;
  services: string[];
  title: string;
  titleEmWord?: string;
  eyebrow: string;
  lede: string;
  intro: string[];
  metric: CaseMetric;
  metricsSecondary?: CaseMetric[];
  phases: CasePhase[];
  role: string;
  /** Signature color (hex) used on hero background and accents. */
  signatureColor: string;
  /** true when the signature color is light (yellow/pastel) and needs dark
   *  text on top instead of white; false (default) uses white text. */
  onSignatureDark?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'tim',
    num: '01',
    client: 'TIM',
    year: '2025',
    sector: 'Telco',
    services: ['Digital product'],
    title: 'Dal caring al self-caring per TIM.',
    titleEmWord: 'self-caring',
    eyebrow: 'Telco · Self-service · Digital product',
    lede:
      'Una pagina post-chiamata che intercetta la richiesta appena chiusa e riduce la probabilità di un secondo contatto. Dati customer care + survey → contenuti mirati sulle casistiche ricorrenti.',
    intro: [
      "Il progetto si colloca all'interno di un'iniziativa più ampia finalizzata al miglioramento delle aree di caring e alla riduzione delle chiamate al customer care. L'obiettivo principale era incentivare l'utilizzo dei canali digitali, favorendo la risoluzione autonoma delle problematiche da parte degli utenti.",
      "È stata progettata una pagina da mostrare immediatamente dopo una chiamata, con lo scopo di guidare le persone verso soluzioni self-service e ridurre la probabilità di un secondo contatto. L'analisi congiunta dei dati del customer care e delle survey quantitative ha permesso di strutturare e ottimizzare i contenuti, concentrandosi sulle richieste più frequenti e sulle casistiche ricorrenti, aumentando l'efficacia complessiva dell'intervento.",
    ],
    metric: {
      value: '47%',
      label:
        'Utenti nav-only o only-view che non richiamano il customer care nelle 24h successive',
    },
    phases: [
      {
        title: 'Raccolta insight customer care',
        body:
          "Il progetto è iniziato con il coinvolgimento diretto del team di customer care, dal quale sono stati raccolti i topic più frequentemente trattati in chiamata. Questa analisi ha permesso di mappare le principali casistiche responsabili dell'elevato numero di contatti e di individuare le aree di maggiore criticità per gli utenti.",
      },
      {
        title: 'User behavior e metriche di efficacia',
        body:
          "Sulla base delle evidenze raccolte, è stata progettata e pubblicata una prima versione della pagina post-chiamata, strutturata per intercettare i problemi più ricorrenti e guidare gli utenti verso soluzioni self-care immediate. Abbiamo identificato cinque tipologie di comportamento degli utenti in relazione alla schermata visualizzata durante una chiamata al customer care: interruzione della chiamata, navigazione in app, prosecuzione della chiamata o una combinazione delle due azioni. Sulla base di questa classificazione, è stato definito un KPI principale volto a misurare l'efficacia della schermata nel prevenire contatti ripetuti — la percentuale di utenti che, dopo aver solo visualizzato la schermata o aver iniziato a navigare in app, non effettuano una nuova chiamata al customer care entro 24 ore. Ai fini del calcolo, abbiamo introdotto il concetto di utente unico, così da evitare che chiamate ripetute da parte dello stesso soggetto incidano in modo sproporzionato sulla misurazione. A supporto, è stato introdotto un KPI secondario basato sul numero di click sulle sezioni e funzionalità suggerite nella schermata — metrica che permette di validare l'ipotesi iniziale sulla rilevanza dei contenuti proposti e di misurarne l'effettiva adozione. La lettura congiunta dei due indicatori consente sia di valutare l'impatto complessivo della schermata sulla riduzione delle richieste di assistenza, sia di individuare le aree in cui gli utenti manifestano maggiori criticità o bisogno di supporto.",
      },
      {
        title: 'Validazione, ottimizzazione e iterazioni',
        body:
          "Una volta online, sono stati raccolti feedback tramite survey differenziate in funzione delle diverse tipologie di comportamento emerse dall'analisi utenti, insieme all'osservazione dei pattern di interazione, per valutare l'efficacia delle sezioni proposte. I dati hanno guidato un processo iterativo di ottimizzazione, intervenendo sulla chiarezza dei contenuti, sulla disposizione delle sezioni e sulla visibilità delle soluzioni suggerite. In parallelo, sono stati condotti A/B test su diverse varianti di layout e contenuto, con l'obiettivo di identificare le combinazioni in grado di generare più click verso le soluzioni self-care e migliorare la conversione sui canali digitali. Le iterazioni successive hanno portato a una versione capace di generare un impatto concreto e misurabile.",
      },
    ],
    role:
      "Nel progetto ho coordinato un piccolo gruppo di designer e seguito l'intero ciclo di progettazione della pagina post-chiamata, lavorando su analisi degli insight, strutturazione dei contenuti e progettazione della soluzione. Ho validato le scelte tramite survey e A/B test, collaborando con stakeholder di business per allineare bisogni utente e obiettivi aziendali.",
    signatureColor: '#1E39A0',
  },

  {
    slug: 'cap',
    num: '02',
    client: 'Gruppo CAP',
    year: '2021',
    sector: 'Utilities',
    services: ['Redesign', 'Area privata'],
    title: "Il nuovo volto dell'area riservata.",
    titleEmWord: 'nuovo volto',
    eyebrow: 'Utilities · Piattaforma digitale · Redesign area privata',
    lede:
      "Da spazio informativo a piattaforma capace di supportare processi complessi e profili molto diversi tra loro — clienti privati, amministratori di condominio, business, enti pubblici.",
    intro: [
      "Il progetto nasce dall'esigenza di ripensare completamente l'area privata, trasformandola da semplice spazio informativo a piattaforma digitale capace di supportare processi complessi e utenti con bisogni molto diversi tra loro.",
    ],
    metric: {
      value: '10+',
      label: 'Processi dispositivi digitalizzati',
    },
    metricsSecondary: [
      {
        value: '3+',
        label: 'Viste dedicate ai diversi profili utente',
      },
    ],
    phases: [
      {
        title: 'Analisi e definizione del perimetro',
        body:
          "È stato avviato un confronto con gli stakeholder aziendali per raccogliere le esigenze di business e definire le priorità funzionali e di servizio del nuovo portale. In parallelo, è stata analizzata l'area clienti esistente, valutandone contenuti, funzionalità e struttura, al fine di individuare le principali criticità da superare nel redesign.",
      },
      {
        title: 'Progettazione e pianificazione',
        body:
          "Sulla base delle evidenze emerse, è stata progettata una nuova architettura informativa, pensata per supportare i diversi profili utente (clienti privati, amministratori di condominio, business soci, enti pubblici) e per integrare nuove funzionalità assenti nella piattaforma precedente. Contestualmente, è stata definita una roadmap progettuale articolata per fasi, a supporto della pianificazione delle attività in modalità Agile.",
      },
      {
        title: 'Realizzazione e sviluppo iterativo',
        body:
          "Una volta validato l'impianto progettuale complessivo, è stata avviata la fase operativa di realizzazione della soluzione, con la definizione di epic, feature e user story e la progettazione iterativa delle interfacce, in coerenza con la roadmap condivisa.",
      },
    ],
    role:
      "Ho seguito il redesign completo dell'area privata, occupandomi dell'analisi dei requisiti in collaborazione con il cliente e della loro traduzione in epic, feature e user story, a supporto della pianificazione delle attività in un contesto Agile. Ho guidato la progettazione delle interfacce in cicli iterativi, confrontandomi a ogni sprint con gli stakeholder. Ho inoltre definito le specifiche funzionali e gestito l'handoff al team di sviluppo, assicurando continuità progettuale e chiarezza nell'implementazione. Nelle fasi avanzate del progetto, ho verificato le soluzioni sviluppate per assicurare coerenza con i requisiti, correttezza funzionale e qualità complessiva dell'esperienza utente.",
    signatureColor: '#5C8CB8',
  },

  {
    slug: 'eni',
    num: '03',
    client: 'Eni',
    year: '2019',
    sector: 'Cultura · Archivi',
    services: ['Digital product', 'Consulting'],
    title: "L'evoluzione digitale dell'Archivio storico.",
    titleEmWord: 'evoluzione digitale',
    eyebrow: 'Cultura · Archivio storico · Digital product + consulting',
    lede:
      "Un portale che rende consultabile online un archivio fisico di rilevanza storica: integrità, contestualizzazione, esperienza chiara per un'utenza tecnica.",
    intro: [
      "Il progetto nasce dall'esigenza di rendere fruibile in formato digitale un archivio fisico di rilevanza storica e culturale, oggi accessibile esclusivamente in sede. L'obiettivo è la realizzazione di un portale che permetta la consultazione online dei materiali, garantendone l'integrità, la corretta contestualizzazione e un'esperienza di navigazione chiara, inclusiva e strutturata.",
      "Il sistema si inserisce in un più ampio processo di valorizzazione del patrimonio documentale, volto a superare i limiti della consultazione tradizionale e ad ampliare l'accesso a studiosi, cittadini e operatori del settore. Il portale supporta inoltre la conservazione digitale a lungo termine e favorisce la diffusione della conoscenza attraverso criteri di accessibilità, trasparenza e interoperabilità.",
    ],
    metric: {
      value: '20+',
      label: 'Pagine realizzate',
    },
    metricsSecondary: [
      {
        value: 'Migliaia',
        label: 'Documenti digitalizzati',
      },
    ],
    phases: [
      {
        title: 'Kick-off e definizione dei requisiti',
        body:
          "Il progetto è partito con un allineamento iniziale tra cliente e team di consulenti per chiarire obiettivi, target, priorità e vincoli. In questa fase, in assenza di una soluzione digitale preesistente, è stato essenziale definire il profilo dell'utente finale e i requisiti di fruizione: l'identificazione di un utente tecnico ha guidato decisioni progettuali importanti, come l'adozione di una navigazione strutturata tramite vista ad albero, più adatta a consultazioni approfondite.",
      },
      {
        title: "Progettazione e sviluppo dell'esperienza",
        body:
          "Sulla base dei requisiti emersi, il team di design ha lavorato all'architettura informativa e alla progettazione dei layout delle interfacce. L'attenzione si è concentrata sulla chiarezza dei percorsi di navigazione, sulla coerenza visiva e sull'usabilità complessiva del portale. Le soluzioni progettate hanno costituito la base per la fase di sviluppo, trasformando i layout in pagine funzionanti.",
      },
      {
        title: 'Validazione con il cliente e rilascio',
        body:
          "Le pagine sviluppate sono state progressivamente condivise con il cliente per verificarne contenuti, funzionalità e resa visiva, fino alla loro approvazione formale. Una volta completata e validata l'intera soluzione, il portale è stato rilasciato online in un'unica fase, rendendo disponibile l'archivio in formato digitale.",
      },
    ],
    role:
      "Nel progetto ho seguito l'intero ciclo di progettazione, contribuendo in modo continuativo alle diverse fasi di realizzazione del portale. In particolare, mi sono occupato della creazione delle pagine a partire dai layout progettuali, traducendo le soluzioni di design in interfacce funzionali e coerenti con l'esperienza definita. Ho inoltre gestito la fase di validazione direttamente con il cliente, occupandomi del confronto sui contenuti, sulle funzionalità e sulla resa visiva delle pagine, fino alla loro approvazione finale.",
    signatureColor: '#F5D33A',
    onSignatureDark: true,
  },
];
