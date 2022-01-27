import React from "react";
import { useState } from "react";
import navList from "./navList";

import style from './navbar.module.css'


export default function Navbar() {
    const [viewMenu, setViewMenu] = useState(false);

    function List() {
        if (viewMenu) {
            return List = style.linkListShow
        }
        else {
            return List = style.linkListHide
        }
    }

    return (
        <nav>
            <button className={style.button} onClick={() => {setViewMenu(!viewMenu) }}><div className={style.line}> </div></button>
            <div className={[style.list, List()].join(' ')}>
                {navList}
            </div>

        </nav>
    )

}