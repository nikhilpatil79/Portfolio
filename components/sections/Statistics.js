'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { FaProjectDiagram, FaUsers, FaCode, FaBrain } from 'react-icons/fa'

const statistics = [
    {
        icon: FaProjectDiagram,
        value: 10,
        suffix: '+',
        label: 'Projects Completed',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        icon: FaUsers,
        value: 500,
        suffix: '+',
        label: 'Users Impacted',
        color: 'from-purple-500 to-pink-500',
    },
    {
        icon: FaCode,
        value: 2,
        suffix: '+',
        label: 'Years Coding',
        color: 'from-green-500 to-emerald-500',
    },
    {
        icon: FaBrain,
        value: 90,
        suffix: '%+',
        label: 'Model Accuracy',
        color: 'from-orange-500 to-red-500',
    },
]

function StatCard({ stat, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
        >
            {/* Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

            {/* Card Content */}
            <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                {/* Icon */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4`}
                >
                    <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold mb-2">
                    {isInView && (
                        <CountUp
                            end={stat.value}
                            duration={2.5}
                            suffix={stat.suffix}
                            className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        />
                    )}
                </div>

                {/* Label */}
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                </p>
            </div>
        </motion.div>
    )
}

export default function Statistics() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
                            Impact <span className="gradient-text">By Numbers</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {statistics.map((stat, index) => (
                            <StatCard key={stat.label} stat={stat} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
