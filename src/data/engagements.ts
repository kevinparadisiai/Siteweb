// Ledger degli ingaggi enterprise — usato dalla home v2.
// Ogni riga = una collaborazione, letta da HR in <5s scorrendo la
// colonna cliente. KPI placeholder dove il dato reale manca — da
// sostituire prima del "vero" go-live.

export interface Engagement {
  year: string;        // etichetta (non da ordinare; l'array è già in ordine)
  client: string;      // nome cliente come compare nel wordmark
  color: string;       // hex del cliente — sostituisce l'accent globale
  role: string;        // ruolo Kevin nel progetto
  deliverable: string; // una frase, verbo attivo
  kpi: string;         // numero verificabile, oppure '—'
  slug: string | null; // se non null, la riga è cliccabile → /v2/work/<slug>/
}

export const engagements: Engagement[] = [
  {
    year: '2024 → oggi',
    client: 'TIM',
    color: '#1E39A0',
    role: 'Senior UX',
    deliverable: 'Self-caring post-chiamata + coordinamento designer.',
    kpi: '47% no re-call in 24h',
    slug: 'tim',
  },
  {
    year: '2022 → 2024',
    client: 'UnipolSai',
    color: '#00733E',
    role: 'UX Designer',
    deliverable: 'Denuncia sinistro motor, redesign end-to-end.',
    kpi: '3 fasi di rilascio',
    slug: null,
  },
  {
    year: '2021 → 2022',
    client: 'Eolo',
    color: '#00A6E4',
    role: 'UX Designer',
    deliverable: 'Onboarding preventivo + area cliente.',
    kpi: '4 step di attivazione',
    slug: null,
  },
  {
    year: '2020 → 2021',
    client: 'Gruppo CAP',
    color: '#5C8CB8',
    role: 'UX Designer',
    deliverable: 'Redesign area privata multi-profilo.',
    kpi: '10+ processi digitalizzati',
    slug: 'cap',
  },
  {
    year: '2019 → 2020',
    client: 'Eni',
    color: '#F5D33A',
    role: 'UX Consultant',
    deliverable: "Archivio storico digitale, portale di consultazione.",
    kpi: '20+ pagine · migliaia doc.',
    slug: 'eni',
  },
  {
    year: '2018 → 2019',
    client: 'Lastminute.com',
    color: '#EC008C',
    role: 'UX Consultant',
    deliverable: 'Flussi di booking e supporto viaggio.',
    kpi: '3 flussi ridisegnati',
    slug: null,
  },
];
