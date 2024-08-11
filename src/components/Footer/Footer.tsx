import React from "react"
import P from "../CustomTexts/P"
import FB from "../../assets/Facebook.svg"
import TW from "../../assets/Twitter.svg"
import IN from "../../assets/Instagram.svg"
import LI from "../../assets/LinkedIn.svg"
import YT from "../../assets/YouTube.svg"
import { FOOTER_LINKS } from "../../lib/constants"
import { useOutro } from "../../lib/OutroContext"
import { useNavigate } from "react-router-dom"
import { useRouteContext } from "../../lib/RouteContext"

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { triggerOutro } = useOutro()
    const navigate = useNavigate()
    const { currentRoute } = useRouteContext()
    const routeLink = (url: string, callOutro: boolean) => {
        callOutro && triggerOutro()
        setTimeout(() => {
            navigate(url)
        }, 3000)
    }
    return (
        <div className=" bg-[#F9F9FB] px-[5%] pb-[3dvh] pt-[10dvh]">
            <div className="flex flex-col gap-20 md:flex-row">
                <div className="flex flex-col gap-5">
                    <P mode="light">
                        Secure, transparent, and efficient trading for all your
                        commodity needs.
                    </P>
                    <div className="flex items-center gap-7">
                        <img src={FB} alt="" />
                        <img src={TW} alt="" />
                        <img src={IN} alt="" />
                        <img src={LI} alt="" />
                        <img src={YT} alt="" />
                    </div>
                </div>
                <div className="flex w-full flex-col justify-between gap-10  md:w-[80%] md:flex-row md:gap-0">
                    {FOOTER_LINKS.map((link, index) => (
                        <div key={index} className="flex flex-col gap-7">
                            <h2 className="text-[16px] font-[600] text-[#7e7e7e]">
                                {link.title}
                            </h2>
                            <div className="flex flex-col gap-7 opacity-70">
                                {link.items.map((item, itemIndex) => (
                                    <div
                                        className="group w-fit"
                                        key={itemIndex}
                                        onClick={() => {
                                            routeLink(item.link, true)
                                        }}
                                    >
                                        <p
                                            className={`text-[16px]  font-[400] transition-all duration-1000 ease-in-out group-hover:text-primaryLight ${currentRoute === item.link ? "text-primaryLight" : "text-lightText "} `}
                                        >
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-14 flex flex-col items-center justify-between gap-4 md:flex-row">
                <P mode="light">
                    {currentYear}, Marblefoods. All Rights Reserved.
                </P>
                <div className="flex gap-5">
                    <P mode="light">Privacy</P> <span>|</span>
                    <P mode="light">Terms</P>
                </div>
            </div>
        </div>
    )
}

export default Footer
