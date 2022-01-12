import React from "react";
import { useState } from "react";
import navList from "./navList";

import style from './navbar.module.css'


export default function Navbar() {
    const [viewList, setViewList] = useState(false);

    function List() {
        if (viewList) {
            return List = style.linkListShow
        }
        else {
            return List = style.linkListHide
        }
    }

    console.log(navList);
    return (
        <nav>
            <button className={style.button} onClick={() => {setViewList(!viewList) }}><div className={style.line}> </div></button>
            <div className={[style.list, List()].join(' ')}>
                {navList}
            </div>

        </nav>
    )

}