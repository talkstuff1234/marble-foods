import React from "react"
import HeadingIntro from "../../components/Tile/HeadingIntro"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { ArrowRight1 } from "../../assets/RenderedAssets"
import { Link } from "react-router-dom"
import { HomeProductData } from "../../lib/constants"
import { HomeProductItemsProp } from "../../lib/types"

const ProductsHomepage = () => {
    return (
        <div className="bg-primaryDark px-[5%] py-[10vh]">
            <div className="flex flex-col items-center justify-between rounded-[16px] bg-white/[4%] px-[5%] md:flex-row">
                <div className="w-full py-[20vh] md:w-[35%]">
                    <HeadingIntro value="Our products" />
                    <div className="my-4"></div>
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <H1 align="left" textColor="text-white">
                            What we
                            <span className="italic text-primaryLight">
                                {" "}
                                Produce
                            </span>
                        </H1>
                    </TextFade>{" "}
                    <div className="my-4"></div>
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <P mode={"dark"}>
                            All our products are made within plantations around
                            Nigeria and meticulously processed to deliver
                            exceptional quality and taste to any palette.
                        </P>
                    </TextFade>
                    <div className="mt-10"></div>
                    <TextFade
                        animation="fade-right"
                        style="transition-all duration-1000 ease-in-out"
                    >
                        <Button
                            value={"Contact Us"}
                            icon2={<ArrowRight1 className="ml-3 text-white" />}
                            url="/about"
                        />
                    </TextFade>
                </div>
                <div className="w-full md:h-[80vh] md:w-[45%]">
                    <div className="scrollbar-container flex h-full w-full flex-col gap-10 py-7 md:overflow-y-scroll">
                        {HomeProductData.items.map(
                            (item: HomeProductItemsProp, index: number) => {
                                return (
                                    <div
                                        className="rounded-[8px] bg-gradient-to-b from-white/[1%] to-white/[4%] p-[16px]"
                                        key={index}
                                    >
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-full rounded-[5px]"
                                        />
                                        <div className="mt-[16px] flex justify-between">
                                            <P mode={"dark"}>{item.title}</P>
                                            <Link
                                                to={item.url}
                                                className="flex items-center"
                                            >
                                                <P mode={"dark"}>
                                                    View product
                                                </P>
                                                <ArrowRight1 className="ml-3 text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            },
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsHomepage
