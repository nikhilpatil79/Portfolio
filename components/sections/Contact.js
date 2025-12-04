'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const contactInfo = [
    {
        icon: FaEnvelope,
        label: 'Email',
        value: 'nikilpatil079@gmail.com',
        href: 'mailto:nikilpatil079@gmail.com',
        color: 'text-red-500',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        value: 'github.com/nikhilpatil79',
        href: 'https://github.com/nikhilpatil79',
        color: 'text-gray-900 dark:text-white',
    },
    {
        icon: FaLinkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/nikhil-patil-a30448288',
        href: 'https://linkedin.com/in/nikhil-patil-a30448288',
        color: 'text-blue-600',
    },
]

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section id="contact" className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-black dark:to-purple-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [180, 0, 180],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.3 }}
                            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
                        >
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </motion.p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                        {contactInfo.map((contact, index) => (
                            <motion.a
                                key={contact.label}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                whileTap={{ scale: 0.95 }}
                                className="group p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-700 mb-4 group-hover:scale-110 transition-transform ${contact.color}`}>
                                        <contact.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {contact.label}
                                    </h3>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                                        {contact.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.7 }}
                        className="text-center"
                    >
                        <motion.a
                            href="mailto:nikilpatil079@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow text-lg"
                        >
                            <FaEnvelope className="w-5 h-5" />
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
