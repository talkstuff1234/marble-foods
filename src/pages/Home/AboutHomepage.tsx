import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"

const AboutHomepage = () => {
    return (
        <div className="bg-primaryDark px-[5%] py-[30vh]">
            <div className="w-full md:w-[35%]">
                <HeadingIntro value="Who we are" />
                <div className="my-4"></div>
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <H1 align="left" textColor="text-primaryLight">
                        <span className="italic ">MarbleFoods</span>
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
        </div>
    )
}

export default AboutHomepage
