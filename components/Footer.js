'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa'

const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/nikhilpatil79', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/nikhil-patil-a30448288', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:nikilpatil079@gmail.com', label: 'Email' },
]

const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* CTA Section */}
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        <div className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full border-2 border-primary-500 shadow-lg">
                            <p className="text-primary-600 dark:text-primary-400 font-semibold">
                                ✨ Available for Freelance Projects
                            </p>
                        </div>
                        <div className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full border-2 border-accent-500 shadow-lg">
                            <p className="text-accent-600 dark:text-accent-400 font-semibold">
                                🚀 Open to Full-Time Opportunities
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* About Column */}
                    <div>
                        <h4 className="text-xl font-bold gradient-text mb-4">Nikhil Patil</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Full-Stack & GenAI Developer passionate about building innovative solutions that make a difference.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            scrollToSection(link.href)
                                        }}
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>
                                <a href="mailto:nikilpatil079@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                    nikilpatil079@gmail.com
                                </a>
                            </li>
                            <li>Bangalore, India</li>
                            <li className="pt-4">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        scrollToSection('#contact')
                                    }}
                                    className="inline-block px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity cursor-pointer"
                                >
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Nikhil Patil. Built with <FaHeart className="inline w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
                    </p>

                    {/* Back to Top Button */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:opacity-90 transition-opacity shadow-lg"
                        aria-label="Back to top"
                    >
                        <FaArrowUp className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>
        </footer>
    )
}
