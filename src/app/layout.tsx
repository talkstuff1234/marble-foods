import type { Metadata, Viewport } from "next"
import "../index.css"

export const metadata: Metadata = {
    metadataBase: new URL("https://www.marblefoods.com"),
    title: "Marble Foods | Coming Soon",
    description:
        "Marble Foods is preparing a refreshed digital home for African commodities, sourcing, and global trade.",
    alternates: {
        canonical: "https://www.marblefoods.com",
    },
    openGraph: {
        title: "Marble Foods | Coming Soon",
        description:
            "A refreshed digital home for African commodities is coming soon.",
        url: "https://www.marblefoods.com/",
        images: ["/image.png"],
    },
}

export const viewport: Viewport = {
    themeColor: "#2E9343",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
