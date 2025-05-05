import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import ResearchEntry from "@/components/ResearchEntry";
import { researchData } from "@/data/researchData";
import { FilterBadge } from "@/components/ui/filter-badge";
import { useState } from "react";

const Research = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Get unique categories from researchData
    const categories = Array.from(new Set(researchData.map(research => research.category)));

    // Filter research items based on selected categories
    const filteredResearch = selectedCategories.length > 0
        ? researchData.filter(research => selectedCategories.includes(research.category))
        : researchData;

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div>
                <Navigation />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <div className="mb-16 flex flex-wrap gap-4">
                        {/* Render filter badges */}
                        {categories.map(category => (
                            <FilterBadge
                                key={category}
                                label={category}
                                onClick={() => toggleCategory(category)}
                                variant="default"
                                selected={selectedCategories.includes(category)} // Pass selected state
                            />
                        ))}
                    </div>

                    {filteredResearch.map((research, index) => (
                        <div key={research.id} id={research.id}>
                            <ResearchEntry
                                research={research}
                                isReversed={index % 2 === 0}
                            />
                            {index < filteredResearch.length - 1 && (
                                <Separator className="my-16 opacity-30" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Research;