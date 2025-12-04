'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa'

const highlights = [
    {
        icon: FaGraduationCap,
        title: 'Education',
        description: 'B.E. in Computer Science (AI/ML)',
    },
    {
        icon: FaBriefcase,
        title: 'Current Role',
        description: 'Software Developer at Kiaan AgrowTech',
    },
    {
        icon: FaCode,
        title: 'Specialization',
        description: 'MERN Stack & Deep Learning',
    },
    {
        icon: FaRocket,
        title: 'Focus',
        description: 'GenAI & LLM Applications',
    },
]

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="about" className="relative py-20 bg-white dark:bg-black">
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
                            About <span className="gradient-text">Me</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I&apos;m a <span className="font-semibold text-primary-600 dark:text-primary-400">Computer Science graduate</span> specializing
                                in <span className="font-semibold">AI/ML</span>, with a passion for building innovative GenAI applications
                                and full-stack solutions that make a real impact.
                            </p>

                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Currently working at <span className="font-semibold text-accent-600 dark:text-accent-400">Kiaan AgrowTech Pvt. Ltd.</span> as
                                a Software Developer, where I combine my expertise in the <span className="font-semibold">MERN stack</span> with
                                cutting-edge <span className="font-semibold">deep learning</span> and <span className="font-semibold">LLM-powered applications</span> to
                                solve complex agricultural challenges.
                            </p>

                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                My experience spans from building SAAS platforms to developing AI chatbots and implementing
                                advanced computer vision systems. I&apos;m constantly exploring new technologies and pushing the
                                boundaries of what&apos;s possible with AI and web development.
                            </p>
                        </motion.div>

                        {/* Highlights Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: 0.4 }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <item.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
