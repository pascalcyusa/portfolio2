export interface PortfolioDetail {
  title: string;
  content: string;
  id: string;
  images: {
    url: string;
    caption: string;
  }[];
  videos?: {
    url: string;
    caption: string;
  }[];
  technicalDetails: string[];
  challenges: string[];
  outcomes: string[];
  futureImprovements?: string[];
  pdfUrl?: string;
}

export const portfolioDetails: PortfolioDetail[] = [
  // navigate-to-pewter-city
  {
    title: "Navigate Back to Pewter City (Navigation Using Object Recognition)",
    content: "A Create 3 Robot ™️ robot designed to navigate through a maze with 90-degree turns based on object detection.",
    id: "navigate-to-pewter-city",
    images: [
      {
        url: "/images/navigate-to-pewter-city/img1.jpeg",
        caption: "The Create 3 Robot with a camera mount",
      },
      {
        url: "/images/navigate-to-pewter-city/img4.jpeg",
        caption: undefined
      },
      {
        url: "/images/navigate-to-pewter-city/img6.jpeg",
        caption: undefined
      },
    ],
    videos: [
      {
        url: "https://youtube.com/shorts/U1IJRvnf8W8?feature=share",
        caption: "Video demonstration of the robot in action"
      },
      {
        url: "https://youtube.com/shorts/m2KWtcken6A?feature=share",
        caption: undefined,
      }
    ],
    technicalDetails: [
      "Create 3 robot platform integration",
      "Object detection system for 6-inch proximity sensing",
      "90-degree turn calibration system",
      "Real-time path adjustment capabilities",
      "Custom navigation algorithm implementation",
      "Sensor fusion for accurate positioning"
    ],
    challenges: [
      "Implementing precise 90-degree turns without prior directional knowledge",
      "Developing reliable object detection at 6-inch distance",
      "Creating adaptive navigation system for unknown object orientations",
      "Integrating object recognition for the Nidoran challenge",
      "Optimizing response time for real-time decision making",
      "Ensuring consistent performance without tape or hot glue attachments"
    ],
    outcomes: [
      "Successfully implemented dynamic turn decision system",
      "Achieved accurate object detection and distance measurement",
      "Developed robust navigation algorithm for maze completion",
      "Created engaging final interaction at maze completion",
      "Implemented optional Nidoran recognition capability",
      "Demonstrated reliable performance in competition conditions"
    ],
    futureImprovements: [
      "Enhance object recognition accuracy for similar-looking objects",
      "Implement machine learning for improved decision making",
      "Add multi-sensor fusion for more precise navigation",
      "Develop advanced path optimization algorithms",
      "Create more interactive end-of-maze celebrations"
    ]
  },
  // roomba-gym-battle
  {
    title: "Gym Battle - Learning to Dodge (Airtable Remote Operation)",
    content: "A Create 3 Robot ™️ robot that can be controlled remotely using an Airtable.",
    id: "roomba-gym-battle",
    images: [
      {
        url: "/images/navigate-to-pewter-city/img1.jpeg",
        caption: undefined
      },
      {
        url: "/images/navigate-to-pewter-city/img2.jpeg",
        caption: undefined
      },
    ],
    videos: [
      {
        url: "https://youtube.com/shorts/04uJjxwYFIk?feature=share",
        caption: "Video demonstration of the robot in action"
      }
    ],
    technicalDetails: [
      "Create 3 robot integration",
      "Airtable-based remote control system",
      "Real-time camera streaming setup",
      "Obstacle detection and avoidance logic",
      "Remote command processing and execution"
    ],
    challenges: [
      "Implementing reliable remote control through Airtable",
      "Setting up stable video streaming from Nolop",
      "Coordinating robot movement without direct visual contact",
      "Managing network latency and command timing"
    ],
    outcomes: [
      "Successfully implemented remote robot control system",
      "Achieved reliable obstacle avoidance in maze navigation",
      "Established effective remote visual feedback system",
      "Demonstrated remote operation capabilities"
    ],
    futureImprovements: [
      "Enhance command response time and precision",
      "Implement autonomous obstacle avoidance features",
      "Add multiple camera angles for better navigation",
      "Develop more sophisticated control interface"
    ],
    pdfUrl: undefined
  },

  // camera-line-follower
  {
    title: "Traverse Victory Road (Camera Line Follower)",
    content: "A line-following robot designed to navigate paths using a Pi Camera for line detection. ",
    id: "camera-line-follower",
    images: [
      {
        url: "/images/camera-line-follower/img1.jpeg",
        caption: "Left view of the line follower robot"
      },
      {
        url: "/images/camera-line-follower/img2.jpeg",
        caption: undefined
      },
      {
        url: "/images/camera-line-follower/img3.jpeg",
        caption: undefined
      }
    ],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=kxjFOwbjV9U",
        caption: "Video demonstration of the robot in action"
      }
    ],
    technicalDetails: [
      "",

    ],
    challenges: [
      "",

    ],
    outcomes: [
      "",

    ],
    futureImprovements: [
      "",
    ],
    pdfUrl: undefined
  },

  // IR-line-follower 
  {
    id: "IR-line-follower",
    title: "Scout A Route (IR Line Follower)",
    content: "This robot follows a line using an IR sensor.",
    images: [
      {
        url: "/images/IR-line-follower/img1.png",
        caption: "Assembled IR line follower"
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
    ],
    videos: [
      {
        url: "https://youtu.be/Y7LEzXW6B6A",
        caption: "IR line follower in action"
      },
      {
        url: "https://youtu.be/IzmCanhjyl0",
        caption: undefined
      }
    ]
  },

  // Project 10
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
        caption: undefined
      },
      {
        url: "/images/pokemon-ball-sorter/ball-sorter-3.jpeg",
        caption: undefined
      },
    ],
    videos: [
      {
        url: "https://youtu.be/UhgyvbBYM8Y",
        caption: "Ball sorter in action"
      }
    ],
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
  // Project 9
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
    outcomes: undefined,
    futureImprovements: [
      "Integration with computer vision for autonomous operation",
      "Wireless control capabilities",
      "Adding wheels to the system to make the robot move on its own"
    ]
  },

  // Project 8
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

  // Project 7
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
    pdfUrl: "https://drive.google.com/file/d/18hf8kmzOOd0wp9jBr4RTQsGvo0u0M9H_/view?usp=sharing"
  },

  // Project 6
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
    videos: [
      {
        url: "https://youtube.com/shorts/POaRSqfHcnQ",
        caption: "Treat Dispenser in action"
      }
    ],
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
    pdfUrl: "https://tufts.box.com/s/3f1i93cj1kykrx0lybhsyjb9i06axet7"
  },

  // Project 5
  {
    id: "tdk-ch101",
    title: "TDK CH101 Ultrasonic Sensor Automation",
    content: "This project focused on developing an automated data collection system for TDK's CH101 ultrasonic sensors, streamlining the testing and validation process through sophisticated software integration.",
    images: [
      {
        url: "/images/tdk-ch101/img1.jpeg",
        caption: "Sensor Mount"
      },
      {
        url: "https://invensense.tdk.com/wp-content/uploads/2019/09/rp-mod-ch101.png",
        caption: "CH101 Sensor © TDK Invensense"
      },
      {
        url: "/images/tdk-ch101/img2.jpeg",
        caption: "Experiment Setup"
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
    futureImprovements: undefined
  },
  // Project 4
  {
    id: "lego-arduino",
    title: "LEGO & Arduino Education",
    content: "An innovative educational initiative combining LEGO Mindstorms with Arduino technology to create engaging STEM learning experiences for students. The project focused on hands-on learning and practical application of programming concepts.",
    images: [
      {
        url: "/images/lego-arduino/ceeo1.jpg",
        caption: "Robot car controlled with Arduino"
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

  // Project 3
  {
    "title": "Zina",
    "content": "Zina is a social networking application designed to help users manage and visualize their personal and professional connections. The app allows users to add, edit, and delete contacts, and provides a graphical representation of their network.",
    "id": "social-networking-app",
    "images": [
      {
        "url": "/images/social-networking-app/img1.jpeg",
        "caption": "Main Interface"
      },
      {
        "url": "/images/social-networking-app/img2.jpeg",
        "caption": "Graph Display"
      }
    ],
    "technicalDetails": [
      "Developed using Swift and SwiftUI",
      "Supports iOS platform",
      "Utilizes Core Data for persistent storage",
      "Includes unit and UI tests for reliability"
    ],
    "challenges": [
      "Implementing a smooth and intuitive user interface",
      "Ensuring data consistency across the network graph and list views",
      "Managing bidirectional connections efficiently"
    ],
    "outcomes": [
      "Successfully created a user-friendly app for managing connections",
      "Provided a visual representation of the user's network",
      "Enabled easy addition and editing of contacts"
    ],
    "futureImprovements": [
      "Enhance the graphical representation with more interactive features",
      "Add support for importing contacts from external sources",
      "Improve performance for large networks"
    ]
  },

  // Project 2
  {
    id: "splendor-game",
    title: "Splendor Game",
    content: "Terminal-based implementation of the Splendor board game in C++.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&w=800&q=80",
        caption: "Terminal gameplay interface"
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
    title: "Portfolio",
    content: "A modern, responsive portfolio website built using React and TypeScript, showcasing professional experience and projects. The site features a clean, user-friendly design with optimal performance and accessibility considerations.",
    images: [
      {
        url: "/images/personal-website/img1.png",
        caption: "Homepage design"
      },
      {
        url: "/images/personal-website/img2.png",
        caption: "Portfolio section"
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
    futureImprovements: undefined
  }
];