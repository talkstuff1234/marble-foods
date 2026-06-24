import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"
import ABTHOME from "../../assets/abtHome.png"
const AboutHomepage = () => {
    return (
        <div className="flex flex-col justify-between gap-10 bg-primaryDark py-[10vh] md:flex-row md:gap-0 md:pl-[5%]">
            <div className="flex w-full flex-col items-start justify-center pl-[5%] md:w-[35%] md:pl-0">
                <HeadingIntro value="Who we are" />
                <div className="my-4"></div>
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <H1 align="left" textColor="text-primaryLight">
                        <span className="italic ">Marble Foods</span>
                    </H1>
                </TextFade>{" "}
                <div className="my-4"></div>
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <P mode={"dark"}>
                        Marble Foods is an agricultural company providing a
                        steady supply of premium agricultural produce across
                        select value chains, through commodity aggregation,
                        storage, and marketing activities.
                    </P>
                </TextFade>
                <div className="mt-10"></div>
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <Button
                        value={"Learn More"}
                        icon2={<ArrowRight1 className="ml-3 text-white" />}
                        url="/about"
                    />
                </TextFade>
            </div>
            <div className="w-full md:w-[65%]">
                <img
                    src={ABTHOME}
                    alt="hero image"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}

export default AboutHomepage
