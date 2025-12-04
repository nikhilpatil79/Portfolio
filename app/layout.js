import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata = {
    title: 'Nikhil Patil | Full-Stack & GenAI Developer',
    description: 'Portfolio of Nikhil Patil - Full-Stack Developer and AI/ML Engineer specializing in GenAI applications, MERN stack, and deep learning solutions.',
    keywords: ['Nikhil Patil', 'Full-Stack Developer', 'GenAI', 'AI/ML Engineer', 'MERN Stack', 'Deep Learning', 'Portfolio'],
    authors: [{ name: 'Nikhil Patil' }],
    creator: 'Nikhil Patil',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nikhilpatil.vercel.app',
        title: 'Nikhil Patil | Full-Stack & GenAI Developer',
        description: 'Portfolio of Nikhil Patil - Full-Stack Developer and AI/ML Engineer specializing in GenAI applications',
        siteName: 'Nikhil Patil Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nikhil Patil | Full-Stack & GenAI Developer',
        description: 'Portfolio of Nikhil Patil - Full-Stack Developer and AI/ML Engineer',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.variable}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange={false}
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
