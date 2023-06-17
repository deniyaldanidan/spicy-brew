'use client';


import { cartDataType, cartDataWIdType, maxProductLimit } from "@/custTypes";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { nanoid } from "nanoid";


type myContextType = { 
    items: cartDataWIdType[],
    addItem: (data: cartDataType) => void, 
    removeItem: (id: string) => void, 
    manipulateItem: (itemId: string, opera: "incr" | "decr", size?:number) => void,
    resetCart: ()=>void,
    currUser: string
};

const CartContext = createContext< myContextType >({
    items: [],
    addItem: ()=>{},
    removeItem: ()=>{},
    manipulateItem: ()=>{},
    resetCart: ()=>{},
    currUser: ""
});

export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cartItems, setCartItems] = useLocalStorage<cartDataWIdType[]>("cart_items", []);

    const [currUser, setCurrUser] = useLocalStorage<string>("curr_user", "");

    const { data } = useAuth();

    useEffect(() => {
        if (data.auth === "auth" && data.username?.length) {
            if (data.username !== currUser) {
                setCartItems([]);
                setCurrUser(data.username);
            }
        }
    }, [data, currUser, setCartItems, setCurrUser]);

    const manipulateItem:myContextType['manipulateItem'] = (itemId, opera, size=1) => {
        setCartItems(prev => prev.map(itm => {
            if (itm.id === itemId) {
                switch (opera) {
                    case "incr":
                        (itm.qty+size) <= maxProductLimit && (itm.qty +=size);
                        break;
                    case "decr":
                        (itm.qty-size) >= 1 && (itm.qty -= size);
                        break;
                }
            }
            return itm;
        }));
    };

    const addItem:myContextType['addItem'] = (data) => {
        const foundItem = cartItems.find((itm=>(itm.productId===data.productId)&&(itm?.grindsize === data?.grindsize)));

        if (foundItem?.id?.length){
            manipulateItem(foundItem.id, "incr", data.qty);   
        } else {
            const newItem = {...data, id: nanoid(12)};
            setCartItems(prev=>[...prev, newItem]);
        }
    }

    const removeItem:myContextType['removeItem'] = (id) => {
        setCartItems(prev => prev.filter(itm => itm.id !== id))
    }

    const resetCart:myContextType['resetCart'] = ()=>{
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ items: cartItems, addItem, removeItem, manipulateItem, resetCart, currUser }}>
            {children}
        </CartContext.Provider>
    );
}


export const useCart = () => useContext(CartContext);