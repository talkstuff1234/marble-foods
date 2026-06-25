"use client"

import { motion } from "framer-motion"
import LOGO from "../assets/logo.png"
import CASHEW from "../assets/cashew.jpg"
import COCOA from "../assets/cocoa.jpg"
import COFFEE from "../assets/coffee.jpg"
import HIBISCUS from "../assets/hibiscus.jpg"
import SESAME from "../assets/seam-seed.jpeg"

const products = [
    { name: "Cashew Nuts", image: CASHEW },
    { name: "Cocoa", image: COCOA },
    { name: "Coffee", image: COFFEE },
    { name: "Hibiscus", image: HIBISCUS },
    { name: "Sesame Seeds", image: SESAME },
]

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
}

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#FBFAF7] text-primaryDark">
            <section className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex min-h-[56vh] flex-col justify-between px-[6%] py-8 lg:min-h-screen lg:py-10">
                    <motion.header
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center justify-between"
                    >
                        <img
                            src={LOGO}
                            alt="Marble Foods"
                            className="w-[116px] md:w-[154px]"
                        />
                        <a
                            href="mailto:info@marblefoods.com"
                            className="rounded-[7px] border border-primaryLight/20 px-4 py-2 text-[14px] font-[500] text-primaryLight transition-colors hover:bg-primaryLight hover:text-white"
                        >
                            Contact
                        </a>
                    </motion.header>

                    <div className="max-w-[760px] py-16 lg:py-0">
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.1, duration: 0.7 }}
                            className="w-fit rounded-full border border-primaryLight/15 bg-white px-4 py-2 text-[13px] font-[600] uppercase tracking-[0.18em] text-primaryLight shadow-[0_12px_40px_rgba(10,31,14,0.06)]"
                        >
                            Coming Soon
                        </motion.p>
                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-7 max-w-[720px] text-[48px] font-[700] leading-[0.98] text-primaryDark md:text-[76px] lg:text-[88px]"
                        >
                            A fresh way to discover{" "}
                            <span className="font-[700] italic text-primaryLight">
                                Africa&apos;s richness
                            </span>{" "}
                            is on the way.
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.32, duration: 0.75 }}
                            className="mt-7 max-w-[560px] text-[17px] leading-[1.8] text-lightText"
                        >
                            We are preparing a refreshed digital home for
                            responsibly sourced commodities, global partnerships,
                            and the Marble Foods story.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{ delay: 0.42, duration: 0.75 }}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            {products.map((product) => (
                                <span
                                    key={product.name}
                                    className="rounded-full bg-white px-4 py-2 text-[14px] font-[500] text-primaryDark shadow-[0_10px_30px_rgba(10,31,14,0.07)]"
                                >
                                    {product.name}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    <motion.footer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65, duration: 0.8 }}
                        className="flex flex-col gap-2 text-[14px] text-lightText md:flex-row md:items-center md:justify-between"
                    >
                        <span>Secure, transparent, efficient commodity trade.</span>
                        <span>Marblefoods. All Rights Reserved.</span>
                    </motion.footer>
                </div>

                <div className="relative min-h-[44vh] overflow-hidden bg-primaryDark lg:min-h-screen">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(46,147,67,0.38),transparent_28%),linear-gradient(135deg,rgba(10,31,14,0.1),rgba(10,31,14,0.88))]" />
                    <motion.div
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 grid grid-cols-2 gap-3 p-4 md:p-6"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.16 + index * 0.08,
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`relative overflow-hidden rounded-[8px] bg-black ${
                                    index === 0 || index === 3
                                        ? "row-span-2"
                                        : ""
                                }`}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full min-h-[180px] w-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primaryDark/70 to-transparent" />
                                <span className="absolute bottom-4 left-4 text-[14px] font-[600] text-white">
                                    {product.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
