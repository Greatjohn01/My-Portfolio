import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const contacts = [
    {
        icon: <FaRegEnvelope size={24} />,
        label: 'Email',
        detail: 'hezzydgreat@gmail.com',
    },
    {
        icon: <FaTwitter size={24} />,
        label: 'X',
        detail: '@Greatjohn01',
        link: "https://twitter.com/Greatjohn01"
    },
    {
        icon: <FaLinkedin size={24} />,
        label: 'LinkedIn',
        detail: 'Great John',
        link: "https://www.linkedin.com/in/greatjohn01"
    },
    {
        icon: <FaGithub size={24} />,
        label: 'GitHub',
        detail: 'Greatjohn01',
        link: "https://github.com/Greatjohn01"
    },
];

const Contact = ({ onSendMessageClick }) => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-purple-900 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Let's Work Together</h2>
                <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8'></div>
                <p className="text-xl dark:text-gray-300 max-w-3xl mx-auto mb-12">
                    I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life!
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {contacts.map((contact, idx) => {
                        const clickable = !!contact.link;
                        const content = (
                            <div className="flex flex-col items-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {contact.icon}
                                </div>
                                <p className="text-lg font-semibold text-white mb-2">{contact.label}</p>
                                <p className="text-gray-300">{contact.detail}</p>
                            </div>
                        );
                        return (
                            <div
                                key={idx}
                                className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
                            >
                                {clickable ? (
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center w-full"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="bg-gray-800 max-w-xl mx-auto rounded-xl py-10 px-6 md:px-12 shadow-lg">
                    <h3 className="text-2xl md:text-2xl font-semibold mb-4 text-white">Ready to start a project?</h3>
                    <p className="text-gray-300 mb-6">
                        I'm available for freelance work and full-time opportunities.
                    </p>
                    <button
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        onClick={onSendMessageClick}
                    >
                        <FaRegEnvelope /> Send Message
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Contact
