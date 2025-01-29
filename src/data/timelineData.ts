export interface TimelineItem {
  id: number;
  jobTitle: string;
  phase: string;
  location: string;
  isActive: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    jobTitle: "Baseball Star",
    phase: "Farmer Phase",
    location: "Vietnam",
    isActive: false
  },
  {
    id: 2,
    jobTitle: "Computer Builder",
    phase: "Being Useless Phase",
    location: "WA",
    isActive: false
  },
  {
    id: 3,
    jobTitle: "Astrophysicist",
    phase: "College Phase",
    location: "WA",
    isActive: false
  },
  {
    id: 4,
    jobTitle: "Electrical Engineer",
    phase: "Being Useful Phase",
    location: "MA",
    isActive: false
  },
  {
    id: 5,
    jobTitle: "Mechanical Engineer",
    phase: "Being Useful Phase",
    location: "MA",
    isActive: true
  }
];
