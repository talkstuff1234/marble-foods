import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"

const ContactHomepage = () => {
    return (
        <div className="flex flex-col items-center justify-center px-[5%] py-[10dvh]">
            {" "}
            <HeadingIntro value="Testimonials" />
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out py-3"
            >
                <H1 align="center">
                    What brings you here{" "}
                    <span className="italic text-lightText">today</span> ?
                </H1>
            </TextFade>{" "}
            <div className="flex flex-col mt-32 w-full items-center justify-between md:flex-row">
                <div className="mr-10 flex cursor-pointer flex-col rounded-[16px] border border-[#EFEFFE] px-10 py-[15dvh] transition-all duration-1000 w-full ease-in-out hover:bg-slate-100 md:w-1/2">
                    <h2 className="text-[33px] font-[400] text-[#212121]">
                        Buy a product?
                    </h2>

                    <P mode={"light"} fontSize="text-[13px]">
                        Explore our wide range of high-quality commodities. From
                        fresh produce to essential goods, we have everything you
                        need.
                    </P>
                </div>
                <div className="mr-10 flex w-full cursor-pointer flex-col rounded-[16px] border border-[#EFEFFE] px-10 py-[15dvh] transition-all duration-1000 ease-in-out hover:bg-slate-100 md:w-1/2">
                    <h2 className="text-[33px] font-[400] text-[#212121]">
                        Customer service?
                    </h2>

                    <P mode={"light"} fontSize="text-[13px]">
                        Reach out to our customer service for various issues
                    </P>
                </div>
            </div>
        </div>
    )
}

export default ContactHomepage
