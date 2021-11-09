import React from "react"

import Apparaty from './Apparaty'
import Uslugi from "./Uslugi";
import Hits from "./Hits";
import ForClients from "./ForClients/forClients";
import Brends from "./Brends";
import Questions from "./Questions";



function MainPage() {
    return (
        <main>
            <Apparaty/>
            <Uslugi />
            <Hits />
            <ForClients />
            <Brends />
            <Questions />
        </main>)
}

export default MainPage