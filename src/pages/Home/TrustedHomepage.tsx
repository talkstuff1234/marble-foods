import React from "react"
import CASHEW from "../../assets/cash-trusted.jpeg"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"
import H1 from "../../components/CustomTexts/H1"
import TextFade from "../../components/CustomTexts/TextFade"

const TrustedHomepage = () => {
    return (
        <div className="px-[5%] py-[10dvh]">
            <div className="relative overflow-hidden rounded-[10px] bg-primaryDark px-[5%] py-[20dvh]">
                <div className="relative z-10 flex w-full flex-col gap-5 md:w-[58%]">
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1 textColor="text-white">
                            Your Trusted Commodity Marketplace
                        </H1>
                    </TextFade>
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <P mode="dark">
                            Discover a diverse range of high-quality products
                            from verified suppliers. Secure transactions and
                            24/7 support en sure a seamless trading experience.
                        </P>{" "}
                    </TextFade>
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <Button
                            value={"Contact Us"}
                            icon2={<ArrowRight1 className="ml-3 text-white" />}
                            url="/about"
                        />{" "}
                    </TextFade>
                </div>
                <div
                    className="absolute  right-0 top-0 h-full w-full opacity-25"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgb(10 31 14) 55%, rgb(46 147 67 / 0%)), url('${CASHEW}')`,
                        backgroundSize: "cover",
                        backgroundPositionY: "center",
                        backgroundPositionX: "right",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default TrustedHomepage
