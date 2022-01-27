import React from "react"
/* import FiltrGoods from "./brends" */
import Goods from "../../../Information/listSluhApparats.json"

function Filtr() {
    const keyFiltra = ["Класс", "Мощность", "Уровень мощности"]  //пункты фильтра
    console.log(Goods);

    //сортирует список значений по каждому пунту фильтра
    function filtrCluch() {
        const exclusive = Goods.filtr( good => good)
       
        return (
            <>
                <div>Ключ</div>
                {exclusive}
            </>
        )
    }



    return <>
        <div>
            <div>Фильтр</div>
            {filtrCluch()}
        </div>
    </>
}

export default Filtr