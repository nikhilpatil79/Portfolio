'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const blogPosts = [
    {
        title: 'Building Scalable AI Applications with RAG',
        excerpt: 'Exploring the power of Retrieval Augmented Generation for creating intelligent document analysis systems.',
        date: 'Coming Soon',
        category: 'GenAI',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Full-Stack Development Best Practices',
        excerpt: 'Lessons learned from building production-ready MERN stack applications at scale.',
        date: 'Coming Soon',
        category: 'Web Development',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Computer Vision in Industrial Safety',
        excerpt: 'How AI-powered hazard detection systems are transforming workplace safety protocols.',
        date: 'Coming Soon',
        category: 'AI/ML',
        gradient: 'from-purple-500 to-pink-500',
    },
]

export default function Blog() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="relative py-20 bg-white dark:bg-black">
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
                            Thoughts on <span className="gradient-text">AI & Development</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-600 dark:text-gray-400 text-lg mb-6"
                        >
                            Sharing insights and experiences from the world of technology
                        </motion.p>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                {/* Glow Effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${post.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

                                {/* Card Content */}
                                <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                                    {/* Category Badge */}
                                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${post.gradient} text-white mb-4 self-start`}>
                                        {post.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    {/* Date */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            {post.date}
                                        </span>
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            className="text-primary-600 dark:text-primary-400 font-semibold text-sm cursor-pointer"
                                        >
                                            Read More →
                                        </motion.span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6 }}
                        className="text-center mt-12"
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-lg">
                            More articles coming soon! Stay tuned for insights on AI, development, and technology.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
