import { createContext } from "react";
import {getAuth, onAuthStateChanged, User, UserCredential} from "firebase/auth";
import { useState, useEffect } from 'react';
import app from "@/firebase/app";

const AuthContext = createContext<{user: User | null}>({user: null});

const auth = getAuth(app)
const AuthProvider = ({ children } : {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext};