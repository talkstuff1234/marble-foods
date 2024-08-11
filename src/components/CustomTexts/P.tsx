import React, { ReactNode } from "react"

const P = ({
    children,
    mode,
    align = "left",
    fontSize = "text-[16px]",
}: {
    children: ReactNode
    mode: "dark" | "light"
    align?: "left" | "center"
    fontSize?: string
}) => {
    return (
        <p
            className={`${mode === "light" ? "text-lightText" : "text-[#E9E9E9]"} ${fontSize} font-[400] ${align === "center" ? "text-center" : ""}`}
        >
            {children}
        </p>
    )
}

export default P
