'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
    SiPython, SiJavascript, SiHtml5, SiCss3,
    SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
    SiNodedotjs, SiExpress,
    SiTensorflow, SiOpencv, SiScikitlearn,
    SiMongodb, SiMysql,
    SiDocker, SiGit, SiPostman
} from 'react-icons/si'
import { FaBrain, FaRobot, FaJava, FaCloud } from 'react-icons/fa'

const skillsWithProgress = [
    // Expert Level (90-95%)
    { name: 'React.js', icon: SiReact, color: 'text-cyan-500', level: 95, years: 3, category: 'Expert' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600', level: 93, years: 3, category: 'Expert' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500', level: 92, years: 3, category: 'Expert' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', level: 94, years: 3, category: 'Expert' },
    { name: 'OpenAI API', icon: FaRobot, color: 'text-green-500', level: 90, years: 2, category: 'Expert' },
    { name: 'LangChain', icon: FaBrain, color: 'text-blue-600', level: 90, years: 2, category: 'Expert' },

    // Advanced Level (80-89%)
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', level: 88, years: 3, category: 'Advanced' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300', level: 87, years: 3, category: 'Advanced' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-600', level: 85, years: 2, category: 'Advanced' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-600', level: 82, years: 2, category: 'Advanced' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white', level: 88, years: 2, category: 'Advanced' },
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-500', level: 95, years: 4, category: 'Advanced' },
    { name: 'CSS', icon: SiCss3, color: 'text-blue-600', level: 93, years: 4, category: 'Advanced' },

    // Proficient Level (70-79%)
    { name: 'React Native', icon: SiReact, color: 'text-cyan-400', level: 78, years: 2, category: 'Proficient' },
    { name: 'Azure', icon: FaCloud, color: 'text-blue-500', level: 75, years: 1, category: 'Proficient' },
    { name: 'OpenCV', icon: SiOpencv, color: 'text-green-500', level: 77, years: 2, category: 'Proficient' },
    { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-blue-500', level: 79, years: 2, category: 'Proficient' },
    { name: 'Java', icon: FaJava, color: 'text-red-500', level: 72, years: 2, category: 'Proficient' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-600', level: 75, years: 2, category: 'Proficient' },
]

const skillCategories = [
    {
        title: 'Languages',
        skills: [
            { name: 'Python', icon: SiPython, color: 'text-blue-500' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
            { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
            { name: 'CSS', icon: SiCss3, color: 'text-blue-600' },
            { name: 'Java', icon: FaJava, color: 'text-red-500' },
        ],
    },
    {
        title: 'Frontend',
        skills: [
            { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
            { name: 'React Native', icon: SiReact, color: 'text-cyan-400' },
            { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
            { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
            { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-700 dark:text-gray-300' },
        ],
    },
    {
        title: 'AI/ML',
        skills: [
            { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-600' },
            { name: 'Keras', icon: FaBrain, color: 'text-red-600' },
            { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-blue-500' },
            { name: 'OpenCV', icon: SiOpencv, color: 'text-green-500' },
            { name: 'YOLO', icon: FaBrain, color: 'text-purple-500' },
        ],
    },
    {
        title: 'GenAI',
        skills: [
            { name: 'OpenAI API', icon: FaRobot, color: 'text-green-500' },
            { name: 'LangChain', icon: FaBrain, color: 'text-blue-600' },
            { name: 'Qdrant', icon: FaBrain, color: 'text-purple-600' },
            { name: 'Claude', icon: FaRobot, color: 'text-orange-500' },
            { name: 'Gemini', icon: FaRobot, color: 'text-blue-500' },
            { name: 'RAG', icon: FaBrain, color: 'text-pink-500' },
            { name: 'LLM', icon: FaRobot, color: 'text-indigo-500' },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        ],
    },
    {
        title: 'Cloud & Tools',
        skills: [
            { name: 'Azure', icon: FaCloud, color: 'text-blue-500' },
            { name: 'Docker', icon: SiDocker, color: 'text-blue-600' },
            { name: 'Git', icon: SiGit, color: 'text-orange-600' },
            { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        ],
    },
]

function ProgressBar({ skill, index }) {
    const [showTooltip, setShowTooltip] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Expert':
                return 'from-green-500 to-emerald-500'
            case 'Advanced':
                return 'from-blue-500 to-cyan-500'
            case 'Proficient':
                return 'from-purple-500 to-pink-500'
            default:
                return 'from-gray-500 to-gray-600'
        }
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: index * 0.05 }}
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{skill.level}%</span>
            </div>

            {/* Progress Bar Background */}
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                {/* Progress Bar Fill */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 1, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative overflow-hidden`}
                >
                    {/* Shimmer Effect */}
                    <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
                >
                    {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700" />
                </motion.div>
            )}
        </motion.div>
    )
}

function SkillBadge({ skill, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all cursor-pointer group"
        >
            <skill.icon className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform`} />
            <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                {skill.name}
            </span>
        </motion.div>
    )
}

export default function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="skills" className="relative py-20 bg-gray-50 dark:bg-gray-900">
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
                            Skills & <span className="gradient-text">Technologies</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Proficiency Levels with Progress Bars */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Proficiency Levels
                        </h3>

                        {/* Expert Skills */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Expert (90-95%)</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skillsWithProgress.filter(s => s.category === 'Expert').map((skill, index) => (
                                    <ProgressBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>

                        {/* Advanced Skills */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Advanced (80-89%)</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skillsWithProgress.filter(s => s.category === 'Advanced').map((skill, index) => (
                                    <ProgressBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>

                        {/* Proficient Skills */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">Proficient (70-79%)</h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skillsWithProgress.filter(s => s.category === 'Proficient').map((skill, index) => (
                                    <ProgressBar key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skills by Category */}
                    <div className="space-y-12">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Technologies by Category
                        </h3>
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full" />
                                    {category.title}
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                    {category.skills.map((skill, index) => (
                                        <SkillBadge key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
