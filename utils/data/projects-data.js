import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Field Workforce Application",
    description:
      // "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
      "The Field Workforce Application (FWA as we often called it), was born from the notion that companies would need an app to be able to manage contractors on the field. We set out to build one app, that was generic and functional enough to be used for a plathora of industries.", // with Capicitor for the mobile app, an ",
    tools: [
      "NestJs",
      "TypeScript",
      "VueJs",
      "Quasar",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Docker Swarm",
      "Jest",
      "Caprover",
      "AWS S3",
      "Ionic",
      "Capacitor",
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Kar2Kash",
    description:
      "I built Kar2Kash from the ground up as one of my first real-world projects. Using Redis for queuing financial transactions, Docker Swarm, and CapRover to manage a small fleet of nodes, I worked with real data and real users on an application that handled actual money. With the help of the team, I learned the importance of building technology that met customer needs and added business value, sometimes even at the expense of programming best practices.",
    tools: [
      "NestJs",
      "TypeScript",
      "VueJs",
      "Quasar",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Docker Swarm",
      "Jest",
      "Caprover",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  //   {
  //     id: 3,
  //     name: "AI Powered Real Estate",
  //     description:
  //       "My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.",
  //     tools: [
  //       "React",
  //       "Bootstrap",
  //       "SCSS",
  //       "Stripe",
  //       "Express",
  //       "TypeScript",
  //       "MongoDB",
  //       "Azure Blob",
  //       "OpenAI API",
  //       "Replicate AI",
  //       "Cronjob",
  //       "JWT",
  //     ],
  //     code: "",
  //     role: "Full Stack Developer",
  //     demo: "",
  //     image: realEstate,
  //   },
  //   {
  //     id: 4,
  //     name: "Newsroom Management",
  //     description:
  //       "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
  //     tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
  //     code: "",
  //     demo: "",
  //     image: ayla,
  //     role: "Full Stack Developer",
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
