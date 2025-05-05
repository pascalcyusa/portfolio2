import googlePhotosData from './google_photos_data.json';

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
  // pokemon-cafe
  {
    id: "pokemon-cafe",
    title: "Pokémon Cafe (Final Project)",
    category: "ME35 / Simple Robotics",
    image: "/images/pokemon-cafe/img3.jpeg",
    // image: googlePhotosData[2].url,
    description: "A completely automated system for cooking pancakes",
    features: [
      "Automated Order Fetching: Connects to Airtable to retrieve new pancake orders.",
      "Line Following Navigation: Uses IR sensors to autonomously follow a designated path.",
      "Camera-Based Station Detection: Identifies processing stations using OpenCV to detect green markers.",
      "Sequential Station Processing: Visits cooking and topping stations based on the specific requirements of each order.",
      "Real-Time Status Updates: Reports robot arrival and order completion back to Airtable.",
      "Modular Component: Acts as the transport element within a larger automated pancake production line (including batter, cooking, topping stages)."
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/Pokemon-Cafe"
  },
  // navigate-to-pewter-city
  {
    id: "navigate-to-pewter-city",
    title: "Navigate Back to Pewter City (Navigation Using Object Recognition)",
    category: "ME35 / Simple Robotics",
    image: "/images/navigate-to-pewter-city/img5.jpeg",
    description: "A Create 3 Robot ™️ robot designed to navigate through a maze with 90-degree turns based on object detection.",
    features: [
      "Object detection system for 6-inch proximity sensing",
      "90-degree turn calibration system",
      "Real-time path adjustment capabilities",
      "Custom navigation algorithm implementation",
      "Sensor fusion for accurate positioning"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/navigate-to-pewter-city"
  },
  // roomba-gym-battle
  {
    id: "roomba-gym-battle",
    title: "Gym Battle - Learning to Dodge (Airtable Remote Operation)",
    category: "ME35 / Simple Robotics",
    image: "/images/navigate-to-pewter-city/img6.jpeg",
    description: "A Create 3 Robot ™️ robot that can be controlled remotely using an Airtable.",
    features: [
      "Remote control through Airtable integration",
      "Real-time visual feedback via camera streaming",
      "Obstacle avoidance navigation",
      "Create 3 robot command interface",
      "Remote operation from classroom to Nolop"
    ],
    year: "Spring 2025",
    githubUrl: undefined
  },
  // camera-line-follower
  {
    id: "camera-line-follower",
    title: "Traverse Victory Road (Camera Line Follower)",
    category: "ME35 / Simple Robotics",
    image: "/images/camera-line-follower/img1.jpeg",
    description: "A line-following robot designed to navigate paths using a Pi Camera for line detection.",
    features: [
      "Remote control through Airtable integration",
      "Real-time visual feedback via camera streaming",
      "Obstacle avoidance navigation",
      "Create 3 robot command interface",
      "Remote operation from classroom to Nolop"
    ],
    year: "Spring 2025",
    githubUrl: "https://github.com/pascalcyusa/camera-line-follower"
  },

  // IR-line-follower
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

  // pokemon-ball-sorter
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

  // pokemon-gripper
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
    githubUrl: "https://github.com/pascalcyusa/Pokemon-Gripper",
  },

  // ballon-dor-replica
  {
    id: "ballon-dor-replica",
    title: "Ballon d’Or Replica",
    category: "ME10 / Materials & Manufacturing",
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

  // hip-truss-bridge
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

  // dog-treat-dispenser
  {
    id: "dog-treat-dispenser",
    title: "Dog Treat Dispenser",
    category: "ME40 / Engineering Design",
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

  // tdk-ch101
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    category: "MEMS / Sensors",
    image: "/images/tdk-ch101/img1.jpeg",
    description: "Data collection automation system for ultrasonic sensors using C and LabVIEW integration.",
    features: [
      "C and LabVIEW integration",
      "Automated data collection",
      "Streamlined interface",
      "Real-time data processing"
    ],
    year: "Summer 2024"
  },
  // lego-arduino
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    category: "Education",
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

  // social-networking-app
  {
    id: "social-networking-app",
    title: "Zina",
    category: "Web Development",
    image: "/images/social-networking-app/icon.png",
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

  // splendor-game
  {
    id: "splendor-game",
    title: "Splendor Game",
    category: "C++ Projects",
    image: "/images/splendor-game/img1.png",
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
  // personal-website
  {
    id: "personal-website",
    title: "Portfolio",
    category: "Web Development",
    image: "/images/personal-website/img1.png",
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