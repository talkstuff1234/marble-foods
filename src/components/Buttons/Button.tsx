import { Link, useNavigate } from "react-router-dom"
import { LoadingAnimation } from "../../assets/RenderedAssets"
import React, { ReactNode, SVGProps } from "react"
import { useOutro } from "../../lib/OutroContext"

type Props = SVGProps<SVGSVGElement>
type ButtonProp = {
    value: string
    textColor?: string
    btnColor?: string
    type?: "button" | "reset" | "submit" | undefined
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
                <button
                    type={type}
                    disabled={disabled}
                    className={` ${
                        isLoading ? "cursor-default" : "cursor-pointer"
                    } bold h-[45px]  w-[333px]  ${btnColor} ${textColor}mt-[50px] flex items-center justify-center rounded-[50px] border-[1px] border-gray-700`}
                    onClick={isLoading ? () => {} : click}
                >
                    {icon === null ? null : (
                        <img src={icon} alt="icon" className="mr-3" />
                    )}
                    {icon2 !== null ? (isLoading == true ? null : icon2) : null}
                    {isLoading ? <LoadingAnimation /> : null}
                    {value}
                </button>
            )}
        </>
    )
}

export default Button
