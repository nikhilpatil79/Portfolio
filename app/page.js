import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Statistics from '@/components/sections/Statistics'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Timeline from '@/components/sections/Timeline'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Testimonials from '@/components/sections/Testimonials'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Experience />
            <Timeline />
            <Projects />
            <Skills />
            <Education />
            <Blog />
            <Contact />
            <Footer />
        </main>
    )
}
