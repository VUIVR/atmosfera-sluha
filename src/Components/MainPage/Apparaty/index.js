import { NavLink } from 'react-router-dom'

import style from './apparaty.module.css'

export default function Apparaty() {
    return (
        <section className={style.apparaty}>
            <div className={style.content}>
            <div>
                <h1 className={style.title} >Слуховые аппараты</h1>
                <p className={style.subtitle}>На заказ, персонально</p>
                <p className={style.text}>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
                <NavLink to='/AboutCompany' className={style.btn}>Узнать подробнее</NavLink>
            </div>
            <img src="./Images/img1.png" width="628" height="628" alt="Слуховые аппараты" />
            </div>
        </section>
    )
}


