import React from "react"

const BaseInput = ({
    type,
    isRequired,
    title,
    option,
    placeholder,
}: {
    type: "select" | "phone" | "email" | "textarea" | "text"
    isRequired: boolean
    title: string
    placeholder: string
    option?: string[]
}) => {
    return (
        <>
            {type === "select" && (
                <div className="w-full">
                    <p className="mb-3 text-[14px] font-[400] text-[#7e7e7e]">
                        {title}
                    </p>
                    <select
                        name=""
                        id=""
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    >
                        {option?.map((item: string, index: number) => {
                            return (
                                <option value="cashew" key={index}>
                                    {item}
                                </option>
                            )
                        })}
                    </select>
                </div>
            )}
            {type === "text" && (
                <div className="w-full">
                    <p className="mb-3 text-[14px] font-[400] text-[#7e7e7e]">
                        {title}
                    </p>
                    <input
                        type={type}
                        name=""
                        id=""
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    />
                </div>
            )}
            {type === "email" && (
                <div className="w-full">
                    <p className="mb-3 text-[14px] font-[400] text-[#7e7e7e]">
                        {title}
                    </p>
                    <input
                        type={type}
                        name=""
                        id=""
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    />
                </div>
            )}
            {type === "phone" && (
                <div className="w-full">
                    <p className="mb-3 text-[14px] font-[400] text-[#7e7e7e]">
                        {title}
                    </p>
                    <input
                        type="tel"
                        name=""
                        id=""
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    />
                </div>
            )}
            {type === "textarea" && (
                <div className="w-full">
                    <p className="mb-3 text-[14px] font-[400] text-[#7e7e7e]">
                        {title}
                    </p>
                    <textarea
                        name=""
                        id=""
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    ></textarea>
                </div>
            )}
        </>
    )
}

export default BaseInput
