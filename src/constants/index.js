import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
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
  java,
  threejs,
  highradius,
  coursera,
  graduate,
  ArticleSUM,
  HRC,
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
    title: "JAVA Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    icon: redux,
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
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "HighRadius",
    icon:highradius,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "•	Worked on an AI-Enabled FinTech B2B Invoice Management Application",
      "•	Attended daily ZOOM meetings, raising queries and also helping other Interns to solve theirs.",
      "•	Technologies Used:" ,
      "•	Machine Learning in Python, Java, Java Servlet.",
      "•	SQL Database, React.js, HTML, CSS, JavaScript." ,

    ],
  },
  {
    title: "FULL STACK WEB DEVELOPMENT WITH REACT, NODE.JS AND MONGODB ",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#E6DEDD",
    date: "Nov 2021",
    points: [
      "Learned Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "In this specialization I learnt to Design a full-fledged Web client",
      "application using Bootstrap 4 and React, Design a hybrid mobile",
      "application using React Native, and  Develop server-side support for",
      "the web application using Node.js, ExpressJS together with database",
      "support using MongoDB",
    ],
  },
  {
    title: "Machine Learning",
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#383E56",
    date: "Feb 2023",
    points: [
      "Gained applied",
      "experience in major areas of Machine Learning including Prediction",
      "Classification, Clustering, and Information Retrieval. You learned to",
      "analyze large and complex datasets, create systems that adapt and",
      "improve over time, and build intelligent applications that can make",
      "predictions from data",
    ],
  },
  {
    title: "B.Tech CSE",
    company_name: "Chandigarh University",
    icon: graduate,
    iconBg: "#E6DEDD",
    date: "July 2019 - July 2023",
    points: [
      "Completed my Bachelore Degree from a NAAC A+ University",
      "Opend to learning and growing ",
      "Trying to make a considerable contribution in the making of future",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://car-hub-vishaluttam.vercel.app/",
  },
  {
    name: "AI-Article Summarizer",
    description:
      "Web application that enables users to fetch textual data into a summarized form.Simply paste the link a an article into the link input and press enter and wait for the processing.",
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
        name: "web-api",
        color: "pink-text-gradient",
      },
    ],
    image: ArticleSUM,
    source_code_link: "https://vishaluttam.github.io/AI_text_Summarizer/",
  },
  {
    name: "Trip Guide",
    description:
      "SDE Intern HighRadius Worked on an AI-Enabled FinTech B2B Invoice Management Application.Tech:ML in Python, Java, Servlet, SQL Database, React.js, HTML, CSS, ES6.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: HRC,
    source_code_link: "https://drive.google.com/drive/folders/1ZiqaW336jgnWr4MVjxMDerijBLTf603L?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
