import { Metadata } from 'next';
import './globals.scss';
import { Lora } from 'next/font/google';
import vars from './styles/_vars.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spicy Brew',
  description: 'Spicy Brew - The Best selling coffee brand.',
  manifest: process.env.NODE_ENV==="production" ? `${process.env.prod_url}/site.webmanifest` :  `${process.env.local}/site.webmanifest`,
  themeColor: vars.primaryDark
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Header />
        <main style={{ minHeight: "60vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
