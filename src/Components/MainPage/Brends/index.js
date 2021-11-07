import { NavLink } from "react-router-dom";
import style from './brends.module.css'

export default function Brends() {
    return (
        <section >
                <div>
                    <h2>
                        Бренды <br /> слуховых аппартов
                    </h2>
                    <p>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
                </div>
                <li>
                    <img src="./images/widex.png" width="286" height="277" alt="Слуховые аппараты Widex" />
                    <h3>Слуховые аппараты <br />Widex</h3>
                    <NavLink to='/'>Перейти в каталог</NavLink>
                </li>
                <li>
                    <img src="./images//bernafon.png" width="290" height="277" alt="Слуховые аппараты Bernafon" />
                    <h3>Слуховые аппараты <br />Bernafon</h3>
                    <NavLink to='/'>Перейти в каталог</NavLink>
                </li>
                <li>
                    <img src="./images//istok.png" width="286" height="277" alt="Слуховые аппараты Исток-Аудио" />
                    <h3 >Слуховые аппараты <br />Исток-Аудио</h3>
                    <NavLink to='/'>Перейти в каталог</NavLink>
                </li>
            </section>
    )
}