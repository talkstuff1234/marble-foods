import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import APARTC from "../../assets/apartC.svg"
import { WhatSetsUsApartData } from "../../lib/constants"
import { WhatSetsUsApartItemsProp } from "../../lib/types"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"

const SetsUsApartHomePage = () => {
    return (
        <div className="px-[5%] py-[10dvh]">
            <div className="flex flex-col items-center justify-between gap-20 md:flex-row md:gap-0">
                <div className="flex w-full flex-col gap-5 md:w-[45%]">
                    <HeadingIntro value="What sets us apart" />
                    <TextFade
                        animation="fade-down"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1>
                            Delivering Quality Commodities,
                            <br />
                            <span className="italic text-lightText">
                                Seamlessly
                            </span>
                        </H1>
                    </TextFade>{" "}
                </div>
                <div className="w-full md:w-[35%]">
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <P mode={"light"}>
                            At MarbleFoods, we specialize in providing
                            high-quality commodities tailored to meet your
                            specific needs. Our dedication to excellence,
                            reliability, and customer satisfaction ensures you
                            receive the best products and services in the market
                        </P>
                    </TextFade>
                </div>
            </div>
            <div className="mt-20 flex flex-col justify-between gap-10 md:flex-row">
                <div className="flex flex-col gap-10">
                    {WhatSetsUsApartData.items.map(
                        (ITEM: WhatSetsUsApartItemsProp, index: number) => {
                            return (
                                <TextFade
                                    animation="zoom-in"
                                    style="transition-all duration-1000 ease-in-out"
                                    key={index}
                                >
                                    <div className="border-1 flex w-fit flex-col gap-2 rounded-[16px] border border-[#f1f1f1] bg-gradient-to-b from-[#FBFCFD] to-[#F7F7F7] px-3 py-5">
                                        <div className="flex flex-wrap gap-5">
                                            {ITEM.images.map(
                                                (
                                                    imageItem: string,
                                                    imageKey: number,
                                                ) => {
                                                    return (
                                                        <img
                                                            src={imageItem}
                                                            alt=""
                                                            className="h-[100px] w-[100px]"
                                                            key={imageKey}
                                                        />
                                                    )
                                                },
                                            )}
                                        </div>
                                        <h4 className="text-[16px] font-[700] ">
                                            {ITEM.title}
                                        </h4>
                                        <h5 className="text-[13px] font-[400] ">
                                            "{ITEM.coated}"
                                        </h5>
                                        <P mode={"light"}>{ITEM.description}</P>
                                    </div>
                                </TextFade>
                            )
                        },
                    )}
                </div>
                <TextFade
                    animation="zoom-in"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <div className="border-1 flex w-fit flex-col gap-2 rounded-[16px] border border-[#f1f1f1] bg-gradient-to-b from-[#FBFCFD] to-[#F7F7F7] ">
                        <img src={APARTC} alt="" className="w-full" />
                        <div className="flex flex-col gap-2 px-3 py-14">
                            <h4 className="text-[16px] font-[700] ">
                                Custom Packaging Solutions
                            </h4>
                            <h5 className="text-[13px] font-[400] ">
                                "Tailored Packaging Options to Meet Your Unique
                                Specifications."
                            </h5>
                            <P mode={"light"}>
                                At Marble and Grove, we understand that
                                different markets have different packaging
                                needs. That’s why we offer custom packaging
                                solutions, allowing our products to be packed
                                according to buyers' specific requirements. 
                            </P>
                        </div>
                    </div>
                </TextFade>
            </div>
            <div className="mt-20 flex items-center justify-center">
                <Button
                    value={"Contact Us"}
                    icon2={<ArrowRight1 className="ml-3 text-white" />}
                    url="/contact"
                />
            </div>
        </div>
    )
}

export default SetsUsApartHomePage
