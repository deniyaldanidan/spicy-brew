import { Metadata } from 'next';
import "./styles/globals.scss";
import { Lora } from 'next/font/google';
import vars from '@/app/styles/_vars.module.scss';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import React from 'react';
import { AuthProvider } from '@/app/context/AuthContext';
import { CartProvider } from '@/app/context/CartContext';
import MyNotifsProvider from '@/app/components/MyNotifsProvider';
import dynamic from 'next/dynamic';
import { OrderProvider } from '@/app/context/OrderContext';
import { SubProvider } from '@/app/context/SubscriptionContext';
import CheckLayoutSegment from '@/app/components/CheckLayoutSegment';
import URL_LIST from '@/url';

const lora = Lora({ subsets: ['latin'], variable: "--custom-font" })

export const metadata: Metadata = {
  title: 'Spicy Brew',
  description: 'Spicy Brew - The Best selling coffee brand.',
  manifest: process.env.NODE_ENV === "production" ? `${process.env.prod_url}/site.webmanifest` : `${process.env.local}/site.webmanifest`,
  themeColor: vars.primaryDark
}

const MyClientNotifs = dynamic(() => import("./components/MyClientNotification"), {
  ssr: false
});

const UserNotifier = dynamic(()=>import("@/app/components/UserNotifier"), {ssr: false})

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
