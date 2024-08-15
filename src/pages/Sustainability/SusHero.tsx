import React from "react"
import SUS1 from "../../assets/sus1.jpeg"
import SUS2 from "../../assets/sus2.jpeg"
import SUS3 from "../../assets/sus3.jpeg"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"

const SusHero = () => {
    return (
        <div className="mb-[10dvh] mt-[20dvh]  px-[5%]">
            <div className="flex flex-col items-center gap-20 md:flex-row">
                <div className="flex h-[50dvh] w-full items-start justify-center overflow-hidden rounded-r-[8px] md:w-[55%]">
                    <img src={SUS1} alt="" className="w-full" />
                </div>
                <div className="w-full  md:w-[45%] ">
                    <TextFade
                        animation="fade-right"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1>Sustainable Practices</H1>
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out mt-5"
                    >
                        <P mode={"light"}>
                            At Marble Foods, our mission extends beyond
                            delivering premium agro-products; we are deeply
                            committed to responsible and sustainable practices
                            that benefit communities, protect the environment,
                            and uphold the highest ethical standards. Our core
                            values of integrity, respect, and transparency guide
                            our corporate responsibility initiatives, ensuring
                            that we make a positive impact locally and globally.
                        </P>
                    </TextFade>
                </div>
            </div>
            <div className="mt-[15dvh] flex flex-col items-center justify-between gap-10 rounded-[10px] md:flex-row md:gap-0 md:border md:px-20 md:py-7 md:shadow-[0_1px_4px_0px_#19213D14]">
                <div className="w-full  rounded-[8px] border p-5 shadow-[0_1px_4px_0px_#19213D14] md:w-[45%] md:p-10">
                    <TextFade
                        animation="fade-right"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1 textSize="text-[23px]" textWeight="font-[500]">
                            We Source Ethically and Trade Fairly
                        </H1>
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out mt-5 pb-10"
                    >
                        <P mode={"light"}>
                            At Marble Foods, our mission extends beyond
                            delivering premium agro-products; we are deeply
                            committed to responsible and sustainable practices
                            that benefit communities, protect the environment,
                            and uphold the highest ethical standards. Our core
                            values of integrity, respect, and transparency guide
                            our corporate responsibility initiatives, ensuring
                            that we make a positive impact locally and globally.
                        </P>
                    </TextFade>
                </div>
                <div className="w-full  rounded-[8px] border p-5 shadow-[0_1px_4px_0px_#19213D14] md:w-[45%] md:p-10">
                    <TextFade
                        animation="fade-right"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1 textSize="text-[23px]" textWeight="font-[500]">
                            We Empower Women
                        </H1>
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out mt-5"
                    >
                        <P mode={"light"}>
                            We have positively impacted the employment rate of
                            women in our sourcing regions, by hiring a
                            significant number of women in the processing stages
                            of our cashew kernel production. In particular, the
                            delicate task of peeling cashew kernels is handled
                            predominantly by women, providing them with valuable
                            employment opportunities and empowering them
                            economically. This initiative not only enhances the
                            quality of our products but also supports the
                            livelihoods of women in the community, fostering a
                            more inclusive workforce.
                        </P>
                    </TextFade>
                </div>
            </div>
            <div className="mt-32 flex flex-col items-end rounded-[10px] border border-[#E1E4ED] shadow-[0_1px_4px_0px_#19213D14] md:flex-row md:gap-20">
                <div className="w-full  p-5 md:w-[45%] md:py-10 md:pl-10">
                    <TextFade
                        animation="fade-right"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1 textSize="text-[23px]" textWeight="font-[500]">
                            We Assure Quality and Safety{" "}
                        </H1>{" "}
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out mt-5"
                    >
                        <P mode={"light"}>
                            Marble Foods adheres to rigorous quality control
                            measures to ensure that our products meet the
                            highest safety and quality standards. Each product
                            undergoes thorough testing to guarantee its purity
                            and nutritional value, reflecting our unwavering
                            commitment to excellence and consumer trust.
                        </P>
                    </TextFade>
                </div>
                <div className="flex h-[50dvh] w-full items-start justify-center overflow-hidden rounded-br-[8px] rounded-tl-[8px] md:mt-10 md:w-[55%]">
                    <img
                        src={SUS2}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="mt-32 flex flex-col items-start gap-10 rounded-[10px] border border-[#E1E4ED] shadow-[0_1px_4px_0px_#19213D14]">
                <div className="w-full md:w-[55%] p-5 md:py-10 md:pl-10">
                    <TextFade
                        animation="fade-right"
                        isSpan={false}
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1 textSize="text-[23px]" textWeight="font-[500]">
                            We are Transparent and Accountable
                        </H1>{" "}
                    </TextFade>{" "}
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out mt-5"
                    >
                        <P mode={"light"}>
                            We are dedicated to maintaining transparency in all
                            our operations. Regular reporting on our
                            sustainability initiatives and open communication
                            with stakeholders allow us to uphold accountability
                            and build trust. By engaging with customers,
                            employees, and community members, we continuously
                            refine our practices and strive for greater impact.
                        </P>
                    </TextFade>
                </div>
                <div className="flex h-[50dvh] w-full items-center justify-center overflow-hidden rounded-[8px]">
                    <img
                        src={SUS3}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default SusHero
