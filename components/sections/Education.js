'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const education = {
    degree: 'B.E. Computer Science (AI/ML)',
    institution: 'Don Bosco Institute of Technology',
    period: '2020 - 2024',
}

const certifications = [
    'Building Generative AI Applications',
    'Python for Data Science',
    'Flask Development',
    'Node.js Development',
]

export default function Education() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="education" className="relative py-20 bg-white dark:bg-black">
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
                            Education & <span className="gradient-text">Certifications</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900 border border-primary-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-full bg-primary-600 text-white">
                                    <FaGraduationCap className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                        Education
                                    </h3>
                                    <p className="text-primary-600 dark:text-primary-400 font-semibold">
                                        {education.period}
                                    </p>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {education.degree}
                            </h4>

                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                {education.institution}
                            </p>
                        </motion.div>

                        {/* Certifications Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ delay: 0.4 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-accent-50 to-accent-100 dark:from-gray-800 dark:to-gray-900 border border-accent-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-full bg-accent-600 text-white">
                                    <FaCertificate className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Certifications
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <motion.li
                                        key={cert}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                                    >
                                        <span className="text-accent-600 dark:text-accent-400 mt-1">✓</span>
                                        <span className="font-medium">{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
