import MyNotifsProvider from '@/app/_components/MyNotifsProvider';
import { AuthProvider } from '@/context/AuthContext';
import { CartProvider } from '@/context/CartContext';
import { OrderProvider } from '@/context/OrderContext';
import { SubProvider } from '@/context/SubscriptionContext';
import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const MyClientNotifs = dynamic(() => import("./MyClientNotification"), {
    ssr: false
  });

/**
 * 
 * @description ContextProviders are Clouding the Main Layout so i created this File
 */
export default function MainContextWrapper({ children }: { children: ReactNode }) {
    return (
        <MyNotifsProvider>
            <MyClientNotifs />
            <AuthProvider>
                <CartProvider>
                    <OrderProvider>
                        <SubProvider>
                            {children}
                        </SubProvider>
                    </OrderProvider>
                </CartProvider>
            </AuthProvider>
        </MyNotifsProvider>
    )
}