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
    "A Software Engineer and Data enthusiast bridging the gap between scalable full-stack applications, machine learning, and statistical optimization."
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
  subTitle:
    "SOFTWARE ENGINEER SPECIALIZING IN SCALABLE SYSTEMS, MACHINE LEARNING, AND MATHEMATICAL OPTIMIZATION",
  skills: [
    emoji(
      "⚡ Build robust full-stack applications and microservices using Java (Spring Boot) and Go"
    ),
    emoji(
      "⚡ Architect end-to-end data pipelines using Snowflake, Python, and stream processing (Kafka)"
    ),
    emoji(
      "⚡ Design and fine-tune Machine Learning models (NLP, Recommender Systems) using linear algebra and statistical methods"
    ),
    emoji(
      "⚡ Bridge the gap between low-level embedded systems (IoT) and high-level predictive analytics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "NLP & Data",
      fontAwesomeClassname: "fas fa-chart-bar"
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
      fontAwesomeClassname: "fa fa-code"
    },
    {
      skillName: "SQL & Snowflake",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-desktop"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fa fa-stream"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fa fa-code"
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
      desc: "Intensive, project-based learning focused on Go, scalable systems (Java/Spring Boot), and applied Machine Learning algorithms (Python, PyTorch). Emphasizes practical problem-solving and peer-to-peer learning.",
      descBullets: []
    },
    {
      schoolName: "University of Kashan",
      logo: require("./assets/images/universityOfKashanLogo.png"), // Add your logo image
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "October 2019 - September 2024",
      desc: "Core Skills: Artificial Intelligence, Data Mining, Algorithm Design & Analysis, Statistics, Linear Algebra, Database Management (SQL), and Hardware-Software Co-Design.",
      descBullets: [
        "Final Year Project: Developed a complex multi-objective optimization model using the NSGA-II algorithm in Python.",
        "Teaching Experience: Teaching Assistant – Data Structures Course (focusing on code scalability and logical clarity).",
        "Specialized Coursework: Software Systems Analysis and Design, Machine Language & Microprocessors, Optimization."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mathematical Optimization & ML",
      progressPercentage: "45%"
    },
    {
      Stack: "Backend & Cloud Architecture",
      progressPercentage: "40%"
    },
    {
      Stack: "Data Engineering & Pipelines",
      progressPercentage: "30%"
    },
    {
      Stack: "Embedded Systems & IoT",
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
  subtitle:
    "KEY PROJECTS SHOWCASING MY SKILLS IN MACHINE LEARNING, DATA ENGINEERING, AND SCALABLE SYSTEMS",
  projects: [
    {
      //image: require("./assets/images/visionTrackProject.png"), // Add your image
      projectName: "Vision-Track: Real-Time Detection & Analytics",
      projectDesc:
        "Production-grade Computer Vision pipeline for real-time person detection and unique identity tracking. Features a custom YOLO model fine-tuned on a cloud GPU, ONNX quantization for low-latency edge inference, and a Streamlit command center using BoT-SORT for multi-stream foot-traffic analytics.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/vision-track"
        }
      ]
    },
    {
      //image: require("./assets/images/nlpProject.png"), // Add your image
      projectName: "NLP News Scraper & Risk Intelligence",
      projectDesc:
        "End-to-end NLP pipeline transforming raw RSS feeds into actionable Risk Intelligence. Utilizes Snowflake for warehousing, LinearSVC for topic classification, and GloVe semantic embeddings with a custom Double-Lock logic for corporate scandal detection.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/nlp-scraper"
        }
      ]
    },
    {
      //image: require("./assets/images/matrixProject.png"), // Add your image
      image: require("./assets/images/detection.mp4"),
      projectName: "Matrix Factorization Recommender System",
      projectDesc:
        "Enterprise-grade movie recommendation engine utilizing Singular Value Decomposition (SVD) and Bayesian Probabilistic Matrix Factorization (PMF) to learn latent user preferences, featuring robust cold-start handling and an interactive Streamlit UI.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/Matrix-Factorization"
        }
      ]
    },
    {
      //image: require("./assets/images/spectralProject.png"), // Add your image
      projectName: "Spectral Learning: PCA & SVD",
      projectDesc:
        "Built from-scratch implementations of Principal Component Analysis (PCA) and Singular Value Decomposition (SVD) using raw NumPy. Explored dimensionality reduction, mathematical equivalence, and K-Means clustering on high-dimensional datasets.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/spectral-learning"
        }
      ]
    },
    {
      //image: require("./assets/images/titanicProject.png"), // Add your image
      projectName: "Titanic Survival Prediction Engine",
      projectDesc:
        "A robust machine learning pipeline for the Kaggle Titanic dataset. Emphasizes advanced feature engineering (KNN imputation), data leakage prevention via Scikit-Learn Pipelines, and a Soft-Voting Ensemble classifier.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/kaggle-titanic"
        }
      ]
    },
    {
      //image: require("./assets/images/buy01Project.png"), // Add your image
      projectName: "buy-01 (E-commerce Microservices)",
      projectDesc:
        "Architected a scalable, event-driven e-commerce backend using Java, Spring Boot, and MongoDB. Implemented Eureka for service discovery, Kafka for asynchronous request handling, and an API Gateway to route traffic efficiently.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/buy-01"
        }
      ]
    },
    {
      //image: require("./assets/images/evacuationProject.png"), // Add your image
      projectName: "Evacuation Planning Optimization",
      projectDesc:
        "Developed a complex multi-objective optimization model using the NSGA-II genetic algorithm in Python. Demonstrated the ability to handle high-dimensional logic and prioritize computational efficiency in resource-constrained environments.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/mahdikheirkhah/Multi-Objective-Location-Allocation-NSGA-II"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
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
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+3584573482021",
  email_address: "mahdikheirkhah060@gmail.com",
  display: true
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true;

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
