import React from 'react'

const skills = [
    {
        category: "Frontend Development",
        list: [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 75 },
            { name: "React", level: 75 },
            { name: "Tailwind CSS", level: 70 }
        ],
    },

    {
        category: "Backend Development",
        list: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 75 },
            { name: "MongoDB", level: 70 },
        ],
    },
    
    {
        category: "DevOps & Tools",
        list: [
            { name: "Git", level: 80 },
        ],
    }
];


const Skills = () => {
    return (
        <div className="bg-[#0f172a] text-white py-20 px-6 md:px-12">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills & Expertise
                    </h2>

                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((group, i) => (
                        <div key={i} className="bg-[#1e293b] rounded-2xl p-8 shadow-md ">
                            <h3 className="text-2xl font-semibold text-white mb-6 text-center">{group.category}</h3>

                            <div className="space-y-4">

                                {group.list.map((skill, index) => (
                                    <div key={index} className="mb-4 space-y-2">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Skills
