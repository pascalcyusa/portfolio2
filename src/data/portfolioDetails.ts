export interface PortfolioDetail {
  title: string;
  content: string;
  id: string;
  images: {
    url: string;
    caption: string;
  }[];
  video?: {
    url: string;
    caption: string;
  };
  technicalDetails: string[];
  challenges: string[];
  outcomes: string[];
  futureImprovements?: string[];
  pdfUrl?: string;
}

export const portfolioDetails: PortfolioDetail[] = [
  // Project 7
  {
    id: "IR-line-follower",
    title: "Scout A Route (IR Line Follower)",
    content: "This project involves creating a robot that follows a line using an IR sensor, adhering to specific constraints and utilizing available resources.",
    images: [
      {
        url: "/images/ir-line-follower/design.jpeg",
        caption: "Design of the IR line follower"
      },
      {
        url: "/images/ir-line-follower/assembly.jpeg",
        caption: "Assembled IR line follower"
      },
      {
        url: "/images/ir-line-follower/demo.jpeg",
        caption: "IR line follower in action"
      }
    ],
    technicalDetails: [
      "IR sensor for line detection",
      "Predefined path selection",
      "Stepper motor control for movement",
      "Utilization of course kit materials"
    ],
    challenges: [
      "Ensuring accurate line following",
      "Adhering to project constraints",
      "Efficient use of available resources"
    ],
    outcomes: [
      "Successful line following demonstration",
      "Compliance with project constraints",
      "Effective use of provided materials"
    ],
    futureImprovements: [
      "Enhancing sensor accuracy",
      "Exploring alternative path algorithms",
      "Improving speed and efficiency"
    ]
  },

  // Project 6
  {
    id: "pokemon-ball-sorter",
    title: "Pokémon Ball Sorter",
    content: "A robot that automatically detects and sorts colored balls using color detection and servo positioning.",
    images: [
      {
        url: "/images/pokemon-ball-sorter/cad2.png",
        caption: "CAD design of the ball sorter mechanism"
      },
      {
        url: "/images/pokemon-ball-sorter/ball-sorter-1.jpeg",
        caption: "Final assembled system"
      },
      {
        url: "/images/pokemon-ball-sorter/ball-sorter-2.jpeg",
        caption: "Final assembled system"
      },
      {
        url: "/images/pokemon-ball-sorter/ball-sorter-3.jpeg",
        caption: "Final assembled system"
      },
    ],
    video: {
      url: "/images/pokemon-ball-sorter/video.mov",
      caption: "Ball sorter in action"
    },
    technicalDetails: [
      "Reads RGB values from color sensor",
      "Classifies colors based on RGB intensity ratios",
      "Currently detects: Red, Green, Blue, Yellow",
      "Stepper motor runs in separate thread for continuous operation",
      "Servo motor moves to specific angles based on detected color",
      "Servo returns to rest position after each sort"
    ],
    challenges: [
      "Calibrating the color sensor to work in most lighting conditions",
      "Implementing a very accurate sorting mechanism",
      "Making sure all processes are running smoothly and that the ball feeding mechanism doesn't jam"
    ],
    outcomes: undefined,
    futureImprovements: [
      "Currently the robot doesn't accurately place balls to the corresponfing color bin. We plan to calibrate the servo to make sure it moves each ball to the correct slot"
    ]
  },
  // Project 5
  {
    id: "pokemon-gripper",
    title: "Pokémon Ball Gripper",
    content: "Mechanical gripper system designed to safely handle and transport a Poké Ball using stepper motor actuation.",
    images: [
      {
        url: "/images/pokemon-gripper/cad.png",
        caption: "CAD design of the gripper mechanism"
      },
      {
        url: "/images/pokemon-gripper/gripper.jpeg",
        caption: "Final assembled gripper system"
      },
      {
        url: "/images/pokemon-gripper/gripper.jpeg",
        caption: "Gripper in action"
      }
    ],
    technicalDetails: [
      "Custom-designed 3D printed components using PLA material",
      "Raspberry Pi 4 Model B",
      "NEMA 17 stepper motors with 1.8° step angle",
      "Custom pulley system for closing and opening the gripper cups",
    ],
    challenges: [
      "Maintaining consistent grip during horizontal movement",
      "Minimizing system weight while ensuring structural integrity",
      "Calibrating the stepper motors to make sure they operate correctly",
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
      "Adding wheels to the system to make the robot move on its own"
    ]
  },

  // Project 10
  {
    id: "ballon-dor-replica",
    title: "Ballon d’Or Replica",
    content: "Designed and fabricated a replica of the Ballon d’Or trophy using sand casting and lost wax casting techniques, achieving a high-quality final product closely resembling the original.",
    images: [
      {
        url: "/images/ballon-dor-replica/dor2.jpeg",
        caption: "Final polished Ballon d’Or replica"
      },
      {
        url: "/images/ballon-dor-replica/dor1.jpeg",
        caption: undefined
      },
      {
        url: "/images/ballon-dor-replica/dor3.jpeg",
        caption: undefined
      },
      {
        url: "/images/ballon-dor-replica/dor4.jpeg",
        caption: undefined
      },
      {
        url: "/images/ballon-dor-replica/dor5.jpeg",
        caption: undefined
      },
      {
        url: "/images/ballon-dor-replica/dor6.jpeg",
        caption: undefined
      },
      {
        url: "/images/ballon-dor-replica/dor7.jpeg",
        caption: undefined
      },
      {
        url: "/images/ballon-dor-replica/dor8.jpeg",
        caption: undefined
      }
    ],
    technicalDetails: [
      "Designed using SolidWorks",
      "Used sand casting for one half of the ball",
      "Applied lost wax casting and welding to join halves",
      "Refined surface finish for authenticity"
    ],
    challenges: [
      "Achieving accurate proportions and details",
      "Ensuring proper fusion of cast parts",
      "Refining the final surface for an authentic look"
    ],
    outcomes: [
      "Successfully created a visually accurate Ballon d’Or replica",
      "Demonstrated advanced casting techniques",
      "Achieved a well-polished final product"
    ],
    futureImprovements: [
      "Enhancing detail precision in casting",
      "Exploring alternative finishing techniques",
      "Experimenting with different metal compositions"
    ]
  },

  // Project 9
  {
    id: "hip-truss-bridge",
    title: "Hip Truss Bridge",
    content: "Built a hip truss bridge to better understand trusses, internal load calculations, and structural stability using both theoretical and computational methods.",
    images: [
      {
        url: "/images/hip-truss-bridge/truss2.png",
        caption: "SolidWorks model of the truss bridge"
      },
      {
        url: "/images/hip-truss-bridge/truss3.png",
        caption: "FEA analysis of the truss bridge"
      },
      {
        url: "/images/hip-truss-bridge/truss4.png",
        caption: "Bridge assembly using acrylic and glue"
      },
      {
        url: "/images/hip-truss-bridge/truss1.png",
        caption: "Load testing on the assembled bridge"
      }
    ],
    technicalDetails: [
      "Designed using SolidWorks",
      "Built using acrylic components joined with glue",
      "Calculated internal loads using theoretical methods",
      "Performed FEA analysis for verification"
    ],
    challenges: [
      "Ensuring structural integrity under load",
      "Aligning theoretical calculations with FEA results",
      "Accurate assembly of acrylic components"
    ],
    outcomes: [
      "Bridge successfully supported ~200g of load",
      "Theoretical internal load calculations matched FEA analysis",
      "Demonstrated structural stability and feasibility"
    ],
    futureImprovements: [
      "Exploring alternative materials for increased load capacity",
      "Refining FEA models for greater accuracy",
      "Introducing joint reinforcements for improved durability"
    ],
    pdfUrl: "/images/hipp-truss-bridge/hip-truss.pdf"
  },

  // Project 8
  {
    id: "dog-treat-dispenser",
    title: "Dog Treat Dispenser",
    content: "Designed a wheelchair-mounted dog treat dispenser for Ryan, a user with a spinal cord injury. The goal was to create a user-friendly dispenser requiring minimal physical effort while preventing unintended access by the dog.",
    images: [
      {
        url: "/images/dog-treat-dispenser/dispens1.png",
        caption: "CAD model of the dog treat dispenser"
      },
      {
        url: "/images/dog-treat-dispenser/blueprint.png",
        caption: "Blueprint of the dog treat dispenser"
      }
    ],
    video: {
      url: "/images/dog-treat-dispenser/video.MOV",
      caption: "Treat Dispenser in action"
    },
    technicalDetails: [
      "3D printing and laser cutting for prototyping",
      "Clamping mechanism for easy attachment",
      "Controlled treat release to prevent multiple dispenses",
      "Focus on affordability, durability, and functionality"
    ],
    challenges: [
      "Ensuring minimal physical effort for operation",
      "Preventing unintended access by the dog",
      "Adjusting the opening size to prevent multiple treats from dispensing"
    ],
    outcomes: [
      "Successfully delivered a functional prototype",
      "Resolved initial dispensing issues",
      "Met user needs for secure and easy treat dispensing"
    ],
    futureImprovements: [
      "Adding motorization for automated dispensing",
      "Increasing storage capacity",
      "Enhancing aesthetics for better usability and appearance"
    ],
    pdfUrl: "/images/dog-treat-dispenser/blueprint.pdf"
  },

  // Project 4
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    content: "This project focused on developing an automated data collection system for TDK's CH101 ultrasonic sensors, streamlining the testing and validation process through sophisticated software integration.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80",
        caption: "Testing setup with multiple sensors"
      },
      {
        url: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80",
        caption: "LabVIEW interface design"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
  // Project 3
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    content: "An innovative educational initiative combining LEGO Mindstorms with Arduino technology to create engaging STEM learning experiences for students. The project focused on hands-on learning and practical application of programming concepts.",
    images: [
      {
        url: "/images/lego-arduino/ceeo1.jpg",
        caption: "Students assembling robots"
      },
      {
        url: "/images/lego-arduino/ceeo2.jpg",
        caption: "Programming workshop in action"
      },
      {
        url: "/images/lego-arduino/ceeo2.jpg",
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
  // Project 2
  {
    id: "splendor-game",
    title: "Splendor Game",
    content: "A comprehensive C++ implementation of the popular board game Splendor, featuring a terminal-based interface and robust game mechanics. The project demonstrates strong object-oriented programming principles and game state management.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
        caption: "Terminal gameplay interface"
      },
      {
        url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
        caption: "Game architecture diagram"
      },
      {
        url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
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
  // Project 1
  {
    id: "personal-website",
    title: "Personal Website",
    content: "A modern, responsive portfolio website built using React and TypeScript, showcasing professional experience and projects. The site features a clean, user-friendly design with optimal performance and accessibility considerations.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        caption: "Homepage design"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        caption: "Portfolio section"
      },
      {
        url: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
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