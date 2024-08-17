import React from "react"

interface BaseInputProps {
    type: "select" | "phone" | "email" | "textarea" | "text"
    isRequired: boolean
    title: string
    option?: string[]
    placeholder: string
    labelColor?: string
    rows?: number
    name: string
    value: string
    onChange?: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => void
    onSelectChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const BaseInput: React.FC<BaseInputProps> = ({
    type,
    isRequired,
    title,
    option,
    placeholder,
    labelColor = "text-[#7e7e7e]",
    rows = 3,
    name,
    value,
    onChange,
    onSelectChange,
}) => {
    return (
        <>
            {type === "select" && (
                <div className="w-full">
                    <p className={`mb-3 text-[14px] font-[400] ${labelColor}`}>
                        {title}{" "}
                        {!isRequired && (
                            <i className="text-[#808080]">(optional)</i>
                        )}
                    </p>
                    <select
                        name={name}
                        id=""
                        value={value}
                        onChange={onSelectChange}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    >
                        {option?.map((item: string, index: number) => {
                            return (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            )
                        })}
                    </select>
                </div>
            )}
            {type === "text" && (
                <div className="w-full">
                    <p className={`mb-3 text-[14px] font-[400] ${labelColor}`}>
                        {title}
                        {!isRequired && (
                            <i className="text-[#808080]">(optional)</i>
                        )}
                    </p>
                    <input
                        type={type}
                        name={name}
                        id=""
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    />
                </div>
            )}
            {type === "email" && (
                <div className="w-full">
                    <p className={`mb-3 text-[14px] font-[400] ${labelColor}`}>
                        {title}
                        {!isRequired && (
                            <i className="text-[#808080]">(optional)</i>
                        )}
                    </p>
                    <input
                        type={type}
                        name={name}
                        id=""
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    />
                </div>
            )}
            {type === "phone" && (
                <div className="w-full">
                    <p className={`mb-3 text-[14px] font-[400] ${labelColor}`}>
                        {title}
                        {!isRequired && (
                            <i className="text-[#808080]">(optional)</i>
                        )}
                    </p>
                    <input
                        type="tel"
                        name={name}
                        id=""
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className="w-full rounded-[8px] border border-[#F1F3F7] bg-white px-3 py-4 text-[14px] font-[400] text-primaryDark shadow-[0_1px_4px_0px_#19213D14] transition-all duration-500 ease-in-out focus:border-primaryLight focus:outline-none active:outline-none"
                        required={isRequired}
                    />
                </div>
            )}
            {type === "textarea" && (
                <div className="w-full">
                    <p className={`mb-3 text-[14px] font-[400] ${labelColor}`}>
                        {title}{" "}
                        {!isRequired && (
                            <i className="text-[#808080]">(optional)</i>
                        )}
                    </p>
                    <textarea
                        name={name}
                        id=""
                        value={value}
                        onChange={onChange}
                        rows={rows}
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
