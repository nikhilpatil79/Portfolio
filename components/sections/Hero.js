'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const socialLinks = [
    {
        icon: FaGithub,
        href: 'https://github.com/nikhilpatil79',
        label: 'GitHub',
        color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
        icon: FaLinkedin,
        href: 'https://linkedin.com/in/nikhil-patil-a30448288',
        label: 'LinkedIn',
        color: 'hover:text-blue-600'
    },
    {
        icon: FaEnvelope,
        href: 'mailto:nikilpatil079@gmail.com',
        label: 'Email',
        color: 'hover:text-red-500'
    },
]

export default function Hero() {
    const scrollToNext = () => {
        const aboutSection = document.querySelector('#about')
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    const particlesOptions = {
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: '#0ea5e9',
            },
            links: {
                color: '#d946ef',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: {
                    default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-purple-900"
        >
            {/* Particle Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
                className="absolute inset-0"
            />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
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
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
                />

                {/* Floating Geometric Shapes */}
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-1/4 w-16 h-16 border-4 border-primary-500/30 dark:border-primary-400/30"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        rotate: [0, -180, -360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full border-4 border-accent-500/30 dark:border-accent-400/30"
                />
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                        x: [0, 25, 0],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 transform rotate-45"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary-600 dark:text-primary-400 font-semibold mb-4 text-lg"
                        >
                            Hello, I&apos;m
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="gradient-text">Nikhil Patil</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 min-h-[80px]"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Full-Stack Developer',
                                    2000,
                                    'GenAI Enthusiast',
                                    2000,
                                    'AI/ML Enthusiast',
                                    2000,
                                    'MERN Stack Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="gradient-text"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
                        >
                            Combining cutting-edge web technologies with AI solutions to build
                            innovative GenAI applications that solve real-world problems.
                        </motion.p>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex space-x-6 justify-center md:justify-start mb-8"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    className={`text-3xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        >
                            Let&apos;s Connect
                        </motion.a>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto group"
                        >
                            {/* Enhanced Glow Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-2xl opacity-30"
                                whileHover={{ opacity: 0.5, scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:border-primary-500 dark:group-hover:border-primary-400 transition-colors duration-300">
                                <Image
                                    src="/Nikhil.jpeg"
                                    alt="Nikhil Patil"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.button
                onClick={scrollToNext}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                whileHover={{ scale: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
                aria-label="Scroll to next section"
            >
                <FaChevronDown className="w-8 h-8" />
            </motion.button>
        </section>
    )
}
