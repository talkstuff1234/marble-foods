import React from "react"
import Skeleton from "react-loading-skeleton"

const SkelentonLoader = ({
    height,
    width = "w-full",
}: {
    height?: number
    width?: string
}) => {
    return (
        <div className={width}>
            <Skeleton height={height} />
        </div>
    )
}

export default SkelentonLoader
