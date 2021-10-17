import React from "react"
import { Link } from "react-router-dom"

function MainPage() {
    return (
        <main>
            <section>
                <div>
                    <div>
                        <h1>Слуховые аппараты</h1>
                        <p>На заказ, персонально</p>
                        <p>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
                        <Link to='/AboutCompany'>Узнать подробнее</Link>
                    </div>
                    <img src="./Images/img1.png" width="628" height="628" alt="Слуховые аппараты" />
                </div>
            </section>
            <section>
                <div>
                    <h2>Какие услуги <span>мы оказываем</span></h2>
                    <p>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
                </div>
                <div>
                    <h3 >Беспроцентная рассрочка</h3>
                    <Link to='/AboutCompany'>Узнать подробнее</Link>
                </div>
                <div>
                    <h3 >Бесплатный вызов на дом</h3>
                    <Link to='/AboutCompany'>Узнать подробнее</Link>
                </div>
                <div>
                    <h3 >Бесплатное тестирование слуха</h3>
                    <Link to='/AboutCompany'>Узнать подробнее</Link>
                </div>
                <div>
                    <h3 >Бесплатная консультация</h3>
                    <Link to='/AboutCompany'>Узнать подробнее</Link>
                </div>
                <div>
                    <h3 >Конпенсация от ФСС</h3>
                    <Link to='/AboutCompany'>Узнать подробнее</Link>
                </div>
            </section>
            <section>
                <div>
                    <h2 >Хиты <span>продаж</span></h2>
                    <p >Мы подобрали самые продоваемые модели слуховых аппаратов для Вас</p>
                    <Link to='/Products'>Перейти в каталог</Link>
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
            <section>
                <div>
                    <img src="./images/offer.png" width="773" height="779" alt="our-offers" />
                    <div >
                        <h2 >Что мы предлагаем <span>своим клиентам</span></h2>
                        <ul >
                            <li >
                                <span >1</span>
                                <span>Полноценную консультацию по вопросам, связанным с&nbsp;частичной потерей слуха</span>
                            </li>

                            <li >
                                <span >2</span>
                                <span>Подбор слухового аппарата. Наш специалист проведет тестирование слуха и&nbsp;подберет индивидуальный аппарат</span>
                            </li>

                            <li >
                                <span >3</span>
                                <span>Настройку приобретенной модели</span>
                            </li>

                            <li >
                                <span >4</span>
                                <span>Возможность купить дополнительные аксессуары и&nbsp;комплектующие</span>
                            </li>
                        </ul>
                        <Link to='/#feedback'>Записаться на прием</Link>

                    </div>
                </div>
            </section>
            <section></section>
            <section></section>
            <section></section>
        </main>)
}

export default MainPage