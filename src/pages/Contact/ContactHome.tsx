import React, { useState } from "react"
import TextFade from "../../components/CustomTexts/TextFade"
import H1 from "../../components/CustomTexts/H1"
import P from "../../components/CustomTexts/P"
import CASHEW from "../../assets/cash-trusted.jpeg"
import BaseInput from "../../components/input/BaseInput"
import Button from "../../components/Buttons/Button"
import {
    ArrowRight1,
    LocationIcon,
    MailIcon,
    PhoneIcon,
} from "../../assets/RenderedAssets"

const ContactHome = () => {
    const [formData, setFormData] = useState({
        product: "",
        quantity: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    })

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // API call to submit the form data
        console.log(formData)
    }
    return (
        <div className="flex flex-col items-center justify-center px-[5%] py-[20vh]">
            <TextFade
                animation="fade-down"
                isSpan={false}
                style="transition-all duration-1000 ease-in-out"
            >
                <H1 align="center">Contact Us</H1>
            </TextFade>{" "}
            <TextFade
                animation="fade-down"
                style="transition-all duration-1000 ease-in-out mt-5 mb-10"
            >
                <P mode={"light"} align="center">
                    Ordering your favorite products from MarbleFoods has never
                    been easier! Follow these simple steps to get started
                </P>
            </TextFade>
            <div className="mt-20 flex w-full gap-10 rounded-[8px] bg-primaryDark p-7">
                <div className="hidden w-full  items-center justify-center  overflow-hidden rounded-[8px] md:flex md:w-[45%]">
                    <img
                        src={CASHEW}
                        alt="cashew"
                        className="h-full w-full object-cover"
                    />
                </div>
                <form
                    className="flex w-full flex-col gap-5 rounded-[8px] md:w-[55%] md:gap-10 md:bg-white/5 md:p-7"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                        <BaseInput
                            type={"select"}
                            isRequired={true}
                            title="Product"
                            option={["Chahew", "Maize", "Cocoa", "Peanut"]}
                            placeholder="e.g Peanut"
                            name="product"
                            value={formData.product}
                            onSelectChange={handleChange}
                        />
                        <BaseInput
                            type={"select"}
                            isRequired={true}
                            title="Quantity"
                            placeholder="Quantity"
                            option={["10kg", "30kg", "59kg", "120kg"]}
                            name="quantity"
                            value={formData.quantity}
                            onSelectChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                        <BaseInput
                            type={"text"}
                            isRequired={true}
                            title="Name"
                            placeholder="Adenuga Adewumi"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <BaseInput
                            type={"email"}
                            isRequired={true}
                            title="Email"
                            placeholder="e.g adenugaadewumi@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:gap-10">
                        <BaseInput
                            type={"phone"}
                            isRequired={true}
                            title="Phone"
                            placeholder="+234 (0) 907 8959 454"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <BaseInput
                            type={"text"}
                            isRequired={true}
                            title="Residential Address"
                            placeholder="e.g B445, Marble street, Abuja, Nigeria."
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <BaseInput
                        type={"textarea"}
                        isRequired={true}
                        title="Message"
                        placeholder="Type your message here..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button
                        value={"Submit"}
                        type="submit"
                        isLoading={false}
                        icon2={<ArrowRight1 className="ml-3 text-white" />}
                    />
                </form>
            </div>
            <div className="mt-20 flex flex-col items-center justify-center gap-10 md:flex-row">
                <div className="flex items-center gap-3">
                    <MailIcon />{" "}
                    <div className="flex flex-col gap-0">
                        <P mode="light" fontSize="text-[13px]">
                            Email:
                        </P>
                        <a href="mailto:marblefoods@gmail.com">
                            <P mode="light" fontSize="text-[13px]">
                                marblefoods@gmail.com
                            </P>
                        </a>
                    </div>
                </div>
                <div className="hidden h-[48px] w-[1px] bg-[#E1E4ED] md:block"></div>

                <div className="flex items-center gap-3">
                    <PhoneIcon />{" "}
                    <div className="flex flex-col gap-0">
                        <P mode="light" fontSize="text-[13px]">
                            Phone:
                        </P>
                        <a href="tel:+2348130466995">
                            <P mode="light" fontSize="text-[13px]">
                                +2348130466995
                            </P>
                        </a>
                    </div>
                </div>
                <div className="hidden h-[48px] w-[1px] bg-[#E1E4ED] md:block"></div>
                <div className="flex items-center gap-3">
                    <LocationIcon />{" "}
                    <div className="flex flex-col gap-0">
                        <P mode="light" fontSize="text-[13px]">
                            Location:
                        </P>
                        <P mode="light" fontSize="text-[13px]">
                            Kado, Abuja, Nigeria
                        </P>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHome
