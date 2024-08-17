export type NavItemsProps = {
    items: EachNavItemsProps[]
}

export type EachNavItemsProps = {
    value: string
    url: string
    delay: number
    dropdownItem?: {
        value: string
        description: string
        link: string
    }[]
}

export type WhatSetsUsApartProp = {
    items: WhatSetsUsApartItemsProp[]
}

export type WhatSetsUsApartItemsProp = {
    images: string[]
    title: string
    coated: string
    description?: string
}

export type HomeProductsProp = {
    items: HomeProductItemsProp[]
}

export type HomeProductItemsProp = {
    image: string
    title: string
    url: string
}

export type NavItemProp = {
    item: EachNavItemsProps
    isOpenNavbar: boolean
    closeNavbar: () => void
    routeLink: (url: string, callOutro: boolean) => void
}

export type FooterLink = {
    text: string
    link: string
}

export type FooterSection = {
    title: string
    items: FooterLink[]
}

export type RelatedProductItemProp = {
    productName: string
    productImageUrl: string
    id: string
    productCode: string
}

export type ProductDetailsProp = {
    productName: string
    productShortDescription: string
    productFullDescription: string
    productImageUrl: string
    productReviewImageUrl: string
    productReviews: ProductReview[]
    id: string
    productCode: string
}

export type ProductReview = {
    reviewName: string
    reviewEmail: string
    reviewComments: string
    reviewRating: number
    id: string
}

export type ProductNavbarItemProp = {
    productName: string
    productShortDescription: string
    productIcon: string
    id: string
    productCode: string
}

