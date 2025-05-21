import { InlineCode } from "@/once-ui/components";

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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/optistdev",
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=$inodaren62@gmail.com",
  },
  {
    name: "Linkedin",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/milos-nedeljkovic-b133ba319/",
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
    link: "https://calendly.com/taidev722",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Milos is a Full-Stack Web3 Engineer based in Serbia, specializing in
        developing scalable, high-performance decentralized applications
        (DApps). He is passionate about turning complex technical challenges
        into elegant solutions, with a strong focus on digital design,
        interactive user experiences, and the seamless integration of user
        interfaces with cutsting-edge technologies.
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
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/dataart/dataart1.png",
            alt: "Payment platform",
            width: 24,
            height: 14,
          },
        ],
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
        description: <>Studied Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Fullstack Development",
        description: (
          <>Building next gen apps with Next.js + Node.js + Tailwind CSS.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Development",
        description: <>Building mobile web apps with React Native + Web3 Integration.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
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
