import { useState } from 'react';
import { Edit2, Plus, X } from 'lucide-react';
import { timelineData } from "@/data/timelineData";

interface TimelineItem {
  id: string;
  jobTitle: string;
  phase: string;
  isActive: boolean;
}

const Summary = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([
    {
      id: '1',
      jobTitle: 'Baseball Star',
      phase: 'Farmer Phase, Vietnam',
      isActive: false
    },
    {
      id: '2',
      jobTitle: 'Computer Builder',
      phase: 'Being Useless Phase, WA',
      isActive: false
    },
    {
      id: '3',
      jobTitle: 'Astrophysicist',
      phase: 'College Phase, WA',
      isActive: false
    },
    {
      id: '4',
      jobTitle: 'Electrical Engineer',
      phase: 'Being Useful Phase',
      isActive: false
    },
    {
      id: '5',
      jobTitle: 'Mechanical Engineer',
      phase: 'Being Useful Phase',
      isActive: true
    }
  ]);

  const [editing, setEditing] = useState<string | null>(null);
  const [newItem, setNewItem] = useState<Partial<TimelineItem> | null>(null);

  const handleEdit = (id: string) => {
    setEditing(id);
  };

  const handleSave = (id: string, updatedItem: Partial<TimelineItem>) => {
    setTimelineItems(items =>
      items.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setEditing(null);
  };

  const handleAdd = () => {
    setNewItem({ jobTitle: '', phase: '', isActive: false });
  };

  const handleSaveNew = () => {
    if (newItem?.jobTitle && newItem.phase) {
      setTimelineItems(items => [...items, {
        id: String(Date.now()),
        jobTitle: newItem.jobTitle,
        phase: newItem.phase,
        isActive: false
      }]);
      setNewItem(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-8">SUMMARY</h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        Thanks for checking out my portfolio! Whether you're a recruiter, fellow engineer, friend, or lost stranger, I hope you enjoy the ride.
      </p>
      
      <div className="relative">
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            <div className="flex-1 ml-8">
              <div className="h-0.5 bg-gray-200 relative">
                {timelineData.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="absolute" 
                    style={{ left: `${(index / (timelineData.length - 1)) * 100}%` }}
                  >
                    <div className="relative">
                      <div className={`min-w-[120px] px-3 py-2 -translate-x-1/2 text-center rounded-md shadow-md ${
                        item.isActive ? 'bg-orange-500 text-white' : 'bg-green-200'
                      }`}>
                        {item.jobTitle}
                      </div>
                      <div className="text-sm text-gray-600 mt-1 text-center -translate-x-1/2">
                        {item.phase}, {item.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;