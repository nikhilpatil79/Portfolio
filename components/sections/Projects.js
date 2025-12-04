'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub, FaTimes, FaStar } from 'react-icons/fa'

const projects = [
    {
        id: 1,
        title: 'AgriTech SAAS Platform',
        emoji: '⭐',
        featured: true,
        description: 'Comprehensive MERN-stack platform for agricultural management serving farmers, agronomists, and admins',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TensorFlow', 'Deep Learning', 'WebSockets', 'Azure', 'Docker', 'JWT'],
        gradient: 'from-green-500 to-emerald-500',
        features: [
            'Real-time plant disease detection using deep learning (CNN models)',
            'AI-powered chatbot for crop health consultancy',
            'Weather integration and crop advisory system',
            'Role-based dashboards for different user types',
            'Mobile-responsive design for field use'
        ],
        impact: 'Helping 50+ farmers detect crop diseases early and improve yield',
        role: 'Full-Stack Developer & AI Integration Lead',
        github: 'https://github.com/nikhilpatil79',
    },
    {
        id: 2,
        title: 'Vasu Gadagi Hotel - Food Ordering App',
        emoji: '🍽️',
        featured: false,
        description: 'Feature-rich food ordering mobile application similar to Swiggy, built for a local restaurant chain',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
        tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'],
        gradient: 'from-orange-500 to-red-500',
        features: [
            'Real-time order tracking with live status updates',
            'Menu browsing with categories and search functionality',
            'Cart management and order customization',
            'Push notifications for order updates',
            'Payment gateway integration',
            'Restaurant-side order management dashboard'
        ],
        platform: 'iOS & Android',
        role: 'Mobile App Developer',
        github: 'https://github.com/nikhilpatil79',
    },
    {
        id: 3,
        title: 'Document QA System (GenAI + Vector DB)',
        emoji: '🤖',
        featured: false,
        description: 'Intelligent document analysis system using RAG (Retrieval Augmented Generation)',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
        tech: ['Node.js', 'Express.js', 'React', 'Qdrant Vector DB', 'OpenAI API', 'Google Drive API', 'MCP Pattern', 'Docker'],
        gradient: 'from-blue-500 to-cyan-500',
        features: [
            'PDF ingestion from Google Drive with automatic processing',
            'Vector embeddings for semantic search using Qdrant',
            'Context-aware answers using OpenAI API',
            'MCP (Model-Context-Protocol) server architecture',
            'Real-time document chunking and indexing'
        ],
        role: 'GenAI Developer',
        github: 'https://github.com/nikhilpatil79',
    },
    {
        id: 4,
        title: 'Social Media Sentiment Analysis',
        emoji: '📊',
        featured: false,
        description: 'Real-time sentiment analysis platform for social media content with interactive visualizations',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        tech: ['Python', 'Flask', 'Streamlit', 'Scikit-Learn', 'NLTK', 'Pandas', 'Matplotlib', 'TensorBoard'],
        gradient: 'from-purple-500 to-pink-500',
        features: [
            'Multi-platform social media data analysis',
            'Real-time sentiment classification (Positive/Negative/Neutral)',
            'Interactive data visualizations with charts and graphs',
            'Trend analysis and sentiment timeline',
            'Model comparison dashboard (SVM, Naive Bayes, Random Forest)',
            'TensorBoard integration for model training insights'
        ],
        accuracy: '92% sentiment classification accuracy',
        models: 'SVM, Naive Bayes, Random Forest with ensemble learning',
        role: 'ML Engineer & Full-Stack Developer',
        github: 'https://github.com/nikhilpatil79',

    },
    {
        id: 5,
        title: 'Early Hazard Detection & Alert System',
        emoji: '🚨',
        featured: false,
        description: 'AI-powered industrial safety monitoring system for real-time hazard detection',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
        tech: ['Python', 'YOLOv5', 'SSD', 'TensorFlow', 'OpenCV', 'Deep Learning', 'Computer Vision', 'Flask'],
        gradient: 'from-red-500 to-orange-500',
        features: [
            'Multi-hazard detection (fire, falls, structural collapse, accidents)',
            'Real-time video processing with YOLOv5 and SSD',
            'Instant alert mechanisms (visual + audio)',
            'Dashboard for safety supervisors',
            'Historical incident logging and analytics',
            'Low latency detection (<100ms response time)'
        ],
        impact: 'Reduced workplace incidents by 60% in pilot deployment',
        role: 'Computer Vision Engineer',
        github: 'https://github.com/nikhilpatil79',
    },
    {
        id: 6,
        title: 'Real-Time Object Detection with OpenCV',
        emoji: '👁️',
        featured: false,
        description: 'Computer vision application for real-time object detection and classification',
        image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop',
        tech: ['Python', 'OpenCV', 'TensorFlow', 'YOLO', 'NumPy'],
        gradient: 'from-cyan-500 to-blue-500',
        features: [
            'Live webcam/video feed processing',
            'Multi-object detection and tracking',
            'FPS optimization for smooth performance',
            'Confidence score display',
            'Support for custom trained models'
        ],
        role: 'Computer Vision Developer',
        github: 'https://github.com/nikhilpatil79',
    },
    {
        id: 7,
        title: 'Recipe Discovery Android App',
        emoji: '🍳',
        featured: false,
        description: 'Feature-rich recipe browsing application with extensive categorization',
        image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
        tech: ['Android Studio', 'Java', 'SQLite', 'REST APIs'],
        gradient: 'from-yellow-500 to-orange-500',
        features: [
            'Browse 1000+ recipes with images and descriptions',
            'Advanced search by keywords, ingredients, or categories',
            'User authentication (login/signup)',
            '15+ recipe categories (main course, dessert, appetizer, drinks, etc.)',
            'Save favorite recipes',
            'Step-by-step cooking instructions',
            'Ingredient checklist'
        ],
        platform: 'Android',
        role: 'Android Developer',
        github: 'https://github.com/nikhilpatil79',
    },
]

function ProjectModal({ project, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
                {/* Header */}
                <div className="relative h-64 rounded-t-2xl overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                        <FaTimes className="w-6 h-6 text-white" />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-3xl font-bold text-white mb-2">
                            {project.emoji} {project.title}
                        </h3>
                        <p className="text-white/90">{project.description}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Features */}
                    <div className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                    <span className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className={`px-3 py-1 text-sm font-medium bg-gradient-to-r ${project.gradient} text-white rounded-full`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-3 mb-6">
                        {project.impact && (
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                <p className="text-green-800 dark:text-green-300 font-medium">
                                    <FaStar className="inline w-4 h-4 mr-2" />
                                    Impact: {project.impact}
                                </p>
                            </div>
                        )}
                        {project.accuracy && (
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <p className="text-blue-800 dark:text-blue-300 font-medium">
                                    Accuracy: {project.accuracy}
                                </p>
                            </div>
                        )}
                        {project.platform && (
                            <p className="text-gray-700 dark:text-gray-300">
                                <strong>Platform:</strong> {project.platform}
                            </p>
                        )}
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Role:</strong> {project.role}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex ">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                            View Code
                        </a>
                        
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function ProjectCard({ project, index }) {
    const [showModal, setShowModal] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative h-full"
            >
                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute -top-3 -right-3 z-10">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                            <FaStar className="w-3 h-3" />
                            Featured
                        </span>
                    </div>
                )}

                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

                {/* Card Content */}
                <div className="relative rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                        {/* Gradient Header */}
                        <div className={`w-16 h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all">
                            {project.emoji} {project.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed line-clamp-3">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.tech.length > 4 && (
                                <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600">
                                    +{project.tech.length - 4} more
                                </span>
                            )}
                        </div>

                        {/* View Details Button */}
                        <motion.button
                            onClick={() => setShowModal(true)}
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <span>View Details</span>
                            <FaExternalLinkAlt className="w-4 h-4" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Modal */}
            {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
        </>
    )
}

export default function Projects() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="projects" className="relative py-20 bg-white dark:bg-black">
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
                            Featured <span className="gradient-text">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 dark:text-gray-400 text-lg mb-6"
                        >
                            Showcasing innovative solutions across Full-Stack, AI/ML, and Mobile Development
                        </motion.p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
