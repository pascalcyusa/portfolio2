export interface TimelineItem {
  id: number;
  jobTitle: string;
  phase: string;
  isActive: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    jobTitle: "Science enthusiast",
    phase: "Young Dreamer",
    isActive: false
  },
  {
    id: 2,
    jobTitle: "I thought I had it figured out",
    phase: "College Freshman",
    isActive: false
  },
  {
    id: 3,
    jobTitle: "Aspiring Mechanical engineer",
    phase: "Junior",
    isActive: true
  },
  {
    id: 5,
    jobTitle: "Mechanical Engineer",
    phase: "This is the dream",
    isActive: false
  }
];
