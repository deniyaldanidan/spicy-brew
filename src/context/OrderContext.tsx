"use client";

import { newProductObj, orderDataType } from "@/custTypes"
import useLocalStorage from "@/hooks/useLocalStorage"
import { ReactNode, createContext, useContext, useEffect } from "react"
import { useAuth } from "./AuthContext"
import { useCart } from "./CartContext"
import { nanoid } from "nanoid"


type orderCtx = {
    orders: orderDataType[],
    makeOrder: (items:newProductObj[])=>void,
    resetOrders: ()=>void
}

const OrderContext = createContext<orderCtx>({orders: [], makeOrder: ()=>{}, resetOrders: ()=>{}});


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
                id : nanoid(6), // if you ever planned to build one for production increase the length to 12-15 to avoid collisions. Since it's a demo it's safe for now...
                items,
                orderedDate: new Date().getTime()
            };
            return [...prev, newOrder]
        })
    }

    const resetOrders = ()=>{
        setOrders([]);
    }

    return <OrderContext.Provider value={{orders, makeOrder, resetOrders}}>{children}</OrderContext.Provider>
}

const useOrders = ()=>useContext(OrderContext);

export default useOrders;