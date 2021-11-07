import { NavLink } from "react-router-dom";

import style from './questions.module.css'

export default function Questions() {
    return (
        <section >
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

    )

}