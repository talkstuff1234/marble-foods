import { NavItemsProps } from "./types"

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
