export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  achievements: string[];
  lab: string;
  period: string;
  image: string;
  link?: string;
}

export const researchData: ResearchProject[] = [
  {
    id: "ultrasonic-anemometer",
    title: "Ultrasonic Anemometer Development",
    description: "Played a key role in the development of a miniature ultrasonic anemometer using the TDK CH101 sensor for potential applications in Navy high-altitude UAVs. Achieved significant breakthroughs in measurement accuracy and system optimization.",
    achievements: [
      "Distance measurements within ± 0.1878 mm error margin",
      "Wind velocity measurements at ± 0.6454 m/s accuracy",
      "Developed ToF-airflow relationship analysis",
      "Working towards ±0.05 m/s wind velocity accuracy"
    ],
    lab: "Microscale Sensors and Systems Lab",
    period: "Jun 2024 - Present",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "stem-education",
    title: "STEM Education Innovation",
    description: "Developed comprehensive STEM curricula for K-12 students, focusing on practical engineering applications using LEGO and Arduino projects. Led the implementation of maker spaces across Rwanda, significantly impacting student engagement and learning outcomes.",
    achievements: [
      "Established maker spaces in 20+ Rwandan schools",
      "Impacted 769 students directly",
      "Increased engagement by 37%",
      "Created interactive engineering curricula"
    ],
    lab: "Tufts Center for Engineering Education and Outreach",
    period: "Mar 2023 - Present",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    link: "https://sites.tufts.edu/pebl/2023/10/02/rwandan-tufts-students-return-home-to-inspire-young-makers/"
  }
];