interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  category: string;
  period: string;
  githubLink?: string;
  image: string;
  isReversed?: boolean;
}

export const projects: Project[] = [
  {
    id: "pokemon-gripper",
    title: "Pokémon Ball Gripper",
    shortDescription: "Mechanical gripper system designed to safely handle and transport Poké Balls using stepper motor actuation.",
    fullDescription: "Engineered a custom mechanical gripper incorporating both linkages and gears, capable of precisely grabbing and transporting Poké Balls. The system features stepper motor actuation and meets strict design constraints for controlled manipulation without direct ball contact.",
    features: [
      "Custom-designed linkage and gear system",
      "Stepper motor-controlled actuation",
      "2ft transport capability",
      "Non-contact ball manipulation"
    ],
    category: "Mechanical Design / Robotics",
    period: "2024",
    githubLink: "",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=800&q=80",
    isReversed: false
  },
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    shortDescription: "Data collection automation system for ultrasonic sensors using C and LabVIEW integration.",
    fullDescription: "Tasked with learning and configuring the TDK CH101 chip's source code in C for efficient data collection from ultrasonic sensors. Integrated C code with LabVIEW to automate the data collection process, improving speed and accuracy in sensor data acquisition.",
    features: [
      "C and LabVIEW integration",
      "Automated data collection",
      "Streamlined interface",
      "Real-time data processing"
    ],
    category: "Sensors / Data Automation",
    period: "Summer 2024",
    githubLink: "",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80",
    isReversed: true
  },
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    shortDescription: "Educational robotics projects using LEGO Mindstorms and Arduino.",
    fullDescription: "Worked on projects using LEGO Mindstorms and Spike Prime to build sensor-controlled robots and cars, teaching students programming and engineering skills. Implemented Python libraries and Arduino integration for enhanced project functionality.",
    features: [
      "LEGO Mindstorms integration",
      "Python and Arduino programming",
      "Sensor-controlled robots",
      "Eco-friendly solutions"
    ],
    category: "Education / Robotics",
    period: "Summer 2023",
    githubLink: "",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=800&q=80",
    isReversed: false
  },
  {
    id: "splendor-game",
    title: "Splendor Game",
    shortDescription: "Terminal-based implementation of the Splendor board game in C++.",
    fullDescription: "Built a terminal-based Splendor game using object-oriented programming in C++, ensuring easy debugging and file handling. Developed custom functions to enforce game rules and enhance user experience.",
    features: [
      "Object-oriented design",
      "Custom game rule enforcement",
      "File handling system",
      "Terminal-based UI"
    ],
    category: "C++ / Game Development",
    period: "Spring 2023",
    githubLink: "",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
    isReversed: true
  },
  {
    id: "personal-website",
    title: "Personal Website",
    shortDescription: "Responsive portfolio website built with modern web technologies.",
    fullDescription: "Created a personal website to demonstrate web programming skills, using Bootstrap for responsive and user-friendly design. Implemented version control through GitHub and deployed using Netlify.",
    features: [
      "Responsive design",
      "Bootstrap framework",
      "GitHub integration",
      "Netlify deployment"
    ],
    category: "Web Development",
    period: "Sept 2022",
    githubLink: "https://github.com/pascalcyusa/myportfolio1",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    isReversed: false
  }
];