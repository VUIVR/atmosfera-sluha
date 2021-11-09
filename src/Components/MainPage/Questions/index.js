import style from './questions.module.css';
import '../mainpage.css';

export default function Questions() {
    return (
        <section className='content'>
            <div id="feedback">
                <h2 className='title'>Остались <span className='span'>вопросы?</span></h2>
                <p className='text'>Запишитесь на прием или оставьте заявку на вызов нашего специалиста, мы поможем вам решить ваш вопрос                    </p>
            </div>
            <form method="post" action="send.php" className={style.form}>
                <h3 className={style.formTitle}>
                    Заполните форму и мы свяжемся с вами <span className={style.formTitle_color}>в ближайшее время</span>
                </h3>
                <input type="text" name="name" placeholder="Ваше ФИО" required=""  className={style.input}/>
                <input type="tel" name="phone" placeholder="Ваш номер телефона" required=""  className={style.input}/>
                <textarea name="comment" placeholder="Пожелания" className={style.input}></textarea>
                <button type="submit" className={style.blueBtn_width}>Отправить заявку</button>
            </form>
        </section>

    )

}