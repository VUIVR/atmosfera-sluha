import { NavLink } from "react-router-dom"

import style from './uslugi.module.css'

export default function Uslugi() {
    return (
        <section className={style.content}>
            <div >
                <h2 className={style.title}>Какие услуги <span className={style.span}>мы оказываем</span></h2>
                <p className={style.text}>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
            </div>
            <div className={(style.item)}>
                <h3 className={style.item_text}>Беспроцентная рассрочка</h3>
                <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
            </div>
            <div className={style.item}>
                <h3 className={style.item_text}>Бесплатный вызов на дом</h3>
                <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
            </div>
            <div className={style.item}>
                <h3 className={style.item_text}>Бесплатное тестирование слуха</h3>
                <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
            </div>
            <div className={style.item}>
                <h3 className={style.item_text}>Бесплатная консультация</h3>
                <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
            </div>
            <div className={style.item}>
                <h3 className={style.item_text}>Конпенсация от ФСС</h3>
                <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
            </div>
        </section>
    )
}

