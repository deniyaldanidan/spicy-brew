'use client';

import jwtDecode from "jwt-decode";
import { ReactNode, createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import { authReturnType } from "@/custTypes";
import getRefresh from "@/libs/getRefresh";
import validator from "validator";

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

    useLayoutEffect(()=>{
        const getData = async ()=>{
            setAuthState("loading");
            const data:authReturnType = await getRefresh();
            if (data.auth){
                setAuthToken(data.accToken)
                setAuthState("auth");
            } else{
                setAuthState("unauth");
            }
        }
        getData();
    }, []);


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