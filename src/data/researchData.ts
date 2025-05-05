import googlePhotosData from './google_photos_data.json';

export interface ResearchItem {
  id: string;
  title: string;
  category: string;
  lab: string;
  image: string;
  description: string;
  features: string[];
  period: string;
  link?: string;
}

export const researchData: ResearchItem[] = [
  // ultrasonic-anemometer
  {
    id: "ultrasonic-anemometer",
    title: "Ultrasonic Anemometer",
    category: "MEMS / Sensors",
    lab: "Microscale Sensors and Systems Lab",
    image: "/images/tdk-ch101/img1.jpeg",
    description: "Played a key role in the development of a miniature ultrasonic anemometer using the TDK CH101 sensor for potential applications in Navy high-altitude UAVs. Achieved significant breakthroughs in measurement accuracy and system optimization.",
    features: undefined,
    period: "Jun 2024 - Present",
    link: "https://sites.tufts.edu/senselab/research/#:~:text=Miniaturized%20Ultrasonic%20Anemometer"
  },
  // pebl-curriculum
  {
    id: "pebl-curriculum",
    title: "Playful Engineering Based Learning (PEBL) Curriculum",
    category: "Education",
    lab: "Tufts Center for Engineering Education and Outreach",
    image: "/images/lego-arduino/ceeo1.jpg",
    description: "Developed comprehensive STEM curricula for K-12 students, focusing on practical engineering applications using LEGO and Arduino projects. Led the implementation of maker spaces across Rwanda, significantly impacting student engagement and learning outcomes.",
    features: undefined,
    period: "Mar 2023 - Present",
    link: "https://sites.tufts.edu/pebl/2023/10/02/rwandan-tufts-students-return-home-to-inspire-young-makers/"
  }
];