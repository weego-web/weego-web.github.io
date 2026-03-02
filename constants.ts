
import { TranslationStructure, Language } from './types';

export const CONTENT: Record<Language, TranslationStructure> = {
  en: {
    nav: [
      { label: 'Work', href: '#work' },
      { label: 'Services', href: '#services' },
      { label: 'Brief', href: '/brief' },
    ],
    hero: {
      h1Line1: 'WEBSITES',
      h1Line2: '& SYSTEMS',
      subheadlineLine1: 'END-TO-END:',
      subheadlineLine2: 'DESIGN → ENGINEERING → DEPLOYMENT.',
      ctaPrimary: 'GET ESTIMATE',
      ctaSecondary: 'VIEW WORK'
    },
    trust: {
      stats: [
        { label: 'PROJECTS', value: '10+' },
        { label: 'YEARS', value: '4+' },
        { label: 'Client rating', value: '5/5' },
        { label: 'first reply', value: '12h' }
      ],
      logos: []
    },
    marquee: ["HIGH CONVERSION", "BRUTALIST DESIGN", "WEB ENGINEERING", "PERFORMANCE FIRST", "SEO OPTIMIZED", "SCALABLE SYSTEMS"],
    services: {
      heading: 'Services',
      subheading: '[WHAT WE DO]',
      routes: [
        {
          id: 'turnkey',
          title: 'TURNKEY WEBSITE',
          oneLiner: 'Turnkey website — fast, neat, with launch.',
          bestFor: [
            'To have a simple site and leads',
            'When you need to launch quickly',
            'When you want a fixed starting budget'
          ],
          included: [
            'Design + build (responsive)',
            'Contact form + basic SEO structure',
            'Deployment + handover'
          ],
          priceBadge: 'Starting from €300',
          cta: 'LEARN MORE',
          preset: { route: 'turnkey' }
        },
        {
          id: 'platform',
          title: 'WEEGO PLATFORM (HOSTED BY US)',
          oneLiner: 'Launch on our platform. We deploy, maintain, and evolve it.',
          bestFor: [
            'When you need more than a website',
            'When support & updates matter',
            'When you want to start on a ready base'
          ],
          included: [
            'White-label design',
            'Modules + integrations as needed',
            'Hosting, deployment & support'
          ],
          priceBadge: 'Setup from €500 + €100/month',
          cta: 'LEARN MORE',
          preset: { route: 'platform' }
        },
        {
          id: 'horeca',
          title: 'HORECA TEMPLATE SYSTEM',
          oneLiner: 'Template-based HoReCa system — launch fast, adapt to your brand.',
          bestFor: [
            'Restaurants, cafes, small chains',
            'When you want a proven template, not from scratch',
            'When you want ongoing support'
          ],
          included: [
            'Ready HoReCa base (template)',
            'Branding + UI adaptation',
            'Integrations (payments/POS/CRM) optional'
          ],
          priceBadge: 'Setup from €600 + €100/month',
          cta: 'LEARN MORE',
          preset: { route: 'horeca' }
        }
      ],
      customRequest: {
        title: 'CUSTOM REQUEST',
        oneLiner: 'Not sure what fits? Describe your project — we’ll recommend the best path.',
        bullets: [
          'Websites, systems, integrations',
          'Any industry',
          'Fast reply'
        ],
        cta: 'DESCRIBE PROJECT'
      },
      capabilities: {
        heading: 'Also we can help with',
        showAllLabel: 'Show all capabilities',
        items: [
          { id: 'backend', label: 'Backend / API' },
          { id: 'admin', label: 'Admin panels / dashboards' },
          { id: 'payments', label: 'Payments & webhooks' },
          { id: 'pos', label: 'POS / CRM integrations' },
          { id: 'devops', label: 'DevOps / Cloud' },
          { id: 'mobile', label: 'Mobile / PWA' },
          { id: 'bi', label: 'Data / BI dashboards' },
          { id: 'automation', label: 'Automation / integrations' },
          { id: 'performance', label: 'Performance optimization' },
          { id: 'seo', label: 'SEO setup' },
          { id: 'analytics', label: 'Analytics events' },
          { id: 'migration', label: 'Content migration' },
          { id: 'notifications', label: 'Notifications (email/SMS)' },
          { id: 'security', label: 'Security hardening' },
          { id: 'audit', label: 'Technical audit' },
          { id: 'consulting', label: 'Architectural consulting' }
        ]
      },
      industries: {
        heading: 'Industries (experience)',
        experienceLabel: 'Experience, not a one-size-fits-all template.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'platform', options: ['pos', 'payments', 'admin'] } },
          { id: 'retail', label: 'Retail', preset: { route: 'custom', options: ['payments', 'automation'] } },
          { id: 'services', label: 'Services', preset: { route: 'turnkey', options: ['seo', 'analytics'] } },
          { id: 'ngo', label: 'NGOs', preset: { route: 'turnkey', options: ['multilang'] } }
        ]
      }
    },
    brief: {
      h1: 'PROJECT BRIEF',
      subtitle: 'Tell us what you need — we’ll reply with a plan and next steps.',
      fields: {
        route: 'ROUTE',
        timeline: 'TIMELINE',
        links: 'LINKS',
        details: 'PROJECT DETAILS',
        contact: 'CONTACT (TELEGRAM OR EMAIL)'
      },
      submit: 'SUBMIT REQUEST',
      capabilitiesTitle: 'WHAT WE CAN COVER',
      showAllLabel: 'SHOW ALL CAPABILITIES',
      showLessLabel: 'SHOW LESS',
      options: {
        routes: {
          turnkey: 'Turnkey website',
          platform: 'WEEGO platform',
          horeca: 'HoReCa template system',
          custom: 'Custom request'
        },
        timeline: {
          asap: 'ASAP',
          weeks: '2–4 weeks',
          flexible: 'Flexible'
        }
      }
    },
    serviceDetail: {
      industriesLabel: 'INDUSTRIES (EXPERIENCE):',
      turnkey: {
        h1: 'TURNKEY WEBSITE',
        subtitle: 'A simple website under your brand — fast, neat, with launch.',
        cta: 'DESCRIBE PROJECT',
        sections: {
          bestFor: {
            title: 'BEST FOR',
            items: [
              'New projects that need a clean online presence',
              'Small businesses that need leads',
              'Fast launches with a clear starting budget'
            ]
          },
          included: {
            title: 'WHAT’S INCLUDED',
            items: {
              group1: [
                'Clean UI layout',
                'Responsive (mobile/tablet/desktop)',
                'Basic SEO structure'
              ],
              group2: [
                'Contact form',
                'Deployment',
                'Handover'
              ]
            }
          },
          packages: {
            title: 'PACKAGES',
            items: [
              {
                name: 'STARTER',
                price: '€300–€500',
                timeline: '3–7 days',
                includes: '1 page or small site, responsive, contact form, deployment'
              },
              {
                name: 'STANDARD',
                price: '€500–€900',
                timeline: '1–2 weeks',
                includes: '5–10 pages, reusable sections, basic analytics setup, deployment'
              },
              {
                name: 'PRO',
                price: '€900–€1,500',
                timeline: '2–4 weeks',
                includes: 'custom UI kit, 1–2 integrations, extended analytics events, performance pass'
              }
            ]
          },
          process: {
            title: 'PROCESS',
            items: [
              'Short call (goals + scope)',
              'Design & structure',
              'Build & polish',
              'Launch & handover'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Do you provide content?', a: 'We can work with your content or help structure it.' },
              { q: 'Can you do it faster?', a: 'Sometimes yes — depends on scope and content readiness.' },
              { q: 'Will it work on mobile?', a: 'Yes, responsive is included.' },
              { q: 'Can you add analytics?', a: 'Yes — basic setup is included in Standard and above.' },
              { q: 'Do you provide support after launch?', a: 'Yes — we can continue with monthly support.' }
            ]
          }
        }
      },
      platform: {
        h1: 'WEEGO PLATFORM (HOSTED BY US)',
        subtitle: 'Launch on our platform — we deploy, maintain, and evolve it with you.',
        cta: 'DESCRIBE PROJECT',
        sections: {
          bestFor: {
            title: 'BEST FOR',
            items: [
              'Businesses that need more than a website',
              'Teams that want ongoing support and updates',
              'Faster starts on a ready foundation'
            ]
          },
          included: {
            title: 'WHAT’S INCLUDED',
            items: [
              'White-label design (your brand)',
              'Modules enabled for your needs',
              'Integrations as needed',
              'Hosting, deployment & maintenance'
            ]
          },
          startingFrom: {
            title: 'STARTING FROM',
            setup: 'Setup: €500–€900',
            maintenance: 'Maintenance: €100/month'
          },
          process: {
            title: 'PROCESS',
            items: [
              'Short call (goals + scope)',
              'Configure modules + branding',
              'Deploy + final checks',
              'Support & ongoing improvements'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Is this a template?', a: 'It’s our platform foundation. We adapt it to your brand and needs.' },
              { q: 'Can we request new features?', a: 'Yes — we can plan improvements as part of ongoing work.' },
              { q: 'Who hosts it?', a: 'We host and maintain it.' },
              { q: 'Can you integrate payments/CRM/POS?', a: 'Yes — integrations are possible based on your stack.' },
              { q: 'Can we move off later?', a: 'We can discuss export/transition options case by case.' }
            ]
          }
        }
      },
      horeca: {
        h1: 'HORECA TEMPLATE SYSTEM',
        subtitle: 'Template-based HoReCa system — launch fast and adapt it to your brand.',
        cta: 'DESCRIBE PROJECT',
        sections: {
          bestFor: {
            title: 'BEST FOR',
            items: [
              'Restaurants, cafes, small chains',
              'Teams that want a proven template, not from scratch',
              'Ongoing support after launch'
            ]
          },
          included: {
            title: 'WHAT’S INCLUDED',
            items: [
              'Ready HoReCa base (template)',
              'Branding + UI adaptation',
              'Optional integrations (payments/POS/CRM)',
              'Hosting, deployment & maintenance'
            ]
          },
          startingFrom: {
            title: 'STARTING FROM',
            setup: 'Setup: €600–€1,000',
            maintenance: 'Maintenance: €100/month'
          },
          process: {
            title: 'PROCESS',
            items: [
              'Short call (your flow + priorities)',
              'Brand/UI adaptation',
              'Integrations (if needed) + deploy',
              'Support & updates'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Is it fully custom?', a: 'It’s template-based. We adapt modules and integrations to your needs.' },
              { q: 'Can we change the design?', a: 'Yes — branding and UI adaptation are included.' },
              { q: 'Can you integrate POS/CRM/payments?', a: 'Yes — optional integrations.' },
              { q: 'How fast can we launch?', a: 'Depends on branding and integrations, usually within the setup timeline.' },
              { q: 'Do you maintain it?', a: 'Yes — monthly maintenance is included as a separate line item.' }
            ]
          }
        }
      }
    },
    designSystem: {
        heading: "System",
        subheading: "Standards",
        typography: {
            title: "Typography",
            primary: {
                name: "Archivo",
                usage: "Display / Headlines",
                description: "Grotesque sans-serif with high impact weight variance. Used for shouting."
            },
            secondary: {
                name: "Inter",
                usage: "Body / UI",
                description: "Optimized for screen legibility. Neutral, objective, purely functional."
            }
        },
        standards: {
            title: "Methodology",
            items: [
                { title: "Atomic Design", desc: "We build systems, not pages. Every component is molecular.", code: "SYS_ATOMIC" },
                { title: "Swiss Grid", desc: "Mathematical precision. 12-column layouts with rigid vertical rhythm.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "WCAG 2.1 compliance is not optional. It is the baseline.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Zero tolerance. We design for user agency, not manipulation.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "DELIVERY SYSTEM",
      subheading: "END-TO-END CAPABILITIES",
      footerQuote: "We don’t deliver pages. We deliver systems that ship.",
      pipeline: {
        title: "EXECUTION PIPELINE",
        steps: [
          { title: "CALL & BRIEF", desc: "defining goals, scope, and success metrics" },
          { title: "PROTOTYPE", desc: "wireframes, user flows, and core logic" },
          { title: "DESIGN & DEV", desc: "visual identity and technical build" },
          { title: "LAUNCH & SUPPORT", desc: "QA, deployment, and continuous growth" }
        ]
      },
      modules: {
        title: "TECHNICAL SCHEMATIC",
        items: [
            {
                title: "DESIGN SYSTEM (VISUAL OS)",
                content: ["Typography", "Grid", "Tokens", "Components", "Motion rules"]
            },
            {
                title: "PRODUCT & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "APIs", "Automations", "Integrations"]
            },
            {
                title: "CONTENT & BRAND EXECUTION",
                content: ["Copy", "Art direction", "Guidelines", "Assets", "Packaging"]
            },
            {
                title: "DEPLOYMENT & OPTIMIZATION",
                content: ["Performance", "SEO", "Monitoring", "A/B", "Analytics"]
            }
        ]
      }
    },
    works: {
      heading: 'Recent Work',
      subheading: '[SELECTED PROJECTS 2025-2026]',
      viewAll: '',
      modalLaunch: 'Launch System',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Art Tech Platform',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'A revolutionary digital platform connecting physical galleries with digital wanderers.',
          before: 'Fragmented gallery presence with no unified digital sales channel.',
          done: ['Custom UI/UX', 'Platform Architecture', 'Partner Integration'],
          result: 'Unified 40+ galleries into a single high-performance art marketplace.',
          capabilities: ['UX/UI Design', 'Platform Architecture', 'Partner Integration', 'Brand Identity'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Educational Interface',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'An immersive educational stand for aesthetic decomposition.',
          before: 'Static educational content with low engagement.',
          done: ['HUD Interface', 'Real-time Data Viz', 'Motion Design'],
          result: 'Increased student engagement by 300% through interactive HUD.',
          capabilities: ['HUD Interface', 'Real-time Data Viz', 'Motion Design', 'Creative Coding'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Humanitarian Platform',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Critical digital infrastructure for humanitarian aid.',
          before: 'Manual donation processing and slow logistics tracking.',
          done: ['Platform Architecture', 'Donation Systems', 'Secure Payments'],
          result: 'Processed $1M+ in donations with zero downtime during peak loads.',
          capabilities: ['Platform Architecture', 'Donation Systems', 'Secure Payments', 'Global Logistics'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'How long does a project take?', a: 'Typical landing pages take 2-3 weeks. Complex platforms take 2-4 months.' },
        { q: 'What is your pricing model?', a: 'We work with fixed-price projects based on defined scope or monthly retainers for support.' },
        { q: 'Do you provide maintenance?', a: 'Yes, we offer SLA-based support and continuous development packages.' },
        { q: 'What do you need from me to start?', a: 'A clear goal, existing brand assets (if any), and a 30-minute discovery call.' },
        { q: 'Do you work with startups?', a: 'Yes, we specialize in building MVPs and scaling digital products for tech startups.' },
        { q: 'Is SEO included?', a: 'Basic technical SEO is included in every build. Advanced strategy is an add-on.' }
      ]
    },
    finalCta: {
      heading: 'Ready to Scale?',
      subheading: 'Get a precise estimate or book a discovery call today.',
      ctaPrimary: 'Get Estimate',
      ctaSecondary: 'Book a Call'
    },
    about: {
        heading: "We Are Not",
        subheading: "For Everyone.",
        description: "We are a collective of digital natives, designers, and engineers obsessed with the edge. We don't do templates. We don't do safe. We build digital cathedrals.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'PROJECTS', value: '11+' },
            { label: 'CLIENTS', value: '8+' },
            { label: 'HQ', value: 'LVI' }
        ],
        manifesto: [
            "We believe in silence over noise.",
            "Function is the ultimate decoration.",
            "Code is poetry, design is law.",
            "If it's not fast, it's broken."
        ]
    },
    contact: {
      heading: "Start",
      subheading: "Project",
      desc: "Establish a direct line to the core. Input your parameters below.",
      placeholder: "> Initialize project sequence...\n> Defining aesthetic parameters...\n> Seeking architectural consultation...",
      button: "Transmit Data",
      processing: "Encrypting...",
      emailLabel: "SECURE_MAIL",
      locationLabel: "COORDS",
      aiTitle: "Core Response // Brief_v1.0",
      waiting: "Awaiting Transmission...",
      sendButton: "Execute Protocol"
    },
    footer: {
      rights: "ALL RIGHTS RESERVED.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "IMPRINT // LEGAL_DATA",
            content: [
                "ENTITY: WEEGO CREATIVE STUDIO",
                "LOCATION: LVIV, UKRAINE",
                "CONTACT: MUNISTER@OUTLOOK.COM",
                "JURISDICTION: UKRAINE",
                "CONTENT RESPONSIBILITY: WEEGO STUDIO TEAM",
                "COPYRIGHT: © 2024-2026 WEEGO CREATIVE STUDIO. ALL RIGHTS RESERVED."
            ]
        },
        privacy: {
            title: "PRIVACY POLICY",
            content: [
                "1. DATA COLLECTION: We collect minimal technical data necessary for system performance and security monitoring.",
                "2. COOKIES: This website uses essential session tokens for functionality. We do not use third-party tracking or advertising cookies.",
                "3. ANALYTICS: Anonymized telemetry is used solely to improve site architecture.",
                "4. EXTERNAL SERVICES: Data processing may involve Vercel (Infrastructure) and Google Cloud (AI Services).",
                "5. USER RIGHTS: Users may request data review or deletion via official contact channels."
            ]
        },
        terms: {
            title: "TERMS OF SERVICE",
            content: [
                "1. GENERAL: By accessing this interface, you agree to these terms.",
                "2. INTELLECTUAL PROPERTY: All code, visual assets, and design methodologies are the exclusive property of WEEGO CREATIVE STUDIO.",
                "3. LIABILITY: The studio provides this digital experience 'as is'. We accept no liability for external links or third-party content.",
                "4. GOVERNING LAW: These terms are governed by the laws of Ukraine.",
                "5. UNAUTHORIZED ACCESS: Any attempt to breach system security will result in immediate termination of access."
            ]
        }
    }
  },
  ua: {
    nav: [
      { label: 'Роботи', href: '#work' },
      { label: 'Послуги', href: '#services' },
      { label: 'Бриф', href: '/brief' },
    ],
    hero: {
      h1Line1: 'ВЕБСАЙТИ',
      h1Line2: '& СИСТЕМИ',
      subheadlineLine1: 'ПОВНИЙ ЦИКЛ:',
      subheadlineLine2: 'ДИЗАЙН → РОЗРОБКА → ДЕПЛОЙ.',
      ctaPrimary: 'ОТРИМАТИ ОЦІНКУ',
      ctaSecondary: 'ПЕРЕГЛЯНУТИ РОБОТИ'
    },
    trust: {
      stats: [
        { label: 'ПРОЄКТИ', value: '10+' },
        { label: 'РОКИ', value: '4+' },
        { label: 'Рейтинг клієнтів', value: '5/5' },
        { label: 'Перша відповідь', value: '12год' }
      ],
      logos: []
    },
    marquee: ["ВИСОКА КОНВЕРСІЯ", "БРУТАЛІСТИЧНИЙ ДИЗАЙН", "WEB-ІНЖИНІРИНГ", "ШВИДКІСТЬ ПЕРЕДУСІМ", "SEO ОПТИМІЗАЦІЯ", "СКАЛЬОВАНІ СИСТЕМИ"],
    services: {
      heading: 'Послуги',
      subheading: '[ЩО МИ РОБИМО]',
      routes: [
        {
          id: 'turnkey',
          title: 'САЙТ ПІД КЛЮЧ',
          oneLiner: 'Сайт під ключ — швидко, охайно, із запуском.',
          bestFor: [
            'Для простого сайту та отримання лідів',
            'Коли потрібно запуститися максимально швидко',
            'Коли потрібен фіксований стартовий бюджет'
          ],
          included: [
            'Дизайн + розробка (responsive)',
            'Форма зв’язку + базова SEO-структура',
            'Деплой + передача проєкту'
          ],
          priceBadge: 'Від €300',
          cta: 'ДІЗНАТИСЯ БІЛЬШЕ',
          preset: { route: 'turnkey' }
        },
        {
          id: 'platform',
          title: 'ПЛАТФОРМА WEEGO (ХОСТИНГ У НАС)',
          oneLiner: 'Запуск на нашій платформі. Ми розгортаємо, підтримуємо та розвиваємо її.',
          bestFor: [
            'Коли потрібно більше, ніж просто сайт',
            'Коли важливі підтримка та оновлення',
            'Коли хочеться стартувати на готовій базі'
          ],
          included: [
            'White-label дизайн (ваш бренд)',
            'Модулі + інтеграції за потребою',
            'Хостинг, деплой та підтримка'
          ],
          priceBadge: 'Setup від €500 + €100/міс',
          cta: 'ДІЗНАТИСЯ БІЛЬШЕ',
          preset: { route: 'platform' }
        },
        {
          id: 'horeca',
          title: 'HORECA TEMPLATE SYSTEM',
          oneLiner: 'HoReCa система на базі шаблонів — швидкий запуск, адаптація під бренд.',
          bestFor: [
            'Ресторани, кафе, невеликі мережі',
            'Коли потрібен перевірений шаблон, а не розробка з нуля',
            'Коли потрібна постійна підтримка'
          ],
          included: [
            'Готова HoReCa база (шаблон)',
            'Брендинг + адаптація UI',
            'Інтеграції (платежі/POS/CRM) опціонально'
          ],
          priceBadge: 'Setup від €600 + €100/міс',
          cta: 'ДІЗНАТИСЯ БІЛЬШЕ',
          preset: { route: 'horeca' }
        }
      ],
      customRequest: {
        title: 'КАСТОМНИЙ ЗАПИТ',
        oneLiner: 'Не впевнені, що підійде? Опишіть проєкт — ми порадимо найкращий шлях.',
        bullets: [
          'Сайти, системи, інтеграції',
          'Будь-яка індустрія',
          'Швидка відповідь'
        ],
        cta: 'ОПИСАТИ ПРОЄКТ'
      },
      capabilities: {
        heading: 'Також ми можемо допомогти з',
        showAllLabel: 'Показати всі можливості',
        items: [
          { id: 'backend', label: 'Backend / API' },
          { id: 'admin', label: 'Адмін-панелі / дашборди' },
          { id: 'payments', label: 'Платежі та вебхуки' },
          { id: 'pos', label: 'Інтеграції з POS / CRM' },
          { id: 'devops', label: 'DevOps / Cloud' },
          { id: 'mobile', label: 'Mobile / PWA' },
          { id: 'bi', label: 'Data / BI дашборди' },
          { id: 'automation', label: 'Автоматизація / інтеграції' },
          { id: 'performance', label: 'Оптимізація швидкості' },
          { id: 'seo', label: 'SEO налаштування' },
          { id: 'analytics', label: 'Події аналітики' },
          { id: 'migration', label: 'Міграція контенту' },
          { id: 'notifications', label: 'Сповіщення (email/SMS)' },
          { id: 'security', label: 'Посилення безпеки' },
          { id: 'audit', label: 'Технічний аудит' },
          { id: 'consulting', label: 'Архітектурний консалтинг' }
        ]
      },
      industries: {
        heading: 'Індустрії (досвід)',
        experienceLabel: 'Досвід, а не шаблонний підхід для всіх.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'platform', options: ['pos', 'payments', 'admin'] } },
          { id: 'retail', label: 'Retail', preset: { route: 'custom', options: ['payments', 'automation'] } },
          { id: 'services', label: 'Послуги', preset: { route: 'turnkey', options: ['seo', 'analytics'] } },
          { id: 'ngo', label: 'NGOs', preset: { route: 'turnkey', options: ['multilang'] } }
        ]
      }
    },
    brief: {
      h1: 'ПРОЄКТНИЙ БРИФ',
      subtitle: 'Розкажіть, що вам потрібно — ми відповімо з планом та наступними кроками.',
      fields: {
        route: 'НАПРЯМОК',
        timeline: 'ТЕРМІНИ',
        links: 'ПОСИЛАННЯ',
        details: 'ДЕТАЛІ ПРОЄКТУ',
        contact: 'КОНТАКТ (TELEGRAM АБО EMAIL)'
      },
      submit: 'ВІДПРАВИТИ ЗАПИТ',
      capabilitiesTitle: 'ЩО МИ МОЖЕМО ЗРОБИТИ',
      showAllLabel: 'ПОКАЗАТИ ВСІ МОЖЛИВОСТІ',
      showLessLabel: 'ЗГОРНУТИ',
      options: {
        routes: {
          turnkey: 'Сайт під ключ',
          platform: 'WEEGO платформа',
          horeca: 'HoReCa система',
          custom: 'Кастомний запит'
        },
        timeline: {
          asap: 'Якомога швидше',
          weeks: '2–4 тижні',
          flexible: 'Гнучкі'
        }
      }
    },
    serviceDetail: {
      industriesLabel: 'СФЕРИ (ДОСВІД):',
      turnkey: {
        h1: 'САЙТ ПІД КЛЮЧ',
        subtitle: 'Простий сайт під вашим брендом — швидко, охайно, із запуском.',
        cta: 'ОПИСАТИ ПРОЄКТ',
        sections: {
          bestFor: {
            title: 'НАЙКРАЩЕ ПІДХОДИТЬ ДЛЯ',
            items: [
              'Нових проєктів, яким потрібна чиста онлайн-присутність',
              'Малого бізнесу, якому потрібні ліди',
              'Швидких запусків із зрозумілим стартовим бюджетом'
            ]
          },
          included: {
            title: 'ЩО ВХОДИТЬ',
            items: {
              group1: [
                'Чистий UI-лейаут',
                'Адаптивність (mobile/tablet/desktop)',
                'Базова SEO-структура'
              ],
              group2: [
                'Форма зв’язку',
                'Деплой (розгортання)',
                'Передача проєкту'
              ]
            }
          },
          packages: {
            title: 'ПАКЕТИ',
            items: [
              {
                name: 'STARTER',
                price: '€300–€500',
                timeline: '3–7 днів',
                includes: '1 сторінка або невеликий сайт, адаптив, форма зв’язку, деплой'
              },
              {
                name: 'STANDARD',
                price: '€500–€900',
                timeline: '1–2 тижні',
                includes: '5–10 сторінок, багаторазові секції, базове налаштування аналітики, деплой'
              },
              {
                name: 'PRO',
                price: '€900–€1,500',
                timeline: '2–4 тижні',
                includes: 'кастомний UI kit, 1–2 інтеграції, розширені події аналітики, оптимізація швидкості'
              }
            ]
          },
          process: {
            title: 'ПРОЦЕС',
            items: [
              'Короткий дзвінок (цілі + обсяг)',
              'Дизайн та структура',
              'Розробка та шліфування',
              'Запуск та передача'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Ви надаєте контент?', a: 'Ми можемо працювати з вашим контентом або допомогти його структурувати.' },
              { q: 'Чи можна зробити швидше?', a: 'Іноді так — залежить від обсягу та готовності контенту.' },
              { q: 'Чи буде сайт працювати на мобільних?', a: 'Так, адаптивність включена за замовчуванням.' },
              { q: 'Чи можна додати аналітику?', a: 'Так — базове налаштування входить у пакет Standard та вище.' },
              { q: 'Чи надаєте ви підтримку після запуску?', a: 'Так — ми можемо продовжити роботу у форматі щомісячної підтримки.' }
            ]
          }
        }
      },
      platform: {
        h1: 'ПЛАТФОРМА WEEGO (ХОСТИНГ У НАС)',
        subtitle: 'Запуск на нашій платформі — ми розгортаємо, підтримуємо та розвиваємо її разом з вами.',
        cta: 'ОПИСАТИ ПРОЄКТ',
        sections: {
          bestFor: {
            title: 'НАЙКРАЩЕ ПІДХОДИТЬ ДЛЯ',
            items: [
              'Бізнесів, яким потрібно більше, ніж просто сайт',
              'Команд, яким потрібна постійна підтримка та оновлення',
              'Швидкого старту на готовій та надійній основі'
            ]
          },
          included: {
            title: 'ЩО ВХОДИТЬ',
            items: [
              'White-label дизайн (під ваш бренд)',
              'Модулі, активовані під ваші потреби',
              'Інтеграції за запитом',
              'Хостинг, деплой та технічне обслуговування'
            ]
          },
          startingFrom: {
            title: 'ВАРТІСТЬ ВІД',
            setup: 'Налаштування: €500–€900',
            maintenance: 'Підтримка: €100/міс'
          },
          process: {
            title: 'ПРОЦЕС',
            items: [
              'Короткий дзвінок (цілі + обсяг)',
              'Конфігурація модулів + брендинг',
              'Деплой + фінальні перевірки',
              'Підтримка та постійні покращення'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Це шаблон?', a: 'Це наша платформа-основа. Ми адаптуємо її під ваш бренд та потреби.' },
              { q: 'Чи можна запитувати нові функції?', a: 'Так — ми плануємо покращення в рамках постійної підтримки.' },
              { q: 'Хто хостить сайт?', a: 'Ми беремо на себе хостинг та технічне обслуговування.' },
              { q: 'Чи можна інтегрувати платежі/CRM/POS?', a: 'Так — інтеграції можливі залежно від вашого стеку.' },
              { q: 'Чи можна переїхати пізніше?', a: 'Ми можемо обговорити варіанти експорту/переходу в індивідуальному порядку.' }
            ]
          }
        }
      },
      horeca: {
        h1: 'HORECA TEMPLATE SYSTEM',
        subtitle: 'Система HoReCa на базі шаблонів — швидкий запуск та адаптація під ваш бренд.',
        cta: 'ОПИСАТИ ПРОЄКТ',
        sections: {
          bestFor: {
            title: 'НАЙКРАЩЕ ПІДХОДИТЬ ДЛЯ',
            items: [
              'Ресторанів, кафе, невеликих мереж',
              'Команд, які хочуть перевірений шаблон, а не розробку з нуля',
              'Постійної підтримки після запуску'
            ]
          },
          included: {
            title: 'ЩО ВХОДИТЬ',
            items: [
              'Готова HoReCa база (шаблон)',
              'Брендинг + адаптація UI',
              'Опціональні інтеграції (платежі/POS/CRM)',
              'Хостинг, деплой та технічне обслуговування'
            ]
          },
          startingFrom: {
            title: 'ВАРТІСТЬ ВІД',
            setup: 'Налаштування: €600–€1,000',
            maintenance: 'Підтримка: €100/міс'
          },
          process: {
            title: 'ПРОЦЕС',
            items: [
              'Короткий дзвінок (ваш флоу + пріоритети)',
              'Адаптація бренду/UI',
              'Інтеграції (якщо потрібно) + деплой',
              'Підтримка та оновлення'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Це повністю кастомна розробка?', a: 'Це система на базі шаблонів. Ми адаптуємо модулі та інтеграції під ваші потреби.' },
              { q: 'Чи можна змінити дизайн?', a: 'Так — брендинг та адаптація UI входять у вартість.' },
              { q: 'Чи можна інтегрувати POS/CRM/платежі?', a: 'Так — це доступно як опціональні інтеграції.' },
              { q: 'Як швидко ми можемо запуститися?', a: 'Залежить від брендингу та інтеграцій, зазвичай у межах термінів налаштування.' },
              { q: 'Ви підтримуєте систему?', a: 'Так — щомісячна підтримка включена окремим пунктом.' }
            ]
          }
        }
      }
    },
    designSystem: {
        heading: "Система",
        subheading: "Стандарти",
        typography: {
            title: "Типографія",
            primary: {
                name: "Archivo",
                usage: "Display / Заголовки",
                description: "Гротескний санс-сериф із варіативною вагою. Використовується для акцентів."
            },
            secondary: {
                name: "Inter",
                usage: "Body / Інтерфейс",
                description: "Оптимізовано для екранів. Нейтральний, об'єктивний, суто функціональний."
            }
        },
        standards: {
            title: "Методологія",
            items: [
                { title: "Atomic Design", desc: "Ми будуємо системи, а не сторінки. Кожен компонент — молекула.", code: "SYS_ATOMIC" },
                { title: "Швейцарська Сітка", desc: "Математична точність. 12-колонкова верстка з жорстким ритмом.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "Відповідність WCAG 2.1 не є опцією. Це базовий стандарт.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Нульова толерантність. Ми проектуємо для людей, а не маніпуляцій.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "СИСТЕМА ДОСТАВКИ",
      subheading: "END-TO-END МОЖЛИВОСТІ",
      footerQuote: "Ми не робимо сторінки. Ми створюємо системи, що працюють.",
      pipeline: {
        title: "ПАЙПЛАЙН ВИКОНАННЯ",
        steps: [
          { title: "ДЗВІНОК ТА БРИФ", desc: "визначення цілей, обсягу та метрик успіху" },
          { title: "ПРОТОТИП", desc: "вайрфрейми, логіка користувача та ядро системи" },
          { title: "ДИЗАЙН ТА РОЗРОБКА", desc: "візуальна айдентика та технічна збірка" },
          { title: "ЗАПУСК ТА ПІДТРИМКА", desc: "QA, розгортання та безперервний розвиток" }
        ]
      },
      modules: {
        title: "ТЕХНІЧНА СХЕМА",
        items: [
            {
                title: "ДИЗАЙН СИСТЕМА (VISUAL OS)",
                content: ["Типографія", "Сітка", "Токени", "Компоненти", "Моушн правила"]
            },
            {
                title: "ПРОДУКТ & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "API", "Автоматизація", "Інтеграції"]
            },
            {
                title: "КОНТЕНТ & БРЕНД",
                content: ["Копірайтинг", "Арт-дирекшн", "Гайдлайни", "Ассети", "Пакування"]
            },
            {
                title: "РОЗГОРТАННЯ & ОПТИМІЗАЦІЯ",
                content: ["Продуктивність", "SEO", "Моніторинг", "A/B", "Аналітика"]
            }
        ]
      }
    },
    works: {
      heading: 'Останні Роботи',
      subheading: '[ВИБРАНІ ПРОЕКТИ 2025-2026]',
      viewAll: '',
      modalLaunch: 'Запустити Систему',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Арт-Тех Платформа',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'Революційна цифрова платформа, що з’єднує фізичні галереї з цифровими мандрівниками.',
          before: 'Фрагментована присутність галерей без єдиного каналу цифрових продажів.',
          done: ['Кастомний UI/UX', 'Архітектура платформи', 'Інтеграція партнерів'],
          result: 'Об’єднано 40+ галерей у єдиний високопродуктивний арт-маркетплейс.',
          capabilities: ['UX/UI Дизайн', 'Архітектура Платформи', 'Інтеграція Партнерів', 'Айдентика'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Освітній Інтерфейс',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'Імерсивний навчальний стенд естетичної декомпозиції.',
          before: 'Статичний навчальний контент з низьким рівнем залучення.',
          done: ['HUD інтерфейс', 'Візуалізація даних', 'Моушн дизайн'],
          result: 'Залучення студентів зросло на 300% завдяки інтерактивному HUD.',
          capabilities: ['HUD Інтерфейс', 'Візуалізація Даних', 'Моушн Дизайн', 'Креативний Кодинг'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Гуманітарна Платформа',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Критична цифрова інфраструктура для гуманітарної допомоги.',
          before: 'Ручна обробка донатів та повільне відстеження логістики.',
          done: ['Архітектура платформи', 'Системи донатів', 'Безпечні платежі'],
          result: 'Оброблено понад $1 млн донатів без жодних збоїв під час пікових навантажень.',
          capabilities: ['Архітектура Платформи', 'Платіжні Системи', 'Безпека', 'Глобальна Логістика'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'Скільки часу займає проєкт?', a: 'Типові лендинги займають 2-3 тижні. Складні платформи — 2-4 місяці.' },
        { q: 'Яка ваша модель ціноутворення?', a: 'Ми працюємо за фіксованою ціною на основі обсягу робіт або за щомісячною підтримкою.' },
        { q: 'Чи надаєте ви підтримку?', a: 'Так, ми пропонуємо SLA-підтримку та пакети безперервного розвитку.' },
        { q: 'Що потрібно від мене для старту?', a: 'Чітка мета, існуючі активи бренду (якщо є) та 30-хвилинний дзвінок.' },
        { q: 'Чи працюєте ви зі стартапами?', a: 'Так, ми спеціалізуємося на створенні MVP та масштабуванні цифрових продуктів.' },
        { q: 'Чи входить SEO у вартість?', a: 'Базове технічне SEO входить у кожну розробку. Просунута стратегія — додаткова опція.' }
      ]
    },
    finalCta: {
      heading: 'Готові масштабуватися?',
      subheading: 'Отримайте точну оцінку або забронюйте дзвінок вже сьогодні.',
      ctaPrimary: 'Отримати оцінку',
      ctaSecondary: 'Забронювати дзвінок'
    },
    about: {
        heading: "Ми Не Для",
        subheading: "Всіх.",
        description: "Ми колектив цифрових аборигенів, дизайнерів та інженерів, одержимих межею можливого. Ми не робимо шаблони. Ми не робимо безпечно. Ми будуємо цифрові собори.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'ПРОЕКТИ', value: '11+' },
            { label: 'КЛІЄНТИ', value: '8+' },
            { label: 'ШТАБ', value: 'LVI' }
        ],
        manifesto: [
            "Ми віримо в тишу замість шуму.",
            "Функція - це найвища прикраса.",
            "Код - це поезія, дизайн - це закон.",
            "Якщо це не швидко, це зламано."
        ]
    },
    contact: {
      heading: "Розпочати",
      subheading: "Проект",
      desc: "Встановіть прямий зв'язок з ядром. Введіть параметри нижче.",
      placeholder: "> Ініціалізація послідовності проекту...\n> Визначення естетичних параметрів...\n> Запит на архітектурну консультацію...",
      button: "Транслювати Дані",
      processing: "Шифрування...",
      emailLabel: "ЗАХИЩЕНА_ПОШТА",
      locationLabel: "КООРДИНАТИ",
      aiTitle: "Відповідь Ядра // Бриф_v1.0",
      waiting: "Очікування Передачі...",
      sendButton: "Виконати Протокол"
    },
    footer: {
      rights: "ВСІ ПРАВА ЗАХИЩЕНО.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "ВИХІДНІ ДАНІ // IMPRINT",
            content: [
                "СУБ'ЄКТ: WEEGO CREATIVE STUDIO",
                "ЛОКАЦІЯ: ЛЬВІВ, УКРАЇНА",
                "КОНТАКТ: MUNISTER@OUTLOOK.COM",
                "ЮРИСДИКЦІЯ: УКРАЇНА",
                "ВІДПОВІДАЛЬНІСТЬ: КОМАНДА WEEGO STUDIO",
                "АВТОРСЬКЕ ПРАВО: © 2024-2026 WEEGO CREATIVE STUDIO. ВСІ ПРАВА ЗАХИЩЕНО."
            ]
        },
        privacy: {
            title: "ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ",
            content: [
                "1. ЗБІР ДАНИХ: Ми збираємо лише необхідні технічні дані для забезпечення стабільності та безпеки системи.",
                "2. COOKIES: Веб-сайт використовує сесійні токени для функціонування. Ми не використовуємо сторонні рекламні трекери.",
                "3. АНАЛІТИКА: Анонімізована телеметрія використовується виключно для покращення архітектури сайту.",
                "4. ЗОВНІШНІ СЕРВІСИ: Обробка даних може включати Vercel (інфраструктура) та Google Cloud (AI сервіси).",
                "5. ПРАВА КОРИСТУВАЧІВ: Ви маєте право запросити перегляд або видалення даних через офіційні канали зв'язку."
            ]
        },
        terms: {
            title: "УМОВИ КОРИСТУВАННЯ",
            content: [
                "1. ЗАГАЛЬНІ ПОЛОЖЕННЯ: Використовуючи цей інтерфейс, ви погоджуєтесь з цими умовами.",
                "2. ІНТЕЛЕКТУАЛЬНА ВЛАСНІСТЬ: Весь код, візуальні активи та методології дизайну є виключною власністю WEEGO CREATIVE STUDIO.",
                "3. ВІДПОВІДАЛЬНІСТЬ: Студія надає цей цифровий досвід «як є». Ми не несемо відповідальності за зовнішні посилання.",
                "4. ЗАКОНОДАВСТВО: Ці умови регулюються законодавством України.",
                "5. НЕСАНКЦІОНОВАНИЙ ДОСТУП: Будь-яка спроба порушення безпеки системи призведе до негайного блокування доступу."
            ]
        }
    }
  },
  it: {
    nav: [
      { label: 'Lavori', href: '#work' },
      { label: 'Servizi', href: '#services' },
      { label: 'Brief', href: '/brief' },
    ],
    hero: {
      h1Line1: 'SITI WEB',
      h1Line2: '& SISTEMI',
      subheadlineLine1: 'END-TO-END:',
      subheadlineLine2: 'DESIGN → ENGINEERING → DEPLOYMENT.',
      ctaPrimary: 'RICHIEDI PREVENTIVO',
      ctaSecondary: 'VEDI LAVORI'
    },
    trust: {
      stats: [
        { label: 'PROGETTI', value: '10+' },
        { label: 'ANNI', value: '4+' },
        { label: 'Valutazione Cliente', value: '5/5' },
        { label: 'Prima risposta', value: '12h' }
      ],
      logos: []
    },
    marquee: ["ALTA CONVERSIONE", "DESIGN BRUTALISTA", "WEB ENGINEERING", "VELOCITÀ PRIMA DI TUTTO", "OTTIMIZZAZIONE SEO", "SISTEMI SCALABILI"],
    services: {
      heading: 'Servizi',
      subheading: '[COSA FACCIAMO]',
      routes: [
        {
          id: 'turnkey',
          title: 'SITO CHIAVI IN MANO',
          oneLiner: 'Sito chiavi in mano — veloce, ordinato, con lancio.',
          bestFor: [
            'Per un sito semplice e generazione lead',
            'Quando devi andare online il prima possibile',
            'Quando cerchi un budget iniziale fisso'
          ],
          included: [
            'Design + sviluppo (responsive)',
            'Modulo contatti + struttura SEO base',
            'Deploy + consegna progetto'
          ],
          priceBadge: 'Da €300',
          cta: 'SCOPRI DI PIÙ',
          preset: { route: 'turnkey' }
        },
        {
          id: 'platform',
          title: 'PIATTAFORMA WEEGO (HOSTED DA NOI)',
          oneLiner: 'Lancio sulla nostra piattaforma. La configuriamo, manteniamo e facciamo evolvere.',
          bestFor: [
            'Quando serve più di un semplice sito',
            'Quando supporto e aggiornamenti sono critici',
            'Quando vuoi partire da una base solida e pronta'
          ],
          included: [
            'Design white-label (tuo brand)',
            'Moduli + integrazioni su richiesta',
            'Hosting, deploy e supporto tecnico'
          ],
          priceBadge: 'Setup da €500 + €100/mese',
          cta: 'SCOPRI DI PIÙ',
          preset: { route: 'platform' }
        },
        {
          id: 'horeca',
          title: 'HORECA TEMPLATE SYSTEM',
          oneLiner: 'Sistema HoReCa basato su template — lancio rapido, adattato al tuo brand.',
          bestFor: [
            'Ristoranti, caffè, piccole catene',
            'Quando vuoi un template testato, non da zero',
            'Quando cerchi supporto continuo'
          ],
          included: [
            'Base HoReCa pronta (template)',
            'Branding + adattamento UI',
            'Integrazioni (pagamenti/POS/CRM) opzionali'
          ],
          priceBadge: 'Setup da €600 + €100/mese',
          cta: 'SCOPRI DI PIÙ',
          preset: { route: 'horeca' }
        }
      ],
      customRequest: {
        title: 'RICHIESTA CUSTOM',
        oneLiner: 'Non sai cosa scegliere? Descrivi il progetto — ti consiglieremo la strada migliore.',
        bullets: [
          'Siti, sistemi, integrazioni',
          'Qualsiasi settore',
          'Risposta rapida'
        ],
        cta: 'DESCRIVI PROGETTO'
      },
      capabilities: {
        heading: 'Inoltre possiamo aiutarti con',
        showAllLabel: 'Mostra tutte le capacità',
        items: [
          { id: 'backend', label: 'Backend / API' },
          { id: 'admin', label: 'Pannelli Admin / Dashboard' },
          { id: 'payments', label: 'Pagamenti & Webhook' },
          { id: 'pos', label: 'Integrazioni POS / CRM' },
          { id: 'devops', label: 'DevOps / Cloud' },
          { id: 'mobile', label: 'Mobile / PWA' },
          { id: 'bi', label: 'Dashboard Data / BI' },
          { id: 'automation', label: 'Automazione / Integrazioni' },
          { id: 'performance', label: 'Ottimizzazione Performance' },
          { id: 'seo', label: 'Setup SEO' },
          { id: 'analytics', label: 'Eventi Analytics' },
          { id: 'migration', label: 'Migrazione Contenuti' },
          { id: 'notifications', label: 'Notifiche (email/SMS)' },
          { id: 'security', label: 'Sicurezza' },
          { id: 'audit', label: 'Audit Tecnico' },
          { id: 'consulting', label: 'Consulenza Architetturale' }
        ]
      },
      industries: {
        heading: 'Settori (esperienza)',
        experienceLabel: 'Esperienza reale, non un modello unico per tutti.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'platform', options: ['pos', 'payments', 'admin'] } },
          { id: 'retail', label: 'Retail', preset: { route: 'custom', options: ['payments', 'automation'] } },
          { id: 'services', label: 'Servizi', preset: { route: 'turnkey', options: ['seo', 'analytics'] } },
          { id: 'ngo', label: 'NGOs', preset: { route: 'turnkey', options: ['multilang'] } }
        ]
      }
    },
    brief: {
      h1: 'BRIEF DEL PROGETTO',
      subtitle: 'Raccontaci cosa ti serve — ti risponderemo con un piano e i prossimi passi.',
      fields: {
        route: 'PERCORSO',
        timeline: 'TEMPISTICHE',
        links: 'LINK',
        details: 'DETTAGLI PROGETTO',
        contact: 'CONTATTO (TELEGRAM O EMAIL)'
      },
      submit: 'INVIA RICHIESTA',
      capabilitiesTitle: 'COSA POSSIAMO COPRIRE',
      showAllLabel: 'MOSTRA TUTTE LE CAPACITÀ',
      showLessLabel: 'MOSTRA MENO',
      options: {
        routes: {
          turnkey: 'Sito chiavi in mano',
          platform: 'Piattaforma WEEGO',
          horeca: 'Sistema HoReCa',
          custom: 'Richiesta custom'
        },
        timeline: {
          asap: 'Il prima possibile',
          weeks: '2–4 settimane',
          flexible: 'Flessibile'
        }
      }
    },
    serviceDetail: {
      industriesLabel: 'SETTORI (ESPERIENZA):',
      turnkey: {
        h1: 'SITO CHIAVI IN MANO',
        subtitle: 'Un sito semplice sotto il tuo brand — veloce, ordinato, con lancio.',
        cta: 'DESCRIVI PROGETTO',
        sections: {
          bestFor: {
            title: 'IDEALE PER',
            items: [
              'Nuovi progetti che necessitano di una presenza online pulita',
              'Piccole imprese che cercano lead',
              'Lanci rapidi con un budget iniziale chiaro'
            ]
          },
          included: {
            title: 'COSA È INCLUSO',
            items: {
              group1: [
                'Layout UI pulito',
                'Responsive (mobile/tablet/desktop)',
                'Struttura SEO di base'
              ],
              group2: [
                'Modulo di contatto',
                'Deploy (messa online)',
                'Consegna del progetto'
              ]
            }
          },
          packages: {
            title: 'PACCHETTI',
            items: [
              {
                name: 'STARTER',
                price: '€300–€500',
                timeline: '3–7 giorni',
                includes: '1 pagina o piccolo sito, responsive, modulo contatti, deploy'
              },
              {
                name: 'STANDARD',
                price: '€500–€900',
                timeline: '1–2 settimane',
                includes: '5–10 pagine, sezioni riutilizzabili, setup analytics base, deploy'
              },
              {
                name: 'PRO',
                price: '€900–€1,500',
                timeline: '2–4 settimane',
                includes: 'UI kit personalizzato, 1–2 integrazioni, eventi analytics avanzati, ottimizzazione velocità'
              }
            ]
          },
          process: {
            title: 'PROCESSO',
            items: [
              'Breve chiamata (obiettivi + scopo)',
              'Design e struttura',
              'Sviluppo e rifinitura',
              'Lancio e consegna'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Fornite i contenuti?', a: 'Possiamo lavorare con i tuoi contenuti o aiutarti a strutturarli.' },
              { q: 'Si può fare più velocemente?', a: 'A volte sì — dipende dallo scopo e dalla prontezza dei contenuti.' },
              { q: 'Il sito funzionerà su mobile?', a: 'Sì, la responsività è inclusa di default.' },
              { q: 'Posso aggiungere analytics?', a: 'Sì — il setup base è incluso nel pacchetto Standard e superiori.' },
              { q: 'Fornite supporto post-lancio?', a: 'Sì — possiamo continuare a lavorare con un canone di supporto mensile.' }
            ]
          }
        }
      },
      platform: {
        h1: 'PIATTAFORMA WEEGO (HOSTED DA NOI)',
        subtitle: 'Lancio sulla nostra piattaforma — la configuriamo, manteniamo ed evolviamo insieme a te.',
        cta: 'DESCRIVI PROGETTO',
        sections: {
          bestFor: {
            title: 'IDEALE PER',
            items: [
              'Business che necessitano di più di un semplice sito',
              'Team che cercano supporto e aggiornamenti costanti',
              'Partenze rapide su una base solida e affidabile'
            ]
          },
          included: {
            title: 'COSA È INCLUSO',
            items: [
              'Design white-label (sotto il tuo brand)',
              'Moduli attivati secondo le tue necessità',
              'Integrazioni su richiesta',
              'Hosting, deploy e manutenzione tecnica'
            ]
          },
          startingFrom: {
            title: 'A PARTIRE DA',
            setup: 'Setup: €500–€900',
            maintenance: 'Manutenzione: €100/mese'
          },
          process: {
            title: 'PROCESSO',
            items: [
              'Breve chiamata (obiettivi + scopo)',
              'Configurazione moduli + branding',
              'Deploy + controlli finali',
              'Supporto e miglioramenti continui'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'È un template?', a: 'È la nostra piattaforma base. La adattiamo al tuo brand e alle tue necessità.' },
              { q: 'Posso richiedere nuove funzioni?', a: 'Sì — pianifichiamo miglioramenti come parte del supporto continuo.' },
              { q: 'Chi ospita il sito?', a: 'Ci occupiamo noi dell\'hosting e della manutenzione tecnica.' },
              { q: 'Posso integrare pagamenti/CRM/POS?', a: 'Sì — le integrazioni sono possibili in base al tuo stack.' },
              { q: 'Posso migrare altrove in futuro?', a: 'Possiamo discutere opzioni di esportazione/transizione caso per caso.' }
            ]
          }
        }
      },
      horeca: {
        h1: 'HORECA TEMPLATE SYSTEM',
        subtitle: 'Sistema HoReCa basato su template — lancio rapido e adattamento al tuo brand.',
        cta: 'DESCRIVI PROGETTO',
        sections: {
          bestFor: {
            title: 'IDEALE PER',
            items: [
              'Ristoranti, caffè, piccole catene',
              'Team che vogliono un template testato, non sviluppo da zero',
              'Supporto costante dopo il lancio'
            ]
          },
          included: {
            title: 'COSA È INCLUSO',
            items: [
              'Base HoReCa pronta (template)',
              'Branding + adattamento UI',
              'Integrazioni opzionali (pagamenti/POS/CRM)',
              'Hosting, deploy e manutenzione tecnica'
            ]
          },
          startingFrom: {
            title: 'A PARTIRE DA',
            setup: 'Setup: €600–€1,000',
            maintenance: 'Manutenzione: €100/mese'
          },
          process: {
            title: 'PROCESSO',
            items: [
              'Breve chiamata (tuo flusso + priorità)',
              'Adattamento brand/UI',
              'Integrazioni (se necessarie) + deploy',
              'Supporto e aggiornamenti'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'È uno sviluppo totalmente custom?', a: 'È un sistema basato su template. Adattiamo moduli e integrazioni alle tue necessità.' },
              { q: 'Posso cambiare il design?', a: 'Sì — branding e adattamento UI sono inclusi.' },
              { q: 'Posso integrare POS/CRM/pagamenti?', a: 'Sì — sono disponibili come integrazioni opzionali.' },
              { q: 'Quanto velocemente possiamo lanciare?', a: 'Dipende da branding e integrazioni, solitamente entro i tempi di setup.' },
              { q: 'Supportate il sistema?', a: 'Sì — la manutenzione mensile è inclusa come voce separata.' }
            ]
          }
        }
      }
    },
    designSystem: {
        heading: "Sistema",
        subheading: "Standard",
        typography: {
            title: "Tipografia",
            primary: {
                name: "Archivo",
                usage: "Display / Titoli",
                description: "Sans-serif grottesco con varianza di peso ad alto impatto. Usato per gridare."
            },
            secondary: {
                name: "Inter",
                usage: "Body / UI",
                description: "Ottimizzato per la leggibilità su schermo. Neutro, oggettivo, puramente funzionale."
            }
        },
        standards: {
            title: "Metodologia",
            items: [
                { title: "Atomic Design", desc: "Costruiamo sistemi, non pagine. Ogni componente è molecolare.", code: "SYS_ATOMIC" },
                { title: "Griglia Svizzera", desc: "Precisione matematica. Layout a 12 colonne con ritmo verticale rigido.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "La conformità WCAG 2.1 non è facoltativa. È lo standard di base.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Tolleranza zero. Progettiamo per l'agenzia dell'utente, non per la manipolazione.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "DELIVERY SYSTEM",
      subheading: "CAPACITÀ END-TO-END",
      footerQuote: "Non consegniamo pagine. Consegniamo sistemi che funzionano.",
      pipeline: {
        title: "PIPELINE DI ESECUZIONE",
        steps: [
          { title: "DISCOVERY & AUDIT", desc: "scopo, rischi, chiarezza, vincoli" },
          { title: "BRAND & IDENTITY", desc: "naming, linguaggio visivo, sistemi" },
          { title: "EXPERIENCE DESIGN", desc: "UX/UI, logica motion, prototipi" },
          { title: "ENGINEERING BUILD", desc: "web/app, integrazioni, performance" },
          { title: "LAUNCH & HARDENING", desc: "QA, analitica, SEO, affidabilità" },
          { title: "EVOLVE & SUPPORT", desc: "iterazioni, nuovi moduli, scaling" }
        ]
      },
      modules: {
        title: "SCHEMA TECNICO",
        items: [
            {
                title: "DESIGN SYSTEM (VISUAL OS)",
                content: ["Tipografia", "Griglia", "Token", "Componenti", "Regole Motion"]
            },
            {
                title: "PRODUCT & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "API", "Automazioni", "Integrazioni"]
            },
            {
                title: "CONTENT & BRAND EXECUTION",
                content: ["Copy", "Art direction", "Linee guida", "Asset", "Packaging"]
            },
            {
                title: "DEPLOYMENT & OPTIMIZATION",
                content: ["Performance", "SEO", "Monitoraggio", "A/B", "Analitica"]
            }
        ]
      }
    },
    works: {
      heading: 'Lavori Recenti',
      subheading: '[PROGETTI SELEZIONATI 2025-2026]',
      viewAll: '',
      modalLaunch: 'Avvia Sistema',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Piattaforma Art Tech',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'Una piattaforma digitale rivoluzionaria che connette gallerie fisiche con vagabondi digitali.',
          before: 'Presenza frammentata delle gallerie senza un unico canale di vendita digitale.',
          done: ['UI/UX Personalizzato', 'Architettura Piattaforma', 'Integrazione Partner'],
          result: 'Unite oltre 40 gallerie in un unico marketplace d\'arte ad alte prestazioni.',
          capabilities: ['UX/UI Design', 'Architettura Piattaforma', 'Integrazione Partner', 'Identità Brand'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Interfaccia Educativa',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'Uno stand educativo immersivo per la decomposizione estetica.',
          before: 'Contenuti educativi statici con basso livello di coinvolgimento.',
          done: ['Interfaccia HUD', 'Visualizzazione Dati', 'Motion Design'],
          result: 'Coinvolgimento degli studenti aumentato del 300% grazie all\'HUD interattivo.',
          capabilities: ['Interfaccia HUD', 'Visualizzazione Dati', 'Motion Design', 'Creative Coding'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Piattaforma Umanitaria',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Un\'infrastruttura digitale critica per gli aiuti umanitari.',
          before: 'Elaborazione manuale delle donazioni e tracciamento logistico lento.',
          done: ['Architettura Piattaforma', 'Sistemi di Donazione', 'Pagamenti Sicuri'],
          result: 'Elaborati oltre 1 milione di dollari in donazioni senza interruzioni durante i picchi.',
          capabilities: ['Architettura Piattaforma', 'Sistemi di Donazione', 'Pagamenti Sicuri', 'Logistica Globale'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'Quanto tempo richiede un progetto?', a: 'Le landing page tipiche richiedono 2-3 settimane. Le piattaforme complesse 2-4 mesi.' },
        { q: 'Qual è il vostro modello di prezzo?', a: 'Lavoriamo a prezzo fisso basato sullo scopo o con un canone mensile di supporto.' },
        { q: 'Fornite supporto post-lancio?', a: 'Sì, offriamo supporto SLA e pacchetti di sviluppo continuo.' },
        { q: 'Cosa vi serve per iniziare?', a: 'Un obiettivo chiaro, eventuali asset esistenti e una chiamata di 30 minuti.' },
        { q: 'Lavorate con le startup?', a: 'Sì, siamo specializzati nel costruire MVP e scalare prodotti digitali.' },
        { q: 'La SEO è inclusa?', a: 'La SEO tecnica di base è inclusa. La strategia avanzata è un addon.' }
      ]
    },
    finalCta: {
      heading: 'Pronto a scalare?',
      subheading: 'Ottieni un preventivo accurato o prenota una chiamata oggi stesso.',
      ctaPrimary: 'Ottieni un preventivo',
      ctaSecondary: 'Prenota una chiamata'
    },
    about: {
        heading: "Non Siamo",
        subheading: "Per Tutti.",
        description: "Siamo un collettivo di nativi digitali, designer e ingegneri ossessionati dal limite. Non facciamo template. Non giochiamo sul sicuro. Costruiamo cattedrali digitali.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'PROGETTI', value: '11+' },
            { label: 'CLIENTS', value: '8+' },
            { label: 'HQ', value: 'LVI' }
        ],
        manifesto: [
            "Crediamo nel silenzio sopra il rumore.",
            "La funzione è la decorazione suprema.",
            "Il codice è poesia, il design è legge.",
            "Se non è veloce, è rotto."
        ]
    },
    contact: {
      heading: "Avvia",
      subheading: "Progetto",
      desc: "Stabilisci una linea diretta con il core. Inserisci i tuoi parametri qui sotto.",
      placeholder: "> Inizializzazione sequenza progetto...\n> Definizione parametri estetici...\n> Richiesta consulenza architettonica...",
      button: "Trasmetti Dati",
      processing: "Criptazione...",
      emailLabel: "SECURE_MAIL",
      locationLabel: "COORDINATE",
      aiTitle: "Risposta Core // Brief_v1.0",
      waiting: "In attesa di trasmissione...",
      sendButton: "Esegui Protocollo"
    },
    footer: {
      rights: "TUTTI I DIRITTI RISERVATI.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "DATI AZIENDALI // IMPRINT",
            content: [
                "ENTITÀ: WEEGO CREATIVE STUDIO",
                "SEDE: LEOPOLI, UCRAINA",
                "CONTATTO: MUNISTER@OUTLOOK.COM",
                "GIURISDIZIONE: UCRAINA",
                "RESPONSABILITÀ CONTENUTO: TEAM WEEGO STUDIO",
                "COPYRIGHT: © 2024-2026 WEEGO CREATIVE STUDIO. TUTTI I DIRITTI RISERVATI."
            ]
        },
        privacy: {
            title: "PRIVACY POLICY",
            content: [
                "1. RACCOLTA DATI: Raccogliamo solo dati tecnici minimi necessari per la stabilità del sistema e il monitoraggio della sicurezza.",
                "2. COOKIES: Questo sito web utilizza token di sessione essenziali per la funzionalità. Non utilizziamo cookie di tracciamento o pubblicitari di terze parti.",
                "3. ANALITICA: La telemetria anonimizzata viene utilizzata esclusivamente per migliorare l'architettura del sito.",
                "4. SERVIZI ESTERNI: L'elaborazione dei dati può coinvolgere Vercel (Infrastruktur) e Google Cloud (Servizi AI).",
                "5. DIRITTI DELL'UTENTE: Gli utenti possono richiedere la revisione o la cancellazione dei dati tramite i canali di contatto ufficiali."
            ]
        },
        terms: {
            title: "TERMINI DI SERVIZIO",
            content: [
                "1. GENERALE: Accedendo a questa interfaccia, accetti questi termini.",
                "2. PROPRIETÀ INTELLETTUALE: Tutto il codice, le risorse visive e le metodologie di progettazione sono proprietà esclusiva di WEEGO CREATIVE STUDIO.",
                "3. RESPONSABILITÀ: Lo studio fornisce questa esperienza digitale 'così com'è'. Non accettiamo alcuna responsabilità per link esterni o contenuti di terze parti.",
                "4. LEGGE APPLICABILE: Questi termini sono regolati dalle leggi dell'Ucraina.",
                "5. ACCESSO NON AUTORIZZATO: Qualsiasi tentativo di violare la sicurezza del sistema comporterà l'immediata cessazione dell'accesso."
            ]
        }
    }
  },
  de: {
    nav: [
      { label: 'Arbeiten', href: '#work' },
      { label: 'Leistungen', href: '#services' },
      { label: 'Brief', href: '/brief' },
    ],
    hero: {
      h1Line1: 'WEBSITES',
      h1Line2: '& SYSTEME',
      subheadlineLine1: 'END-TO-END:',
      subheadlineLine2: 'DESIGN → ENGINEERING → DEPLOYMENT.',
      ctaPrimary: 'ANGEBOT ANFORDERN',
      ctaSecondary: 'ARBEITEN ANSEHEN'
    },
    trust: {
      stats: [
        { label: 'PROJEKTE', value: '10+' },
        { label: 'JAHRE', value: '4+' },
        { label: 'Kundenbewertung', value: '5/5' },
        { label: 'Erste Antwort', value: '12h' }
      ],
      logos: []
    },
    marquee: ["HOHE KONVERSION", "BRUTALIST DESIGN", "WEB ENGINEERING", "SPEED FIRST", "SEO OPTIMIERUNG", "SKALIERBARE SYSTEME"],
    services: {
      heading: 'Leistungen',
      subheading: '[WAS WIR TUN]',
      routes: [
        {
          id: 'turnkey',
          title: 'WEBSITE SCHLÜSSELFERTIG',
          oneLiner: 'Schlüsselfertige Website — schnell, sauber, inkl. Launch.',
          bestFor: [
            'Für eine einfache Website und Lead-Generierung',
            'Wenn es so schnell wie möglich live gehen muss',
            'Wenn du ein fixes Startbudget willst'
          ],
          included: [
            'Design + Umsetzung (responsive)',
            'Kontaktformular + SEO-Grundstruktur',
            'Deployment + Projektübergabe'
          ],
          priceBadge: 'Ab €300',
          cta: 'MEHR ERFAHREN',
          preset: { route: 'turnkey' }
        },
        {
          id: 'platform',
          title: 'WEEGO PLATTFORM (VON UNS GEHOSTET)',
          oneLiner: 'Start auf unserer Plattform. Wir deployen, warten und entwickeln sie weiter.',
          bestFor: [
            'Wenn du mehr als nur eine einfache Website brauchst',
            'Wenn Support & Updates entscheidend sind',
            'Wenn du auf einer soliden Basis starten willst'
          ],
          included: [
            'White-Label Design (deine Marke)',
            'Module + Integrationen nach Bedarf',
            'Hosting, Deployment & technischer Support'
          ],
          priceBadge: 'Setup ab €500 + €100/Monat',
          cta: 'MEHR ERFAHREN',
          preset: { route: 'platform' }
        },
        {
          id: 'horeca',
          title: 'HORECA TEMPLATE SYSTEM',
          oneLiner: 'Template-basiertes HoReCa-System — schnell live, an deine Marke angepasst.',
          bestFor: [
            'Restaurants, Cafés, kleine Ketten',
            'Wenn du ein bewährtes Template willst, nicht alles von Null',
            'Wenn du laufenden Support suchst'
          ],
          included: [
            'Fertige HoReCa-Basis (Template)',
            'Branding + UI-Anpassung',
            'Integrationen (Payments/POS/CRM) optional'
          ],
          priceBadge: 'Setup ab €600 + €100/Monat',
          cta: 'MEHR ERFAHREN',
          preset: { route: 'horeca' }
        }
      ],
      customRequest: {
        title: 'INDIVIDUELLE ANFRAGE',
        oneLiner: 'Nicht sicher, was passt? Beschreibe dein Projekt — wir empfehlen den besten Weg.',
        bullets: [
          'Websites, Systeme, Integrationen',
          'Jede Branche',
          'Schnelle Rückmeldung'
        ],
        cta: 'PROJEKT BESCHREIBEN'
      },
      capabilities: {
        heading: 'Außerdem helfen wir bei',
        showAllLabel: 'Alle Fähigkeiten anzeigen',
        items: [
          { id: 'backend', label: 'Backend / API' },
          { id: 'admin', label: 'Admin-Panels / Dashboards' },
          { id: 'payments', label: 'Zahlungen & Webhooks' },
          { id: 'pos', label: 'POS / CRM Integrationen' },
          { id: 'devops', label: 'DevOps / Cloud' },
          { id: 'mobile', label: 'Mobile / PWA' },
          { id: 'bi', label: 'Data / BI Dashboards' },
          { id: 'automation', label: 'Automatisierung / Integrationen' },
          { id: 'performance', label: 'Performance-Optimierung' },
          { id: 'seo', label: 'SEO Setup' },
          { id: 'analytics', label: 'Analytics-Events' },
          { id: 'migration', label: 'Inhaltsmigration' },
          { id: 'notifications', label: 'Benachrichtigungen (Email/SMS)' },
          { id: 'security', label: 'Sicherheit' },
          { id: 'audit', label: 'Technisches Audit' },
          { id: 'consulting', label: 'Architektur-Beratung' }
        ]
      },
      industries: {
        heading: 'Branchen (Erfahrung)',
        experienceLabel: 'Echte Erfahrung, keine Einheitslösung.',
        items: [
          { id: 'horeca', label: 'HoReCa', preset: { route: 'platform', options: ['pos', 'payments', 'admin'] } },
          { id: 'retail', label: 'Retail', preset: { route: 'custom', options: ['payments', 'automation'] } },
          { id: 'services', label: 'Dienstleistungen', preset: { route: 'turnkey', options: ['seo', 'analytics'] } },
          { id: 'ngo', label: 'NGOs', preset: { route: 'turnkey', options: ['multilang'] } }
        ]
      }
    },
    brief: {
      h1: 'PROJEKT-BRIEF',
      subtitle: 'Erzähl uns, was du brauchst — wir antworten mit einem Plan und den nächsten Schritten.',
      fields: {
        route: 'RICHTUNG',
        timeline: 'ZEITRAHMEN',
        links: 'LINKS',
        details: 'PROJEKTDETAILS',
        contact: 'KONTAKT (TELEGRAM ODER EMAIL)'
      },
      submit: 'ANFRAGE SENDEN',
      capabilitiesTitle: 'WAS WIR ABDECKEN',
      showAllLabel: 'ALLE FÄHIGKEITEN ANZEIGEN',
      showLessLabel: 'WENIGER ANZEIGEN',
      options: {
        routes: {
          turnkey: 'Schlüsselfertige Website',
          platform: 'WEEGO Plattform',
          horeca: 'HoReCa System',
          custom: 'Individuelle Anfrage'
        },
        timeline: {
          asap: 'So schnell wie möglich',
          weeks: '2–4 Wochen',
          flexible: 'Flexibel'
        }
      }
    },
    serviceDetail: {
      industriesLabel: 'BRANCHEN (ERFAHRUNG):',
      turnkey: {
        h1: 'WEBSITE SCHLÜSSELFERTIG',
        subtitle: 'Eine einfache Website unter deiner Marke — schnell, sauber, inkl. Launch.',
        cta: 'PROJEKT BESCHREIBEN',
        sections: {
          bestFor: {
            title: 'IDEAL FÜR',
            items: [
              'Neue Projekte, die eine saubere Online-Präsenz benötigen',
              'Kleine Unternehmen, die Leads suchen',
              'Schnelle Launches mit klarem Startbudget'
            ]
          },
          included: {
            title: 'WAS IST ENTHALTEN',
            items: {
              group1: [
                'Sauberes UI-Layout',
                'Responsive (Mobile/Tablet/Desktop)',
                'SEO-Grundstruktur'
              ],
              group2: [
                'Kontaktformular',
                'Deployment (Live-Schaltung)',
                'Projektübergabe'
              ]
            }
          },
          packages: {
            title: 'PAKETE',
            items: [
              {
                name: 'STARTER',
                price: '€300–€500',
                timeline: '3–7 Tage',
                includes: '1 Seite oder kleine Website, responsive, Kontaktformular, Deployment'
              },
              {
                name: 'STANDARD',
                price: '€500–€900',
                timeline: '1–2 Wochen',
                includes: '5–10 Seiten, wiederverwendbare Sektionen, Basis-Analytics Setup, Deployment'
              },
              {
                name: 'PRO',
                price: '€900–€1,500',
                timeline: '2–4 Wochen',
                includes: 'Individuelles UI Kit, 1–2 Integrationen, erweiterte Analytics-Events, Speed-Optimierung'
              }
            ]
          },
          process: {
            title: 'PROZESS',
            items: [
              'Kurzes Gespräch (Ziele + Umfang)',
              'Design & Struktur',
              'Entwicklung & Feinschliff',
              'Launch & Übergabe'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Liefert ihr die Inhalte?', a: 'Wir können mit deinen Inhalten arbeiten oder dir helfen, sie zu strukturieren.' },
              { q: 'Geht es auch schneller?', a: 'Manchmal ja — abhängig vom Umfang und der Bereitstellung der Inhalte.' },
              { q: 'Funktioniert die Seite auf dem Handy?', a: 'Ja, Responsivität ist standardmäßig enthalten.' },
              { q: 'Kann ich Analytics hinzufügen?', a: 'Ja — das Basis-Setup ist ab dem Standard-Paket enthalten.' },
              { q: 'Bietet ihr Support nach dem Launch?', a: 'Ja — wir können die Zusammenarbeit im Rahmen eines monatlichen Supports fortsetzen.' }
            ]
          }
        }
      },
      platform: {
        h1: 'WEEGO PLATTFORM (VON UNS GEHOSTET)',
        subtitle: 'Start auf unserer Plattform — wir konfigurieren, warten und entwickeln sie gemeinsam mit dir weiter.',
        cta: 'PROJEKT BESCHREIBEN',
        sections: {
          bestFor: {
            title: 'IDEAL FÜR',
            items: [
              'Unternehmen, die mehr als nur eine einfache Website benötigen',
              'Teams, die laufenden Support und Updates suchen',
              'Schnelle Starts auf einer soliden und zuverlässigen Basis'
            ]
          },
          included: {
            title: 'WAS IST ENTHALTEN',
            items: [
              'White-Label Design (unter deiner Marke)',
              'Module nach deinen Bedürfnissen aktiviert',
              'Integrationen auf Anfrage',
              'Hosting, Deployment & technische Wartung'
            ]
          },
          startingFrom: {
            title: 'PREISE AB',
            setup: 'Setup: €500–€900',
            maintenance: 'Wartung: €100/Monat'
          },
          process: {
            title: 'PROZESS',
            items: [
              'Kurzes Gespräch (Ziele + Umfang)',
              'Modul-Konfiguration + Branding',
              'Deployment + finale Checks',
              'Support & kontinuierliche Verbesserungen'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Ist das ein Template?', a: 'Es ist unsere Basis-Plattform. Wir passen sie an deine Marke und Bedürfnisse an.' },
              { q: 'Kann ich neue Funktionen anfragen?', a: 'Ja — wir planen Verbesserungen als Teil des laufenden Supports.' },
              { q: 'Wer hostet die Seite?', a: 'Wir kümmern uns um das Hosting und die technische Wartung.' },
              { q: 'Kann ich Payments/CRM/POS integrieren?', a: 'Ja — Integrationen sind je nach Stack möglich.' },
              { q: 'Kann ich später umziehen?', a: 'Wir können Export-/Übergabeoptionen im Einzelfall besprechen.' }
            ]
          }
        }
      },
      horeca: {
        h1: 'HORECA TEMPLATE SYSTEM',
        subtitle: 'HoReCa-System auf Template-Basis — schneller Launch und Anpassung an deine Marke.',
        cta: 'PROJEKT BESCHREIBEN',
        sections: {
          bestFor: {
            title: 'IDEAL FÜR',
            items: [
              'Restaurants, Cafés, kleine Ketten',
              'Teams, die ein bewährtes Template wollen, keine Neuentwicklung',
              'Laufender Support nach dem Launch'
            ]
          },
          included: {
            title: 'WAS IST ENTHALTEN',
            items: [
              'Fertige HoReCa-Basis (Template)',
              'Branding + UI-Anpassung',
              'Optionale Integrationen (Payments/POS/CRM)',
              'Hosting, Deployment & technische Wartung'
            ]
          },
          startingFrom: {
            title: 'PREISE AB',
            setup: 'Setup: €600–€1,000',
            maintenance: 'Wartung: €100/Monat'
          },
          process: {
            title: 'PROZESS',
            items: [
              'Kurzes Gespräch (dein Flow + Prioritäten)',
              'Branding/UI-Anpassung',
              'Integrationen (falls nötig) + Deployment',
              'Support & Updates'
            ]
          },
          faq: {
            title: 'FAQ',
            items: [
              { q: 'Ist das eine komplett individuelle Entwicklung?', a: 'Es ist ein System auf Template-Basis. Wir passen Module und Integrationen an.' },
              { q: 'Kann ich das Design ändern?', a: 'Ja — Branding und UI-Anpassung sind enthalten.' },
              { q: 'Kann ich POS/CRM/Payments integrieren?', a: 'Ja — diese sind als optionale Integrationen verfügbar.' },
              { q: 'Wie schnell können wir starten?', a: 'Abhängig von Branding und Integrationen, meist innerhalb der Setup-Zeit.' },
              { q: 'Unterstützt ihr das System?', a: 'Ja — die monatliche Wartung ist als separater Punkt enthalten.' }
            ]
          }
        }
      }
    },
    designSystem: {
        heading: "System",
        subheading: "Standards",
        typography: {
            title: "Typografie",
            primary: {
                name: "Archivo",
                usage: "Display / Überschriften",
                description: "Groteske Sans-Serif mit hoher Gewichtsvarianz. Wird zum Schreien verwendet."
            },
            secondary: {
                name: "Inter",
                usage: "Body / UI",
                description: "Optimiert für Bildschirmlesbarkeit. Neutral, objektiv, rein funktional."
            }
        },
        standards: {
            title: "Methodik",
            items: [
                { title: "Atomic Design", desc: "Wir bauen Systeme, keine Seiten. Jede Komponente ist molekular.", code: "SYS_ATOMIC" },
                { title: "Schweizer Raster", desc: "Mathematische Präzision. 12-Spalten-Layouts mit starrem vertikalen Rhythmus.", code: "SYS_GRID" },
                { title: "A11Y Core", desc: "WCAG 2.1-Konformität ist nicht optional. Es ist der Standard.", code: "SYS_ACCESS" },
                { title: "Dark Patterns", desc: "Null Toleranz. Wir gestalten für die Nutzer, nicht zur Manipulation.", code: "SYS_ETHICS" }
            ]
        }
    },
    process: {
      heading: "LIEFER SYSTEM",
      subheading: "END-TO-END FÄHIGKEITEN",
      footerQuote: "Wir liefern keine Seiten. Wir liefern Systeme, die funktionieren.",
      pipeline: {
        title: "AUSFÜHRUNGSPIPELINE",
        steps: [
          { title: "DISCOVERY & AUDIT", desc: "Umfang, Risiken, Klarheit, Einschränkungen" },
          { title: "BRAND & IDENTITY", desc: "Naming, Bildsprache, Systeme" },
          { title: "EXPERIENCE DESIGN", desc: "UX/UI, Motion-Logik, Prototypen" },
          { title: "ENGINEERING BUILD", desc: "Web/Apps, Integrationen, Leistung" },
          { title: "LAUNCH & HARDENING", desc: "QA, Analytik, SEO, Zuverlässigkeit" },
          { title: "EVOLVE & SUPPORT", desc: "Iterationen, neue Module, Skalierung" }
        ]
      },
      modules: {
        title: "TECHNISCHES SCHEMA",
        items: [
            {
                title: "DESIGN SYSTEM (VISUAL OS)",
                content: ["Typografie", "Raster", "Tokens", "Komponenten", "Motion-Regeln"]
            },
            {
                title: "PRODUKT & WEB ENGINEERING",
                content: ["Frontend", "Backend", "CMS", "APIs", "Automatisierungen", "Integrationen"]
            },
            {
                title: "INHALT & MARKENAUSFÜHRUNG",
                content: ["Text", "Art Direction", "Guidelines", "Assets", "Verpackung"]
            },
            {
                title: "DEPLOYMENT & OPTIMIERUNG",
                content: ["Leistung", "SEO", "Monitoring", "A/B", "Analytik"]
            }
        ]
      }
    },
    works: {
      heading: 'Aktuelle Arbeiten',
      subheading: '[AUSGEWÄHLTE PROJEKTE 2025-2026]',
      viewAll: '',
      modalLaunch: 'System Starten',
      items: [
        {
          id: 'w1',
          client: 'ARTFLANEUR',
          category: 'Art Tech Plattform',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2000&auto=format&fit=crop',
          description: 'Eine revolutionäre digitale Plattform, die physische Galerien mit digitalen Wanderern verbindet.',
          before: 'Fragmentierte Präsenz von Galerien ohne einheitlichen digitalen Verkaufskanal.',
          done: ['Custom UI/UX', 'Plattformarchitektur', 'Partnerintegration'],
          result: 'Über 40 Galerien in einem einzigen Hochleistungs-Kunstmarktplatz vereint.',
          capabilities: ['UX/UI Design', 'Plattformarchitektur', 'Partnerintegration', 'Markenidentität'],
          stack: ['Next.js', 'React', 'Mapbox', 'Vercel'],
          projectUrl: 'https://www.artflaneur.com.au/',
          caseStudyUrl: '#'
        },
        {
          id: 'w2',
          client: 'EPRIS MATERIA',
          category: 'Bildungsschnittstelle',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/epris.png',
          description: 'Ein immersiver Bildungsstand zur ästhetischen Dekonstruktion.',
          before: 'Statischer Bildungsinhalt mit geringem Engagement.',
          done: ['HUD Interface', 'Datenvisualisierung', 'Motion Design'],
          result: 'Studenten-Engagement um 300% gesteigert dank interaktivem HUD.',
          capabilities: ['HUD Interface', 'Echtzeit-Datenviz', 'Motion Design', 'Creative Coding'],
          stack: ['WebGL', 'Three.js', 'React', 'GLSL Shaders'],
          projectUrl: 'https://eprisj.github.io/',
          caseStudyUrl: '#'
        },
        {
          id: 'w3',
          client: 'HELP US HELP UA',
          category: 'Humanitäre Plattform',
          year: '2024',
          image: 'https://raw.githubusercontent.com/weego-web/weego-web.github.io/refs/heads/main/img/helpusua.png',
          description: 'Kritische digitale Infrastruktur für humanitäre Hilfe.',
          before: 'Manuelle Spendenverarbeitung und langsames Logistik-Tracking.',
          done: ['Plattformarchitektur', 'Spendensysteme', 'Sichere Zahlungen'],
          result: 'Über 1 Mio. $ an Spenden ohne Ausfälle während der Spitzenzeiten verarbeitet.',
          capabilities: ['Plattformarchitektur', 'Spendensysteme', 'Sichere Zahlungen', 'Globale Logistik'],
          stack: ['Next.js', 'Stripe API', 'React', 'Node.js'],
          projectUrl: 'https://helpushelpua.com/',
          caseStudyUrl: '#'
        }
      ]
    },
    faq: {
      heading: 'FAQ',
      items: [
        { q: 'Wie lange dauert ein Projekt?', a: 'Typische Landing Pages dauern 2-3 Wochen. Komplexe Plattformen 2-4 Monate.' },
        { q: 'Wie sieht Ihr Preismodell aus?', a: 'Wir arbeiten zum Festpreis basierend auf dem Umfang oder mit monatlichem Support.' },
        { q: 'Bieten Sie Support nach dem Launch?', a: 'Ja, wir bieten SLA-Support und Pakete für die kontinuierliche Entwicklung an.' },
        { q: 'Was benötigen Sie für den Start?', a: 'Ein klares Ziel, vorhandene Marken-Assets und einen 30-minütigen Call.' },
        { q: 'Arbeiten Sie mit Startups?', a: 'Ja, wir sind darauf spezialisiert, MVPs zu bauen und digitale Produkte zu skalieren.' },
        { q: 'Ist SEO inklusive?', a: 'Basis-Technik-SEO ist bei jeder Entwicklung dabei. Fortgeschrittene Strategie ist ein Addon.' }
      ]
    },
    finalCta: {
      heading: 'Bereit zu skalieren?',
      subheading: 'Holen Sie sich heute eine genaue Schätzung oder buchen Sie einen Call.',
      ctaPrimary: 'Schätzung anfordern',
      ctaSecondary: 'Call buchen'
    },
    about: {
        heading: "Wir Sind Nicht",
        subheading: "Für Jeden.",
        description: "Wir sind ein Kollektiv digitaler Ureinwohner, Designer und Ingenieure, besessen von der Grenze des Machbaren. Wir machen keine Vorlagen. Wir spielen nicht sicher. Wir bauen digitale Kathedralen.",
        stats: [
            { label: 'EST.', value: '2024' },
            { label: 'PROJEKTE', value: '11+' },
            { label: 'KUNDEN', value: '8+' },
            { label: 'HQ', value: 'LVI' }
        ],
        manifesto: [
            "Wir glauben an Stille statt Lärm.",
            "Funktion ist die ultimative Dekoration.",
            "Code ist Poesie, Design ist Gesetz.",
            "Wenn es nicht schnell ist, ist es kaputt."
        ]
    },
    contact: {
      heading: "Projekt",
      subheading: "Starten",
      desc: "Stellen Sie eine direkte Verbindung zum Kern her. Geben Sie Ihre Parameter unten ein.",
      placeholder: "> Projektsequenz initialisieren...\n> Ästhetische Parameter definieren...\n> Architekturanfrage...",
      button: "Daten Senden",
      processing: "Verschlüsselung...",
      emailLabel: "SICHERE_MAIL",
      locationLabel: "KOORDINATEN",
      aiTitle: "Kernantwort // Briefing_v1.0",
      waiting: "Warte auf Übertragung...",
      sendButton: "Protokoll Ausführen"
    },
    footer: {
      rights: "ALLE RECHTE VORBEHALTEN.",
      designedBy: "DESIGNED BY WEEGO"
    },
    legal: {
        imprint: {
            title: "IMPRESSUM // DATEN",
            content: [
                "GESELLSCHAFT: WEEGO CREATIVE STUDIO",
                "STANDORT: LVIW, UKRAINE",
                "KONTAKT: MUNISTER@OUTLOOK.COM",
                "GERICHTSSTAND: UKRAINE",
                "VERANTWORTLICH: WEEGO STUDIO TEAM",
                "COPYRIGHT: © 2024-2026 WEEGO CREATIVE STUDIO. ALLE RECHTE VORBEHALTEN."
            ]
        },
        privacy: {
            title: "DATENSCHUTZRICHTLINIE",
            content: [
                "1. DATENERFASSUNG: Wir sammeln nur minimale technische Daten, die für die Systemstabilität und Sicherheitsüberwachung erforderlich sind.",
                "2. COOKIES: Diese Website verwendet wesentliche Session-Token für die Funktionalität. Wir verwenden keine Tracking- oder Werbe-Cookies von Drittanbietern.",
                "3. ANALYTIK: Anonymisierte Telemetrie wird ausschließlich zur Verbesserung der Website-Architektur verwendet.",
                "4. EXTERNE DIENSTE: Die Datenverarbeitung kann Vercel (Infrastruktur) und Google Cloud (AI-Dienste) umfassen.",
                "5. BENUTZERRECHTE: Benutzer können die Überprüfung oder Löschung von Daten über die offiziellen Kontaktkanäle anfordern."
            ]
        },
        terms: {
            title: "NUTZUNGSBEDINGUNGEN",
            content: [
                "1. ALLGEMEINES: Durch den Zugriff auf diese Schnittstelle erklären Sie sich mit diesen Bedingungen einverstanden.",
                "2. GEISTIGES EIGENTUM: Alle Codes, visuellen Assets und Designmethoden sind das ausschließliche Eigentum von WEEGO CREATIVE STUDIO.",
                "3. HAFTUNG: Das Studio stellt dieses digitale Erlebnis 'wie besehen' zur Verfügung. Wir übernehmen keine Haftung für externe Links oder Inhalte Dritter.",
                "4. ANWENDBARES RECHT: Diese Bedingungen unterliegen den Gesetzen der Ukraine.",
                "5. UNBEFUGTER ZUGRIFF: Jeder Versuch, die Systemsicherheit zu verletzen, führt zur sofortigen Sperrung des Zugriffs."
            ]
        }
    }
  }
};
