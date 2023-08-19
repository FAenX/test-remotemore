import { HomeProvider } from "../../contexts/home.context"
import {Component} from "./component"

export const ComponentHost = (props: any) => {
    return(
        <HomeProvider>
            <Component />
        </HomeProvider>

    )
}