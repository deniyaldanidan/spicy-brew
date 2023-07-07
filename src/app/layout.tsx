import { Metadata } from 'next';
import "./styles/globals.scss";
import { Lora } from 'next/font/google';
import vars from './styles/_vars.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import MyNotifsProvider from './components/MyNotifsProvider';
import dynamic from 'next/dynamic';
import { OrderProvider } from './context/OrderContext';
import { SubProvider } from './context/SubscriptionContext';
import CheckLayoutSegment from './components/CheckLayoutSegment';

const lora = Lora({ subsets: ['latin'], variable: "--custom-font" })

export const metadata: Metadata = {
  title: 'Spicy Brew',
  description: 'Spicy Brew - The Best selling coffee brand.',
  manifest: process.env.NODE_ENV === "production" ? `${process.env.prod_url}/site.webmanifest` : `${process.env.local}/site.webmanifest`,
  themeColor: vars.primaryDark
}

const MyClientNotifs = dynamic(() => import("./components/MyClientNotification"), {
  ssr: false
})

export default async function RootLayout({
  children,
  authmodal
}: {
  children: React.ReactNode,
  authmodal: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={lora.className}>
        <MyNotifsProvider>
          <MyClientNotifs />
          <AuthProvider>
            <CartProvider>
              <OrderProvider>
                <SubProvider>
                  <Header />
                  <main>
                    {children}
                  </main>
                  <Footer />
                  <CheckLayoutSegment key='authmodal' segmentName='login'>
                    {authmodal}
                  </CheckLayoutSegment>
                </SubProvider>
              </OrderProvider>
            </CartProvider>
          </AuthProvider>
        </MyNotifsProvider>
      </body>
    </html>
  )
}
