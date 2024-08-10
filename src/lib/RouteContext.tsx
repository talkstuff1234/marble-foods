// contexts/RouteContext.tsx
import React, { createContext, useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"

interface RouteContextProps {
    currentRoute: string
    routeJustChanged: boolean
}

const RouteContext = createContext<RouteContextProps | undefined>(undefined)

export const RouteProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const location = useLocation()
    const [currentRoute, setCurrentRoute] = useState(location.pathname)
    const [routeJustChanged, setRouteJustChanged] = useState(true) // Start as true to trigger on first load

    useEffect(() => {
        if (currentRoute !== location.pathname) {
            setCurrentRoute(location.pathname)
            setRouteJustChanged(true)

            const timer = setTimeout(() => {
                setRouteJustChanged(false)
            }, 4500)

            return () => clearTimeout(timer)
        } else if (routeJustChanged) {
            // Handles the initial load case
            const timer = setTimeout(() => {
                setRouteJustChanged(false)
            }, 4500)

            return () => clearTimeout(timer)
        }
    }, [location.pathname, currentRoute, routeJustChanged])

    return (
        <RouteContext.Provider value={{ currentRoute, routeJustChanged }}>
            {children}
        </RouteContext.Provider>
    )
}

export const useRouteContext = (): RouteContextProps => {
    const context = useContext(RouteContext)
    if (!context) {
        throw new Error("useRouteContext must be used within a RouteProvider")
    }
    return context
}
