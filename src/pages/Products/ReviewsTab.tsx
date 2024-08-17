import React, { useEffect, useState } from "react"
import { ProductReview } from "../../lib/types"
import TextFade from "../../components/CustomTexts/TextFade"
import { Stars, Stars2 } from "../../assets/RenderedAssets"
import P from "../../components/CustomTexts/P"
import StarRating from "./StarRating"
import BaseInput from "../../components/input/BaseInput"
import Button from "../../components/Buttons/Button"
import { post } from "../../service/api_service"
import {
    infoNotifier,
    successNotifier,
} from "../../components/Notification/Notification"

const ReviewsTab = ({
    productReviews,
    productID,
}: {
    productReviews: ProductReview[]
    productID: string
}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        reviewName: "",
        reviewEmail: "",
        reviewComments: "",
        reviewRating: 1,
    })
    const [reviews, setReviews] = useState(productReviews) // <--- Add this line
    useEffect(() => {
        setReviews(productReviews)
    }, [productReviews])

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const handleRatingChange = (rating: number) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            reviewRating: rating,
        }))
    }

    const submitReview = async () => {
        setIsLoading(true)
        try {
            const response = await post(
                `products/${productID}/reviews`,
                formData,
            )
            setIsLoading(false)
            if (response.code === 200) {
                const newReviewId = Math.random().toString(36).substr(2, 10)
                const newReview = { ...formData, id: newReviewId }
                setReviews([newReview, ...reviews]) // <--- Update the state here
                successNotifier({
                    title: "Adding Review",
                    description: response.message,
                    notifierId: "",
                })
                setFormData({
                    reviewName: "",
                    reviewEmail: "",
                    reviewComments: "",
                    reviewRating: 1,
                })
            } else {
                infoNotifier({
                    title: "Adding Review",
                    description: response.message,
                    notifierId: "",
                })
                // handle error response
            }
        } catch (error) {
            let err: any = error
            setIsLoading(false)
            infoNotifier({
                title: "Adding Review",
                description: err.message,
                notifierId: "",
            })
            // handle error
        }
    }
    return (
        <div>
            {reviews.length! > 1 ? (
                <div className="mt-10 grid grid-cols-1 gap-3 rounded-[8px] bg-[#F9F9FB] p-3 md:grid-cols-2">
                    {reviews.map((data: ProductReview) => {
                        return (
                            <TextFade
                                animation="zoom-in"
                                style="transition-all duration-1000 ease-in-out"
                                key={data.id}
                            >
                                {" "}
                                <div className="group h-full cursor-pointer rounded-[12px] border border-[#EFEFF3] bg-white p-5">
                                    <div className="mb-3 flex w-full items-center justify-between">
                                        <h2 className="text-[13px] font-[400] text-darkText">
                                            {data.reviewName}
                                        </h2>
                                        <div className="flex items-center gap-3">
                                            <Stars />
                                            <P
                                                mode="light"
                                                fontSize="text-[12px]"
                                            >
                                                {data.reviewRating}
                                            </P>
                                        </div>
                                    </div>
                                    <P
                                        mode={"light"}
                                        align="left"
                                        fontSize="text-[11px]"
                                    >
                                        {data.reviewComments}
                                    </P>
                                </div>
                            </TextFade>
                        )
                    })}
                </div>
            ) : (
                <P mode="light">No Rating on this product</P>
            )}
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    submitReview()
                }}
            >
                <StarRating
                    initialRating={1}
                    onChange={(rating) => handleRatingChange(rating)}
                />
                <div className="mt-5"></div>
                <BaseInput
                    type={"textarea"}
                    labelColor="text-textDark"
                    isRequired={false}
                    title={"Additional Comment"}
                    placeholder={"Provide any additional comment..."}
                    rows={5}
                    name="reviewComments"
                    value={formData.reviewComments}
                    onChange={handleInputChange}
                />
                <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-10">
                    <BaseInput
                        type={"text"}
                        isRequired={true}
                        title="Name"
                        placeholder="Adenuga Adewumi"
                        name="reviewName"
                        value={formData.reviewName}
                        onChange={handleInputChange}
                    />
                    <BaseInput
                        type={"email"}
                        isRequired={true}
                        title="Email"
                        placeholder="e.g adenugaadewumi@example.com"
                        name="reviewEmail"
                        value={formData.reviewEmail}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mt-7"></div>

                <Button value={"Submit"} type="submit" isLoading={isLoading} />
            </form>
        </div>
    )
}

export default ReviewsTab
