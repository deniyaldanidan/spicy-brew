import { Metadata } from 'next';
import './globals.scss';
import { Lora } from 'next/font/google';
import vars from './styles/_vars.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { AuthProvider } from './context/AuthContext';

const lora = Lora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spicy Brew',
  description: 'Spicy Brew - The Best selling coffee brand.',
  manifest: process.env.NODE_ENV === "production" ? `${process.env.prod_url}/site.webmanifest` : `${process.env.local}/site.webmanifest`,
  themeColor: vars.primaryDark
}

export default async function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode,
  authModal: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={lora.className}>
        <AuthProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          {authModal}
        </AuthProvider>
      </body>
    </html>
  )
}
