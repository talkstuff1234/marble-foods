import { Link, useNavigate } from "react-router-dom"
import { LoadingAnimation } from "../../assets/RenderedAssets"
import React, { ReactNode, SVGProps } from "react"
import { useOutro } from "../../lib/OutroContext"

type Props = SVGProps<SVGSVGElement>
type ButtonProp = {
    value: string
    textColor?: string
    btnColor?: string
    type?: "button" | "reset" | "submit" | undefined | "tab"
    click?: () => void
    disabled?: boolean
    isLoading?: boolean
    callOutro?: boolean
    icon?: string
    url?: string
    icon2?: ReactNode
}

const Button = ({
    value,
    textColor = "text-white",
    btnColor = "bg-primaryLight",
    type,
    click,
    disabled = false,
    isLoading,
    icon,
    url = "/",
    icon2,
    callOutro = true,
}: ButtonProp) => {
    const navigate = useNavigate()
    const { triggerOutro } = useOutro()
    const handleClick = () => {
        callOutro && triggerOutro()
        setTimeout(() => {
            navigate(url)
        }, 3000)
    }
    return (
        <>
            {type == null ? (
                <div
                    onClick={handleClick}
                    className={`rounded-[7px] ${btnColor} ${textColor} text-20 cursor-pointer border border-white/20 px-5 py-3 transition-all duration-500 ease-in-out hover:${btnColor}/40 flex w-fit items-center`}
                >
                    {value}
                    {icon2 !== null ? (isLoading == true ? null : icon2) : null}
                </div>
            ) : (
                <>
                    {type == "tab" ? (
                        <div
                            onClick={click}
                            className={`rounded-[7px] ${btnColor} ${textColor} text-20 cursor-pointer border border-white/20 px-5 py-3 transition-all duration-500 ease-in-out hover:${btnColor}/40 flex w-fit items-center`}
                        >
                            {value}
                            {icon2 !== null
                                ? isLoading == true
                                    ? null
                                    : icon2
                                : null}
                        </div>
                    ) : (
                        <button
                            type={type}
                            disabled={disabled}
                            className={` ${
                                isLoading ? "cursor-default" : "cursor-pointer"
                            } rounded-[7px] ${btnColor} ${textColor} text-20 border border-white/20 px-5 py-3 transition-all duration-500 ease-in-out hover:${btnColor}/40 flex w-fit items-center`}
                            onClick={isLoading ? () => {} : click}
                        >
                            {value}
                            {icon2 !== null
                                ? isLoading == true
                                    ? null
                                    : icon2
                                : null}
                            {isLoading ? (
                                <span className="mr-0 pl-5 pr-0">
                                    <LoadingAnimation />
                                </span>
                            ) : null}
                        </button>
                    )}
                </>
            )}
        </>
    )
}

export default Button
