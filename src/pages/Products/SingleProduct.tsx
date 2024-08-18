import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RelatedProducts from "./RelatedProducts"
import TrustedHomepage from "../Home/TrustedHomepage"
import { get } from "../../service/api_service"
import { ProductDetailsProp } from "../../lib/types"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import ReviewsTab from "./ReviewsTab"
import PricingDetailsTab from "./PricingDetailsTab"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import SkelentonLoader from "../../components/loader/SkelentonLoader"
import { ArrowRight1 } from "../../assets/RenderedAssets"

const SingleProduct = () => {
    const { productCode } = useParams()
    const [activeTab, setActiveTab] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [productDetails, setProductDetails] =
        useState<ProductDetailsProp | null>(null)

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        setIsLoading(true)
        try {
            const response = await get(`products/${productCode}`)
            setIsLoading(false)
            if (response.code === 200) {
                setProductDetails(response.body)
            } else {
                setProductDetails(null)
            }
        } catch (error) {
            setIsLoading(false)
            setProductDetails(null)
        }
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-center px-[5%] pb-[20vh] pt-[10vh] md:pt-[20vh]">
                <div className="flex w-full flex-col items-center rounded-[8px] border bg-[#F9F9FB] px-4 py-12">
                    {isLoading ? (
                        <div className="mt-[5dvh] flex w-full flex-col items-center justify-center gap-2 md:w-[80%] ">
                            <SkelentonLoader width="w-1/5" />
                        </div>
                    ) : (
                        <TextFade
                            animation="fade-down"
                            isSpan={false}
                            style="transition-all duration-1000 ease-in-out"
                        >
                            <H1 align="center">
                                {productDetails?.productName}
                            </H1>
                        </TextFade>
                    )}

                    {isLoading ? (
                        <div className="mb-[20dvh] mt-10 flex w-full flex-col items-center justify-center gap-2 md:w-[80%] ">
                            <SkelentonLoader />
                            <SkelentonLoader width="w-1/2" />
                        </div>
                    ) : (
                        <TextFade
                            animation="fade-down"
                            style="transition-all duration-1000 ease-in-out mt-5 mb-10"
                        >
                            <P mode={"light"} align="center">
                                {productDetails?.productShortDescription}
                            </P>
                        </TextFade>
                    )}

                    {isLoading ? (
                        <SkelentonLoader height={600} />
                    ) : (
                        <div className="mt-10 h-[50dvh] w-full overflow-hidden rounded-[18px] bg-black">
                            <img
                                src={productDetails?.productImageUrl}
                                alt="hero image"
                                className="h-full w-full object-cover opacity-80"
                            />
                        </div>
                    )}

                    {isLoading ? (
                        <div className="mt-20 flex w-full flex-col items-center justify-center gap-2 md:w-[80%] ">
                            <SkelentonLoader />
                            <SkelentonLoader width="w-1/2" />
                            <SkelentonLoader width="w-1/4" />
                        </div>
                    ) : (
                        <div className="flex w-full flex-col items-center justify-center">
                            <TextFade
                                animation="fade-down"
                                style="transition-all duration-1000 ease-in-out mt-10 mb-10"
                            >
                                <P mode={"light"} align="center">
                                    {productDetails?.productFullDescription}
                                </P>
                            </TextFade>
                            <div className="my-t-5"></div>
                            <Button
                                value={"Order Now"}
                                icon2={
                                    <ArrowRight1 className="ml-3 text-white" />
                                }
                                url="/contact"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-[20dvh] flex w-full flex-col-reverse items-start justify-between gap-20 md:flex-row">
                    <div className="w-full md:w-[45%]">
                        <div className="flex items-center gap-10">
                            <div
                                className={`${activeTab === 0 && "bg-primaryLight"} rounded-[8px] py-3 pl-5 pr-10 transition-all duration-500 ease-in-out`}
                                onClick={() => {
                                    setActiveTab(0)
                                }}
                            >
                                <P
                                    mode={activeTab === 0 ? "dark" : "light"}
                                    align="center"
                                >
                                    Description
                                </P>
                            </div>
                            {isLoading ? (
                                <Skeleton width={150} height={40} />
                            ) : (
                                <Button
                                    value={`Reviews (${productDetails?.productReviews.length})`}
                                    btnColor={
                                        activeTab === 1
                                            ? "bg-primaryLight"
                                            : "bg-white"
                                    }
                                    textColor={
                                        activeTab === 1
                                            ? "text-white"
                                            : "text-darkText"
                                    }
                                    type="tab"
                                    click={() => {
                                        setActiveTab(1)
                                    }}
                                />
                            )}
                        </div>

                        {isLoading ? (
                            <Skeleton width="100%" height={300} />
                        ) : activeTab === 0 ? (
                            <PricingDetailsTab />
                        ) : (
                            <ReviewsTab
                                productReviews={
                                    productDetails?.productReviews ?? []
                                }
                                productID={productDetails?.id!}
                            />
                        )}
                    </div>

                    {isLoading ? (
                        <SkelentonLoader height={500} />
                    ) : (
                        <div className="h-[50dvh] w-full overflow-hidden rounded-[18px] bg-black md:w-[45%]">
                            <img
                                src={productDetails?.productReviewImageUrl}
                                alt={productDetails?.productName}
                                className="h-full w-full object-cover opacity-80"
                            />
                        </div>
                    )}
                </div>
            </div>
            <RelatedProducts />
            <TrustedHomepage />
        </div>
    )
}

export default SingleProduct
