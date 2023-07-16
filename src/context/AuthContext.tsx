'use client';

import jwtDecode from "jwt-decode";
import { ReactNode, createContext, useContext, useEffect, useMemo, useState, useTransition } from "react";
import validator from "validator";
// import refresh from "@/actions/refresh";
import { myUrlBase } from "@/myconf";

type dataType = { auth: "unauth" | "loading" | "auth", username?: string };
type contextType = {
    data: dataType,
    resetAuthState: ()=>void;
    authUser: (accToken:string)=>void
}

const AuthContext = createContext<contextType>({data: {auth:"unauth"}, resetAuthState:()=>{}, authUser:()=>{}});

export const AuthProvider = ({ children}: { children: ReactNode }) => {
    const [authToken, setAuthToken] = useState<string | undefined>();
    const [authState, setAuthState] = useState<dataType['auth']>("loading");
    // const [_, startTransition] = useTransition();

    // useEffect(()=>{
    //     setAuthState("loading");
    //     startTransition(async()=>{
    //         const res  = await refresh();
    //         if(res?.auth){
    //             setAuthToken(res.accToken);
    //             setAuthState("auth");
    //         } else{
    //             setAuthState("unauth")
    //         }
    //     })
    // }, []);

    useEffect(()=>{
        const refresh = async ()=>{
            setAuthState("loading");
            try {
                const res = await fetch("/api/refresh", {method: "GET", credentials: "include"});
                if (res.ok){
                    const data = await res.json();
                    if (data?.auth && typeof data?.accToken === "string" && validator.isJWT(data?.accToken)){
                        setAuthState("auth");
                        setAuthToken(data.accToken);
                        return;
                    } 
                }
                setAuthState("unauth");
            } catch (error) {
                setAuthState("unauth")
            }
        };
        refresh()
    }, [])


    const uname:string | undefined = useMemo(()=>{
        if (authToken?.length){
            const decoded:any = jwtDecode(authToken);
            if (decoded?.username?.length){
                return decoded.username
            }
        }
        return undefined
    }, [authToken]);

    const resetAuthState = ()=>{
        setAuthToken(undefined);
        setAuthState("unauth");
    }

    const authUser:contextType['authUser'] = (accToken)=>{
        if (accToken?.length && validator.isJWT(accToken)){
            setAuthToken(accToken);
            setAuthState("auth");
        }
    }

    return <AuthContext.Provider value={{data:{auth: authState, username: uname}, resetAuthState, authUser}}>{children}</AuthContext.Provider>;
}


export const useAuth = ()=>useContext(AuthContext);