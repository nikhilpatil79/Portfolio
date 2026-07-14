'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import {
    FaRobot, FaLayerGroup, FaDatabase, FaEye,
    FaCode, FaCloud, FaBookOpen, FaArrowRight, FaBrain
} from 'react-icons/fa'
import { SiTensorflow } from 'react-icons/si'

const STUDY_GUIDE_URL = '/study-guide'

const areas = [
    { name: 'AI / GenAI', count: 13, icon: FaRobot, gradient: 'from-blue-500 to-indigo-500', desc: 'LLMs, RAG, prompt engineering, embeddings, MCP' },
    { name: 'Agentic AI', count: 5, icon: FaLayerGroup, gradient: 'from-purple-500 to-violet-500', desc: 'Agents, orchestration, LangGraph, CrewAI' },
    { name: 'Machine Learning', count: 7, icon: SiTensorflow, gradient: 'from-emerald-500 to-green-500', desc: 'Ensembles, CNNs, TensorFlow, tuning' },
    { name: 'Vector Databases', count: 5, icon: FaDatabase, gradient: 'from-orange-500 to-amber-500', desc: 'Qdrant, Pinecone, pgvector, chunking' },
    { name: 'Computer Vision', count: 5, icon: FaEye, gradient: 'from-red-500 to-rose-500', desc: 'YOLOv5, SSD, OpenCV, real-time video' },
    { name: 'Full-Stack / MERN', count: 8, icon: FaCode, gradient: 'from-cyan-500 to-teal-500', desc: 'React, Node, Next.js, FastAPI, REST' },
    { name: 'Languages', count: 4, icon: FaBookOpen, gradient: 'from-slate-500 to-gray-500', desc: 'Python, JavaScript, TypeScript' },
    { name: 'Cloud & DevOps', count: 6, icon: FaCloud, gradient: 'from-yellow-500 to-amber-600', desc: 'Docker, Git, Azure, NumPy / Pandas' },
]

const sampleConcepts = [
    'RAG', 'Embeddings', 'Transformers', 'LangGraph', 'MCP', 'YOLOv5',
    'CNNs', 'MERN', 'Closures', 'Docker', 'Vector Search', 'Text-to-SQL',
]

const stats = [
    { end: 53, suffix: '', label: 'Concepts explained' },
    { end: 8, suffix: '', label: 'Knowledge domains' },
    { end: 210, suffix: '+', label: 'Interview Q&As' },
]

function AreaCard({ area, index, isInView }) {
    const Icon = area.icon
    return (
        <motion.a
            href={STUDY_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2 + index * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
        >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${area.gradient}`} />
            <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-mono font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700/60 px-2.5 py-1 rounded-full">
                    {area.count} concepts
                </span>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{area.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{area.desc}</p>
        </motion.a>
    )
}

export default function StudyGuide() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="concept-map" className="relative py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="text-center mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 text-sm font-semibold text-primary-600 dark:text-primary-400">
                            <FaBrain className="w-4 h-4" /> Interactive Learning Resource
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Interview <span className="gradient-text">Concept Map</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full mb-6" />
                        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Every skill on my resume, expanded into what it actually means — the sub-concepts,
                            code examples, and the interview questions behind each one. A living study reference
                            I built to master my own stack, from LLMs to the MERN stack.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
                                transition={{ delay: 0.15 + i * 0.1 }}
                                className="text-center p-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                            >
                                <div className="text-3xl md:text-4xl font-bold gradient-text">
                                    {isInView ? <CountUp end={stat.end} duration={2} /> : 0}{stat.suffix}
                                </div>
                                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Area grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                        {areas.map((area, index) => (
                            <AreaCard key={area.name} area={area} index={index} isInView={isInView} />
                        ))}
                    </div>

                    {/* Sample concepts */}
                    <div className="text-center mb-10">
                        <p className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                            A few of the concepts inside
                        </p>
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {sampleConcepts.map((concept, i) => (
                                <motion.span
                                    key={concept}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.4 + i * 0.04 }}
                                    className="px-3.5 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                >
                                    {concept}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <motion.a
                            href={STUDY_GUIDE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow group"
                        >
                            Explore the Concept Map
                            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            Searchable · filterable · click any concept for a full deep-dive page
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
