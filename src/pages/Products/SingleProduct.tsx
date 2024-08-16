import React from "react"
import { useParams } from "react-router-dom"
import RelatedProducts from "./RelatedProducts"
import TrustedHomepage from "../Home/TrustedHomepage"

const SingleProduct = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-[20vh]">
                {/* render other product details here */}
            </div>
                <RelatedProducts />
                <TrustedHomepage />
        </div>
    )
}

export default SingleProduct
