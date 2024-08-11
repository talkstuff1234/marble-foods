import React from "react"
import MISSIONIMG from "../../assets/mission.png"
import VISIONIMG from "../../assets/vision.png"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"

const AboutMissionVission = () => {
    return (
        <div className="px-[5%] py-[10dvh]">
            <div className="mb-10 flex flex-col items-center gap-10  md:mb-0 md:flex-row md:gap-0">
                <div className="w-full md:w-[55%]">
                    <img src={MISSIONIMG} alt="" className="w-full" />
                </div>
                <div className="w-full pl-0 md:w-[45%] md:pl-5">
                    <TextFade
                        animation="fade-down"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1>Mission</H1>
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-down"
                        style="transition-all duration-1000 ease-in-out mt-5"
                    >
                        <P mode={"light"}>
                            Marble Foods’ mission is to provide world-class
                            agricultural products to various consumers
                            worldwide, all while ensuring a transparent and
                            well-coordinated agro-business approach. We aim to
                            simplify cross-country export processes and
                            warehousing services, thereby delivering value and
                            trust to both stakeholders and customers alike.
                        </P>
                    </TextFade>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-0">
                <div className="w-full pr-0 md:w-[45%] md:pr-5">
                    <TextFade
                        animation="fade-down"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1>Vision</H1>
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-down"
                        style="transition-all duration-1000 ease-in-out mt-5"
                    >
                        <P mode={"light"}>
                            To expand our product portfolio and geographic
                            reach, becoming a leading commodity trading and
                            exports company on the global scale. We look forward
                            to putting African agro-commodities on the map of
                            world-class standards and provide a motivating
                            workplace that will attract, develop and keep the
                            right employees at the same time.
                        </P>
                    </TextFade>
                </div>
                <div className="w-full md:w-[55%]">
                    <img src={VISIONIMG} alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default AboutMissionVission
