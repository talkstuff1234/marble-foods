import React, { useEffect, useState } from "react"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import { get } from "../../service/api_service"
import {
    LoadingAnimation,
    LoadingAnimation2,
} from "../../assets/RenderedAssets"
import { RelatedProductItemProp } from "../../lib/types"
import { useOutro } from "../../lib/OutroContext"
import { useNavigate } from "react-router-dom"

const RelatedProducts = () => {
    const { triggerOutro } = useOutro()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [allRelatedProducts, setAllRelatedProducts] = useState([])

    useEffect(() => {
        handleGetCourses()
    }, [])

    const handleGetCourses = async () => {
        setIsLoading(true)
        try {
            const response = await get("related-products")
            setIsLoading(false)
            if (response.code === 200) {
                setAllRelatedProducts(response.body)
            } else {
                setAllRelatedProducts([])
            }
        } catch (error) {
            setIsLoading(false)
            setAllRelatedProducts([])
        }
    }

    const routeLink = (url: string, callOutro: boolean) => {
        callOutro && triggerOutro()
        setTimeout(() => {
            navigate(url)
        }, 3000)
    }
    return (
        <div className="w-full bg-[#FBFAF9] px-[5%] py-[10vh]">
            {" "}
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out"
            >
                <H1 align="center">Related Products</H1>
            </TextFade>{" "}
            <TextFade
                animation="fade-down"
                style="transition-all duration-1000 ease-in-out mt-5 mb-10"
            >
                <P mode={"light"} align="center">
                    Our cocoa is sourced from the lush plantations of Ghana and
                    Côte d'Ivoire, famed for their rich and aromatic beans.
                </P>
            </TextFade>
            <div className="mt-20 w-full">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center gap-3 py-10">
                        <LoadingAnimation2 />
                        <P mode={"light"} align="center">
                            Fetching Related Products
                        </P>
                    </div>
                ) : (
                    <>
                        {allRelatedProducts.length > 1 ? (
                            <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
                                {allRelatedProducts.map(
                                    (data: RelatedProductItemProp) => {
                                        return (
                                            <TextFade
                                                animation="zoom-in"
                                                style="transition-all duration-1000 ease-in-out"
                                                key={data.id}
                                            >
                                                {" "}
                                                <div
                                                    className="group cursor-pointer rounded-[12px] border border-[#EFEFF3] bg-white p-5"
                                                    onClick={() => {
                                                        routeLink(
                                                            `/products/${data.productCode}`,
                                                            true,
                                                        )
                                                    }}
                                                >
                                                    <div className="h-[294px] overflow-hidden rounded-[8px] border bg-black">
                                                        <img
                                                            src={
                                                                data.productImageUrl
                                                            }
                                                            alt={data.productName}
                                                            className="h-full w-full object-cover opacity-80 transition-all duration-1000 ease-in-out group-hover:scale-110"
                                                        />
                                                    </div>
                                                    <div className="mt-4">
                                                        <H1
                                                            textWeight="font-[700]"
                                                            textSize="text-[16px]"
                                                            textColor="text-darkText"
                                                            leading="leading-auto"
                                                        >
                                                            {data.productName}
                                                        </H1>
                                                    </div>
                                                </div>
                                            </TextFade>
                                        )
                                    },
                                )}
                            </div>
                        ) : (
                            <P mode="light">No Related ProductsFound</P>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default RelatedProducts
