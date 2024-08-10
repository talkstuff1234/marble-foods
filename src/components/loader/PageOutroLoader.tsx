import React, { useState, useEffect } from "react"

const PageOutroLoader = () => {
    const [left, setLeft] = useState("-50%")
    const [leftTwo, setLeftTwo] = useState("-50%")
    const [right, setRight] = useState("-50%")
    const [rightTwo, setRightTwo] = useState("-50%")

    useEffect(() => {
        setLeft("0%")
        setRight("0%")
        setLeftTwo("0%")
        setRightTwo("0%")
    }, [])

    return (
        <div className="fixed z-[20] flex  h-[100dvh] w-screen overflow-hidden">
            <div
                className="absolute h-full w-1/2 bg-primaryLight transition-all  duration-[3000ms] ease-in-out"
                style={{ left: leftTwo }}
            ></div>
            <div
                className="absolute h-full w-1/2 bg-primaryDark transition-all delay-200  duration-[3000ms] ease-in-out"
                style={{ left }}
            ></div>
            <div
                className="absolute h-full w-1/2 bg-primaryLight transition-all  duration-[3000ms] ease-in-out"
                style={{ right: rightTwo }}
            ></div>
            <div
                className="absolute h-full w-1/2 bg-primaryDark transition-all delay-200 duration-[3000ms] ease-in-out"
                style={{ right }}
            ></div>
        </div>
    )
}

export default PageOutroLoader
