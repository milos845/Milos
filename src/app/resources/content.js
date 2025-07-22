import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Milos",
  lastName: "Nedeljkovic",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Fullstack & AI Engineer",
  avatar: "/images/avatar.jpg",
  email: "inodaren62@gmail.com",
  location: "Europe/Belgrade", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Serbian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cosmic-D",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/milos-nedeljkovic-b133ba319/",
  },
  {
    name: "Email",
    icon: "email",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Senior Fullstack Engineer</>,
  featured: {
    display: false,
    title: (
      <>
        Recent project: <strong className="ml-4">Cpayant</strong>
      </>
    ),
    href: "/work/w-cross-border-trade-payments-platform-for-africa",
  },
  subline: (
    <>
      Combining expertise in fullstack, and AI technologies to architect smart,
      scalable solutions that bridge design, data, and functionality.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/inodaren62",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Milos is a product-minded Full Stack Engineer with 7+ years of experience turning complex ideas into fast, resilient, and user-focused applications.
        His core stack includes React, Next.js, and Node.js, but he’s tool-agnostic—driven by outcomes over dogma.
        From building GPT-powered assistants and token-gated dashboards to live editors and cross-platform apps,
        Milos brings a deep understanding of both frontend finesse and backend architecture.
        He's equally at home designing PostgreSQL schemas, wiring WebSocket streams, or refining component libraries.
        With production-ready blockchain integrations and a pragmatic approach to AI, he thrives in environments where engineers own problems end-to-end and thoughtful
        decisions outweigh job titles.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DataArt",
        timeframe: "10/2023 - 03/2025",
        role: "Senior Fullstack Engineer",
        achievements: [
          <>
            Led development of real-time expense intelligence dashboards with server-rendered views, advanced filtering, and transaction classification using Next.js App Router, React, Tailwind CSS, and GraphQL with client-side caching and SSR hydration
          </>,
          <>
            Developed a policy-driven approval engine with multistep routing and escalation logic using Node.js, Redis queues, and PostgreSQL
          </>,
          <>
            Integrated a virtual card issuing system via Stripe APIs, handling secure webhooks and lifecycle events with FastAPI, async workers, and Docker
          </>,
          <>
            Shipped an AI-powered metadata enrichment service for merchant classification using FastAPI, Celery, and Redis, with validated user input via React Hook Form
          </>,
          <>
            Implemented a distributed rate-limiting and observability layer using Node.js middleware and Winston logging, enabling per-user throttling, usage metering, and anomaly detection to ensure REST API reliability and cost control
          </>,
          <>
            Managed CI/CD with GitHub Actions and Docker Compose, automating builds, secret injection, testing, and versioned production deployments
          </>
        ],
        images: [],
      },
      {
        company: "Sitejet",
        timeframe: "11/2021 - 08/2023",
        role: "Fullstack Engineer",
        achievements: [
          <>
            Guided the development of large Ecommerce and SaaS platforms using React, TypeScript, Tailwind CSS, NoSQL and SQL databases building reusable UI components, theme systems, and drag-and-drop editors with real-time preview support.
          </>,
          <>
            Created scalable backend logic in Node.js (Express) and serverless APIs, using PostgreSQL and Redis for session storage, analytics, and role-based access layers.
          </>,
          <>
            Built secure authentication flows using JWT and OAuth2, and extended them with SIWE (Sign-in with Ethereum) to support wallet-based login for crypto-native users.
          </>,
          <>
            Integrated blockchain features using Ethers.js, Wallet Connect, and ENS for connecting wallets, verifying signatures, and displaying decentralized identities and assets.
          </>,
          <>
            Implemented real-time collaboration features using WebSocket channels, presence detection, and debounced sync patterns.
          </>,
          <>
            Managed CI pipelines on Vercel, ensuring comprehensive test coverage for critical paths. Monitored system health with uptime checks, log-based alerts, and Vercel’s analytics for deployment performance.
          </>
        ],
        images: [],
      },
      {
        company: "Sogelink",
        timeframe: "11/2019 - 10/2021",
        role: "React Native Developer",
        achievements: [
          <>
            Built cross-platform mobile applications using React Native and Redux, focusing on responsive UI, high performance (60 FPS), and seamless offline capability via SQLite and local storage.
          </>,
          <>
            Blended native features including camera, biometric authentication, and geolocation through custom bridges in Swift/Kotlin for tighter platform integration.
          </>,
          <>
            Structured screen flow and deep linking via React Navigation, supporting dynamic tab nesting, route guards, and multi-platform transition consistency.
          </>,
          <>
            Prototyped an internal NFT credentialing tool using Solana/web3.js, implementing wallet connection flows and displaying metadata for user-bound NFTs.
          </>,
          <>
            Commanded OTA deployments and internal testing via Bitrise and App Center, with automated Detox test runs for smoke validation on real devices.
          </>,
        ],
        images: [],
      },
      {
        company: "VegaIT",
        timeframe: "04/2018 - 10/2019",
        role: "Frontend Developer",
        achievements: [
          <>
            Rebuilt outdated web apps using React and Redux, introducing modular state slices, component-based design, and scoped CSS styling with SCSS modules.
          </>,
          <>
            Developed dashboards, charts, and form flows using Chart.js, Formik, and React Table, focusing on performance, accessibility, and consistent UX across devices.
          </>,
          <>
            Improved SEO and accessibility scores significantly by adopting semantic markup, structured data, ARIA roles, and keyboard navigation patterns.
          </>,
          <>
            Integrated payment and mapping APIs like Stripe and Google Maps, wrapping them in custom logic to reduce external failures and enhance user experience.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Singidunum University",
        description: (
          <>
            Graduated with a degree in Computer Science from Singidunum
            University, with a strong foundation in algorithms, full-stack
            development, and AI.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Vue.js", icon: "vue" },
      { name: "Redux", icon: "redux" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Chakra UI", icon: "chakraui" },
      { name: "Cypress", icon: "cypress" },
      { name: "Jest", icon: "jest" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Docker", icon: "docker" },
      { name: "Google Cloud", icon: "gcp" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Git", icon: "git" },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
