import React, { useState } from "react"
import { Stars2 } from "../../assets/RenderedAssets"

interface StarRatingProps {
    initialRating: number // initial rating (1-5)
    onChange: (rating: number) => void // callback when rating changes
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, onChange }) => {
    const [rating, setRating] = useState(initialRating)
    const [hoverRating, setHoverRating] = useState(0)

    const handleMouseOver = (index: number) => {
        setHoverRating(index)
    }

    const handleMouseLeave = () => {
        setHoverRating(0)
    }

    const handleClick = (index: number) => {
        setRating(index)
        onChange(index)
    }

    return (
        <div className="mt-10">
            <h2 className="text-[13px] font-[400] text-darkText">Ratings</h2>
            <div className="mt-3 flex items-center gap-5">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-fit cursor-pointer rounded-[8px] border p-3 ${
                            hoverRating >= index + 1 || rating >= index + 1
                                ? "text-[#FEB423]"
                                : "text-[#D9D9D9]"
                        }`}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(index + 1)}
                    >
                        <Stars2 className="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StarRating
