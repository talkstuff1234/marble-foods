import React, { ReactNode } from "react"

const P = ({
    children,
    mode,
    align = "left",
}: {
    children: ReactNode
    mode: "dark" | "light"
    align?: "left" | "center"
}) => {
    return (
        <p
            className={`${mode === "light" ? "text-lightText" : "text-[#E9E9E9]"} text-[16px] font-[400] ${align === "center" ? "text-center" : ""}`}
        >
            {children}
        </p>
    )
}

export default P
