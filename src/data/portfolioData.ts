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
  // Project 7
  {
    id: "IR-line-follower",
    title: "Scout A Route (IR Line Follower)",
    category: "ME35 / Simple Robotics",
    image: "/images/pokemon-gripper/gripper.jpeg",
    description: "This week's task is to follow a line using an IR sensor. Project Constraints: 1. You must use the provided IR sensor. Cameras and other sensors for line tracking are not permitted. 2. You may choose any of the 3 provided paths to follow, but you cannot create your own path. 3. No tape or hot glue!",
    features: [
      "Use of provided IR sensor for line following",
      "Selection from 3 predefined paths",
      "Compliance with project constraints",
      "Utilization of course kit materials and additional resources"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/IR-line-follower.git",
  },

  // Project 6
  {
    id: "pokemon-ball-sorter",
    title: "Pokémon Ball Sorter",
    category: "ME35 / Simple Robotics",
    image: "/images/pokemon-ball-sorter/ball-sorter-1.jpeg",
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

  // Project 5
  {
    id: "pokemon-gripper",
    title: "Pokémon Ball Gripper",
    category: "ME35 / Simple Robotics",
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

  // Project 10
  {
    id: "ballon-dor-replica",
    title: "Ballon d’Or Replica",
    category: "ME10 / Materials & Manufacturing I",
    image: "/images/ballon-dor-replica/dor2.jpeg",
    description: "Designed and fabricated a replica of the Ballon d’Or using sand casting and lost wax casting, achieving a close resemblance to the real trophy.",
    features: [
      "SolidWorks design for accurate modeling",
      "Sand casting and lost wax casting techniques",
      "Welding for structural integrity",
      "Polished finishing for a realistic look"
    ],
    year: "Fall 2023",
    githubUrl: undefined
  },

  // Project 9
  {
    id: "hip-truss-bridge",
    title: "Hip Truss Bridge",
    category: "ME20 / Mechanics",
    image: "/images/hip-truss-bridge/truss1.png",
    description: "Designed and built a hip truss bridge to understand structural loads. The project involved SolidWorks modeling, acrylic assembly, and internal force analysis through theoretical calculations and FEA.",
    features: [
      "Truss bridge design using SolidWorks",
      "Acrylic structure assembled with glue",
      "Theoretical load calculations and FEA validation",
      "Load-bearing capacity analysis"
    ],
    year: "Fall 2023",
    githubUrl: undefined
  },

  // Project 8
  {
    id: "dog-treat-dispenser",
    title: "Dog Treat Dispenser",
    category: "ME40 / Engineering Design I",
    image: "/images/dog-treat-dispenser/dispens1.png",
    description: "Designed a wheelchair-mounted dog treat dispenser for Ryan, a user with a spinal cord injury, ensuring minimal effort in dispensing and preventing unintended access by the dog.",
    features: [
      "User-friendly design requiring minimal effort",
      "Secure dispensing mechanism for controlled treat release",
      "Affordable and durable materials",
      "Clamp-based attachment for easy wheelchair integration"
    ],
    year: "Spring 2024",
    githubUrl: undefined
  },

  // Project 4
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
  // Project 3
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
  // Project 2
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
  // Project 1
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