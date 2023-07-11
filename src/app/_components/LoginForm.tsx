"use client";

import { useAuth } from '@/context/AuthContext';
import styles from '@/styles/components/loginForm.module.scss';
import { FormEvent, useEffect, useState, useTransition } from 'react';
import clsx from 'clsx';
import validator from 'validator';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import login from '@/actions/login';
import { useNotifications } from 'reapop';


export default function LoginForm() {
    const [uname, setUname] = useState<string>("");
    const [inpActive, setInpActive] = useState<boolean>(false);
    const [unameValid, setUnameValid] = useState<boolean>(false);
    const [loading, startTransition] = useTransition();
    const { notify } = useNotifications();

    const { data, authUser } = useAuth();
    const router = useRouter();


    useEffect(() => {
        if (data.auth === "auth") {
            router.replace("/")
        }
    }, [data.auth, router])

    useEffect(() => {
        (!validator.isAlphanumeric(uname, "en-US", { ignore: "_" }) || !validator.isLength(uname, { min: 2, max: 12 })) ? setUnameValid(false) : setUnameValid(true);

    }, [uname])

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (!unameValid) {
            notify("Invalid Username", "error", { dismissAfter: 4 * 1000 });
            return;
        }

        startTransition(async () => {
            try {
                const res = await login(uname);
                if (!res.success) {
                    notify(res.reason, "error", { dismissAfter: 3 * 1000 });
                    return;
                }
                authUser(res.accToken);
                setUname("");
                notify(`You're successfully logged in.`, "success", { dismissAfter: 3 * 1000 })
            } catch (error) { 
                console.log(error);
                notify("Login Error Happened", "error", {dismissAfter: 3*1000})
            }
        })
    }

    return (
        <form onSubmit={submitHandler} className={styles.login_form}>
            <div className={styles.form_title}>LOGIN</div>
            <div className={styles.inp_grp}>
                <input type="text" placeholder="Username" value={uname} onChange={(e) => setUname(e.target.value)} onFocus={() => setInpActive(true)} onBlur={() => setInpActive(false)} />
                <AnimatePresence initial={false}>
                    {inpActive ? (
                        <motion.div
                            style={{ x: "-50%" }}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
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
            <button type="submit" className={styles.sbmt_btn} disabled={loading || data.auth === "auth"}>
                {(loading || data.auth === "auth") ? "..." : "Login"}
            </button>
        </form>
    )
}