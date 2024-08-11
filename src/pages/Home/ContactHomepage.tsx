import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"

const ContactHomepage = () => {
    return (
        <div className=" flex flex-col items-center justify-center px-[5%] py-[10dvh]">
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
            <div className="mt-32 flex w-full flex-col items-center justify-between gap-10 md:flex-row">
                <div className="w-full md:w-1/2">
                    <TextFade
                        animation="zoom-in"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <div className="group relative  flex w-full cursor-pointer flex-col overflow-hidden rounded-[16px] border border-[#EFEFFE] px-10 pb-[10dvh] pt-[15dvh] transition-all  duration-1000 ease-in-out">
                            <h2 className="text-[33px] font-[400] text-[#212121]">
                                Buy a product?
                            </h2>

                            <P mode={"light"} fontSize="text-[13px]">
                                Explore our wide range of high-quality
                                commodities. From fresh produce to essential
                                goods, we have everything you need.
                            </P>
                            <div className="relative mt-5 h-14 overflow-hidden">
                                <div className="bottom-[-100%] transition-all duration-1000 ease-in-out group-hover:bottom-0 md:absolute">
                                    <Button
                                        value={"Contact Us"}
                                        icon2={
                                            <ArrowRight1 className="ml-3 text-white" />
                                        }
                                        url="/about"
                                    />
                                </div>
                            </div>
                            <div className="absolute left-0 top-0 z-[-1] h-full w-0 bg-slate-100 transition-all duration-1000 ease-in-out group-hover:w-[100%]"></div>
                        </div>
                    </TextFade>{" "}
                </div>

                <div className="w-full md:w-1/2">
                    <TextFade
                        animation="zoom-in"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <div className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[16px] border border-[#EFEFFE] px-10 pb-[10dvh] pt-[15dvh] transition-all  duration-1000 ease-in-out ">
                            <h2 className="text-[33px] font-[400] text-[#212121]">
                                Customer service?
                            </h2>

                            <P mode={"light"} fontSize="text-[13px]">
                                Reach out to our customer service for various
                                issues
                            </P>
                            <div className="relative mt-5 h-14 overflow-hidden">
                                <div className="bottom-[-100%] transition-all duration-1000 ease-in-out group-hover:bottom-0 md:absolute">
                                    <Button
                                        value={"Contact Us"}
                                        icon2={
                                            <ArrowRight1 className="ml-3 text-white" />
                                        }
                                        url="/about"
                                    />
                                </div>
                            </div>
                            <div className="absolute left-0 top-0 z-[-1] h-full w-0 bg-slate-100 transition-all duration-1000 ease-in-out group-hover:w-[100%]"></div>
                        </div>{" "}
                    </TextFade>
                </div>
            </div>
        </div>
    )
}

export default ContactHomepage
