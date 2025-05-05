import { ArrowUpRight } from "lucide-react";
import { ResearchItem } from "@/data/researchData";
import { useState } from "react";
import { ResearchModal } from "./ResearchModal";

interface ResearchEntryProps {
    research: ResearchItem;
    isReversed: boolean;
}

const ResearchEntry = ({ research, isReversed }: ResearchEntryProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                <div className={`${isReversed ? "md:order-2" : "md:order-1"}`}>
                    <div
                        className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <img
                            src={research.image}
                            alt={research.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className={`${isReversed ? "md:order-1" : "md:order-2"}`}>
                    <h2 className="text-3xl font-bold mb-4">{research.title}</h2>
                    <p className="text-gray-700 mb-4">{research.description}</p>

                    <div className="bg-gray-50 p-4 rounded-lg max-w-md mb-6">
                        <h3 className="font-semibold mb-2 text-sm">Key Features</h3>
                        <ul className="space-y-1 text-gray-600 text-sm">
                            {research.features.map((feature, i) => (
                                <li key={i}>• {feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-gray-600">
                        <p className="mb-2">{research.category}</p>
                        <p className="mb-4">{research.period}</p>
                        <div className="flex items-center gap-4">
                            {research.link && (
                                <a
                                    href={research.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center"
                                    style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                                >
                                    GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
                                </a>
                            )}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center"
                                style={{ color: '#a5c8cf', transition: 'color 0.2s ease' }}
                                onMouseOver={(e) => e.currentTarget.style.color = '#e3cdb8'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#a5c8cf'}
                            >
                                Learn More <ArrowUpRight className="ml-1 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ResearchModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                researchID={research.id}
            />
        </div>
    );
};

export default ResearchEntry;