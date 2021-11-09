import { NavLink } from "react-router-dom"

import style from './hits.module.css'
import '../mainpage.css'

import image1 from './Images/Avery TR220M(2).jpg'
import image2 from './Images/AveryTR220M(21).png'
import image3 from './Images/AveryTR220M(1).jpg'
import image4 from './Images/Avery TR220M(2).jpg'

export default function Hits() {
    return (
        <section className={[style.content, style.bgr].join(' ')}>
            <div >
                <h2 className={style.title}>Хиты <span className={style.span}>продаж</span></h2>
                <p className={style.text}>Мы подобрали самые продоваемые модели слуховых аппаратов для Вас</p>
                <NavLink to='/Products' className='blueBtn'>Перейти в каталог</NavLink>
            </div>
            <ul className={style.list} >
                <li className={style.item}>
                    <img src={image1} width="150" height="150" alt="Widex DREAM D-FA 30" />
                    <h3 className={style.text}>Слуховой аппарат: <br /><span className={style.nameHits}>Widex DREAM D&nbsp; -&nbsp; FA&nbsp; 30</span></h3>
                    <p className={style.price}>25 500 ₽</p>
                    <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
                </li>

                <li className={style.item}>
                    <img src={image2} width="150" height="150" alt="Aurica Эвери TR 220M" />
                    <h3 className={style.text}>Слуховой аппарат: <br /><span className={style.nameHits}>Aurica Эвери TR&nbsp; 220M</span></h3>
                    <p className={style.price}>17 000 ₽</p>
                    <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
                </li>

                <li className={style.item}>
                    <img src={image3} width="150" height="150" alt="Aurica Neo Classica 675M" />
                    <h3 className={style.text}>Слуховой аппарат: <br /><span className={style.nameHits}>Aurica Neo Classica&nbsp; 675M</span></h3>
                    <p className={style.price}>12 000 ₽</p>
                    <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
                </li>

                <li className={style.item}>
                    <img src={image4} width="150" height="150" alt="Widex DREAM D-FA Power 30" />
                    <h3 className={style.text}>Слуховой аппарат: <br /><span className={style.nameHits}>Widex DREAM D-FA Power&nbsp; 30</span></h3>
                    <p className={style.price}>27 000 ₽</p>
                    <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
                </li>
            </ul>

        </section>
    )

}