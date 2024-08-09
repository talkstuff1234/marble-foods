import React from "react"

const HeadingIntro = ({ value }: { value: string }) => {
    return (
        <h5 className="relative w-fit rounded-[7px] border border-[#F1F1F1] bg-gradient-to-b from-[#FFFFFF] to-[#F7F7F7] px-5 py-1 text-[14px] text-primaryLight font-[400]">
            {value}
            <div
                style={{
                    border: "1px solid #20652E",
                    opacity: "0.05",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "7px",
                    pointerEvents: "none",
                }}
            />
        </h5>
    )
}

export default HeadingIntro
