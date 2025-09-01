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
    link: "https://github.com/Astravexx",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/Astravex01"
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
        Results-driven Full Stack Engineer with 7 years of experience designing and delivering scalable, user-focused web applications. Proficient in React for building modern, responsive interfaces and Node.js for developing high-performance APIs and backend services. Experienced with both SQL and NoSQL databases, including MongoDB, to design reliable and efficient data solutions. Skilled in integrating AI-driven features such as GPT-powered chatbots and conversational workflows to enhance automation and user engagement. Known for collaborating effectively with cross-functional teams and taking ownership of projects end-to-end, delivering clean, maintainable, and resilient systems.
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
            Engineered a booking platform for studios, rehearsal spaces, and creative rooms, enabling on-demand reservations with integrated smart lock access.
          </>,
          <>
            Constructed server-side rendered web interfaces using Next.js and React, providing real-time availability updates, advanced filtering, and seamless user interactions.
          </>,
          <>
            Developed backend services with Node.js, implementing multistep booking workflows, policy-based approval logic, and asynchronous task handling through Redis queues and background workers.
          </>,
          <>
            Integrated payment and access control systems using Stripe APIs, handling secure webhooks and lifecycle events to ensure reliable transaction processing and room access.
          </>,
          <>
            Delivered an AI-assisted metadata service for categorizing studios and resources, enhancing search and recommendation accuracy by 35%.
          </>,
          <>
            Implemented a distributed monitoring and throttling framework with middleware logging, usage metrics, and anomaly detection to ensure API stability and optimal performance.
          </>
        ],
        images: [],
      },
      {
        company: "Sitejet",
        timeframe: "11/2021 - 08/2023",
        role: "Fullstack Developer",
        achievements: [
          <>
            Developed a scalable nutrition platform delivering personalized health tips and interactive AI chatbot support, covering frontend, backend, and admin panel.
          </>,
          <>
            Built a modular, responsive frontend with React, TypeScript, and Tailwind CSS, creating reusable component libraries, theme systems, and drag-and-drop editors with real-time preview capabilities.
          </>,
          <>
            Implemented robust backend services using Node.js (Express) and serverless APIs, managing user authentication, session handling, analytics, and role-based access with SQL and NoSQL databases.
          </>,
          <>
            Integrated a custom GPT-powered chatbot for personalized nutrition guidance, handling contextual conversations, fallback logic, and user query processing to enhance engagement and automation.
          </>,
          <>
            Added real-time features including WebSocket-based notifications, presence detection, and debounced synchronization patterns for live updates.
          </>,
          <>
            Managed cloud deployment and DevOps with Vercel and AWS, including CI/CD pipelines, automated testing, secret management, serverless function deployment, monitoring, and logging for production reliability.
          </>,
          <>
            Delivered an admin dashboard with analytics, operational insights, and content management tools, enabling efficient platform administration and data-driven decision-making.
          </>
        ],
        images: [],
      },
      {
        company: "Sogelink",
        timeframe: "11/2019 - 10/2021",
        role: "Full Stack Web Developer",
        achievements: [
          <>
            Architected and implemented a high-performance e-commerce platform using React.js for the frontend and Node.js/Express.js for backend services, emphasizing modular, maintainable, and reusable code structures.
          </>,
          <>
            Developed RESTful APIs to handle product catalogs, order processing, inventory management, and user authentication, incorporating real-time features such as order status updates and notifications via Socket.IO.
          </>,
          <>
            Integrated third-party services including payment gateways, messaging APIs, and GPT-powered chatbots, increasing customer self-service engagement by 40% and reducing support response time by 50%.
          </>,
          <>
            Designed and optimized data models for both SQL and NoSQL (MongoDB) databases, ensuring ACID-compliant transactions, indexing strategies, and query performance for large-scale datasets.
          </>,
          <>
            Developed an admin dashboard with analytics and reporting, enabling 20% faster operational decision-making and providing insights across inventory, orders, and user behavior.
          </>,
          <>
            Leveraged Firebase for authentication, push notifications, and cloud messaging, enabling secure, real-time interactions across web and mobile clients.
          </>
        ],
        images: [],
      },
      {
        company: "VegaIT",
        timeframe: "04/2018 - 10/2019",
        role: "Frontend Developer (React.js)",
        achievements: [
          <>
            Refactored legacy web applications using React and Redux, introducing modular state management, reusable components, and scoped CSS with SCSS modules for maintainability.
          </>,
          <>
            Implemented interactive dashboards, charts, and dynamic forms with Chart.js, Formik, and React Table, focusing on efficient rendering, accessibility, and cross-device consistency.
          </>,
          <>
            Enhanced SEO and accessibility by applying semantic HTML, structured data, ARIA attributes, and keyboard navigation support, improving user experience and search engine visibility.
          </>,
          <>
            Integrated third-party APIs including Stripe and Google Maps, adding custom logic to handle failures gracefully and ensure seamless user interactions.
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
