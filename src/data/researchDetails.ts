import googlePhotosData from './google_photos_data.json';

interface Photo {
    id: string;
    url: string;
    filename: string;
}

const photos: Photo[] = googlePhotosData;

export interface ResearchDetail {
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
    achievements: string[];
    pdfUrl?: string;
}

export const researchDetails: ResearchDetail[] = [
    // ultrasonic-anemometer
    {
        title: "Ultrasonic Anemometer",
        content: "The Microscale Sensors and Systems Lab is a state of the art lab at Tufts that focuses on the design, fabrication, and testing of microscale sensors and systems. My research has area has been on the development of a miniature ultrasonic anemometer using the TDK CH101 sensor. This has potential applications in Navy high-altitude UAVs, and low-pressure environments on Mars.",
        id: "ultrasonic-anemometer",
        images: [
            {
                url: "/images/tdk-ch101/img1.jpeg",
                caption: "TDK CH101 Sensor used to measure flow. Here, the sensor is measuring flow at standard room conditions."
            }
        ],
        achievements: [
            "Distance measurements within ± 0.1878 mm error margin",
            "Wind velocity measurements at ± 0.6454 m/s accuracy",
            "Working towards ±0.05 m/s wind velocity accuracy"
        ],
        pdfUrl: "https://tuftscloud-my.sharepoint.com/:b:/g/personal/jcyusa01_tufts_edu/EQ3-R-EdM6tPplHGKzaGvvkB7qgCPYrTeh75C466yeMHew?e=L1lMAA"
    },
    // ceeo-outreach
    {
        title: "Engineering Education Outreach",
        content: "As an Outreach Learning Fellow at Tufts University's Center for Engineering Education and Outreach (CEEO), I’ve had the opportunity to engage with students from underrepresented communities and support their learning in STEM. What excites me most about being an outreach learning fellow is the chance to inspire curiosity and build confidence in young learners through hands-on activities and creative problem-solving.",
        id: "ceeo-outreach",
        images: [
            {
                url: "/images/ceeo-outreach/img1.jpeg",
                caption: undefined
            },
            {
                url: "/images/ceeo-outreach/img5.jpeg",
                caption: undefined
            }
        ],
        videos: [
            {
                url: "https://youtube.com/shorts/coV66ifPdfU",
                caption: "A Robot Grabber made by a 7th grade student at Winter Hill Community School"
            }
        ],
        achievements: [
            "Designed and tested engineering lesson plans for K–12 students",
            "Facilitated hands-on learning activities that introduced core STEM principles",
            "Collaborated with educators and faculty to align outreach goals with DEIJ values"
        ]
    },
    // pebl-curriculum
    {
        title: "Playful Engineering Based Learning (PEBL) Curriculum",
        content: "Developed comprehensive STEM curricula for K-12 students, focusing on practical engineering applications using LEGO and Arduino projects. Led the implementation of maker spaces across Rwanda, significantly impacting student engagement and learning outcomes.",
        id: "pebl-curriculum",
        images: [
            {
                url: "/images/ceeo-outreach/img2.jpg",
                caption: "An Arduino robot presented by one of the students in the Makerspace competition at Maranyundo"
            },
            {
                url: "/images/ceeo-outreach/img3.jpg",
                caption: "The team that won first place at the Maranyundo Makerspace competition"
            }
        ],
        achievements: [
            "Established maker spaces in 20+ Rwandan schools",
            "Impacted 769 students directly",
            "Increased engagement by 37%",
            "Created interactive engineering curricula"
        ]
    }
];
