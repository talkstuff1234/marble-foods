import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"
import MAP from "../../assets/map.png"

const GlobalReachHomepage = () => {
    return (
        <div className=" flex flex-col justify-between gap-10 py-[10dvh] md:flex-row md:gap-0">
            <div className="flex w-full flex-col gap-5 pl-[5%] pr-[5%] md:w-[25%] md:pr-0">
                <HeadingIntro value="Our global reach" />
                <TextFade
                    animation="fade-down"
                    isSpan={false}
                    style="transition-all duration-1000 ease-in-out"
                >
                    <H1>
                        Where We{" "}
                        <span className="font-[700] italic text-primaryLight">
                            Deliver
                        </span>
                    </H1>
                </TextFade>{" "}
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <P mode={"light"}>
                        Marble Foods processes, packages, and exports all five
                        (5) agricultural produce to several countries around the
                        world including
                    </P>
                </TextFade>
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <ul>
                        <li className="text-lightText">
                            <P mode={"light"}>Middle East</P>
                        </li>
                        <li className="text-lightText">
                            <P mode={"light"}>Europe</P>
                        </li>
                        <li className="text-lightText">
                            <P mode={"light"}>United States of America</P>
                        </li>
                    </ul>
                </TextFade>
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <Button
                        value={"Order Now"}
                        icon2={<ArrowRight1 className="ml-3 text-white" />}
                        url="/contact"
                    />
                </TextFade>
            </div>
            <div className="flex w-full flex-col gap-5 md:w-[55%] md:items-end">
                <img src={MAP} alt="global map" className="w-full" />
                <div className="px-[5%]">
                    {/* <P mode={"light"}>
                        We primarily target Stores, malls and supermarkets in
                        the US.
                    </P> */}
                </div>
            </div>
        </div>
    )
}

export default GlobalReachHomepage
