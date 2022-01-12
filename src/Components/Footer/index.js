import React from "react"
import { useSelector } from "react-redux"
import style from "./footer.module.css"
import logo from '../../SVG/logo'
import navlist from "../Navbar/navList"

function Footer() {
    const adreses = useSelector(state => state.AllAdreses)
    const NumberActiveCity = useSelector(state => state.NumberActiveCity)

    return (
        <footer className={style.footer}>

            <div className={style.contacts}>
                {logo('#fff', '#fff')}
                <div className={style.street}>{adreses[NumberActiveCity].street}</div>
                <div className={style.phone}>{adreses[NumberActiveCity].phone}</div>
            </div>

            <div className={style.text}>
                <div className={style.nav}>
                    СТРАНИЦЫ
                </div>
                <div className={[style.li, style.link].join(' ')}>
                    {navlist}

                </div>
            </div>

            <div className={style.text}>
                <div>
                    УСЛУГИ
                </div>
                <ul className={style.li}>
                    <li>Проверка слуха</li>
                    <li>Выезд на дом</li>
                    <li>Бесплатная консультация</li>
                    <li>Компенсация от ФСС</li>
                    <li>Беспроцентная рассрочка</li>
                </ul>
            </div>

            <div className={style.text}>
                <div>ПРОДУКЦИЯ</div>
                <ul className={style.li}>
                    <li>Слуховые аппараты</li>
                    <li>Реабилитационная техника</li>
                    <li>Элементы питания</li>
                    <li>Средства по уходу</li>
                </ul>
            </div>

        </footer>
    )

}

export default Footer