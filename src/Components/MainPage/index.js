import { buildQueries } from "@testing-library/dom";
import React from "react"
import { NavLink } from "react-router-dom"

import style from './mainpage.module.css';

function MainPage() {
    return (
        <main>
            <section style={{display:"none"}}>
                <div>
                    <div className={style.content}>
                        <h1 className={style.banner__title} >Слуховые аппараты</h1>
                        <p className={style.banner__cubtitle}>На заказ, персонально</p>
                        <p className={style.banner__text}>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
                        <NavLink to='/AboutCompany' className={style.bunner__btn}>Узнать подробнее</NavLink>
                    </div>
                    <img src="./Images/img1.png" width="628" height="628" alt="Слуховые аппараты" />
                </div>
            </section>
            <section >
                <div className={style.content}>
                    <h2 className={style.servises__title}>Какие услуги <span className={style.title_span}>мы оказываем</span></h2>
                    <p className={style.banner__text}>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
                </div>
                <div className={(style.servises__item, style.item_1)}>
                    <h3 className={style.item_text}>Беспроцентная рассрочка</h3>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </div>
                <div className={style.servises__item}>
                    <h3 className={style.item_text}>Бесплатный вызов на дом</h3>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </div>
                <div className={style.servises__item}>
                    <h3 className={style.item_text}>Бесплатное тестирование слуха</h3>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </div>
                <div className={style.servises__item}>
                    <h3 className={style.item_text}>Бесплатная консультация</h3>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </div>
                <div className={style.servises__item}>
                    <h3 className={style.item_text}>Конпенсация от ФСС</h3>
                    <NavLink to='/AboutCompany' className={style.blueBtn}>Узнать подробнее</NavLink>
                </div>
            </section>
            <section style={{display:"none"}}>
                <div>
                    <h2 >Хиты <span>продаж</span></h2>
                    <p >Мы подобрали самые продоваемые модели слуховых аппаратов для Вас</p>
                    <NavLink to='/Products'>Перейти в каталог</NavLink>
                </div>
                <ul >
                    <li>
                        <img src="./images/fa-500x500.png" width="150" height="150" alt="Widex DREAM D-FA 30" />
                        <h3 >Слуховой аппарат: <br /><span>Widex DREAM D&nbsp; -&nbsp; FA&nbsp; 30</span></h3>
                        <p >25 500 ₽</p>
                        <a href="card.html?1397">Подробнее</a>
                    </li>

                    <li>
                        <img src="./images/Эвери TR 220M.jpg" width="150" height="150" alt="Aurica Эвери TR 220M" />
                        <h3 >Слуховой аппарат: <br /><span>Aurica Эвери TR&nbsp; 220M</span></h3>
                        <p >17 000 ₽</p>
                        <a href="card.html?1528">Подробнее</a>
                    </li>

                    <li>
                        <img src="./images/Aurica Neo Classica 675M.jpg" width="150" height="150" alt="Aurica Neo Classica 675M" />
                        <h3 >Слуховой аппарат: <br /><span>Aurica Neo Classica&nbsp; 675M</span></h3>
                        <p >12 000 ₽</p>
                        <a href="card.html?1529">Подробнее</a>
                    </li>

                    <li>
                        <img src="./images/fa-500x500.png" width="150" height="150" alt="Widex DREAM D-FA Power 30" />
                        <h3 >Слуховой аппарат: <br /><span>Widex DREAM D-FA Power&nbsp; 30</span></h3>
                        <p >27 000 ₽</p>
                        <a href="card.html?1399">Подробнее</a>
                    </li>
                </ul>

            </section>
            <section style={{display:"none"}}>
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
            <section style={{display:"none"}}>
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
            <section style={{display:"none"}}>
                <div id="feedback">
                    <h2>Остались <span>вопросы?</span></h2>
                    <p>Запишитесь на прием или оставьте заявку на вызов нашего специалиста, мы поможем вам решить ваш вопрос                    </p>
                </div>
                <form method="post" action="send.php">
                    <h3>
                        Заполните форму и мы свяжемся с вами <span>в ближайшее время</span>
                    </h3>
                    <input type="text" name="name" placeholder="Ваше ФИО" required="" />
                    <input type="tel" name="phone" placeholder="Ваш номер телефона" required="" />
                    <textarea name="comment" placeholder="Ваш комментарий"></textarea>
                    <button type="submit">Отправить заявку</button>
                </form>
            </section>
        </main>)
}

export default MainPage