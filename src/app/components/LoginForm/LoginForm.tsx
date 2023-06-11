"use client";

import { useAuth } from '@/app/context/AuthContext';
import styles from './index.module.scss';
import { FormEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import validator from 'validator';
import { MyValErr } from '@/libs/helpers';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';


export default function LoginForm() {
    const [uname, setUname] = useState<string>("");
    const [inpActive, setInpActive] = useState<boolean>(false);
    const [unameValid, setUnameValid] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [err, setErr] = useState<string>("");

    const {data, setAuthToken } = useAuth();
    const router = useRouter();


    useEffect(()=>{
        if (data.auth===true){
            router.replace("/")
        }
    }, [data.auth, router])

    useEffect(() => {
        (!validator.isAlphanumeric(uname, "en-US", { ignore: "_" }) || !validator.isLength(uname, { min: 2, max: 12 })) ? setUnameValid(false) : setUnameValid(true);

    }, [uname])

    const submitHandler = async (e:FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setErr("");
        try {
            if (!unameValid) {
                throw new MyValErr("Invalid Username");
            }

            const res = await fetch("/api/login", { method: "POST", body: JSON.stringify({ uname }) });

            if (!res.ok) {
                throw new Error("response is failed");
            }

            const data = await res.json();

            if (!data?.success) {
                throw new Error("Success message is null");
            }

            setAuthToken(data?.accToken);
            router.replace("/");

        } catch (error) {
            if (error instanceof MyValErr) {
                console.log(error);
                setErr(error.message)
            } else {
                console.log(error);
                setErr("Login Failed")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={submitHandler} className={styles.login_form}>
            <div className={styles.form_title}>LOGIN</div>
            <div className={styles.form_err}>{err}</div>
            <div className={styles.inp_grp}>
                <input type="text" placeholder="Username" value={uname} onChange={(e) => setUname(e.target.value)} onFocus={() => setInpActive(true)} onBlur={() => setInpActive(false)} />
                <AnimatePresence initial={false}>
                    {inpActive ? (
                        <motion.div
                            style={{x: "-50%"}}
                            initial={{y: -10, opacity:0}}
                            animate={{y: 0, opacity:1}}
                            exit={{y: -10, opacity:0}}
                            transition={{type: "spring", duration: 0.5}}
                            className={clsx(styles.inp_info, (!unameValid && uname.length) && styles.warn)}
                        >
                            <span>
                                only contain alphanumeric and  &apos;&#95;&apos; chars. Ex: Ann&#95;2
                            </span>
                            <span>should be <strong>2&#45;12</strong> characters long.</span>
                        </motion.div>
                    ) : ""}
                </AnimatePresence>
            </div>
            <button type="submit" className={styles.sbmt_btn} disabled={loading}>
                {loading ? "..." : "Login"}
            </button>
        </form>
    )
}