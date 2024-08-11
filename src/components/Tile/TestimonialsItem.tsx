import React from "react"
import P from "../CustomTexts/P"
import TESTI from "../../assets/testi1.png"
const TestimonialsItem = () => {
    return (
        <div className="mr-10 flex cursor-pointer flex-col gap-7 rounded-[16px] border border-[#EFEFFE] p-10 transition-all duration-1000 ease-in-out hover:bg-slate-100">
            <div className="flex items-center gap-6">
                <img
                    src={TESTI}
                    alt=""
                    className="h-[42px] w-[42px] rounded-full"
                />
                <div>
                    <h2 className="text-[16px] font-[700] text-[#212121]">
                        John Abel
                    </h2>
                    <p className="text-[11px] font-[400] text-lightText">
                        Marketter
                    </p>
                </div>
            </div>

            <P mode={"light"} fontSize="text-[13px]">
                This platform has revolutionized how I trade commodities. The
                real-time data and advanced analytical tools have helped me make
                informed decisions and maximize my profits
            </P>
        </div>
    )
}

export default TestimonialsItem
