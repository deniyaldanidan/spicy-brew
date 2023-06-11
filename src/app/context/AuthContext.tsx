'use client';

import jwtDecode from "jwt-decode";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useMemo, useState } from "react";
import { authReturnType } from "@/custTypes";
import getRefresh from "@/libs/getRefresh";

type dataType = { auth: true, username: string } | { auth: false };
type contextType = {
    data: dataType,
    setAuthToken: Dispatch<SetStateAction<string | undefined>>;
}

const AuthContext = createContext<contextType>({data: {auth:false}, setAuthToken:()=>{}});

export const AuthProvider = ({ children}: { children: ReactNode }) => {
    const [authToken, setAuthToken] = useState<string | undefined>();

    useEffect(()=>{
        const getData = async ()=>{
            const data:authReturnType = await getRefresh();
            if (data.auth){
                setAuthToken(data.accToken)
            }
        }
        getData();
    }, [])

    const value:dataType = useMemo(()=>{
        if (authToken?.length){
            const decoded:any = jwtDecode(authToken);
            if (decoded?.username?.length){
                return {auth:true, username: decoded.username}
            }
        }
        return {auth:false}
    }, [authToken])

    return <AuthContext.Provider value={{data:value, setAuthToken}}>{children}</AuthContext.Provider>;
}


export const useAuth = ()=>useContext(AuthContext);