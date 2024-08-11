import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import TestimonialsItem from "../../components/Tile/TestimonialsItem"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider, { Settings } from "react-slick"

const TestimonialsHomepage = () => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1091,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 697,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    const settings2: Settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1091,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 697,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
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
            <div className="mt-20 flex w-full flex-col gap-10">
                <Slider {...settings} className="flex  w-full">
                    <TestimonialsItem />
                    <TestimonialsItem />
                    <TestimonialsItem />
                    <TestimonialsItem />
                </Slider>
                <Slider {...settings2} className="flex  w-full">
                    <TestimonialsItem />
                    <TestimonialsItem />
                    <TestimonialsItem />
                    <TestimonialsItem />
                </Slider>
            </div>
        </div>
    )
}

export default TestimonialsHomepage
