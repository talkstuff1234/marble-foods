import React, { ReactNode } from "react"

const H1 = ({
    children,
    align = "left",
    textColor = "text-darkText",
}: {
    children: ReactNode
    align?: "left" | "center"
    textColor?: string
}) => {
    return (
        <h1
            className={`${textColor} ${align === "center" ? "text-center" : ""} text-[40px] leading-[3rem]`}
        >
            {children}
        </h1>
    )
}

export default H1
