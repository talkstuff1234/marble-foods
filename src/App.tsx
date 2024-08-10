import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ScrollToTop from "./lib/ScrollToTop"
import Homepage from "./pages/Home/Homepage"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import PageIntroLoader from "./components/loader/PageIntroLoader"
import { useContext } from "react"
import { RouteProvider, useRouteContext } from "./lib/RouteContext"
import PageOutroLoader from "./components/loader/PageOutroLoader"
import TextFade from "./components/CustomTexts/TextFade"
import { useOutro } from "./lib/OutroContext"

const MainContent: React.FC = () => {
    const { routeJustChanged } = useRouteContext()
    const { isOutro } = useOutro()

    return (
        <>
            <ScrollToTop />
            <Navbar />
            {isOutro && <PageOutroLoader />}
            {routeJustChanged ? (
                <>
                    {" "}
                    <PageIntroLoader />
                </>
            ) : (
                <>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                    <Footer />
                </>
            )}
            {/* <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer /> */}
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <RouteProvider>
                <MainContent />
            </RouteProvider>
        </BrowserRouter>
    )
}

export default App
