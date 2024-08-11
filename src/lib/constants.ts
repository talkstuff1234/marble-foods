import {
    FooterSection,
    HomeProductsProp,
    NavItemsProps,
    WhatSetsUsApartProp,
} from "./types"
import APARTA1 from "../assets/apartA1.svg"
import APARTA2 from "../assets/apartA2.svg"
import APARTB1 from "../assets/apartB1.svg"
import APARTB2 from "../assets/apartB2.svg"
import APARTB3 from "../assets/apartB3.svg"
import APARTB4 from "../assets/apartB4.svg"
import SEAMSEED from "../assets/seam-seed.jpeg"

export const NavItems: NavItemsProps = {
    items: [
        {
            value: "Home",
            url: "/",
            delay: 300,
        },
        {
            value: "About Us",
            url: "/about",
            delay: 350,
        },
        {
            value: "Products",
            url: "/products",
            delay: 400,
            dropdownItem: [
                {
                    value: "Cashew Nuts",
                    description:
                        "Enjoy peace of mind with our state-of-the-art security protocols.",
                    link: "/products/cashew-nuts",
                },
                {
                    value: "Cocoa",
                    description:
                        "Enjoy peace of mind with our state-of-the-art security protocols.",
                    link: "/products/cocoa",
                },
                {
                    value: "Coffee",
                    description:
                        "Enjoy peace of mind with our state-of-the-art security protocols.",
                    link: "/products/cocoa",
                },
                {
                    value: "Hibiscus Flower",
                    description:
                        "Enjoy peace of mind with our state-of-the-art security protocols.",
                    link: "/products/cocoa",
                },
                {
                    value: "Sesame Seeds",
                    description:
                        "Enjoy peace of mind with our state-of-the-art security protocols.",
                    link: "/products/cocoa",
                },
            ],
        },
        {
            value: "Sustainability",
            url: "/sustainability",
            delay: 500,
        },
        {
            value: "Insights",
            url: "/insights",
            delay: 600,
            dropdownItem: [
                {
                    value: "Quarry",
                    description: "",
                    link: "/services/quarry",
                },
                {
                    value: "Real Estate",
                    description: "",
                    link: "/services/real-estate",
                },
                {
                    value: "Sand Dredging",
                    description: "",
                    link: "/services/sand-dredging",
                },
            ],
        },
    ],
}

export const WhatSetsUsApartData: WhatSetsUsApartProp = {
    items: [
        {
            images: [APARTA1, APARTA2],
            coated: "Maximizing Yields and Reducing Post-Harvest Losses with Free Warehousing Solutions.",
            title: "Empowering Smallholder Farmers",
            description:
                "Our agro-processing hub and warehousing facilities enable smallholder farmers to eliminate yield losses from poor post-harvest practices. By providing storage at zero cost, we help farmers reap maximum yields from their harvests and preserve their produce for extended periods.",
        },
        {
            images: [APARTB1, APARTB2, APARTB3, APARTB4],
            coated: "Expert Consulting and Contracting for Local and International Agro-Enterprises.",
            title: "Comprehensive Consulting Services",
            description:
                "We provide specialized consulting and general contracting services to both local and international companies. Our expertise in the agro-commodity sector helps businesses optimize their operations, improve supply chain management, and navigate the complexities of agricultural trade.",
        },
    ],
}

export const HomeProductData: HomeProductsProp = {
    items: [
        {
            image: SEAMSEED,
            title: "Sesames seed",
            url: "",
        },
        {
            image: SEAMSEED,
            title: "Sesames seed",
            url: "",
        },
        {
            image: SEAMSEED,
            title: "Sesames seed",
            url: "",
        },
        // {
        //     image: "",
        //     title: "",
        //     url: "",
        // },
    ],
}

export const FOOTER_LINKS: FooterSection[] = [
    {
        title: "About Us",
        items: [
            { text: "Mission", link: "/mission" },
            { text: "Team", link: "/team" },
            { text: "Ethics", link: "/ethics" },
            { text: "Certifications", link: "/certifications" },
        ],
    },
    {
        title: "Products",
        items: [
            { text: "Cashew Nuts", link: "/cashew-nuts" },
            { text: "Cocoa", link: "/cocoa" },
            { text: "Hibiscus Flower", link: "/hibiscus-flower" },
            { text: "Sesame Seeds", link: "/sesame-seeds" },
        ],
    },
    {
        title: "Insight",
        items: [
            { text: "Company News", link: "/company-news" },
            { text: "Industry News", link: "/industry-news" },
            { text: "Product Updates", link: "/product-updates" },
            { text: "Articles", link: "/articles" },
        ],
    },
    {
        title: "Get in Touch",
        items: [
            { text: "Contact Details", link: "/contact-details" },
            { text: "FAQs", link: "/faqs" },
            { text: "Live Chat", link: "/live-chat" },
        ],
    },
]
