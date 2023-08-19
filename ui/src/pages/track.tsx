import { LayoutContext } from "../contexts/layout.context"
import {Track as TrackComponent} from "src/components/track"



export const Track = () => {
    return(
        <LayoutContext>
            <TrackComponent/>
        </LayoutContext>
    )
}

