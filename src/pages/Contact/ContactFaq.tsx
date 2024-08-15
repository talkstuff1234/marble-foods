import React, { useState } from "react"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import { NavDropdown } from "../../assets/RenderedAssets"

const ContactFaq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const faqItems = [
        {
            question: "What products does Marble Foods offer?",
            answer: "Ordering your favorite products from MarbleFoods has never been easier! Follow these simple steps to get started",
        },
        {
            question: "How do I track my order?",
            answer: "Once your order is shipped, you will receive an email with tracking information. You can use this to track the status of your order.",
        },
        {
            question: "What is the return policy?",
            answer: "We accept returns within 30 days of delivery. Please see our full return policy for details.",
        },
        {
            question: "Can I cancel my order?",
            answer: "Please contact our customer service team as soon as possible if you need to cancel your order. We will do our best to accommodate your request.",
        },
        {
            question: "How do I contact customer service?",
            answer: "You can reach our customer service team by phone, email, or through our website. We are available to assist you Monday-Friday, 9am-5pm EST.",
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes, our website uses industry-standard SSL encryption to ensure that your personal information is protected.",
        },
        {
            question: "Do you offer any discounts or promotions?",
            answer: "Yes, we offer various discounts and promotions throughout the year. Sign up for our newsletter to stay informed about our latest deals.",
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center px-[5%] pb-[30dvh] pt-[10vh]">
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out"
            >
                <H1 align="center">Frequently Asked Questions</H1>
            </TextFade>{" "}
            <div className="mt-32 flex w-full flex-col gap-10 md:w-[40%]">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="group w-full border-b px-3 transition-all duration-500 ease-in-out"
                    >
                        <div
                            className="flex w-full cursor-pointer items-center justify-between pb-2"
                            onClick={() =>
                                setActiveIndex(
                                    index === activeIndex ? null : index,
                                )
                            }
                        >
                            <P mode="light" fontSize="text-[19px]">
                                {item.question}
                            </P>
                            <NavDropdown
                                className={`cursor-pointer text-darkText ${
                                    index === activeIndex ? "rotate-180" : ""
                                }`}
                            />
                        </div>
                        {index === activeIndex && (
                            <div
                                className="py-5"
                                style={{
                                    animation:
                                        "accordion-expand 0.5s ease-in-out",
                                }}
                            >
                                <P mode="light">{item.answer}</P>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactFaq
