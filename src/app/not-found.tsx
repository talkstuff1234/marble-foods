import Link from "next/link"

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-[5%] text-center">
            <h1 className="text-[40px] font-[700] text-primaryDark">
                Page not found
            </h1>
            <p className="mt-4 max-w-[520px] text-[16px] text-lightText">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="mt-8 rounded-[7px] bg-primaryLight px-5 py-3 text-white"
            >
                Go Home
            </Link>
        </main>
    )
}
