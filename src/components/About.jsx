import React from 'react'

const About = () => {
    return (
        <div className="bg-[#1e2530] text-white py-25 px-6 md:px-20 mt-60">
            <div className="space-y-15">

                <h2 className="flex text-4xl font-bold text-white justify-center">About Me</h2>

                <div className="flex space-x-3 max-w-7xl mx-auto flex-col md:flex-row items-center gap-10">

                    <div className="flex-1">
                        <img src="/Image/about-me.jpg" alt="About-Image" className="rounded-xl shadow-lg w-100 object-cover h-[75%]" />
                    </div>

                    <div className="flex-1 space-y-6">

                        <h3 className="text-2xl font-semibold text-white flex justify-center">Passionate Developer</h3>

                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">With just 1 year of experience in web development, I specialize in creating robust, scalable applications using modern technologies. My journey started with a curiosity about how websites work, and it has evolved into a passion for crafting exceptional digital experiences.</p>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding, you can find me contributing to the benefit of humanity by volunteering or mentoring aspiring developers</p>

                        <div className="grid grid-cols-2 gap-6">

                            <div className="bg-[#2a3142] px-6 py-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
                                <div className="text-gray-300">Projects Completed</div>
                            </div>

                            <div className="bg-[#2a3142] px-6 py-4 rounded-lg text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                                <div className="text-gray-300">Year Experience</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
