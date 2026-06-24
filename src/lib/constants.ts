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
import CASHEW from "../assets/cashew.jpg"
import COFFEE from "../assets/coffee.jpg"
import HIBISCUS from "../assets/hibiscus.jpg"
import COCOA from "../assets/cocoa.jpg"
import TEAM1 from "../assets/team1.jpeg"
import TEAM2 from "../assets/team1.jpeg"
import FB from "../assets/teamFB.svg"
import IG from "../assets/teamIG.svg"
import TW from "../assets/teamTW.svg"

export const routeTimer: Number = 0

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
            title: "Sesame seed",
            url: "/products/sesame-seeds",
        },
        {
            image: CASHEW,
            title: "Cashew Nuts",
            url: "/products/cashew-nuts",
        },
        {
            image: COCOA,
            title: "Cocoa",
            url: "/products/cocoa",
        },
        {
            image: COFFEE,
            title: "Coffee",
            url: "/products/coffee",
        },
        {
            image: HIBISCUS,
            title: "Hibiscus Flowers",
            url: "/products/hibiscus-flowers",
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
            { text: "Mission", link: "/about#mission" },
            { text: "Team", link: "/about#team" },
            { text: "Ethics", link: "/about" },
            { text: "Certifications", link: "/about" },
        ],
    },
    {
        title: "Products",
        items: [
            { text: "Cashew Nuts", link: "/products/cashew-nuts" },
            { text: "coffee", link: "/products/coffee" },
            { text: "Hibiscus Flower", link: "/products/hibiscus-flower" },
            { text: "Cocoa", link: "/products/Cocoa" },
            { text: "Sesame Seeds", link: "/products/sesame-seeds" },
        ],
    },
    {
        title: "Insight",
        items: [
            { text: "Company News", link: "/company-news" },
            // { text: "Industry News", link: "/industry-news" },
            { text: "Product Updates", link: "/product-updates" },
            { text: "Articles", link: "/articles" },
        ],
    },
    {
        title: "Get in Touch",
        items: [
            { text: "Contact Details", link: "/contact-details" },
            { text: "FAQs", link: "/faqs" },
            // { text: "Live Chat", link: "/live-chat" },
        ],
    },
]

export const teamMembers = [
    // {
    //     name: "Abdullahi Naziru Abdullahi",
    //     title: "President/CEO",
    //     bio: "Abdullahi Naziru Abdullahi, President of Marble and Grove Nigeria Limited, holds a Bsc in Chemistry and Forensic Science from the University of Strathclyde, Scotland with an Msc in entrepreneurship and Innovation Management from the University of Surrey, UK.",
    //     image: TEAM1,
    //     socialMedia: [
    //         { link: "https://www.facebook.com/", icon: FB },
    //         { link: "https://www.twitter.com/", icon: TW },
    //         { link: "https://www.instagram.com/", icon: IG },
    //     ],
    // },
    // {
    //     name: "John Doe",
    //     title: "CTO",
    //     bio: "John Doe, CTO of Marble and Grove Nigeria Limited, holds a Bsc in Computer Science from the University of Lagos, Nigeria with an Msc in Artificial Intelligence from the University of Cambridge, UK.",
    //     image: TEAM2,
    //     socialMedia: [
    //         { link: "https://www.facebook.com/", icon: FB },
    //         { link: "https://www.twitter.com/", icon: TW },
    //         { link: "https://www.instagram.com/", icon: IG },
    //     ],
    // },
    // {
    //     name: "Abdullahi Naziru Abdullahi",
    //     title: "President/CEO",
    //     bio: "Abdullahi Naziru Abdullahi, President of Marble and Grove Nigeria Limited, holds a Bsc in Chemistry and Forensic Science from the University of Strathclyde, Scotland with an Msc in entrepreneurship and Innovation Management from the University of Surrey, UK.",
    //     image: TEAM1,
    //     socialMedia: [
    //         { link: "https://www.facebook.com/", icon: FB },
    //         { link: "https://www.twitter.com/", icon: TW },
    //         { link: "https://www.instagram.com/", icon: IG },
    //     ],
    // },
    // {
    //     name: "John Doe",
    //     title: "CTO",
    //     bio: "John Doe, CTO of Marble and Grove Nigeria Limited, holds a Bsc in Computer Science from the University of Lagos, Nigeria with an Msc in Artificial Intelligence from the University of Cambridge, UK.",
    //     image: TEAM2,
    //     socialMedia: [
    //         { link: "https://www.facebook.com/", icon: FB },
    //         { link: "https://www.twitter.com/", icon: TW },
    //         { link: "https://www.instagram.com/", icon: IG },
    //     ],
    // },
    // {
    //     name: "Abdullahi Naziru Abdullahi",
    //     title: "President/CEO",
    //     bio: "Abdullahi Naziru Abdullahi, President of Marble and Grove Nigeria Limited, holds a Bsc in Chemistry and Forensic Science from the University of Strathclyde, Scotland with an Msc in entrepreneurship and Innovation Management from the University of Surrey, UK.",
    //     image: TEAM1,
    //     socialMedia: [
    //         { link: "https://www.facebook.com/", icon: FB },
    //         { link: "https://www.twitter.com/", icon: TW },
    //         { link: "https://www.instagram.com/", icon: IG },
    //     ],
    // },
    // {
    //     name: "John Doe",
    //     title: "CTO",
    //     bio: "John Doe, CTO of Marble and Grove Nigeria Limited, holds a Bsc in Computer Science from the University of Lagos, Nigeria with an Msc in Artificial Intelligence from the University of Cambridge, UK.",
    //     image: TEAM2,
    //     socialMedia: [
    //         { link: "https://www.facebook.com/", icon: FB },
    //         { link: "https://www.twitter.com/", icon: TW },
    //         { link: "https://www.instagram.com/", icon: IG },
    //     ],
    // },
    {
        name: "Success Ogbadu",
        title: "Corporate Financial Assistant",
        bio: "Success Ogbadu is the Corporate Financial Assistant, in this capacity he assists in Collecting, organizing and maintaining financial data, preparing financial statements, reports, and presentations, Support budgeting and forecasting by providing relevant financial data, Help ensure the company complies with financial regulations and reporting standards. Success's academic background includes a B.sc degree in Economics, and is looking forward to broadening his knowledge as regards helping firms scale up.",
        image: "", // Add image path if available
        socialMedia: [],
    },
    {
        name: "Alli Olabode Yusuf",
        title: "Export Manager",
        bio: "Alli Olabode Yusuf is the Export Manager at Marble & Grove Nig. Ltd., where he focuses on building relationships with international clients and government agencies to facilitate export operations. His role involves extensive travel to connect with clients, ensuring compliance with trade regulations, and optimizing export processes. With a strong background in business analysis and research, Alli excels in fostering partnerships that drive company growth and development for global presence. Prior to this role, he served as a Research and Development Business Analyst, utilizing data analysis tools to identify business opportunities and growth. With qualifications in Business Analysis and B.A Mass Communication, alongside numerous professional certifications in Hplife and NEXA Academy, Alli is dedicated to continuous improvement and operational excellence in every aspect of his work.",
        image: "", // Add image path if available
        socialMedia: [],
    },
    {
        name: "Idrees Adekambi",
        title: "Quality Assurance Manager",
        bio: "Idrees is the Quality Assurance Manager of Marble and Grove Nigeria Limited, has a Bsc degree in Biochemistry and Nutrition, a Certificate in Food Safety Management, Diploma Certificates in Supply Chain and Operations Management; he is HACCP Certified; an IRCA/CQI Certified FSSC 22000 version 6.0 Lead Auditor, ISO 9001: 2015 Lead Auditor, he is currently completing his Masters of Business Administration (MBA) program focused on Operations and Project Management. He brings a blend of technical knowledge and practical expertise to drive continuous improvement initiatives, streamline workflows, and reduce costs. He is dedicated to fostering a culture of quality within the organization and is always looking for innovative ways to exceed quality expectations and deliver superior results.",
        image: "", // Add image path if available
        socialMedia: [],
    },
    {
        name: "Ismail Yusuf Salihu",
        title: "Inventory Manager",
        bio: "Ismail Yusuf Salihu holds a B.Tech in Pure and Applied Mathematics from the Federal University of Technology, Minna, Nigeria. In his role as an Inventory Manager, he applies his analytical skills and industry expertise to streamline inventory management, optimize processes, and develop logistics solutions that promote business growth, minimize costs, and improve customer satisfaction. Previously, he worked with several prominent Nigerian banks as a seasoned Collateral Manager.",
        image: "", // Add image path if available
        socialMedia: [],
    },
    {
        name: "Mohammed Sani Suleiman",
        title: "Supply Chain Manager",
        bio: "Mohammed Sani Suleiman leverages his strong civil engineering background and practical experience to drive supply chain excellence at Marble and Grove Nigeria Ltd. With a BEng (Hons) in Civil Engineering from the University of Bolton and Master in Construction Management from the prestigious Nigerian Defence Academy, he brings analytical precision and strategic insight to his role as Supply Chain Manager. In his current position, Mohammed oversees the end-to-end logistics for raw materials and finished goods, ensuring seamless sourcing, warehousing, and distribution processes. He collaborates closely with local suppliers and aggregators to secure quality materials, negotiate optimal terms, and maintain inventory control. His commitment to sustainability and innovation helps implement procurement strategies that balance cost efficiency with ethical practices.",
        image: "", // Add image path if available
        socialMedia: [],
    },
    {
        name: "Mohammed Sanusi Bello",
        title: "Executive Vice President",
        bio: "Mohammed Sanusi Bello, Executive Vice-President, Marble and Grove Nigeria Limited, He has an Msc in International Business and Diplomacy and a Bsc in International Relations and Political Science from the Nile University, Nigeria. He is in charge of key daily operations for the business, with a focus on the creation and application of long-term plans to ensure business continuity.",
        image: "", // Add image path if available
        socialMedia: [],
    },
    // Add more team members here
]
