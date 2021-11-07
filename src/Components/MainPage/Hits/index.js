import { NavLink } from "react-router-dom"

import style from './hits.module.css'
import '../mainpage.css'

export default function Hits() {
    return (
        <section >
            <div className={style.content}>
                <h2 className={style.servises__title}>Хиты <span className={style.title_span}>продаж</span></h2>
                <p className={style.banner__text}>Мы подобрали самые продоваемые модели слуховых аппаратов для Вас</p>
                <NavLink to='/Products' className={style.blueBtn}>Перейти в каталог</NavLink>
            </div>
            <ul className={style.hits__list} >
                <li className={style.hits__item}>
                    <img src="./images/fa-500x500.png" width="150" height="150" alt="Widex DREAM D-FA 30" />
                    <h3 className={style.item_text}>Слуховой аппарат: <br /><span>Widex DREAM D&nbsp; -&nbsp; FA&nbsp; 30</span></h3>
                    <p >25 500 ₽</p>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </li>

                <li className={style.hits__item}>
                    <img src="./images/Эвери TR 220M.jpg" width="150" height="150" alt="Aurica Эвери TR 220M" />
                    <h3 className={style.item_text}>Слуховой аппарат: <br /><span>Aurica Эвери TR&nbsp; 220M</span></h3>
                    <p >17 000 ₽</p>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </li>

                <li className={style.hits__item}>
                    <img src="./images/Aurica Neo Classica 675M.jpg" width="150" height="150" alt="Aurica Neo Classica 675M" />
                    <h3 className={style.item_text}>Слуховой аппарат: <br /><span>Aurica Neo Classica&nbsp; 675M</span></h3>
                    <p >12 000 ₽</p>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </li>

                <li className={style.hits__item}>
                    <img src="./images/fa-500x500.png" width="150" height="150" alt="Widex DREAM D-FA Power 30" />
                    <h3 className={style.item_text}>Слуховой аппарат: <br /><span>Widex DREAM D-FA Power&nbsp; 30</span></h3>
                    <p >27 000 ₽</p>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </li>
            </ul>

        </section>
    )

}