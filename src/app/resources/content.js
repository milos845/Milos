const person = {
  firstName: "Milos",
  lastName: "Nedeljkovic",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Web3 Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Belgrade",
  languages: ["English", "Serbian"],
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=inodaren62@gmail.com",
  },
  {
    name: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/milos-nedeljkovic-b133ba319/",
  },
  {
    name: "Discord",
    icon: "discord",
    link: "https://discord.com/users/1362223542112092310/",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/milos0122",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/optistdev",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack Web3 Engineer</>,
  subline: (
    <>
      I'm Milos, a Results-driven Fullstack Web3 Engineer <br /> with proven
      track record of building high-performance Dapps
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
        Milos is a Full Stack, Web3, and Mobile Engineer with over 7 years of
        experience building secure, scalable decentralized applications and
        cross-platform mobile apps. Known for his calm, detail-oriented approach
        and strong problem-solving skills, he thrives in collaborative
        environments and enjoys learning from others. He is currently seeking a
        new opportunity where he can contribute to innovative and
        forward-thinking blockchain and mobile projects.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "DataArt",
        timeframe: "10/2023 - 12/2024",
        role: "Senior Fullstack Web3 Engineer",
        achievements: [
          <>
            Let development of dapps with integrated smart contracts and secure
            EVM interactions.
          </>,
          <>
            Designed and developed a scalable backend services and serverless
            infrastructure to handle wallet authentication, token-based access,
            and real-time on-chain events.
          </>,
          <>
            Set up CI/CD pipelines for contract testing, deployment, and web3
            integration.
          </>,
          <>
            Partnered with Product and Design teams to deliver smooth dApp
            experiences, focusing on wallet connectivity, transaction signing
            UX, and responsive on-chain data rendering.
          </>,
        ],
        images: [],
      },
      {
        company: "Sitejet",
        timeframe: "11/2021 - 4/2023",
        role: "Web3 Engineer",
        achievements: [
          <>
            Developed and maintained decentralized applications (dApps) using
            React and Solidity, interacting with Ethereum and Polygon smart
            contracts to enable seamless user interactions.
          </>,
          <>
            Implemented wallet integrations (MetaMask, WalletConnect) and
            handled token transfers, NFT minting, and DeFi operations.
          </>,
          <>
            Built and deployed smart contracts for token issuance (ERC-20,
            ERC-721) and staking protocols, ensuring secure and gas-efficient
            contract execution
          </>,
          <>
            Created serverless APIs with Node.js and AWS Lambda to monitor
            on-chain events and process transactions.
          </>,
        ],
        images: [],
      },
      {
        company: "Sogelink",
        timeframe: "11/2019 - 10/2021",
        role: "React & React Native Developer",
        achievements: [
          <>
            Developed and maintained cross-platform mobile applications for iOS
            and Android using React Native, ensuring smooth performance and a
            consistent user experience.
          </>,
          <>
            Collaborated with design teams to implement intuitive UI components.
          </>,
          <>
            Integrated third-party APIs and libraries such as Firebase and
            GraphQL, enhancing data synchronization between the mobile app and
            cloud services.
          </>,
          <>
            Performed code reviews and followed best practices in React Native
            development.
          </>,
        ],
        images: [],
      },
      {
        company: "Vega IT",
        timeframe: "4/2018 - 10/2019",
        role: "Front End Developer",
        achievements: [
          <>
            Contributed to client-facing single-page applications using
            React.js, improving user experience and responsiveness.
          </>,
          <>
            Participated in daily stand-ups, sprint planning, and retrospectives
            as part of an Agile development team.
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
            He earned his Bachelor's degree in Computer Science from Singidunum
            University, where he built a strong foundation in software
            engineering and system architecture.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        languages: [
          { Icon: "javascript", label: "JavaScript", color: "#f7df1e" },
          { Icon: "typescript", label: "TypeScript", color: "#3178c6" },
          { Icon: "react", label: "React.js", color: "#61DAFB" },
          { Icon: "nextjs", label: "Next.js" },
          { Icon: "reactnative", label: "React Native", color: "#61DAFB" },
          { Icon: "angularjs", label: "Angular.js", color: "#DD0031" },
          { Icon: "redux", label: "Redux", color: "#764ABC" },
          { Icon: "tailwindcss", label: "Tailwind CSS", color: "#38B2AC" },
          { Icon: "graphql", label: "GraphQL", color: "#E10098" },
        ],
      },
      {
        title: "Backend Development",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        languages: [
          { Icon: "python", label: "Python", color: "#3776AB" },
          { Icon: "nodejs", label: "Node.js", color: "#339933" },
          { Icon: "express", label: "Express" },
          { Icon: "django", label: "Django", color: "#092E20" },
          { Icon: "fastapi", label: "Fast API" },
        ],
      },
      {
        title: "Blockchain Development",
        description: <></>,
        languages: [
          { Icon: "solidity", label: "Solidity" },
          { Icon: "rust", label: "Rust" },
          { Icon: "web3js", label: "Web3.js" },
          { Icon: "ethers", label: "Ethers.js" },
          { Icon: "wagmi", label: "WAGMI" },
          { Icon: "walletconnect", label: "WalletConnect" },
        ],
      },
      {
        title: "Databases",
        description: <></>,
        languages: [
          { Icon: "postgresql", label: "PostgreSQL", color: "#336791" },
          { Icon: "mysql", label: "MySQL", color: "#4479A1" },
          { Icon: "mongodb", label: "MongoDB", color: "#47A248" },
          { Icon: "redis", label: "Redis", color: "#DC382D" },
        ],
      },
      {
        title: "Infrastructure & Testing",
        description: <></>,
        languages: [
          { Icon: "docker", label: "Docker", color: "#2496ED" },
          { Icon: "cicd", label: "CI/CD" },
          { Icon: "kubernetes", label: "Kubernetes", color: "#326CE5" },
          { Icon: "githubIcon", label: "GitHub" },
          { Icon: "cypress", label: "Cypress" },
          { Icon: "jest", label: "Jest", color: "#C21325" },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/gallery (1).jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery (2).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (3).jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery (4).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (5).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (6).jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery (7).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (8).jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery (11).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (13).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (14).jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gallery (12).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (10).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gallery (9).jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
