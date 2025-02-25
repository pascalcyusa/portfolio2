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
  // Project 12
  {
    id: "camera-line-follower",
    title: "Traverse Victory Road (Camera Line Follower)",
    category: "ME35 / Simple Robotics",
    image: "/images/camera-line-follower/img1.jpeg",
    description: "A line-following robot designed to navigate paths using a Pi Camera for line detection.",
    features: [
      "Line detection using Pi Camera",
      "Motor control with Raspberry Pi",
      "Real-time image processing with OpenCV",
      "GPIO control for motor movement"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/camera-line-follower"
  },

  // Project 11
  {
    id: "IR-line-follower",
    title: "Scout A Route (IR Line Follower)",
    category: "ME35 / Simple Robotics",
    image: "/images/IR-line-follower/img1.png",
    description: "This robot follows a line using an IR sensor.",
    features: [
      "Use of provided IR sensor for line following",
      "Selection from 3 predefined paths",
      "Compliance with project constraints",
      "Utilization of course kit materials and additional resources"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/IR-line-follower",
  },

  // Project 10
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

  // Project 9
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

  // Project 8
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

  // Project 7
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

  // Project 6
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

  // Project 5
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

  // Project 3
  {
    id: "social-networking-app",
    title: "Zina",
    category: "Web Development",
    image: "/images/Zina/img1.png",
    description: "Zina is a social networking application designed to help users manage and visualize their personal and professional connections. The app allows users to add, edit, and delete contacts, and provides a graphical representation of their network.",
    features: [
      "Manage a list of contacts with add, edit, and delete functionality",
      "Visualize connections in a grid or network graph view",
      "Toggle between different views with smooth animations",
      "Support for dark mode interface",
      "Multi-step wizard for adding new contacts",
      "Bidirectional connection management between contacts",
      "Integration with SwiftUI for a modern user interface",
      "Persistent storage of contacts using JSON encoding and decoding"
    ],
    year: undefined,
    githubUrl: "https://github.com/pascalcyusa/Zina",
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