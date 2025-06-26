import React, { useEffect, useState } from "react";

const skills = [
  { name: "Lawn Renovation", percentage: 80 },
  { name: "Landscaping Design", percentage: 90 },
  { name: "Garden Maintenance", percentage: 75 },
  { name: "Soil Improvement", percentage: 90 },
];

const OurSkills = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setAnimatedPercentages((prev) => {
          const updated = [...prev];
          if (updated[index] < skill.percentage) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 15);
    });

    return () => intervals.forEach((i) => clearInterval(i));
  }, []);

  return (
    <section className="py-12 px-4 w-4/5 mx-auto">
      <h2 className="text-3xl font-bold text-green-900 mb-8">Our Skills</h2>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-green-900 font-semibold">{skill.name}</span>
              <span className="text-green-900 font-semibold">
                {animatedPercentages[index]}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div
                className="bg-lime-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${animatedPercentages[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSkills;
