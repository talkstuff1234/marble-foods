import React, { ReactNode } from "react"

const H1 = ({
    children,
    align = "left",
    textColor = "text-darkText",
    textSize = "text-[40px]",
    textWeight = "",
    leading = "leading-[3rem]",
}: {
    children: ReactNode
    align?: "left" | "center"
    textColor?: string
    textSize?: string
    textWeight?: string
    leading?: string
}) => {
    return (
        <h1
            className={`${textColor}
            ${textSize} ${leading} ${textWeight} ${align === "center" ? "text-center" : ""} `}
        >
            {children}
        </h1>
    )
}

export default H1
