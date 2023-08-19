import { TrackProvider} from "src/contexts/track.context"
import Component from "./component"


export function  Track (){
    return(
        <TrackProvider>
            <Component />
        </TrackProvider>
    )
}