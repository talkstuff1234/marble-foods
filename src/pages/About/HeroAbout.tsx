import React from "react"
import TextFade from "../../components/CustomTexts/TextFade"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"
import HEROIMG from "../../assets/heroAbout.jpg"
import H1 from "../../components/CustomTexts/H1"

const HeroAbout = () => {
    return (
        <div className="flex flex-col items-center justify-center px-[5%] py-[20vh]">
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out"
            >
                <H1 align="center">About Us</H1>
            </TextFade>{" "}
            <TextFade
                animation="fade-down"
                style="transition-all duration-1000 ease-in-out mt-5 mb-10"
            >
                <P mode={"light"} align="center">
                    Marble Foods is a fast-growing agricultural commodities
                    trading platform that specializes in exporting top-notch
                    agricultural products.
                </P>
            </TextFade>
            <img src={HEROIMG} alt="hero image" className=" mt-32 w-full rounded-[20px] h-[60dvh] object-cover" />
            <TextFade
                animation="fade-down"
                style="transition-all duration-1000 ease-in-out mt-5 mb-10"
            >
                <P mode={"light"} align="center">
                    Despite being new, we have an unwavering dedication to
                    ethical practices while sourcing high-quality raw materials
                    from local farmers. Our products are quickly gaining
                    popularity worldwide, thanks to their delicious taste and
                    superb quality.
                </P>
            </TextFade>
            <TextFade
                animation="fade-down"
                style="transition-all duration-1000 ease-in-out mt-5 mb-10"
            >
                <P mode={"light"} align="center">
                    Incorporated in 2023, Marble Foods brings a different look
                    to the agribusiness industry. We specialize in the
                    meticulous processing of cashew nuts, cocoa, coffee,
                    hibiscus flowers, and sesame seeds, transforming them into
                    premium products ready for export. Our competitive advantage
                    lies in our commitment to quality, innovative processing
                    technologies, and efficient supply chain management. By
                    maintaining close partnerships with farmers and ensuring
                    strict adherence to international standards, Marble Foods
                    guarantees that our products meet the diverse needs of
                    consumers worldwide. Our focus on customer satisfaction and
                    market trends allows us to continuously adapt and grow,
                    making Marble Foods a trusted partner in the agro-processing
                    industry.
                </P>
            </TextFade>
        </div>
    )
}

export default HeroAbout
