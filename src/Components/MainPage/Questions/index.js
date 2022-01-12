import style from './questions.module.css';
export default function Questions() {
    return (
        <section className={style.content}>
            <div id="feedback">
                <h2 className={style.title}>Остались <span className={style.span}>вопросы?</span></h2>
                <p className={style.text}>Запишитесь на прием или оставьте заявку на вызов нашего специалиста, мы поможем вам решить ваш вопрос                    </p>
            </div>
            <form method="post" action="send.php" className={style.form}>
                <h3 className={style.formTitle}>
                    Заполните форму и мы свяжемся с вами <span className={style.formTitle_color}>в ближайшее время</span>
                </h3>
                <input className={style.input} type="text" name="name" placeholder="Ваше ФИО" required=""  />
                <input className={style.input} type="tel" name="phone" placeholder="Ваш номер телефона" required=""  />
                <textarea className={style.input} name="comment" placeholder="Пожелания" ></textarea>
                <button className={style.blueBtn_width} type="submit" >Отправить заявку</button>
            </form>
        </section>

    )

}