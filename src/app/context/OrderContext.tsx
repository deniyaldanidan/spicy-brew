"use client";

import { newProductObj } from "@/custTypes"
import useLocalStorage from "@/hooks/useLocalStorage"
import { ReactNode, createContext, useContext, useEffect } from "react"
import { useAuth } from "./AuthContext"
import { useCart } from "./CartContext"
import { nanoid } from "nanoid"


type orderCtx = {
    orders: {
        id: string,
        items: newProductObj[],
        orderedDate: number
    }[],
    makeOrder: (items:newProductObj[])=>void
}

const OrderContext = createContext<orderCtx>({orders: [], makeOrder: ()=>{}});


export function OrderProvider({children}:{children:ReactNode}){
    const [orders, setOrders] = useLocalStorage<orderCtx['orders']>("orders", []);
    const {data} = useAuth();
    const {currUser} = useCart();


    useEffect(()=>{
        if (data.auth === "auth" && data.username?.length) {
            if (data.username !== currUser) {
                setOrders([]);
            }
        }
    }, [data, currUser, setOrders]);

    const makeOrder:orderCtx['makeOrder'] = (items)=>{
        setOrders(prev=>{
            const newOrder = {
                id : nanoid(12),
                items,
                orderedDate: new Date().getTime()
            };
            return [...prev, newOrder]
        })
    }

    return <OrderContext.Provider value={{orders, makeOrder}}>{children}</OrderContext.Provider>
}

const useOrders = ()=>useContext(OrderContext);

export default useOrders;