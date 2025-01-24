import * as React from "react";

const Timeline = () => {
    const events = [
        { year: "2020", description: "Started my journey as a software developer." },
        { year: "2021", description: "Joined XYZ company as a junior developer." },
        { year: "2022", description: "Promoted to mid-level developer." },
        { year: "2023", description: "Worked on several high-profile projects." },
        // Add more events as needed
    ];

    return (
        <div className="timeline-container overflow-x-scroll flex space-x-8 py-4">
            {events.map((event, index) => (
                <div key={index} className="timeline-item min-w-[200px] bg-gray-200 p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg">{event.year}</h3>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;