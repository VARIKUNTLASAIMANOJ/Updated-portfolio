"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface UIContextType {
    isNavOpen: boolean;
    isChatOpen: boolean;
    setNavOpen: (open: boolean) => void;
    setChatOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const setNavOpen = (open: boolean) => {
        setIsNavOpen(open);
        if (open) setIsChatOpen(false); // Close chat when nav opens
    };

    const setChatOpen = (open: boolean) => {
        setIsChatOpen(open);
        if (open) setIsNavOpen(false); // Close nav when chat opens
    };

    return (
        <UIContext.Provider value={{ isNavOpen, isChatOpen, setNavOpen, setChatOpen }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error("useUI must be used within UIProvider");
    }
    return context;
};
