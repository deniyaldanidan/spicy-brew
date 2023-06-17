import { Dispatch, SetStateAction, useEffect, useState } from "react";



export default function useLocalStorage<T>(key: string, defaultvalue: T):[T, Dispatch<SetStateAction<T>>] {

    const [val, setVal] = useState<T>(() => {
        let currentVal:T;
        try {
            currentVal = JSON.parse(localStorage.getItem(key) as any) || defaultvalue;
        } catch (error) {
            currentVal = defaultvalue
        }
        return currentVal
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(val))
    }, [key, val])

    return [val, setVal]
}