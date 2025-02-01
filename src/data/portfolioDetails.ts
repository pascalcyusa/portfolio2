export interface PortfolioDetail {
  id: string;
  title: string;
  content: string;
  images: {
    url: string;
    caption: string;
  }[];
  technicalDetails: string[];
  challenges: string[];
  outcomes: string[];
  futureImprovements?: string[];
}

export const portfolioDetails: PortfolioDetail[] = [
  {
    id: "pokemon-gripper",
    title: "Pokémon Ball Gripper",
    content: "The Pokémon Ball Gripper project represents an innovative approach to robotic manipulation, specifically designed for handling spherical objects with precision. This project combines mechanical engineering principles with modern control systems to create a reliable and efficient gripping mechanism.",
    images: [
      {
        url: "/images/pokemon-gripper/mechanism.jpg",
        caption: "CAD design of the gripper mechanism"
      },
      {
        url: "/images/pokemon-gripper/assembly.jpg",
        caption: "Final assembled gripper system"
      },
      {
        url: "/images/pokemon-gripper/control-system.jpg",
        caption: "Control system implementation"
      }
    ],
    technicalDetails: [
      "Custom-designed 3D printed components using PLA material",
      "Arduino Mega 2560 microcontroller implementation",
      "NEMA 17 stepper motors with 1.8° step angle",
      "Custom PCB design for control circuitry",
      "Force feedback sensors for grip pressure monitoring",
      "2-foot linear rail system for horizontal movement"
    ],
    challenges: [
      "Achieving precise grip pressure without damaging the balls",
      "Implementing smooth acceleration and deceleration profiles",
      "Maintaining consistent grip during horizontal movement",
      "Minimizing system weight while ensuring structural integrity",
      "Calibrating force feedback sensors for various ball sizes"
    ],
    outcomes: [
      "Successfully achieved 99% grip reliability rate",
      "Reduced transport time by 40% compared to initial prototype",
      "Implemented fail-safe mechanisms for emergency stops",
      "Created detailed documentation for future maintenance",
      "Developed a user-friendly control interface"
    ],
    futureImprovements: [
      "Integration with computer vision for autonomous operation",
      "Wireless control capabilities",
      "Enhanced grip force feedback system",
      "Material optimization for reduced weight"
    ]
  },
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    content: "This project focused on developing an automated data collection system for TDK's CH101 ultrasonic sensors, streamlining the testing and validation process through sophisticated software integration.",
    images: [
      {
        url: "/images/tdk-ch101/setup.jpg",
        caption: "Testing setup with multiple sensors"
      },
      {
        url: "/images/tdk-ch101/interface.jpg",
        caption: "LabVIEW interface design"
      },
      {
        url: "/images/tdk-ch101/data-visualization.jpg",
        caption: "Real-time data visualization"
      }
    ],
    technicalDetails: [
      "C-based firmware implementation",
      "LabVIEW 2020 development environment",
      "Custom USB communication protocol",
      "Multi-threaded data acquisition system",
      "Real-time data visualization framework",
      "Automated calibration routines"
    ],
    challenges: [
      "Synchronizing multiple sensor readings",
      "Optimizing data transfer rates",
      "Managing large datasets efficiently",
      "Implementing robust error handling",
      "Ensuring consistent timing accuracy"
    ],
    outcomes: [
      "Reduced testing time by 65%",
      "Improved data accuracy by 30%",
      "Automated testing of up to 8 sensors simultaneously",
      "Generated comprehensive test reports automatically",
      "Created reusable software modules for future projects"
    ],
    futureImprovements: [
      "Cloud integration for remote monitoring",
      "Machine learning for predictive maintenance",
      "Extended sensor compatibility",
      "Mobile app development for remote control"
    ]
  },
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    content: "An innovative educational initiative combining LEGO Mindstorms with Arduino technology to create engaging STEM learning experiences for students. The project focused on hands-on learning and practical application of programming concepts.",
    images: [
      {
        url: "/images/lego-arduino/robot-assembly.jpg",
        caption: "Students assembling robots"
      },
      {
        url: "/images/lego-arduino/programming-session.jpg",
        caption: "Programming workshop in action"
      },
      {
        url: "/images/lego-arduino/final-projects.jpg",
        caption: "Student project showcase"
      }
    ],
    technicalDetails: [
      "Arduino Uno and Nano integration",
      "LEGO Mindstorms EV3 platform",
      "Python programming with ev3dev",
      "Custom sensor integration modules",
      "Wireless communication implementation",
      "Interactive learning materials"
    ],
    challenges: [
      "Adapting content for different skill levels",
      "Maintaining student engagement",
      "Troubleshooting hardware issues efficiently",
      "Managing limited resource availability",
      "Balancing theory with practical applications"
    ],
    outcomes: [
      "Successfully trained 50+ students",
      "Created 10 reusable project templates",
      "Developed comprehensive learning materials",
      "Achieved 90% positive feedback from students",
      "Implemented sustainable program structure"
    ],
    futureImprovements: [
      "Online learning platform integration",
      "Advanced project modules development",
      "Virtual simulation capabilities",
      "Extended hardware compatibility"
    ]
  },
  {
    id: "splendor-game",
    title: "Splendor Game",
    content: "A comprehensive C++ implementation of the popular board game Splendor, featuring a terminal-based interface and robust game mechanics. The project demonstrates strong object-oriented programming principles and game state management.",
    images: [
      {
        url: "/images/splendor/gameplay.jpg",
        caption: "Terminal gameplay interface"
      },
      {
        url: "/images/splendor/class-diagram.jpg",
        caption: "Game architecture diagram"
      },
      {
        url: "/images/splendor/save-system.jpg",
        caption: "Save/Load system implementation"
      }
    ],
    technicalDetails: [
      "C++17 standard implementation",
      "Custom game state management system",
      "JSON-based save/load functionality",
      "Command pattern for game actions",
      "Unit testing framework integration",
      "Memory management optimization"
    ],
    challenges: [
      "Implementing complex game rules accurately",
      "Creating an intuitive terminal interface",
      "Managing game state persistence",
      "Handling edge cases in game logic",
      "Optimizing CPU resource usage"
    ],
    outcomes: [
      "Fully functional game implementation",
      "Robust save/load system",
      "Comprehensive error handling",
      "High test coverage",
      "Positive user feedback"
    ],
    futureImprovements: [
      "Graphical user interface",
      "Network multiplayer support",
      "AI opponent implementation",
      "Additional game modes"
    ]
  },
  {
    id: "personal-website",
    title: "Personal Website",
    content: "A modern, responsive portfolio website built using React and TypeScript, showcasing professional experience and projects. The site features a clean, user-friendly design with optimal performance and accessibility considerations.",
    images: [
      {
        url: "/images/website/homepage.jpg",
        caption: "Homepage design"
      },
      {
        url: "/images/website/portfolio.jpg",
        caption: "Portfolio section"
      },
      {
        url: "/images/website/mobile-view.jpg",
        caption: "Mobile responsive design"
      }
    ],
    technicalDetails: [
      "React 18 with TypeScript",
      "Tailwind CSS for styling",
      "Responsive design implementation",
      "SEO optimization",
      "Performance optimization techniques",
      "Automated deployment pipeline"
    ],
    challenges: [
      "Ensuring cross-browser compatibility",
      "Optimizing load times",
      "Implementing responsive design",
      "Managing state effectively",
      "Maintaining code organization"
    ],
    outcomes: [
      "Achieved 95+ PageSpeed score",
      "Implemented fully responsive design",
      "Created maintainable component structure",
      "Established efficient deployment workflow",
      "Integrated analytics tracking"
    ],
    futureImprovements: [
      "Blog section integration",
      "Dark mode implementation",
      "Interactive project previews",
      "Advanced animation effects"
    ]
  }
];