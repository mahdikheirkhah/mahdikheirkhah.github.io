/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammad Mahdi Kheirkhah",
  title: "Hey, I'm Mahdi",
  subTitle: emoji(
    "An enthusiastic Full-Stack Developer passionate about building scalable applications and exploring AI in quantitative finance."
  ),
  resumeLink: "src/containers/greeting/resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mahdikheirkhah",
  linkedin: "https://www.linkedin.com/in/mohammad-mahdi-kheirkhah/",
  gmail: "mahdikheirkhah060@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER EAGER TO MASTER NEW TECH STACKS IN SOFTWARE AND FINANCE",
  skills: [
    emoji(
      "⚡ Build full-stack applications using Java (Spring Boot), Go, and JavaScript frameworks like Angular and Vue.js"
    ),
    emoji("⚡ Develop microservices architectures with Docker, Kafka, and databases like MongoDB and SQL"),
    emoji(
      "⚡ Optimize algorithms in Python for real-world problems"
    ),
    emoji(
      "⚡ Work on embedded systems with Arduino and AVR microprocessors"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js" // No specific, reuse JS
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fa fa-leaf" // Spring leaf icon
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fa fa-code", // No specific FA, use code
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fa fa-code" // No specific
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa fa-leaf" // Mongo leaf
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fa fa-stream" // Streams for Kafka
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fa fa-project-diagram" // Diagram for GraphQL
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Microprocessors",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Grit:lab",
      logo: require("./assets/images/gritlabLogo.png"), // Add your logo image
      subHeader: "Further Vocational Qualification in ICT",
      duration: "September 2024 - August 2026",
      desc: "Intensive, project-based learning focused on Go, JavaScript (Vue, Angular), and Java (Spring Boot, Microservices). Emphasizes practical problem-solving, teamwork, and peer-to-peer learning.",
      descBullets: []
    },
    {
      schoolName: "University of Kashan",
      logo: require("./assets/images/universityOfKashanLogo.png"), // Add your logo image
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "October 2019 - September 2024",
      desc: "Core Skills: Algorithm Design & Analysis, Data Structures, Object-Oriented Programming (C++), Database Management (SQL), Operating Systems, Computer Networks.",
      descBullets: ["Final Year Project: Developed an evacuation planning optimization model using the NSGA-II algorithm in Python.", "Teaching Experience: Teaching Assistant – Data Structures Course.",  " Specialized Coursework: Microprocessors & Assembly, Data Mining, Compiler Design, Optimization."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full-Stack Development",
      progressPercentage: "30%"
    },
    {
      Stack: "Backend & Microservices",
      progressPercentage: "40%"
    },
    {
      Stack: "Algorithms & Optimization",
      progressPercentage: "45%"
    },
    {
      Stack: "Embedded Systems",
      progressPercentage: "15%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "KEY PROJECTS SHOWCASING MY SKILLS IN FULL-STACK AND OPTIMIZATION",
  projects: [
    {
      //image: require("./assets/images/evacuationProject.png"), // Add your image
      projectName: "Evacuation Planning Optimization",
      projectDesc: "Optimized model with NSGA-II in Python, tuning hyperparameters via genetic algorithms for efficient real-world crisis mapping.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/Multi-Objective-Location-Allocation-NSGA-II" // Update with actual link if available
        }
      ]
    },
    {
      //image: require("./assets/images/buy01Project.png"), // Add your image
      projectName: "buy-01",
      projectDesc: "Architected and developed a microservices-based e-commerce platform using Java, Spring Boot, and MongoDB on the backend and Angular for the frontend. Implemented Eureka for service discovery, Kafka for asynchronous request handling, and an API Gateway to manage and route traffic.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/buy-01" // Update with actual link
        }
      ]
    },
    {
      //image: require("./assets/images/socialNetworkProject.png"), // Add your image
      projectName: "social-network",
      projectDesc: "Created a full-stack social network application (similar to Facebook) using Vue.js for a dynamic, reactive frontend and Go with SQLite for the backend. using Github OAuth for secure authentication.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/social-network" // Update with actual link
        }
      ]
    },
    {
      //image: require("./assets/images/realtimeForumProject.png"), // Add your image
      projectName: "real-time-forum",
      projectDesc: "Upgraded a Go-based forum to feature real-time communication by integrating WebSockets, allowing for live updates without page reloads.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/real-time-forum" // Update with actual link
        }
      ]
    },
    {
      //image: require("./assets/images/bombermanProject.png"), // Add your image
      projectName: "bomberman",
      projectDesc: "Built a real-time multiplayer Bomberman game using a custom-built JavaScript framework for state management, routing, and events. Powered the backend with Go and WebSockets for live connectivity.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/bomberman-dom" // Update with actual link
        }
      ]
    },
    {
      //image: require("./assets/images/graphqlProject.png"), // Add your image
      projectName: "GraphQL",
      projectDesc: "Built a JavaScript frontend application to query a GraphQL endpoint, constructing proper requests with query bodies to fetch dynamic data sets efficiently. Integrated SVG for rendering custom charts, including line charts for time-series data and radar charts for comparative analysis.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/GraphQL" // Update with actual link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+3584573482021",
  email_address: "mahdikheirkhah060@gmail.com",
  display: false
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};