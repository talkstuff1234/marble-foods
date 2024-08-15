import React, { ReactNode } from "react"

const H1 = ({
    children,
    align = "left",
    textColor = "text-darkText",
    textSize = "text-[40px]",
    textWeight = "",
}: {
    children: ReactNode
    align?: "left" | "center"
    textColor?: string
    textSize?: string
    textWeight?: string
}) => {
    return (
        <h1
            className={`${textColor}
            ${textSize} ${textWeight} ${align === "center" ? "text-center" : ""} text-[40px] leading-[3rem]`}
        >
            {children}
            {/* box-shadow: 0px 1px 4px 0px #19213D14; */}
        </h1>
    )
}

export default H1
