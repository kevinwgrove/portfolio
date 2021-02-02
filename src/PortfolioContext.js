import React, { createContext, useContext } from "react";
import { createPortfolioStore } from "./portfolioStore";
import { useLocalStore } from "mobx-react";

const PortfolioContext = createContext(null)

export const PortfolioProvider = ({children}) => {
    const portfolioStore = useLocalStore(createPortfolioStore)
    return (
        <PortfolioContext.Provider value={portfolioStore}>
            {children}
        </PortfolioContext.Provider>
    )
}

export const usePortfolioStore = () => useContext(PortfolioContext)