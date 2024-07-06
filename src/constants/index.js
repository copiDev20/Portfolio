import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  laravel,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  php,
  mysql,
  symfony,
  iberis,
  reddiamond,
  digitr,
  synexta,
  bookme,
  redd,
  holisticlly,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Modelisation 3D",
    icon: creator,
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Symfony",
    icon: symfony
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Reddiamond",
    icon: reddiamond,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Defining and prioritizing product features for Reddiamond Backstage, a digital distribution and management platform, as a Product Owner.",
      "Collaborating with teams to align on product vision and goals.",
      "Developing and managing file transfer solutions and DDEX metadata systems.",
      "Implementing SmartLinks for marketing to boost engagement.",
      "Utilizing Amazon S3 for scalable content delivery.",
      "Monitoring platforms and analyzing data for performance improvements.",
      "Overseeing automation with Cron jobs for efficiency."
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Synexta",
    icon: synexta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jan 2023",
    points: [
      "Akoya: Led the development of a personalized personality assessment platform, creating tailored quizzes for users. Collaborated closely with clients to understand their needs and preferences, resulting in a highly satisfying user experience. Conducted user testing and feedback sessions to refine features and improve platform usability. Received exceptional client satisfaction feedback for the Akoya platform.",
      "Mitih: Contributed to the development of a service platform facilitating seamless connections between clients and providers. Collaborated with cross-functional teams to design and implement platform features. Ensured smooth functionality and user experience through rigorous testing and optimization. Supported ongoing maintenance and updates to meet evolving client and user requirements.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Iberis",
    icon: iberis,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Aug 2022",
    points: [
      "Holistikly: Developed an online therapy platform with QR codes, vouchers, notifications, payments, session management, ratings, and reviews. Collaborated on feature design and implementation, ensuring a user-friendly experience. Conducted testing and troubleshooting for seamless functionality. Contributed to project management and client satisfaction.",
      "Bookme: Developed session scheduling functionalities, including implementing crypto payments with Coinbase, online meetings with Amazon Chime, and cash payments. Collaborated with teams to design and implement features. Ensured user-friendly interfaces and smooth functionalities. Supported project milestones and client objectives.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Digit-r",
    icon: digitr,
    iconBg: "#FFF",
    date: "Jan 2020 - Sep 2021",
    points: [
      "Towingo: Developed a platform for managing tow trucks nearby, optimizing resource allocation and enhancing operational efficiency. Design functionalities, and ensure user-friendly interfaces. Conducted testing and troubleshooting to maintain a seamless user experience.",
      "Astral Ichraa: Contributed to a loyalty application for Astral paint customers, improving engagement and retention. Collaborated on fixing and development, enhancing user experience and program effectiveness."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Amine proved me wrong.",
    name: "Driss Dhaouadi",
    designation: "CTO",
    company: "Reddiamond",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Amine does.",
    name: "Badr Ramoul",
    designation: "CEO",
    company: "Digit-r",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Amine optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Floriant",
    designation: "CEO",
    company: "Synexta",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Reddiamond",
    description:
      "Red Diamond a Tunisian music label established as an independent digital distribution and management label in 2019, Red Diamond had the opportunity to be the first Hip-hop Rap Label in Tunisia, and we are publishing quality music from across the Arab Maghreb and to provide upcoming talents with the opportunity to showcase their musical creations.",
    tags: [
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      
    ],
    image: redd,
    source_code_link: "https://github.com/",
  },
  {
    name: "Holistcly",
    description:
      "Holistikly is a comprehensive online platform focused on enhancing holistic wellness and personal development. Our platform integrates various tools and resources to support individuals in their journey towards improved well-being and fulfillment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: holisticlly,
    source_code_link: "https://github.com/",
  },
  {
    name: "Book.me",
    description:
      "Bookme is at the forefront of revolutionizing how experts, gamers, and content creators engage with their fanbase. Our seamless, personalized platform breaks down barriers, allowing sellers to monetize their fame and content effectively while bringing fans closer to their idols.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: bookme,
    source_code_link: "https://www.bookme.fans/",
  },
];

export { services, technologies, experiences, testimonials, projects };
