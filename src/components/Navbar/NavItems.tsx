import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { NavDropdown } from "../../assets/RenderedAssets"
import { EachNavItemsProps, NavItemProp } from "../../lib/types"
import { useRouteContext } from "../../lib/RouteContext"

export const NavItem = ({
    item,
    isOpenNavbar,
    closeNavbar,
    routeLink,
}: NavItemProp) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const { currentRoute } = useRouteContext()

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerHeight <= 775)
        }

        updateScreenSize()
        window.addEventListener("resize", updateScreenSize)

        return () => {
            window.removeEventListener("resize", updateScreenSize)
        }
    }, [])

    const handleClick = () => {
        closeNavbar() // Close the navbar when a link is clicked
        routeLink(item.url, true)
    }

    return (
        <p
            className={`leading-tight ${
                isOpenNavbar ? "opacity-1" : "opacity-0"
            } ${
                isSmallScreen ? "mt-7" : "mt-12"
            } text-[16px]  font-[400] transition-all duration-1000 ease-in-out group-hover:text-primaryLight ${currentRoute === item.url ? "text-primaryDark" : "text-white "} `}
            style={{ transitionDelay: `${item.delay}ms` }}
            onClick={handleClick}
        >
            {item.value}

            {/* {item.dropdownItem != null && (
        <div className="group-hover:flex md:hidden flex bg-secondary/25 py-5 px-5 rounded-md justify-between transition-all duration-500 mt-5 gap-5 flex-wrap">
          {item.dropdownItem.map((dropI : EachNavItemsProps, index) => (
            <Link
              to={dropI.link}
              className="hover:text-dark transition-all duration-500 underline"
              key={index}
            >
              {dropI.value}
            </Link>
          ))}
        </div>
      )} */}
        </p>
    )
}
