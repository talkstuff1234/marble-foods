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
