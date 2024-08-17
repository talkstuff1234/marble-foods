import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RelatedProducts from "./RelatedProducts"
import TrustedHomepage from "../Home/TrustedHomepage"
import { get } from "../../service/api_service"
import { ProductDetailsProp, ProductReview } from "../../lib/types"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import Button from "../../components/Buttons/Button"
import { Stars } from "../../assets/RenderedAssets"
import ReviewsTab from "./ReviewsTab"
import PricingDetailsTab from "./PricingDetailsTab"

const SingleProduct = () => {
    const { productCode } = useParams()
    const [activeTab, setActiveTab] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [productDetails, setProductDetails] =
        useState<ProductDetailsProp | null>(null)
    useEffect(() => {
        grtProductDetails()
    }, [])

    const grtProductDetails = async () => {
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
            <div className="flex flex-col items-center justify-center px-[5%] py-[20vh]">
                <TextFade
                    animation="fade-down"
                    isSpan={false}
                    style="transition-all duration-1000 ease-in-out"
                >
                    <H1 align="center">{productDetails?.productName}</H1>
                </TextFade>{" "}
                <TextFade
                    animation="fade-down"
                    style="transition-all duration-1000 ease-in-out mt-5 mb-10"
                >
                    <P mode={"light"} align="center">
                        {productDetails?.productShortDescription}
                    </P>
                </TextFade>
                <div className="mt-20 h-[50dvh] w-full overflow-hidden rounded-[18px] bg-black">
                    <img
                        src={productDetails?.productImageUrl}
                        alt="hero image"
                        className="h-full w-full object-cover opacity-80"
                    />
                </div>
                <TextFade
                    animation="fade-down"
                    style="transition-all duration-1000 ease-in-out mt-10 mb-10"
                >
                    <P mode={"light"} align="center">
                        {productDetails?.productFullDescription}
                    </P>
                </TextFade>
                <div className="mt-[20dvh] flex w-full flex-col-reverse items-start justify-between gap-20 md:flex-row">
                    <div className="w-full md:w-[45%]">
                        <div className="flex items-center gap-10">
                            <div
                                className={`${activeTab == 0 && "bg-primaryLight"} rounded-[8px] py-3 pl-5 pr-10 transition-all duration-500 ease-in-out`}
                                onClick={() => {
                                    setActiveTab(0)
                                }}
                            >
                                <P
                                    mode={activeTab == 0 ? "dark" : "light"}
                                    align="center"
                                >
                                    Description
                                </P>
                            </div>
                            <Button
                                value={`Reviews (${productDetails?.productReviews.length})`}
                                btnColor={
                                    activeTab == 1
                                        ? "bg-primaryLight"
                                        : "bg-white"
                                }
                                textColor={
                                    activeTab == 1
                                        ? "text-white"
                                        : "text-darkText"
                                }
                                type="tab"
                                click={() => {
                                    setActiveTab(1)
                                }}
                            />
                        </div>
                        {activeTab == 0 ? (
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
                    <div className="h-[50dvh] w-full overflow-hidden rounded-[18px] bg-black md:w-[45%]">
                        <img
                            src={productDetails?.productReviewImageUrl}
                            alt={productDetails?.productName}
                            className="h-full w-full object-cover opacity-80"
                        />
                    </div>
                </div>
            </div>
            <RelatedProducts />
            <TrustedHomepage />
        </div>
    )
}

export default SingleProduct
