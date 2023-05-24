import { RefObject, useEffect } from "react";




export default function useClickOutside(ref:RefObject<HTMLElement|null>, cb:()=>void):void{

    useEffect(()=>{
        const eventFn = (e:MouseEvent)=>{
            if(ref.current?.contains(e.target as any)){
                return;
            }
            cb()
        }
        document.addEventListener("click", eventFn);

        return ()=>{
            document.removeEventListener("click", eventFn);
        }

    }, [ref, cb])
}