import { NavLink } from "react-router-dom";

import style from './forclients.module.css'

export default function ForClients() {
    return (
        <section>
                <div>
                    <img src="./images/offer.png" width="773" height="779" alt="our-offers" />
                    <div >
                        <h2 >Что мы предлагаем <span>своим клиентам</span></h2>
                        <ul >
                            <li >
                                <span>1</span>
                                <span>Полноценную консультацию по вопросам, связанным с&nbsp;частичной потерей слуха</span>
                            </li>

                            <li >
                                <span>2</span>
                                <span>Подбор слухового аппарата. Наш специалист проведет тестирование слуха и&nbsp;подберет индивидуальный аппарат</span>
                            </li>

                            <li >
                                <span>3</span>
                                <span>Настройку приобретенной модели</span>
                            </li>

                            <li >
                                <span>4</span>
                                <span>Возможность купить дополнительные аксессуары и&nbsp;комплектующие</span>
                            </li>
                        </ul>
                        <NavLink to='/#feedback'>Записаться на прием</NavLink>

                    </div>
                </div>
            </section>
    )
    
}
