export type NavItemsProps = {
    items: EachNavItemsProps[]
}

export type EachNavItemsProps = {
    value: string
    url: string
    delay: number
    dropdownItem?: {
        value: string
        description: string,
        link: string
    }[]
}
