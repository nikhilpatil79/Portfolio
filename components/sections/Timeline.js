'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaLightbulb, FaRocket } from 'react-icons/fa'

const timelineEvents = [
    {
        year: '2024-present',
        title: 'Software Developer',
        company: 'Kiaan AgrowTech Pvt. Ltd.',
        description: 'Leading full-stack development of AgriTech SAAS platform and mobile applications',
        icon: FaBriefcase,
        color: 'from-blue-500 to-cyan-500',
    },
    {
        year: '2023-25',
        title: 'Freelance Developer',
        company: 'Independent',
        description: 'Delivered 5+ custom web and mobile applications for various clients',
        icon: FaRocket,
        color: 'from-purple-500 to-pink-500',
    },
    {
        year: '2023',
        title: 'AI/ML Intern',
        company: 'AiROBOSOFT (AICTE India)',
        description: 'Built sentiment analysis web app achieving 90%+ accuracy',
        icon: FaLightbulb,
        color: 'from-green-500 to-emerald-500',
    },
    {
        year: '2020-24',
        title: 'B.E. Computer Science',
        company: 'Engineering Degree',
        description: 'Specialized in AI/ML and Full-Stack Development',
        icon: FaGraduationCap,
        color: 'from-orange-500 to-red-500',
    },
]

function TimelineItem({ event, index, isLast }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
        >
            <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="cursor-pointer p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${event.color} text-white mb-3`}>
                            {event.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {event.title}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                            {event.company}
                        </p>
                        <motion.p
                            initial={{ height: isExpanded ? 'auto' : 0 }}
                            animate={{ height: isExpanded ? 'auto' : 0 }}
                            className="text-gray-600 dark:text-gray-400 overflow-hidden"
                        >
                            {event.description}
                        </motion.p>
                    </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg z-10 cursor-pointer`}
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <event.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Vertical Line */}
                    {!isLast && (
                        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                    )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
            </div>
        </motion.div>
    )
}

export default function Timeline() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="relative py-20 bg-white dark:bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            Career <span className="gradient-text">Journey</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={event.title}
                                event={event}
                                index={index}
                                isLast={index === timelineEvents.length - 1}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
