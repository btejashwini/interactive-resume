/* ==========================================================================
   CONFIGURATION
   ========================================================================== */

// Set this to a PDF path (for example 'Tejashwini-B-Resume.pdf') once you add one
// to the site. Until then, "Download Resume" opens the browser's print dialog,
// which uses the print-only résumé layout and can be saved as PDF.
const RESUME_PDF_URL = '';

/* ==========================================================================
   PROJECTS — single source of truth for the Work section, case studies and
   the print résumé. To add a project, add an object to this array.

   Fields (only `id`, `title` and `summary` are required):
     title, summary, category, status, type, role, skills[]
     featured      true → shown as the large card
     image         { src, alt } — only if a real screenshot exists
     links         { live, source, document, presentation, video } — omit any
                   that don't exist; nothing is shown for missing links
     disclaimer    shown at the top of the case study
     caseStudy     keys from CASE_STUDY_SECTIONS below. Each value can be:
                     'a paragraph'
                     ['list', 'of', 'items']           (items may be {label, text})
                     { ordered: true, items: [...] }
                     { groups: [{ title, items: [...] }] }
                   Sections without content are listed as "not yet documented".
     extraSections [{ title, content }] for material outside the standard list
     pendingNote   explanation shown next to the undocumented sections
   ========================================================================== */

const CASE_STUDY_SECTIONS = [
  ['problem', 'Problem'],
  ['users', 'Target users'],
  ['discovery', 'Discovery and insights'],
  ['requirements', 'Requirements'],
  ['journey', 'User journey'],
  ['decisions', 'Product decisions'],
  ['architecture', 'Technical architecture'],
  ['tradeoffs', 'Trade-offs'],
  ['learnings', 'Outcomes or learnings'],
  ['future', 'Future opportunities']
];

const PROJECTS = [
  {
    id: 'crm-advisor',
    featured: true,
    title: 'CRM Advisor',
    summary: 'A product concept and application that helps businesses evaluate CRM platforms and shortlist the ones that fit their requirements.',
    category: 'CRM evaluation and recommendation',
    status: 'Live',
    type: 'Existing product',
    role: 'Built the product concept and application',
    skills: ['CRM Strategy', 'Product Design', 'Platform Comparison'],
    links: { live: 'https://crm-advisor-ai.vercel.app/' },
    caseStudy: {
      problem: 'Businesses evaluating CRM platforms face an overwhelming number of options with varying capabilities, pricing models and integration requirements. Without a structured evaluation process, decisions are often made based on brand familiarity rather than fit-for-purpose assessment.',
      users: [
        'SMB and enterprise decision-makers evaluating CRM options',
        'Revenue operations and sales operations teams',
        'Technology consultants advising on CRM selection'
      ],
      requirements: [
        'Structured comparison of CRM platforms and evaluation parameters',
        'Requirement-based assessment against platform capabilities',
        'Shortlist generation with rationale',
        'Platform comparison output'
      ],
      journey: {
        ordered: true,
        items: [
          'User describes their business requirements and team size',
          'Application assesses requirements against CRM platform parameters',
          'User receives a shortlist of suitable CRM platforms',
          'User reviews comparison of shortlisted options'
        ]
      }
    },
    pendingNote: 'Technical architecture and roadmap details are being prepared and will be published once verified.'
  },
  {
    id: 'airbnb-india',
    title: 'Airbnb India Growth Strategy',
    summary: 'A product-led growth strategy exploring India-specific opportunities for Airbnb, from market problem to MVP and growth loops.',
    category: 'Product strategy and growth',
    type: 'Coursework · Independent assignment',
    role: 'Independent product strategy assignment, Airtribe programme',
    skills: ['Product Strategy', 'Growth Loops', 'Market Analysis', 'MVP Prioritisation'],
    disclaimer: 'Independent product management assignment completed as part of the Airtribe Product Management programme. It is not an official Airbnb initiative, is not affiliated with or commissioned by Airbnb, and does not represent Airbnb\'s actual strategy or operations.',
    caseStudy: {
      problem: 'India\'s domestic travel market is growing rapidly, but traveller discovery and trust in home-stay accommodations remains low. Hosts face onboarding friction and limited tools for local market positioning.',
      requirements: {
        groups: [{
          title: 'MVP prioritisation',
          items: [
            'Localised host onboarding with Kannada and Hindi support',
            'Region-specific listing categories (hill stations, homestays, farm stays)',
            'Traveller-host trust signals (verified reviews, local badges)',
            'Weekend getaway discovery feed'
          ]
        }]
      },
      decisions: {
        groups: [
          {
            title: 'Strategy pillars',
            items: [
              { label: 'Discovery', text: 'Localised search and regional language support' },
              { label: 'Planning', text: 'Curated India-specific trip planning features' },
              { label: 'Experience', text: 'Host enablement tools and local experience listings' }
            ]
          },
          {
            title: 'Coorg pilot recommendation',
            items: [
              'Proposed a geographic pilot in Coorg, Karnataka, a high-potential, underserved weekend-travel market, to validate growth loops before scaling across India.',
              'Coorg offers a testable, bounded market with existing tourism infrastructure and identifiable host supply.'
            ]
          }
        ]
      }
    },
    extraSections: [
      {
        title: 'Growth loops and monetisation',
        content: [
          { label: 'Host referral loop', text: 'Existing hosts recruit neighbouring property owners' },
          { label: 'Content loop', text: 'Local experience reviews drive organic discovery' },
          { label: 'Monetisation hypothesis', text: 'Premium listing visibility + experience add-ons' }
        ]
      },
      {
        title: 'Proposed success metrics',
        content: [
          'Host activation rate in pilot geography',
          'Booking conversion rate (pilot vs. baseline)',
          'Week-over-week repeat visit rate',
          'Time-to-first-booking for new hosts',
          'NPS scores for travellers and hosts'
        ]
      }
    ]
  },
  {
    id: 'learning-recommendations',
    title: 'Personalized Learning Recommendation System',
    summary: 'A technical product management assignment covering user stories, requirements, recommendation architecture and trade-offs for an AI-driven learning platform.',
    category: 'AI/ML product and system design',
    status: 'In progress',
    type: 'Coursework · Technical PM assignment',
    role: 'Technical product management assignment, Airtribe programme',
    skills: ['Technical Requirements', 'System Design', 'AI/ML Product', 'Trade-off Analysis'],
    disclaimer: 'Technical product management assignment from the Airtribe programme, currently in progress. Content will be updated as the assignment is completed.',
    caseStudy: {
      users: [
        { label: 'Learner', text: 'As a learner, I want personalised course recommendations so I can progress on topics relevant to my goals without spending time searching.' },
        { label: 'Instructor', text: 'As an instructor, I want to understand which content performs well so I can improve my modules.' },
        { label: 'Admin', text: 'As a platform administrator, I want to monitor recommendation quality to prevent filter bubbles or bias.' }
      ],
      requirements: {
        groups: [
          {
            title: 'Functional',
            items: [
              'Personalised recommendations based on learner history',
              'Skill gap identification based on declared goals',
              'Instructor-facing content performance dashboard',
              'Admin monitoring tools for recommendation quality and bias'
            ]
          },
          {
            title: 'Non-functional',
            items: [
              'Recommendation latency < 200ms (p95)',
              'System handles 10,000 concurrent learner sessions',
              'Explainability: human-readable recommendation rationale',
              'Privacy: no PII used in model training without explicit consent'
            ]
          }
        ]
      },
      architecture: [
        'Collaborative filtering for learner-to-learner similarity',
        'Content-based filtering using course metadata and skill tags',
        'Hybrid approach to balance novelty with relevance',
        'Feedback loop from engagement signals (completion, ratings, skips)'
      ],
      tradeoffs: [
        { label: 'Accuracy vs. Latency', text: 'Real-time inference vs. pre-computed recommendations served from cache' },
        { label: 'Personalisation vs. Discovery', text: 'Highly personalised results may limit exposure to new topics' },
        { label: 'Cold Start', text: 'New learners have no history, so fall back to popular or trending content' }
      ],
      future: {
        groups: [{
          title: 'Assumptions and future considerations',
          items: [
            'Assumption: learners explicitly declare goals at onboarding',
            'Future: A/B testing framework for recommendation strategy evaluation',
            'Future: Instructor content improvement suggestions based on drop-off patterns'
          ]
        }]
      }
    },
    pendingNote: 'This assignment is in progress. Remaining sections will be added as it is completed.'
  }
];

const LINK_TYPES = [
  ['live', 'View live product', 'fa-arrow-up-right-from-square'],
  ['source', 'Source code', 'fa-code'],
  ['document', 'Document (PDF)', 'fa-file-lines'],
  ['presentation', 'Presentation', 'fa-display'],
  ['video', 'Video walkthrough', 'fa-play']
];

/* ==========================================================================
   PORTFOLIO ASSISTANT — predefined answers (shared by both chat surfaces)
   ========================================================================== */

const RESUME_DATA = {

  summary: `<strong>Tejashwini B</strong> is an enterprise technology professional with <strong>9+ years of experience</strong> in Salesforce and enterprise CRM platforms.<br><br>
            • <strong>Current Role:</strong> Salesforce Developer at E2open, acting as technical point-of-contact between business stakeholders and engineering.<br>
            • <strong>Transition:</strong> Developing product management capabilities through Airtribe, an independent live product (CRM Advisor), and product strategy assignments.<br>
            • <strong>Target Roles:</strong> Technical Product Manager, Enterprise SaaS PM, CRM/RevOps PM, AI Product Manager.`,

  pm_capabilities: `<strong>Product &amp; Technical Capabilities:</strong><br><br>
                    • <strong>Product Thinking (Airtribe + applied projects):</strong> Discovery, problem framing, PRDs, user stories, acceptance criteria, prioritisation, product metrics, user research &amp; survey design.<br>
                    • <strong>Technical Architecture (professional experience):</strong> Enterprise SaaS, CRM architecture, REST/SOAP APIs, system integrations, feasibility analysis, trade-off analysis.<br>
                    • <strong>Engineering Foundation (9+ years):</strong> Salesforce Apex, LWC, Flows, integrations, governor limits, production reliability.<br>
                    • <strong>Product Execution (professional experience):</strong> Stakeholder alignment, UAT coordination, Agile delivery, release planning.`,

  crm_advisor: `<strong>CRM Advisor (live product):</strong><br><br>
                CRM Advisor is a product concept and application designed to help businesses evaluate CRM platforms and identify suitable options based on their requirements.<br><br>
                • Maintains a structured comparison of CRM platforms and evaluation parameters.<br>
                • Helps users assess CRM options against their requirements.<br>
                • Produces a shortlist of recommended CRM platforms.<br><br>
                <a href="https://crm-advisor-ai.vercel.app/" target="_blank" rel="noopener">View live at crm-advisor-ai.vercel.app</a>`,

  sf_experience: `<strong>Salesforce &amp; Enterprise CRM Experience:</strong><br><br>
                  • <strong>E2open (Jan 2023–Present):</strong> Technical point-of-contact for stakeholders, enterprise Sales Cloud workflows, recalculation of 178,432 OLIs using Batch Apex, UAT coordination, DevOps Center.<br>
                  • <strong>Dazeworks (Dec 2021–Jan 2023):</strong> Multi-client consulting, NPSP, Apex, integrations, stakeholder translation.<br>
                  • <strong>Lumen Technologies (Jul 2020–Dec 2021):</strong> LWC, Aura, Marketing Cloud, production incident management.<br>
                  • <strong>CRMIT Solutions – UnitedHealth Group (Jun 2019–Jul 2020):</strong> Service Cloud, Aura, security models, entitlements.<br>
                  • <strong>Accenture – AT&amp;T (Dec 2017–Jun 2019):</strong> Flows, automation, Robot Framework testing, Agile.`,

  integrations: `<strong>APIs &amp; Integrations:</strong><br><br>
                 • Designed and implemented <strong>REST and SOAP</strong> web service integrations connecting Salesforce with ERP systems, billing systems and external databases.<br>
                 • Leveraged <strong>Platform Events</strong> for asynchronous event-driven communication patterns.<br>
                 • Understanding of API architecture patterns, error handling, retries and scalability considerations.<br>
                 • Technical trade-off analysis for integration approaches (sync vs. async, REST vs. Platform Events).`,

  certifications: `<strong>Credentials &amp; Learning:</strong><br><br>
                   • <strong>Salesforce Certified Data 360 Consultant</strong> — <a href="https://trailheadacademy.salesforce.com/certificate/exam-data-cloud---Data-Con-101" target="_blank" rel="noopener">View certificate</a><br>
                   • <strong>Salesforce Certified Platform Developer I</strong> (PD1) — Active<br>
                   • <strong>Salesforce Certified Administrator</strong> (ADM 201) — Active<br>
                   • <strong>Trailhead Ranger</strong> — Superbadges: Business Administration Specialist, Service Cloud Specialist<br>
                   • <strong>Airtribe — Product Management &amp; AI for PM</strong> (In Progress)`,

  airtribe: `<strong>Airtribe Product Management Learning:</strong><br><br>
             Coursework covering product discovery, problem framing, PRDs &amp; user stories, user research, prioritisation, product metrics &amp; behavioral signals, functional &amp; non-functional requirements, technical trade-off analysis, and AI-enabled product concepts.<br><br>
             <strong>Applied Assignments:</strong><br>
             • Airbnb India growth strategy (independent product strategy assignment)<br>
             • Personalized Learning Recommendation System (technical PM assignment, in progress)<br><br>
             <em>Note: These are independent coursework assignments, not professional PM roles.</em>`,

  contact: `<strong>Contact Tejashwini B:</strong><br><br>
            • Email: <a href="mailto:btejashwini512@gmail.com">btejashwini512@gmail.com</a><br>
            • <a href="https://www.linkedin.com/in/tejashwini-b-b8b3b0116/" target="_blank" rel="noopener">LinkedIn profile</a><br>
            • <a href="https://github.com/btejashwini" target="_blank" rel="noopener">GitHub profile</a><br>
            • Based in Bengaluru, India<br>
            • Open to remote, hybrid and onsite opportunities.`
};

const CHAT_QUESTIONS = {
  summary:         'Tell me about her professional background.',
  pm_capabilities: 'What are her product management capabilities?',
  crm_advisor:     'Tell me about the CRM Advisor product.',
  sf_experience:   'What is her Salesforce experience?',
  integrations:    'Tell me about her APIs and integrations background.',
  certifications:  'What certifications and credentials does she hold?',
  airtribe:        'Tell me about her Airtribe PM learning.',
  contact:         'How can I contact Tejashwini?'
};

/* ==========================================================================
   EXPERIENCE DETAILS — Lightning CRM drawer
   ========================================================================== */

const EXPERIENCE_DETAILS = {
  E2open: `
    <strong>Company:</strong> E2open &nbsp;|&nbsp; <strong>Role:</strong> Salesforce Developer &nbsp;|&nbsp; <strong>Period:</strong> Jan 2023 – Present<br><br>
    <strong>Key Contributions:</strong><br>
    • Acted as <strong>technical point-of-contact between business stakeholders and engineering</strong>, clarifying business needs and evaluating solution options.<br>
    • Assessed existing platform functionality, dependencies and implementation risks before recommending approaches.<br>
    • Delivered enterprise <strong>Sales Cloud workflows and commercial classification</strong> features across the revenue operations platform.<br>
    • Led historical recalculation of <strong>178,432 Opportunity Line Items</strong> using scalable Batch Apex with governor-limit-aware processing — 178,404 successfully updated; 28 required further investigation.<br>
    • Developed Apex classes, triggers, LWC, Flows and REST integrations following Salesforce best practices.<br>
    • Coordinated <strong>UAT and release readiness</strong> with business users and cross-functional teams.<br>
    • Participated in DevOps Center adoption, org refresh planning and release management.
  `,
  Dazeworks: `
    <strong>Company:</strong> Dazeworks &nbsp;|&nbsp; <strong>Role:</strong> Application Engineer &nbsp;|&nbsp; <strong>Period:</strong> Dec 2021 – Jan 2023<br><br>
    <strong>Key Contributions:</strong><br>
    • Built and customised Salesforce applications for multiple clients in a consulting environment.<br>
    • Developed Apex classes, triggers, test classes and maintained code coverage following best practices.<br>
    • Worked on managed packages (NPSP) and complex org configurations.<br>
    • Partnered with client stakeholders to analyse business requests and translate them into technical solutions.<br>
    • Supported integrations, deployments and post-production enhancements.
  `,
  Lumen: `
    <strong>Company:</strong> Lumen Technologies &nbsp;|&nbsp; <strong>Role:</strong> Software Development Engineer &nbsp;|&nbsp; <strong>Period:</strong> Jul 2020 – Dec 2021<br><br>
    <strong>Key Contributions:</strong><br>
    • Engineered Salesforce custom modules using Aura Components and Lightning Web Components (LWC).<br>
    • Configured Marketing Cloud — Email Studio, Mobile Studio and Journey Builder.<br>
    • Handled production incident queues: data skew issues, governor limit exceptions, trigger recursion.<br>
    • Deployed code using GitLab and multi-sandbox strategies.
  `,
  CRMIT: `
    <strong>Company:</strong> CRMIT Solutions &nbsp;|&nbsp; <strong>Role:</strong> CX Cloud Developer (Client: UnitedHealth Group) &nbsp;|&nbsp; <strong>Period:</strong> Jun 2019 – Jul 2020<br><br>
    <strong>Key Contributions:</strong><br>
    • Built customer-support workflows using Service Cloud: Entitlements, Milestones and case assignment rules.<br>
    • Created UI screens using Aura components and Visualforce controllers.<br>
    • Configured security models, data visibility, automation and permission sets.<br>
    • Supported high-volume data uploads and end-user enablement.
  `,
  Accenture: `
    <strong>Company:</strong> Accenture &nbsp;|&nbsp; <strong>Role:</strong> Application Development Associate (Client: AT&amp;T) &nbsp;|&nbsp; <strong>Period:</strong> Dec 2017 – Jun 2019<br><br>
    <strong>Key Contributions:</strong><br>
    • Provided level-2 support for large enterprise Salesforce systems.<br>
    • Configured Salesforce automations: Validation Rules, Process Builders and Flows.<br>
    • Automated end-to-end testing using Robot Framework.<br>
    • Participated in Agile delivery cycles.
  `
};

/* ==========================================================================
   INIT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderPrintProjects();
  initCaseStudyDialog();
  initViews();
  initThemeToggle();
  initNavigation();
  initResumeDownload();
  initTimelineFilter();
  initFloatingChat();
  initSfConsoleTabs();
});

/* ==========================================================================
   HELPERS
   ========================================================================== */

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderItem(item) {
  if (item && typeof item === 'object') {
    return `<strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.text)}`;
  }
  return escapeHtml(item);
}

function renderList(items, ordered) {
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag}>${items.map(i => `<li>${renderItem(i)}</li>`).join('')}</${tag}>`;
}

// Renders any supported case-study value: string | array | {ordered, items} | {groups}
function renderContent(value) {
  if (!value) return '';
  if (typeof value === 'string') return `<p>${escapeHtml(value)}</p>`;
  if (Array.isArray(value)) return renderList(value, false);
  if (value.groups) {
    return value.groups.map(g => `
      <div class="cs-group">
        ${g.title ? `<p class="cs-group-title">${escapeHtml(g.title)}</p>` : ''}
        ${renderList(g.items, g.ordered)}
      </div>`).join('');
  }
  if (value.items) return renderList(value.items, value.ordered);
  return '';
}

function hasContent(value) {
  if (!value) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (value.groups) return value.groups.some(g => g.items && g.items.length);
  if (value.items) return value.items.length > 0;
  return false;
}

function renderLinks(links, extraClass) {
  if (!links) return '';
  return LINK_TYPES
    .filter(([key]) => links[key])
    .map(([key, label, icon], index) => `
      <a href="${escapeHtml(links[key])}" target="_blank" rel="noopener"
         class="btn ${index === 0 ? 'btn-primary' : 'btn-secondary'} ${extraClass || ''}">
        <i class="fa-solid ${icon}" aria-hidden="true"></i> ${label}<span class="sr-only"> (opens in a new tab)</span>
      </a>`).join('');
}

function statusLabel(project) {
  if (!project.status) return '';
  const cls = /live/i.test(project.status) ? 'label-live'
            : /progress/i.test(project.status) ? 'label-progress' : '';
  return `<span class="label ${cls}">${escapeHtml(project.status)}</span>`;
}

/* ==========================================================================
   1. PROJECTS — cards
   ========================================================================== */

function renderProjects() {
  const list = document.getElementById('project-list');
  if (!list) return;

  const ordered = [...PROJECTS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  list.innerHTML = ordered.map(p => {
    const image = p.image && p.image.src
      ? `<img class="project-image" src="${escapeHtml(p.image.src)}" alt="${escapeHtml(p.image.alt || '')}" loading="lazy">`
      : '';

    const facts = `
      <dl class="project-facts">
        ${p.role ? `<div><dt>My role</dt><dd>${escapeHtml(p.role)}</dd></div>` : ''}
        ${p.category ? `<div><dt>Category</dt><dd>${escapeHtml(p.category)}</dd></div>` : ''}
        ${p.skills && p.skills.length ? `<div><dt>Skills</dt><dd>${p.skills.map(escapeHtml).join(' · ')}</dd></div>` : ''}
      </dl>`;

    const actions = `
      <div class="project-actions">
        <button type="button" class="btn ${p.links && p.links.live ? 'btn-secondary' : 'btn-primary'}" data-case-study="${escapeHtml(p.id)}">
          Read case study <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
        ${renderLinks(p.links)}
      </div>`;

    const main = `
      <div class="project-main">
        <div class="project-labels">
          ${p.type ? `<span class="label">${escapeHtml(p.type)}</span>` : ''}
          ${statusLabel(p)}
        </div>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-summary">${escapeHtml(p.summary)}</p>
        ${p.featured ? actions : ''}
      </div>`;

    if (p.featured) {
      return `<article class="project-card is-featured" id="project-${escapeHtml(p.id)}">
        ${main}
        <div>${image}${facts}</div>
      </article>`;
    }
    return `<article class="project-card" id="project-${escapeHtml(p.id)}">
      ${image}${main}${facts}${actions}
    </article>`;
  }).join('');

  list.addEventListener('click', e => {
    const btn = e.target.closest('[data-case-study]');
    if (btn) openCaseStudy(btn.getAttribute('data-case-study'), btn);
  });
}

function renderPrintProjects() {
  const list = document.getElementById('print-projects');
  if (!list) return;
  list.innerHTML = PROJECTS.map(p => {
    const bits = [p.type, p.status].filter(Boolean).join(', ');
    const live = p.links && p.links.live ? ` Available at ${p.links.live.replace(/^https?:\/\//, '').replace(/\/$/, '')}` : '';
    return `<li><strong>${escapeHtml(p.title)}</strong>${bits ? ` (${escapeHtml(bits)})` : ''}: ${escapeHtml(p.summary)}${escapeHtml(live)}</li>`;
  }).join('');
}

/* ==========================================================================
   2. CASE STUDY DIALOG
   ========================================================================== */

let caseStudyTrigger = null;

function initCaseStudyDialog() {
  const dialog = document.getElementById('case-study');
  const closeBtn = document.getElementById('cs-close');
  if (!dialog || !closeBtn) return;

  closeBtn.addEventListener('click', () => dialog.close());

  // Click on the backdrop closes the dialog
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (caseStudyTrigger) caseStudyTrigger.focus();
  });
}

function openCaseStudy(id, trigger) {
  const project = PROJECTS.find(p => p.id === id);
  const dialog = document.getElementById('case-study');
  if (!project || !dialog) return;

  caseStudyTrigger = trigger || null;
  const cs = project.caseStudy || {};

  document.getElementById('cs-eyebrow').textContent =
    [project.type, project.status].filter(Boolean).join(' · ');
  document.getElementById('cs-title').textContent = project.title;

  const documented = CASE_STUDY_SECTIONS.filter(([key]) => hasContent(cs[key]));
  const missing = CASE_STUDY_SECTIONS.filter(([key]) => !hasContent(cs[key]));

  const sections = documented.map(([key, label]) => `
    <section class="cs-section">
      <h3>${label}</h3>
      <div>${renderContent(cs[key])}</div>
    </section>`).join('');

  const extras = (project.extraSections || []).map(s => `
    <section class="cs-section">
      <h3>${escapeHtml(s.title)}</h3>
      <div>${renderContent(s.content)}</div>
    </section>`).join('');

  const pending = missing.length ? `
    <div class="cs-pending">
      <strong>Not yet documented:</strong> ${missing.map(([, label]) => label).join(', ')}.
      ${project.pendingNote ? ` ${escapeHtml(project.pendingNote)}` : ''}
    </div>` : '';

  const links = renderLinks(project.links);

  document.getElementById('cs-body').innerHTML = `
    <div class="cs-intro">
      <p>${escapeHtml(project.summary)}</p>
      ${project.disclaimer ? `<div class="cs-disclaimer"><i class="fa-solid fa-circle-info" aria-hidden="true"></i><span>${escapeHtml(project.disclaimer)}</span></div>` : ''}
    </div>
    ${sections}
    ${extras}
    ${pending}
    ${links ? `<div class="cs-links">${links}</div>` : ''}
  `;

  document.body.classList.add('dialog-open');
  dialog.showModal();
  dialog.scrollTop = 0;
  document.getElementById('cs-close').focus();
}

/* ==========================================================================
   3. VIEWS — Portfolio (default) ↔ Lightning CRM demo
   ========================================================================== */

const CRM_HASH = '#lightning-crm';

function initViews() {
  const openBtn   = document.getElementById('btn-crm-view');
  const footerBtn = document.getElementById('footer-crm-link');
  const backBtn   = document.getElementById('btn-portfolio-view');
  const brand     = document.getElementById('brand-link');

  if (openBtn)   openBtn.addEventListener('click', () => showView('crm', true));
  if (footerBtn) footerBtn.addEventListener('click', () => showView('crm', true));
  if (backBtn)   backBtn.addEventListener('click', () => showView('portfolio', true));
  if (brand) {
    brand.addEventListener('click', () => {
      if (document.body.classList.contains('crm-mode')) showView('portfolio', true);
    });
  }

  // Back/forward buttons and shared links (…#lightning-crm) open the right view
  window.addEventListener('hashchange', syncViewWithHash);
  syncViewWithHash();
}

function syncViewWithHash() {
  const wantsCrm = location.hash === CRM_HASH;
  const inCrm = document.body.classList.contains('crm-mode');
  if (wantsCrm !== inCrm) showView(wantsCrm ? 'crm' : 'portfolio', false);
}

function showView(view, updateHash) {
  const isCrm = view === 'crm';
  document.body.classList.toggle('crm-mode', isCrm);
  document.getElementById('portfolio-view').classList.toggle('active', !isCrm);
  document.getElementById('salesforce-view').classList.toggle('active', isCrm);
  document.getElementById('btn-portfolio-view').hidden = !isCrm;
  closeMobileNav();

  const chatWindow = document.getElementById('chat-window');
  if (isCrm && chatWindow) setChatOpen(false);

  if (updateHash) {
    if (isCrm) {
      history.pushState(null, '', CRM_HASH);
    } else if (location.hash === CRM_HASH) {
      history.pushState(null, '', location.pathname + location.search);
    }
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
  if (isCrm) document.getElementById('btn-portfolio-view').focus();
}

/* ==========================================================================
   4. THEME — light default, saved preference respected
   ========================================================================== */

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const apply = theme => {
    document.documentElement.setAttribute('data-theme', theme);
    btn.querySelector('i').className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  };

  apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  });
}

/* ==========================================================================
   5. NAVIGATION — mobile menu and active-section highlight
   ========================================================================== */

function closeMobileNav() {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  if (!nav || !toggle) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.querySelector('i').className = 'fa-solid fa-bars';
}

function initNavigation() {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileNav));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMobileNav();
      toggle.focus();
    }
  });

  // Highlight the nav item for the section currently in view
  const links = [...nav.querySelectorAll('a[data-nav]')];
  const sections = links
    .map(l => document.getElementById(l.getAttribute('data-nav')))
    .filter(Boolean);
  if (!('IntersectionObserver' in window) || !sections.length) return;

  const visible = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => visible.set(entry.target.id, entry.isIntersecting));
    const current = sections.find(s => visible.get(s.id));
    links.forEach(l => l.classList.toggle('active', !!current && l.getAttribute('data-nav') === current.id));
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ==========================================================================
   6. DOWNLOAD RESUME
   ========================================================================== */

function initResumeDownload() {
  const link = document.getElementById('download-resume');
  if (!link) return;

  if (RESUME_PDF_URL) {
    link.href = RESUME_PDF_URL;
    link.setAttribute('download', '');
    return;
  }

  link.title = 'Opens the print dialog. Choose "Save as PDF".';
  link.addEventListener('click', e => {
    e.preventDefault();
    window.print();
  });
}

/* ==========================================================================
   7. EXPERIENCE FILTER
   ========================================================================== */

function initTimelineFilter() {
  const tags   = document.querySelectorAll('.filter-tag');
  const items  = document.querySelectorAll('.timeline-item');
  const status = document.getElementById('filter-status');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tags.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tag.classList.add('active');
      tag.setAttribute('aria-pressed', 'true');

      const filter = tag.getAttribute('data-filter');
      let matches = 0;

      items.forEach(item => {
        // Exact token match: "integration" must not match e.g. "integrations-x"
        const skills = (item.getAttribute('data-skills') || '').split(/\s+/);
        const match = filter === 'all' || skills.includes(filter);
        if (match) matches++;
        item.classList.toggle('filtered-out', !match);
        item.classList.toggle('highlighted', match && filter !== 'all');
      });

      if (status) {
        status.textContent = filter === 'all'
          ? ''
          : `${matches} of ${items.length} roles use ${tag.textContent.trim()}.`;
      }
    });
  });
}

/* ==========================================================================
   8. FLOATING PORTFOLIO ASSISTANT
   ========================================================================== */

function setChatOpen(open) {
  const windowEl = document.getElementById('chat-window');
  const trigger  = document.getElementById('chat-trigger');
  if (!windowEl || !trigger) return;
  windowEl.classList.toggle('active', open);
  trigger.setAttribute('aria-expanded', String(open));
}

function initFloatingChat() {
  const trigger  = document.getElementById('chat-trigger');
  const windowEl = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const body     = document.getElementById('chat-body');
  if (!trigger || !windowEl || !closeBtn || !body) return;

  trigger.addEventListener('click', () => setChatOpen(!windowEl.classList.contains('active')));
  closeBtn.addEventListener('click', () => {
    setChatOpen(false);
    trigger.focus();
  });

  document.querySelectorAll('.suggest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      handleChatQuery(btn.textContent.trim(), btn.getAttribute('data-query'), body);
    });
  });
}

function handleChatQuery(question, queryType, container) {
  appendChatMsg(question, 'user', container);
  const indicator = appendChatTyping(container);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    indicator.remove();
    appendChatMsg(RESUME_DATA[queryType] || "I don't have details on that topic. Try another question!", 'bot', container, true);
    container.scrollTop = container.scrollHeight;
  }, 700);
}

function appendChatMsg(content, type, container, isHtml) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${type}`;
  if (isHtml) msg.innerHTML = content; else msg.textContent = content;
  container.appendChild(msg);
}

function appendChatTyping(container) {
  const indicator = document.createElement('div');
  indicator.className = 'chat-msg bot typing-indicator';
  indicator.setAttribute('aria-label', 'Assistant is typing');
  indicator.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
  container.appendChild(indicator);
  return indicator;
}

/* ==========================================================================
   9. LIGHTNING CRM — tabs, drawer, console assistant
   ========================================================================== */

function initSfConsoleTabs() {
  const sidebarItems = document.querySelectorAll('.sf-nav-item');
  const tabs         = document.querySelectorAll('.sf-tab');
  const contents     = document.querySelectorAll('.sf-tab-content');

  function switchTab(tabId) {
    sidebarItems.forEach(item => {
      const on = item.getAttribute('data-tab') === tabId;
      item.classList.toggle('active', on);
      item.setAttribute('aria-current', on ? 'page' : 'false');
    });
    tabs.forEach(tab => tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId));
    contents.forEach(content => content.classList.toggle('active', content.id === `tab-${tabId}`));
    const workspace = document.querySelector('.sf-workspace');
    if (workspace) workspace.scrollTop = 0;
  }

  sidebarItems.forEach(item => item.addEventListener('click', () => switchTab(item.getAttribute('data-tab'))));
  tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.getAttribute('data-tab'))));
}

function viewSfExperienceDetails(companyKey) {
  const drawer  = document.getElementById('sf-experience-details-box');
  const content = document.getElementById('sf-drawer-content');
  const title   = document.getElementById('sf-drawer-company-title');
  if (!drawer || !content || !title) return;

  title.textContent = `${companyKey} — Experience Details`;
  content.innerHTML = EXPERIENCE_DETAILS[companyKey] || 'Record not found.';
  drawer.hidden = false;
  drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeSfDrawer() {
  const drawer = document.getElementById('sf-experience-details-box');
  if (drawer) drawer.hidden = true;
}

// Console assistant: answers use the same .sf-chat-msg > .msg-bubble markup as
// the welcome message, so every message is styled consistently.
function appendSfMsg(content, type, container, isHtml) {
  const row = document.createElement('div');
  row.className = `sf-chat-msg ${type}`;
  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  if (isHtml) bubble.innerHTML = content; else bubble.textContent = content;
  row.appendChild(bubble);
  container.appendChild(row);
  return row;
}

function askEinstein(queryType) {
  const chat = document.getElementById('sf-console-chat-messages');
  if (!chat) return;

  appendSfMsg(CHAT_QUESTIONS[queryType] || 'Tell me about Tejashwini.', 'user', chat);

  const typing = appendSfMsg('', 'system', chat);
  const bubble = typing.querySelector('.msg-bubble');
  bubble.classList.add('typing-indicator');
  bubble.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();
    appendSfMsg(RESUME_DATA[queryType] || 'Record not found. Try another question.', 'system', chat, true);
    chat.scrollTop = chat.scrollHeight;
  }, 700);
}
