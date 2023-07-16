import "@/styles/globals.scss";
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import CheckLayoutSegment from '@/app/_components/CheckLayoutSegment';
// import MainContextWrapper from "./_components/MainContextWrapper";
import URL_LIST from '@/url';
import { Metadata } from 'next';
import { Lora } from 'next/font/google';
import React from 'react';
import dynamic from 'next/dynamic';
import MyNotifsProvider from '@/app/_components/MyNotifsProvider';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { OrderProvider } from '@/context/OrderContext';
import { SubProvider } from '@/context/SubscriptionContext';

const MyClientNotifs = dynamic(() => import("./_components/MyClientNotification"), {
    ssr: false
  });

const lora = Lora({ subsets: ['latin'], variable: "--custom-font" })

export const metadata: Metadata = {
  title: {
    default: "Spicy Brew",
    template: "%s - Spicy Brew"
  },
  description: 'Spicy Brew - The Best selling coffee brand.',
  keywords: ["Best Coffee Brand", "Best coffee in the world", "Strongest coffee in the world", "Spicy Brew"],
  applicationName: "Spicy Brew",
  manifest: process.env.NODE_ENV === "production" ? `${process.env.prod_url}/site.webmanifest` : `${process.env.local}/site.webmanifest`,
  themeColor: "#121619",
}


const UserNotifier = dynamic(() => import("@/app/_components/UserNotifier"), { ssr: false })

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
                  <CheckLayoutSegment key='authmodal' segmentName='login' url={URL_LIST.login.path}>
                    {authmodal}
                  </CheckLayoutSegment>
                </SubProvider>
              </OrderProvider>
            </CartProvider>
          </AuthProvider>
        </MyNotifsProvider>
        <UserNotifier />
      </body>
    </html>
  )
}
