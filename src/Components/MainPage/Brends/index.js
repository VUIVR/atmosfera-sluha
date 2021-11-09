import { NavLink } from "react-router-dom";
import style from './brends.module.css'
import '../mainpage.css'

import image1 from './Images/widex.png'
import image2 from './Images/bernafon.png'
import image3 from './Images/istok.png'

export default function Brends() {
    return (
        <section className={[style.content, style.bgr].join(' ')}>
            <div>
                <h2 className='title'> Бренды <br /> <span className='span'>слуховых аппартов</span>
                </h2>
                <p className='text'>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
            </div>
            <ul className={style.bullets}>
                <li className={style.bullet}>
                    <img src={image1} width="286" height="277" alt="Слуховые аппараты Widex" />
                    <div className={style.text}>Слуховые аппараты <br />Widex</div>
                    <NavLink to='/' className='blueBtn'>Перейти в каталог</NavLink>
                </li>
                <li className={style.bullet}>
                    <img src={image2} width="290" height="277" alt="Слуховые аппараты Bernafon" />
                    <div className={style.text}>Слуховые аппараты <br />Bernafon</div>
                    <NavLink to='/' className='blueBtn'>Перейти в каталог</NavLink>
                </li>
                <li className={style.bullet}>
                    <img src={image3} width="286" height="277" alt="Слуховые аппараты Исток-Аудио" />
                    <div className={style.text} >Слуховые аппараты <br />Исток-Аудио</div>
                    <NavLink to='/' className='blueBtn'>Перейти в каталог</NavLink>
                </li>
            </ul>
        </section>
    )
}