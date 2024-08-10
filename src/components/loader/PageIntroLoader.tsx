import React, { useState, useEffect } from "react"

const PageIntroLoader = () => {
    const [left, setLeft] = useState("0%")
    const [leftTwo, setLeftTwo] = useState("0%")
    const [right, setRight] = useState("0%")
    const [rightTwo, setRightTwo] = useState("0%")

    useEffect(() => {
        setTimeout(() => {
            setLeft("-100%")
            setRight("-100%")
            setLeftTwo("-100%")
            setRightTwo("-100%")
        }, 3000)
    }, [])

    return (
        <div className="fixed z-[20] flex  h-[100dvh] w-screen overflow-hidden">
            <div
                className="absolute h-full w-1/2 bg-primaryLight transition-all delay-200 duration-[3000ms] ease-in-out  "
                style={{ left: leftTwo }}
            ></div>
            <div
                className="absolute h-full w-1/2 bg-primaryDark transition-all duration-[3000ms] ease-in-out "
                style={{ left }}
            ></div>
            <div
                className="absolute h-full w-1/2 bg-primaryLight transition-all delay-200 duration-[3000ms] ease-in-out"
                style={{ right: rightTwo }}
            ></div>
            <div
                className="absolute h-full w-1/2 bg-primaryDark transition-all delay-100 duration-[3000ms] ease-in-out"
                style={{ right }}
            ></div>
        </div>
    )
}

export default PageIntroLoader
