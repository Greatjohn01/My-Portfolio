"use client";
import React, { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const ReachMe = () => {
    const formRef = useRef();
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(formRef.current);
        const loadingToast = toast.loading("Sending...");

        try {
            const response = await fetch("https://formspree.io/f/mnnvbadg", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                formRef.current.reset();
                toast.success("✅ Message sent successfully!", { id: loadingToast });
            } else {
                toast.error("❌ Something went wrong. Please try again.", {
                    id: loadingToast,
                });
            }
        } catch (err) {
            toast.error("❌ Network error. Please check your internet.", {
                id: loadingToast,
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-slate-900 p-18">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="px-6 md:px-20 py-0 mb-0"
            >
                <Toaster position="top-center" reverseOrder={false} />
                {/* Heading */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl font-bold mb-4   bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white max-w-2xl mx-auto"
                    >
                        Have a project in mind or just want to say hello? I'd love to hear
                        from you. Send me a message and I'll respond as soon as possible.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 p-3 rounded-full shadow-md">
                                <MdOutlineMail className=" text-blue-800 " />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-800">Email</p>
                                <p className="text-white">hezzydgreat@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-green-100 p-3 rounded-full shadow-md">
                                <FaPhoneAlt className="text-blue-400 h-[80%] " />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-800">Phone</p>
                                <p className="text-white">+234 816 438 5211</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-purple-100 p-3 shadow-md rounded-full">
                                <svg
                                    className="w-6 h-6  text-purple-500"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-800">Location</p>
                                <p className="text-white">Bayelsa State, Nigeria</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                            <p className="font-semibold mb-1 text-blue-800">Response Time</p>
                            <p className="text-white text-sm">
                                I typically respond to messages within 24 hours during business
                                days. For urgent inquiries, please mention it in your message
                                subject line.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your name"
                                className="w-full p-3 border rounded-md focus:outline-none text-white"
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="your.email@example.com"
                                className="w-full p-3 border rounded-md focus:outline-none text-white"
                                required
                            />
                        </div>
                        <input
                            name="subject"
                            type="text"
                            placeholder="What's this about?"
                            className="w-full p-3 border rounded-md focus:outline-none text-white"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Tell me about your project or just say hello..."
                            className="w-full p-3 border rounded-md h-40 resize-y focus:outline-none text-white"
                            required
                        />
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-900 text-white p-3 rounded-md flex justify-center items-center gap-2 ${submitting ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 2L11 13" />
                                <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                            </svg>
                            {submitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                </div>
            </motion.div>
        </div>
    );
};

export default ReachMe;
