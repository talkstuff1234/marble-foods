import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"

const TestimonialsHomepage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-[10dvh]">
            {" "}
            <HeadingIntro value="Testimonials" />
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out py-3"
            >
                <H1 align="center">
                    What Our{" "}
                    <span className="italic text-lightText">Clients</span>{" "}
                </H1>
            </TextFade>{" "}
            <TextFade
                animation="fade-right"
                style="transition-all duration-1000 ease-in-out"
            >
                <P mode={"light"} align="center">
                    See our customer stories
                </P>
            </TextFade>

            <div className="w-full mt-20">

            </div>
        </div>
    )
}

export default TestimonialsHomepage
