import React, { useState } from "react"
import GREEN from "../../assets/abtgreen.svg"
import BLUE from "../../assets/abtblue.svg"
import DEEP from "../../assets/abtdeep.svg"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Autoplay } from "swiper/modules"
import { Next, Prev } from "../../assets/RenderedAssets"
import { teamMembers } from "../../lib/constants"

const AboutTeam = () => {
    return (
        <div className="relative">
            <div className="flex w-full items-center justify-center px-[2%]">
                <img src={GREEN} alt="" className="w-[31.7%]" />
                <img src={BLUE} alt="" className="w-[31.7%]" />
                <img src={DEEP} alt="" className="w-[31.7%]" />
            </div>
            <div className="absolute top-[50px] h-[10vh] w-full bg-white/30 backdrop-blur-xl"></div>
            <div className="mb-20 mt-20">
                <TextFade
                    animation="fade-down"
                    isSpan={false}
                    style="transition-all duration-1000 ease-in-out py-3"
                >
                    <H1 align="center">Meet our talented team</H1>
                </TextFade>{" "}
                <TextFade
                    animation="fade-right"
                    style="transition-all duration-1000 ease-in-out"
                >
                    <P mode={"light"} align="center">
                        Our cocoa is sourced from the lush plantations of Ghana
                        and Côte d'Ivoire, famed for their rich and aromatic
                        beans.
                    </P>
                </TextFade>
                <div className="mt-20 flex flex-col">
                    <div className="flex border">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            navigation={{
                                prevEl: ".swiper-button-prev",
                                nextEl: ".swiper-button-next",
                            }}
                            spaceBetween={10}
                            direction={"horizontal"}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1680: {
                                    slidesPerView: 4,
                                },
                                1091: {
                                    slidesPerView: 3,
                                },
                                697: {
                                    slidesPerView: 2,
                                },

                                883: {
                                    slidesPerView: 1,
                                },
                            }}
                            className="h-full w-full"
                        >
                            {teamMembers.map((member, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="group relative h-[490px] w-[400px] cursor-pointer bg-black/20 object-cover transition-all duration-1000 ease-in-out"
                                        style={{
                                            background: `url('${member.image}')`,
                                            backgroundSize: "cover",
                                        }}
                                    >
                                        <div className="absolute left-0 top-0 h-full w-full transition-all duration-1000 ease-in-out group-hover:bg-black/30 "></div>
                                        <div className="absolute md:top-[400px] bottom-10 left-0 flex flex-col gap-4 px-4 transition-all duration-1000 ease-in-out group-hover:top-[180px]">
                                            <h1 className="text-[28px] font-[400] text-white">
                                                {member.name}
                                            </h1>
                                            <P mode={"dark"}>{member.title}</P>
                                            <P mode={"dark"}>{member.bio}</P>
                                            <div className="flex items-center gap-4">
                                                {member.socialMedia.map(
                                                    (social, socialIndex) => (
                                                        <a
                                                            key={socialIndex}
                                                            href={social.link}
                                                        >
                                                            <img
                                                                src={
                                                                    social.icon
                                                                }
                                                                alt=""
                                                            />
                                                        </a>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* <div
                        className="h-[490px] w-[400px]"
                        style={{ background: `url('${TEAM1}')` }}
                    ></div> */}
                    <div className="flex items-center justify-between px-[5%] mt-10">
                        <H1 align="center">Team</H1>
                        <div className=" flex items-center justify-center gap-7">
                            <Prev className="swiper-button-prev cursor-pointer" />
                            <Next className="swiper-button-next cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam
