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
        Milos is a full-stack & AI engineer passionate about crafting
        intelligent, end-to-end digital systems. His work bridges robust backend
        architecture, intuitive front-end design, and cutting-edge machine
        learning—delivering solutions where engineering precision meets
        real-world impact.
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
            Led end-to-end development of AI-powered web applications using
            React, Next.js, Node.js, and Python (FastAPI/Flask), improving user
            engagement.{" "}
          </>,
          <>
            Reviewed code and contributed to technical decisions on system
            design, performance optimization, and tech stack evolution.
          </>,
          <>
            Automated build and deployment pipelines via GitHub Actions and
            Docker Compose, reducing release cycle time.
          </>,
          <>
            Developed and documented RESTful and GraphQL APIs for AI model
            interaction and data retrieval across multiple microservices.
          </>,
        ],
        images: [],
      },
      {
        company: "Sitejet",
        timeframe: "11/2021 - 08/2023",
        role: "Fullstack Engineer",
        achievements: [
          <>
            Developed and maintained scalable web applications using React,
            Node.js, and PostgreSQL, improving performance and reliability
            across the stack.
          </>,
          <>
            Built real-time features using WebSockets, enhancing user engagement
            and responsiveness.
          </>,
          <>
            Implemented secure authentication/authorization systems with JWT,
            OAuth2, and role-based access control.
          </>,
          <>
            Designed data models and queries to support analytics dashboards,
            using SQL, Redis for high-performance data access.
          </>,
          <>
            Built reusable UI components with TypeScript and Tailwind CSS,
            streamlining development and reducing duplicated code
          </>,
        ],
        images: [],
      },
      {
        company: "Sogelink",
        timeframe: "11/2019 - 10/2021",
        role: "React Native Developer",
        achievements: [
          <>
            Developed and maintained cross-platform mobile applications for iOS
            and Android using React Native, ensuring smooth performance and a
            consistent user experience.
          </>,
          <>
            Built responsive, accessible, and pixel-perfect UIs with React
            Native components, TypeScript, and Styled Components.
          </>,
          <>
            Implemented navigation and deep linking using React Navigation,
            enhancing user experience and session continuity.
          </>,
          <>
            Performed code reviews and followed best practices in React Native
            development.
          </>,
          <>
            Participated in Agile development cycles, working closely with
            designers and backend engineers to ship features.
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
            Improved user engagement by developing client-facing applications
            using React.js for enhanced responsiveness.
          </>,
          <>
            Participated in daily stand-ups, sprint planning, and retrospectives
            as part of an Agile development team
          </>,
          <>
            Collaborated with designers to deliver responsive, accessible user
            interfaces in line with WCAG standards.
          </>,
          <>
            Ensured that UI components followed the design system and were
            responsive on various screen sizes.
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
