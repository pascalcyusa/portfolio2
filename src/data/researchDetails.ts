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
        content: "Played a key role in the development of a miniature ultrasonic anemometer using the TDK CH101 sensor for potential applications in Navy high-altitude UAVs. Achieved significant breakthroughs in measurement accuracy and system optimization.",
        id: "ultrasonic-anemometer",
        images: [
            {
                url: "/images/tdk-ch101/img1.jpeg",
                caption: undefined
            }
        ],
        achievements: [
            "Distance measurements within ± 0.1878 mm error margin",
            "Wind velocity measurements at ± 0.6454 m/s accuracy",
            "Developed ToF-airflow relationship analysis",
            "Working towards ±0.05 m/s wind velocity accuracy"
        ]
    },
    // pebl-curriculum
    {
        title: "Playful Engineering Based Learning (PEBL) Curriculum",
        content: "Developed comprehensive STEM curricula for K-12 students, focusing on practical engineering applications using LEGO and Arduino projects. Led the implementation of maker spaces across Rwanda, significantly impacting student engagement and learning outcomes.",
        id: "pebl-curriculum",
        images: [
            {
                url: "/images/lego-arduino/ceeo1.jpg",
                caption: undefined
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
