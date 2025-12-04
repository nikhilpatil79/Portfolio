'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaStar } from 'react-icons/fa'

const experiences = [
    {
        company: 'Kiaan AgrowTech Pvt. Ltd.',
        location: 'Bangalore',
        position: 'Software Developer – Full Stack & GenAI',
        period: 'June 2024 – Present',
        responsibilities: [
            'Involved in development of AgriTech SAAS platform serving 50+ active users',
            'Integrated deep learning models for plant disease detection with 85% accuracy',
            'Developed AI chatbot using LangChain for agricultural consultancy',
            'Architected microservices backend with Node.js and Express.js',
            'Implemented real-time features using WebSockets for live updates',
        ],
        impact: 'Increased farmer productivity by 35% through early disease detection',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        company: 'Independent Full-Stack Developer',
        location: 'Independent',
        position: 'Freelance Developer',
        period: '2023 – 2025',
        responsibilities: [
            'Delivered 5+ custom web and mobile applications for clients',
            'Specialized in MERN stack and React Native development',
            'Developed food ordering, sentiment analysis, and recipe apps',
            'Provided end-to-end solutions from requirements to deployment',
            'Maintained 100% client satisfaction with timely delivery',
        ],
        technologies: 'React, Node.js, React Native, MongoDB, Flask, Python',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        company: 'AiROBOSOFT (AICTE India)',
        location: 'Bangalore',
        position: 'AI/ML Intern',
        period: '2023',
        responsibilities: [
            'Built sentiment analysis web app achieving 90%+ accuracy',
            'Implemented ML models: SVM, Naive Bayes, Random Forest',
            'Designed responsive frontend and integrated real-time predictions',
            'Gained hands-on experience with ML development',
        ],
        gradient: 'from-blue-500 to-cyan-500',
    },
]

export default function Experience() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="experience" className="relative py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold mb-4"
                        >
                            Work <span className="gradient-text">Experience</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 rounded-full" />

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    transition={{ delay: 0.3 + index * 0.2 }}
                                    className="relative grid md:grid-cols-2 gap-8 items-center"
                                >
                                    {/* Content */}
                                    <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="group relative"
                                        >
                                            {/* Glow Effect */}
                                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

                                            {/* Card */}
                                            <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                                                {/* Header */}
                                                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                    <FaBriefcase className="text-primary-600 dark:text-primary-400 text-xl" />
                                                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                                                        {exp.period}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {exp.position}
                                                </h3>

                                                <p className="text-lg font-semibold text-accent-600 dark:text-accent-400 mb-1">
                                                    {exp.company}
                                                </p>

                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    {exp.location}
                                                </p>

                                                {/* Responsibilities */}
                                                <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                                    {exp.responsibilities.map((resp, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
                                                        >
                                                            <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Impact/Technologies */}
                                                {exp.impact && (
                                                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                                        <p className="text-green-800 dark:text-green-300 font-medium flex items-center gap-2">
                                                            <FaStar className="w-4 h-4" />
                                                            Impact: {exp.impact}
                                                        </p>
                                                    </div>
                                                )}
                                                {exp.technologies && (
                                                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                                        <p className="text-blue-800 dark:text-blue-300 font-medium text-sm">
                                                            <strong>Technologies:</strong> {exp.technologies}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                                            transition={{ delay: 0.5 + index * 0.2 }}
                                            whileHover={{ scale: 1.5 }}
                                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.gradient} border-4 border-white dark:border-gray-900 shadow-lg cursor-pointer`}
                                        />
                                    </div>

                                    {/* Spacer */}
                                    <div className={index % 2 === 0 ? 'md:col-start-2' : ''} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
