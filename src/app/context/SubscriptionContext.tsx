"use client";

import useLocalStorage from "@/hooks/useLocalStorage"
import { ReactNode, createContext, useContext, useEffect } from "react"
import { useAuth } from "./AuthContext";
import { useCart } from "./CartContext";
import { nanoid } from "nanoid";
import { deliveriesType, freqs, subVal, subscrProduct } from "@/custTypes";


type subCtx = {
    subs: Array<subVal>,
    makeSubscription: (item: subscrProduct, frequency: freqs, deliveryType: typeof deliveriesType[number]) => void,
    resetSubscriptions: ()=>void
}

const SubContext = createContext<subCtx>({ subs: [], makeSubscription: () => { }, resetSubscriptions: ()=>{} });


export function SubProvider({ children }: { children: ReactNode }) {
    const [subs, setSubs] = useLocalStorage<subCtx['subs']>("subscriptions", []);
    const { data } = useAuth();
    const { currUser } = useCart();


    useEffect(() => {
        if (data.auth === "auth" && data.username?.length) {
            if (data.username !== currUser) {
                setSubs([]);
            }
        }
    }, [data, currUser, setSubs]);

    const makeSubscription: subCtx['makeSubscription'] = (item, frequency, dType) => {
        setSubs(prev => {
            const newSubscr = {
                id: nanoid(6), // if you ever planned to build one for production increase the length to 12-15 to avoid collisions. Since it's a demo it's safe for now...
                item,
                frequency,
                deliveryType: dType,
                timeStamp: new Date().getTime()
            };
            return [...prev, newSubscr]
        })
    }

    const resetSubscriptions = ()=>{
        setSubs([])
    }

    return <SubContext.Provider value={{ subs, makeSubscription, resetSubscriptions }}>{children}</SubContext.Provider>
}

const useSubscriptions = () => useContext(SubContext);

export default useSubscriptions;