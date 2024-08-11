import React from "react"
import HeroHomepage from "./HeroHomepage"
import AboutHomepage from "./AboutHomepage"
import SetsUsApartHomePage from "./SetsUsApartHomePage"
import ProductsHomepage from "./ProductsHomepage"
import GlobalReachHomepage from "./GlobalReachHomepage"
import TestimonialsHomepage from "./TestimonialsHomepage"
import ContactHomepage from "./ContactHomepage"

const Homepage = () => {
    return (
        <section>
            <HeroHomepage />
            <AboutHomepage />
            <SetsUsApartHomePage />
            <ProductsHomepage />
            <GlobalReachHomepage />
            <TestimonialsHomepage />
            <ContactHomepage />
        </section>
    )
}

export default Homepage
