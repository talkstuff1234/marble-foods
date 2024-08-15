import React, { useCallback, useEffect, useState } from "react"
import LOGO from "../../assets/logo.png"
import { NavItems } from "../../lib/constants"
import { EachNavItemsProps, NavItemsProps } from "../../lib/types"
import P from "../CustomTexts/P"
import { useNavigate } from "react-router-dom"
import { useOutro } from "../../lib/OutroContext"
import { useRouteContext } from "../../lib/RouteContext"
import {
    NavBurger,
    NavClose,
    NavDropdown,
    TrackIcon,
} from "../../assets/RenderedAssets"
import Button from "../Buttons/Button"
import { NavItem } from "./NavItems"

const Navbar = () => {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrollDirection, setScrollDirection] = useState<
        "up" | "down" | null
    >("up")

    const { triggerOutro } = useOutro()
    const navigate = useNavigate()
    const { currentRoute } = useRouteContext()

    const routeLink = (url: string, callOutro: boolean) => {
        callOutro && triggerOutro()
        setTimeout(() => {
            navigate(url)
        }, 3000)
    }

    const toggleNavbar = () => {
        setIsOpenNavbar(!isOpenNavbar)
    }

    const handleScroll = useCallback(() => {
        if (typeof window === "undefined") return

        const currentScrollY = window.scrollY

        if (currentScrollY >= 500 && lastScrollY < 500) {
            // console.log("Reached 200px height");
        }

        if (currentScrollY < lastScrollY) {
            if (scrollDirection !== "up") {
                setScrollDirection("up")
            }
        } else if (currentScrollY > lastScrollY) {
            if (scrollDirection !== "down") {
                setScrollDirection("down")
            }
        }

        setLastScrollY(currentScrollY)
    }, [lastScrollY, scrollDirection])

    useEffect(() => {
        if (typeof window === "undefined") return

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])
    return (
        <>
            <div
                className={`${
                    typeof window !== "undefined" && window.scrollY >= 200
                        ? "bg-white"
                        : "bg-transparent"
                } ${
                    scrollDirection === "up" ? "top-0" : "top-[-100%]"
                } fixed left-0 z-[9] flex w-full items-center justify-between px-[5%] py-5 transition-all duration-500 ease-in-out `}
            >
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-16">
                        <img
                            src={LOGO}
                            alt=""
                            className="w-[90px] md:w-[116px]"
                        />
                        <div className="hidden items-center gap-10 md:flex">
                            {NavItems.items.map(
                                (item: EachNavItemsProps, index: number) => {
                                    return (
                                        <div
                                            className="group flex w-fit cursor-pointer items-center gap-3 "
                                            key={index}
                                            onClick={() => {
                                                routeLink(item.url, true)
                                            }}
                                        >
                                            <p
                                                className={`text-[16px]  font-[400] transition-all duration-1000 ease-in-out group-hover:text-primaryLight ${currentRoute === item.url ? "text-primaryLight" : "text-lightText "} `}
                                            >
                                                {item.value}
                                            </p>
                                            {item.dropdownItem !==
                                                undefined && (
                                                <NavDropdown
                                                    className={`${currentRoute === item.url ? "text-primaryLight" : "text-lightText "} `}
                                                />
                                            )}
                                        </div>
                                    )
                                },
                            )}
                        </div>
                    </div>
                    <div
                        className="block cursor-pointer md:hidden"
                        onClick={() => {
                            toggleNavbar()
                        }}
                    >
                        <NavBurger className=" text-primaryLight" />
                    </div>
                    <div className="hidden w-fit items-center gap-10 md:flex">
                        <div className="flex cursor-pointer items-center gap-2">
                            <TrackIcon className="text-primaryLight" />

                            <p
                                className={`$text-primaryLight  text-[16px] font-[400] text-primaryLight transition-all duration-1000 ease-in-out`}
                            >
                                Track Order
                            </p>
                        </div>
                        <Button
                            value="Contact Us"
                            url="contact"
                            icon2={
                                <NavDropdown className="rotate-[-90deg] text-white" />
                            }
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isOpenNavbar ? "right-0" : "right-[-110%]"
                } border-light fixed top-0  z-[10] h-full w-full bg-primaryDark/60  px-10 pt-20 backdrop-blur-sm transition-all duration-500 ease-in-out md:w-[600px]  md:py-32`}
            >
                <NavClose
                    className="text-light absolute right-5 top-5 cursor-pointer text-white md:right-10 md:top-10"
                    onClick={toggleNavbar}
                />
                {NavItems.items.map((child, index) => (
                    <NavItem
                        key={index}
                        item={child}
                        isOpenNavbar={isOpenNavbar}
                        closeNavbar={toggleNavbar}
                        routeLink={routeLink}
                    />
                ))}{" "}
            </div>
        </>
    )
}

export default Navbar
