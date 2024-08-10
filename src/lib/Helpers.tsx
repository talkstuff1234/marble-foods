import { useNavigate } from "react-router-dom"
import { useOutro } from "./OutroContext"

const { triggerOutro } = useOutro()
const navigate = useNavigate()

export const routeLink = (url: string, callOutro: boolean) => {
    callOutro && triggerOutro()
    setTimeout(() => {
        navigate(url)
    }, 3000)
}
