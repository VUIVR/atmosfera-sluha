import { NavLink } from "react-router-dom";

import style from './forclients.module.css'
import '../mainpage.css'


export default function ForClients() {
    return (
        <section className={style.content}>
                <div>
                    <img src="./images/offer.png" width="773" height="779" alt="our-offers" />
                    <div >
                        <h2 className={style.title}>Что мы предлагаем <span className='span'>своим клиентам</span></h2>
                        <ul className={style.bullets}>
                            <li className={style.bullet}>
                                <span className={style.bulletNumber}>1</span>
                                <span className={style.bulletText}>Полноценную консультацию по вопросам, связанным с&nbsp;частичной потерей слуха</span>
                            </li>

                            <li className={style.bullet}>
                                <span className={style.bulletNumber}>2</span>
                                <span className={style.bulletText}>Подбор слухового аппарата. Наш специалист проведет тестирование слуха и&nbsp;подберет индивидуальный аппарат</span>
                            </li>

                            <li className={style.bullet}>
                                <span className={style.bulletNumber}>3</span>
                                <span className={style.bulletText}>Настройку приобретенной модели</span>
                            </li>

                            <li className={style.bullet}>
                                <span className={style.bulletNumber}>4</span>
                                <span className={style.bulletText}>Возможность купить дополнительные аксессуары и&nbsp;комплектующие</span>
                            </li>
                        </ul>
                        <NavLink to='/#feedback' className='blueBtn'>Записаться на прием</NavLink>

                    </div>
                </div>
            </section>
    )
    
}
