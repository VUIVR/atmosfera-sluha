import { NavLink } from "react-router-dom"



import style from './uslugi.module.css'
import '../mainpage.css'


export default function Uslugi() {
    return (
        <section className={style.content}>
            <div>
                <h2 className='title'>Какие услуги <span className='span'>мы оказываем</span></h2>
                <p className='text'>Компания «Атмосфера слуха» является одной из лидирующих фирм по продаже слуховых аппаратов.</p>
            </div>
            <div className={[style.item1, style.item].join(' ')}>
                <h3 className={style.item_text}>Беспроцентная рассрочка</h3>
                <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
            </div>
            <div className={[style.item2, style.item].join(' ')}>
                <h3 className={style.item_text}>Бесплатный вызов на дом</h3>
                <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
            </div>
            <div className={[style.item3, style.item].join(' ')}>
                <h3 className={style.item_text}>Бесплатное тестирование слуха</h3>
                <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
            </div>
            <div className={[style.item4, style.item].join(' ')}>
                <h3 className={style.item_text}>Бесплатная консультация</h3>
                <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
            </div>
            <div className={[style.item5, style.item].join(' ')}>
                <h3 className={style.item_text}>Конпенсация от ФСС</h3>
                <NavLink to='/AboutCompany' className='blueBtn'>Узнать подробнее</NavLink>
            </div>
        </section>
    )
}

