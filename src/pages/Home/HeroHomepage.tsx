import React from "react"
import TextFade from "../../components/CustomTexts/TextFade"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"
import HEROIMG from "../../assets/heroImg.png"
import H1 from "../../components/CustomTexts/H1"
const HeroHomepage = () => {
    return (
        <div className="flex flex-col items-center justify-center px-[5%] py-[20vh]">
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out"
            >
                <H1 align="center">
                    Rich{" "}
                    <span className="font-[700] italic text-primaryLight">
                        flavours
                    </span>
                    , Quality{" "}
                    <span className="font-[700] italic text-primaryLight">
                        flavours
                    </span>
                    ,
                    <br />
                    Global{" "}
                    <span className="font-[700] italic text-primaryLight">
                        Reach
                    </span>
                </H1>
            </TextFade>{" "}
            <TextFade
                animation="fade-down"
                style="transition-all duration-1000 ease-in-out mt-5 mb-10"
            >
                <P
                    children={
                        "Discover Africa’s richness anywhere in the world"
                    }
                    mode={"light"}
                    align="center"
                />
            </TextFade>
            <Button
                value={"Learn More"}
                icon2={<ArrowRight1 className="ml-3 text-white" />}
                url="/about"
            />
            <img src={HEROIMG} alt="hero image" className=" mt-32 w-full" />
        </div>
    )
}

export default HeroHomepage
