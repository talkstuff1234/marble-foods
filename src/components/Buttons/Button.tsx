import { Link } from "react-router-dom"
import { LoadingAnimation } from "../../assets/RenderedAssets"
import React, { SVGProps } from "react"

type Props = SVGProps<SVGSVGElement>
type ButtonProp = {
    value: string
    textColor?: string
    btnColor?: string
    type?: "button" | "reset" | "submit" | undefined
    click?: () => void
    disabled?: boolean
    isLoading?: boolean
    icon?: string
    url?: string
    icon2?: React.FC<Props>
}

const Button = ({
    value,
    textColor = "text-white",
    btnColor = "bg-secondary",
    type,
    click,
    disabled = false,
    isLoading,
    icon,
    url = "/",
}: ButtonProp) => {
    return (
        <>
            {type == null ? (
                <Link
                    to={`${url}`}
                    className={`rounded-md ${btnColor} ${textColor} text-20 px-12 py-4 transition-all duration-500 ease-in-out hover:${btnColor}/40`}
                >
                    {value}
                </Link>
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
                    {isLoading ? <LoadingAnimation /> : null}
                    {value}
                </button>
            )}
        </>
    )
}

export default Button
