'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
        name: 'Client Name',
        role: 'CEO, Company Name',
        content: 'Outstanding work on our agricultural platform. The AI integration was seamless and the results exceeded our expectations.',
        rating: 5,
    },
    {
        name: 'Team Lead',
        role: 'Project Manager',
        content: 'Excellent developer with strong skills in both frontend and backend. Delivered the mobile app ahead of schedule.',
        rating: 5,
    },
    {
        name: 'Colleague',
        role: 'Senior Developer',
        content: 'Great team player with impressive problem-solving abilities. Always brings innovative solutions to complex challenges.',
        rating: 5,
    },
]

export default function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="relative py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            Client <span className="gradient-text">Testimonials</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: 100 } : { width: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"
                        />
                    </div>

                    {/* Testimonials Carousel */}
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="h-full"
                                >
                                    <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                        {/* Quote Icon */}
                                        <FaQuoteLeft className="w-10 h-10 text-primary-500 opacity-20 mb-4" />

                                        {/* Content */}
                                        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
                                            &quot;{testimonial.content}&quot;
                                        </p>

                                        {/* Rating */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className="w-5 h-5 text-yellow-400 fill-current"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {/* Author */}
                                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                            <p className="font-bold text-gray-900 dark:text-white">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
