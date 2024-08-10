import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    ReactNode,
} from "react"

interface OutroContextProps {
    isOutro: boolean
    triggerOutro: () => void
}

const OutroContext = createContext<OutroContextProps | undefined>(undefined)

export const OutroProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isOutro, setIsOutro] = useState<boolean>(false)

    const triggerOutro = () => {
        setIsOutro(true)
        setTimeout(() => {
            setIsOutro(false)
        }, 4000)
    }

    return (
        <OutroContext.Provider value={{ isOutro, triggerOutro }}>
            {children}
        </OutroContext.Provider>
    )
}

export const useOutro = (): OutroContextProps => {
    const context = useContext(OutroContext)
    if (!context) {
        throw new Error("useOutro must be used within an OutroProvider")
    }
    return context
}
