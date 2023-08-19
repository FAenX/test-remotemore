import { LayoutContext } from "../contexts/layout.context"
import { ComponentHost } from "../components/home"



export const HomePage = () => {
    return(
        <LayoutContext>
            <ComponentHost/>
        </LayoutContext>
    )
}

