export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  year: string;
  githubUrl?: string;
}

export const portfolioData: PortfolioItem[] = [
  // Project 1
  {
    id: "pokemon-gripper",
    title: "Pokémon Ball Gripper",
    category: "ME 35 / Simple Robotics",
    image: "/images/pokemon-gripper/gripper.jpeg",
    description: "Mechanical gripper system designed to safely handle and transport a Poké Ball using stepper motor actuation.",
    features: [
      "Custom-designed linkage and gear system",
      "Stepper motor-controlled actuation",
      "2ft transport capability",
      "Non-contact ball manipulation"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/Pokmon-Gripper",
  },
  // Project 2
  {
    id: "pokemon-ball-sorter",
    title: "Pokémon Ball Sorter",
    category: "ME 35 / Simple Robotics",
    image: "/images/pokemon-ball-sorter/cad2.png",
    description: "A robot that automatically detects and sorts colored balls using color detection and servo positioning.",
    features: [
      "Continuous ball feeding using threaded stepper motor control",
      "RGB color detection and classification",
      "Automated servo positioning for ball sorting",
      "Configurable sorting positions for different colors",
      "Returns to rest position after each sort"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/Pokemon-Ball-Sorter",
  },
  // Project 3
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    category: "Sensors / Data Automation",
    image: "/images/tdk-ch101/ch101sensor.jpeg",
    description: "Data collection automation system for ultrasonic sensors using C and LabVIEW integration.",
    features: [
      "C and LabVIEW integration",
      "Automated data collection",
      "Streamlined interface",
      "Real-time data processing"
    ],
    year: "Summer 2024"
  },
  // Project 4
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    category: "Education / Robotics",
    image: "/images/lego-arduino/ceeo1.jpg",
    description: "Educational robotics projects using LEGO Mindstorms and Arduino.",
    features: [
      "LEGO Mindstorms integration",
      "Python and Arduino programming",
      "Sensor-controlled robots",
      "Eco-friendly solutions"
    ],
    year: "Summer 2023"
  },
  // Project 5
  {
    id: "splendor-game",
    title: "Splendor Game",
    category: "C++ / Game Development",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
    description: "Terminal-based implementation of the Splendor board game in C++.",
    features: [
      "Object-oriented design",
      "Custom game rule enforcement",
      "File handling system",
      "Terminal-based UI"
    ],
    year: "Spring 2023",
    githubUrl: "https://github.com/pascalcyusa/cs11",
  },
  // Project 6
  {
    id: "personal-website",
    title: "Personal Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    description: "Responsive portfolio website built with modern web technologies.",
    features: [
      "Responsive design",
      "Bootstrap framework",
      "GitHub integration",
      "Netlify deployment"
    ],
    year: "Sept 2022",
    githubUrl: "https://github.com/pascalcyusa/portfolio2",
  }
];