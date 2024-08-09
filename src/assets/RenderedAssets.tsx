import React, { SVGProps } from "react"

type Props = SVGProps<SVGSVGElement>

export const NavBurger: React.FC<Props> = (props) => {
    return (
        <svg
            width="32"
            height="16"
            viewBox="0 0 32 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect y="0.677643" width="32" height="3" fill="currentcolor" />
            <rect y="6.67764" width="32" height="3" fill="currentcolor" />
            <rect y="12.6776" width="32" height="3" fill="currentcolor" />
        </svg>
    )
}

export const NavClose: React.FC<Props> = (props) => {
    return (
        <svg
            width="32"
            height="27"
            viewBox="0 0 32 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                x="5.1582"
                y="24.5518"
                width="32"
                height="3"
                transform="rotate(-45.5773 5.1582 24.5518)"
                fill="currentcolor"
            />
            <rect
                x="6.90088"
                y="1.70139"
                width="32"
                height="3"
                transform="rotate(44.4227 6.90088 1.70139)"
                fill="currentcolor"
            />
        </svg>
    )
}

export const NavDropdown: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>here</h1>
        </div>
    )
}

export const LoadingAnimation = () => {
    return (
        <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    )
}

export const ArrowRight1: React.FC<Props> = (props) => {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.1204 13.0467C9.99374 13.0467 9.86707 13 9.76707 12.9C9.57374 12.7067 9.57374 12.3867 9.76707 12.1933L13.4604 8.49999L9.76707 4.80665C9.57374 4.61332 9.57374 4.29332 9.76707 4.09999C9.9604 3.90665 10.2804 3.90665 10.4737 4.09999L14.5204 8.14665C14.7137 8.33999 14.7137 8.65999 14.5204 8.85332L10.4737 12.9C10.3737 13 10.2471 13.0467 10.1204 13.0467Z"
                fill="currentColor"
            />
            <path
                d="M14.053 9H2.83301C2.55967 9 2.33301 8.77333 2.33301 8.5C2.33301 8.22667 2.55967 8 2.83301 8H14.053C14.3263 8 14.553 8.22667 14.553 8.5C14.553 8.77333 14.3263 9 14.053 9Z"
                fill="currentColor"
            />
        </svg>
    )
}

export const Star = () => {
    return (
        <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.5 0L6.73483 3.80041H10.7308L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041H4.26517L5.5 0Z"
                fill="#FC7100"
            />
        </svg>
    )
}
