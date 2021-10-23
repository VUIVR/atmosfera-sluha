import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
    const adreses = useSelector(state => state.AllAdreses)
    const NumberActiveCity = useSelector(state => state.NumberActiveCity)

    return (
        <div>
            <div>
                {logo}
                <div className="street">{adreses[NumberActiveCity].street}</div>
                <div className="phone">{adreses[NumberActiveCity].phone}</div>
            </div>
            <div>
                <h3>Страницы</h3>
                <Link to='/'>Главная</Link>
                <Link to='/AboutCompany'>О компании</Link>
            </div>
            <div>
                <h3>Услуги</h3>
                <ul>
                    <li>Проверка слуха</li>
                    <li>Выезд на дом</li>
                    <li>Бесплатная консультация</li>
                    <li>Компенсация от ФСС</li>
                    <li>Беспроцентная рассрочка</li>
                </ul>
            </div>
            <div>
                <h3>Продукция</h3>
                <ul>
                    <li>Слуховые аппараты</li>
                    <li>Реабилитационная техника</li>
                    <li>Элементы питания</li>
                    <li>Средства по уходу</li>
                </ul>
            </div>
        </div>
    )

}

export default Footer



// логотип
const logo = <svg width="245" height="71" viewBox="0 0 245 71" fill="none">
    <path d="M76.216 43.896H75.67C75.5953 43.896 75.558 43.854 75.558 43.77V42.608H74.564C73.5653 42.608 72.7067 42.2907 71.988 41.656C71.2787 41.0213 70.924 40.0787 70.924 38.828V37.19C70.924 36.5553 71.0267 35.9907 71.232 35.496C71.4467 34.992 71.7267 34.5953 72.072 34.306C72.4267 34.0167 72.814 33.7973 73.234 33.648C73.654 33.4987 74.0973 33.424 74.564 33.424H75.558V32.346C75.558 32.262 75.5953 32.22 75.67 32.22H76.216C76.2907 32.22 76.328 32.262 76.328 32.346V33.424H77.308C78.3067 33.424 79.1653 33.7413 79.884 34.376C80.6027 35.0107 80.962 35.9487 80.962 37.19V38.828C80.962 39.472 80.8547 40.046 80.64 40.55C80.4347 41.0447 80.1547 41.4367 79.8 41.726C79.4547 42.0153 79.0673 42.2347 78.638 42.384C78.218 42.5333 77.7747 42.608 77.308 42.608H76.328V43.77C76.328 43.854 76.2907 43.896 76.216 43.896ZM71.708 38.828C71.708 39.8453 71.988 40.6107 72.548 41.124C73.108 41.628 73.794 41.88 74.606 41.88H75.558V34.152H74.606C73.7847 34.152 73.094 34.404 72.534 34.908C71.9833 35.4027 71.708 36.1633 71.708 37.19V38.828ZM76.328 34.152V41.88H77.28C78.0827 41.88 78.764 41.628 79.324 41.124C79.8933 40.6107 80.178 39.8453 80.178 38.828V37.19C80.178 36.1633 79.898 35.4027 79.338 34.908C78.778 34.404 78.092 34.152 77.28 34.152H76.328ZM89.0769 38.352V39.668C89.0769 39.7427 89.0349 39.78 88.9509 39.78H84.1209V40.564C84.1209 41.152 84.3215 41.6187 84.7229 41.964C85.1242 42.3093 85.6282 42.482 86.2349 42.482C87.0655 42.482 87.8262 42.1833 88.5169 41.586C88.5915 41.5393 88.6475 41.5487 88.6849 41.614L88.9369 41.936C88.9929 41.992 88.9882 42.048 88.9229 42.104C88.1202 42.804 87.2195 43.154 86.2209 43.154C85.4369 43.154 84.7649 42.9207 84.2049 42.454C83.6449 41.9873 83.3649 41.3573 83.3649 40.564V38.352C83.3649 37.484 83.6355 36.8167 84.1769 36.35C84.7182 35.874 85.4042 35.636 86.2349 35.636C87.0655 35.636 87.7469 35.874 88.2789 36.35C88.8109 36.8167 89.0769 37.484 89.0769 38.352ZM88.3489 38.352C88.3489 37.708 88.1529 37.2087 87.7609 36.854C87.3782 36.4993 86.8695 36.322 86.2349 36.322C85.5815 36.322 85.0635 36.4993 84.6809 36.854C84.3075 37.1993 84.1209 37.6987 84.1209 38.352V39.15H88.3489V38.352ZM91.2302 44.918H90.7542C90.6702 44.918 90.6282 44.8807 90.6282 44.806V42.454C90.6282 42.37 90.6702 42.328 90.7542 42.328H91.0622C91.4169 42.1413 91.6876 41.6047 91.8742 40.718C92.0702 39.8313 92.2242 38.2307 92.3362 35.916C92.3362 35.832 92.3736 35.79 92.4482 35.79H96.7882C96.8722 35.79 96.9142 35.832 96.9142 35.916V42.328H97.6562C97.7309 42.328 97.7682 42.37 97.7682 42.454V44.806C97.7682 44.8807 97.7309 44.918 97.6562 44.918H97.1802C97.0962 44.918 97.0542 44.8807 97.0542 44.806V43H91.3422V44.806C91.3422 44.8807 91.3049 44.918 91.2302 44.918ZM93.0222 36.462C92.8822 39.906 92.5136 41.8613 91.9162 42.328H96.1722V36.462H93.0222ZM105.325 38.352V39.668C105.325 39.7427 105.283 39.78 105.199 39.78H100.369V40.564C100.369 41.152 100.569 41.6187 100.971 41.964C101.372 42.3093 101.876 42.482 102.483 42.482C103.313 42.482 104.074 42.1833 104.765 41.586C104.839 41.5393 104.895 41.5487 104.933 41.614L105.185 41.936C105.241 41.992 105.236 42.048 105.171 42.104C104.368 42.804 103.467 43.154 102.469 43.154C101.685 43.154 101.013 42.9207 100.453 42.454C99.8925 41.9873 99.6125 41.3573 99.6125 40.564V38.352C99.6125 37.484 99.8832 36.8167 100.425 36.35C100.966 35.874 101.652 35.636 102.483 35.636C103.313 35.636 103.995 35.874 104.527 36.35C105.059 36.8167 105.325 37.484 105.325 38.352ZM104.597 38.352C104.597 37.708 104.401 37.2087 104.009 36.854C103.626 36.4993 103.117 36.322 102.483 36.322C101.829 36.322 101.311 36.4993 100.929 36.854C100.555 37.1993 100.369 37.6987 100.369 38.352V39.15H104.597V38.352ZM107.798 36.14C108.657 35.804 109.534 35.636 110.43 35.636C111.373 35.636 112.11 35.888 112.642 36.392C113.184 36.8867 113.454 37.638 113.454 38.646V40.158C113.454 41.1287 113.188 41.8707 112.656 42.384C112.124 42.8973 111.392 43.154 110.458 43.154C109.73 43.154 109.063 42.9673 108.456 42.594V45.548C108.456 45.6227 108.419 45.66 108.344 45.66H107.84C107.756 45.66 107.714 45.6227 107.714 45.548V36.28C107.714 36.2147 107.742 36.168 107.798 36.14ZM110.416 42.482C111.938 42.482 112.698 41.7073 112.698 40.158V38.646C112.698 37.0873 111.938 36.308 110.416 36.308C109.707 36.308 109.054 36.42 108.456 36.644V41.866C109.054 42.2767 109.707 42.482 110.416 42.482ZM115.822 36.364C116.513 35.8787 117.367 35.636 118.384 35.636C119.243 35.636 119.901 35.8647 120.358 36.322C120.825 36.7793 121.058 37.4327 121.058 38.282V42.538C121.058 42.6033 121.025 42.65 120.96 42.678C120.139 42.9953 119.271 43.154 118.356 43.154C117.507 43.154 116.802 42.958 116.242 42.566C115.691 42.174 115.416 41.614 115.416 40.886C115.416 40.1767 115.677 39.6307 116.2 39.248C116.723 38.8653 117.441 38.674 118.356 38.674C118.851 38.674 119.504 38.7487 120.316 38.898V38.296C120.316 36.98 119.663 36.322 118.356 36.322C117.544 36.322 116.83 36.5133 116.214 36.896C116.158 36.9427 116.107 36.9333 116.06 36.868L115.822 36.504C115.775 36.4387 115.775 36.392 115.822 36.364ZM116.172 40.886C116.172 41.3807 116.373 41.7727 116.774 42.062C117.175 42.342 117.703 42.482 118.356 42.482C119.009 42.482 119.663 42.37 120.316 42.146V39.542C119.672 39.402 119.019 39.332 118.356 39.332C116.9 39.332 116.172 39.85 116.172 40.886ZM125.004 40.466C124.864 41.4367 124.645 42.104 124.346 42.468C124.057 42.832 123.599 43.0233 122.974 43.042C122.899 43.042 122.862 43.0047 122.862 42.93V42.496C122.862 42.412 122.899 42.37 122.974 42.37C123.347 42.3513 123.632 42.202 123.828 41.922C124.033 41.6327 124.187 41.0773 124.29 40.256C124.421 39.332 124.533 37.8853 124.626 35.916C124.645 35.832 124.687 35.79 124.752 35.79H129.218C129.293 35.79 129.33 35.832 129.33 35.916V42.888C129.33 42.9627 129.293 43 129.218 43H128.714C128.63 43 128.588 42.9627 128.588 42.888V36.462H125.34C125.256 38.0393 125.144 39.374 125.004 40.466ZM134.914 43H132.226C132.142 43 132.1 42.9627 132.1 42.888V35.916C132.1 35.832 132.142 35.79 132.226 35.79H132.73C132.805 35.79 132.842 35.832 132.842 35.916V38.268H134.914C135.745 38.268 136.398 38.4873 136.874 38.926C137.359 39.3553 137.602 39.9387 137.602 40.676C137.602 41.4507 137.369 42.034 136.902 42.426C136.435 42.8087 135.773 43 134.914 43ZM132.842 38.912V42.356H134.816C136.169 42.356 136.846 41.7913 136.846 40.662C136.855 40.102 136.683 39.6727 136.328 39.374C135.983 39.066 135.479 38.912 134.816 38.912H132.842ZM140.457 43H139.953C139.869 43 139.827 42.9627 139.827 42.888V35.916C139.827 35.832 139.869 35.79 139.953 35.79H140.457C140.532 35.79 140.569 35.832 140.569 35.916V38.926H144.587V35.916C144.587 35.832 144.625 35.79 144.699 35.79H145.203C145.287 35.79 145.329 35.832 145.329 35.916V42.888C145.329 42.9627 145.287 43 145.203 43H144.699C144.625 43 144.587 42.9627 144.587 42.888V39.598H140.569V42.888C140.569 42.9627 140.532 43 140.457 43ZM147.976 36.364C148.666 35.8787 149.52 35.636 150.538 35.636C151.396 35.636 152.054 35.8647 152.512 36.322C152.978 36.7793 153.212 37.4327 153.212 38.282V42.538C153.212 42.6033 153.179 42.65 153.114 42.678C152.292 42.9953 151.424 43.154 150.51 43.154C149.66 43.154 148.956 42.958 148.396 42.566C147.845 42.174 147.57 41.614 147.57 40.886C147.57 40.1767 147.831 39.6307 148.354 39.248C148.876 38.8653 149.595 38.674 150.51 38.674C151.004 38.674 151.658 38.7487 152.47 38.898V38.296C152.47 36.98 151.816 36.322 150.51 36.322C149.698 36.322 148.984 36.5133 148.368 36.896C148.312 36.9427 148.26 36.9333 148.214 36.868L147.976 36.504C147.929 36.4387 147.929 36.392 147.976 36.364ZM148.326 40.886C148.326 41.3807 148.526 41.7727 148.928 42.062C149.329 42.342 149.856 42.482 150.51 42.482C151.163 42.482 151.816 42.37 152.47 42.146V39.542C151.826 39.402 151.172 39.332 150.51 39.332C149.054 39.332 148.326 39.85 148.326 40.886ZM156.094 43H155.45C155.338 43 155.314 42.9533 155.38 42.86L157.662 40.2C156.971 40.144 156.43 39.9247 156.038 39.542C155.655 39.15 155.464 38.6413 155.464 38.016C155.464 37.288 155.702 36.7373 156.178 36.364C156.654 35.9813 157.312 35.79 158.152 35.79H160.77C160.844 35.79 160.882 35.832 160.882 35.916V42.888C160.882 42.9627 160.844 43 160.77 43H160.266C160.182 43 160.14 42.9627 160.14 42.888V40.256H158.488L156.234 42.93C156.187 42.9767 156.14 43 156.094 43ZM156.206 38.016C156.206 38.5293 156.369 38.926 156.696 39.206C157.032 39.4767 157.517 39.612 158.152 39.612H160.14V36.434H158.152C156.854 36.434 156.206 36.9613 156.206 38.016ZM172.674 42.3C171.937 42.8693 171.115 43.154 170.21 43.154C169.333 43.154 168.633 42.9067 168.11 42.412C167.597 41.908 167.34 41.2733 167.34 40.508V38.282C167.34 37.5167 167.597 36.8867 168.11 36.392C168.633 35.888 169.333 35.636 170.21 35.636C171.013 35.636 171.764 35.8787 172.464 36.364C172.529 36.42 172.543 36.476 172.506 36.532L172.268 36.896C172.212 36.952 172.156 36.9613 172.1 36.924C171.521 36.5227 170.891 36.322 170.21 36.322C169.547 36.322 169.025 36.5087 168.642 36.882C168.269 37.246 168.082 37.7127 168.082 38.282V40.508C168.082 41.0867 168.269 41.5627 168.642 41.936C169.025 42.3 169.547 42.482 170.21 42.482C170.938 42.482 171.629 42.244 172.282 41.768C172.347 41.712 172.403 41.7167 172.45 41.782L172.688 42.132C172.735 42.2067 172.73 42.2627 172.674 42.3ZM180.233 38.352V39.668C180.233 39.7427 180.191 39.78 180.107 39.78H175.277V40.564C175.277 41.152 175.477 41.6187 175.879 41.964C176.28 42.3093 176.784 42.482 177.391 42.482C178.221 42.482 178.982 42.1833 179.673 41.586C179.747 41.5393 179.803 41.5487 179.841 41.614L180.093 41.936C180.149 41.992 180.144 42.048 180.079 42.104C179.276 42.804 178.375 43.154 177.377 43.154C176.593 43.154 175.921 42.9207 175.361 42.454C174.801 41.9873 174.521 41.3573 174.521 40.564V38.352C174.521 37.484 174.791 36.8167 175.333 36.35C175.874 35.874 176.56 35.636 177.391 35.636C178.221 35.636 178.903 35.874 179.435 36.35C179.967 36.8167 180.233 37.484 180.233 38.352ZM179.505 38.352C179.505 37.708 179.309 37.2087 178.917 36.854C178.534 36.4993 178.025 36.322 177.391 36.322C176.737 36.322 176.219 36.4993 175.837 36.854C175.463 37.1993 175.277 37.6987 175.277 38.352V39.15H179.505V38.352ZM184.81 43H184.306C184.231 43 184.194 42.9627 184.194 42.888V36.462H181.814C181.73 36.462 181.688 36.4247 181.688 36.35V35.916C181.688 35.832 181.73 35.79 181.814 35.79H187.302C187.386 35.79 187.428 35.832 187.428 35.916V36.35C187.428 36.4247 187.386 36.462 187.302 36.462H184.936V42.888C184.936 42.9627 184.894 43 184.81 43ZM192.207 43H189.519C189.435 43 189.393 42.9627 189.393 42.888V35.916C189.393 35.832 189.435 35.79 189.519 35.79H190.023C190.098 35.79 190.135 35.832 190.135 35.916V38.268H192.207C193.038 38.268 193.691 38.4873 194.167 38.926C194.653 39.3553 194.895 39.9387 194.895 40.676C194.895 41.4507 194.662 42.034 194.195 42.426C193.729 42.8087 193.066 43 192.207 43ZM190.135 38.912V42.356H192.109C193.463 42.356 194.139 41.7913 194.139 40.662C194.149 40.102 193.976 39.6727 193.621 39.374C193.276 39.066 192.772 38.912 192.109 38.912H190.135ZM77.266 63.834H76.804C76.72 63.834 76.678 63.7967 76.678 63.722V62H71.148C71.0733 62 71.036 61.9627 71.036 61.888V54.916C71.036 54.832 71.0733 54.79 71.148 54.79H71.652C71.736 54.79 71.778 54.832 71.778 54.916V61.328H75.782V54.916C75.782 54.832 75.824 54.79 75.908 54.79H76.412C76.4867 54.79 76.524 54.832 76.524 54.916V61.328H77.266C77.3407 61.328 77.378 61.37 77.378 61.454V63.722C77.378 63.7967 77.3407 63.834 77.266 63.834ZM84.9343 57.352V58.668C84.9343 58.7427 84.8923 58.78 84.8083 58.78H79.9783V59.564C79.9783 60.152 80.1789 60.6187 80.5803 60.964C80.9816 61.3093 81.4856 61.482 82.0923 61.482C82.9229 61.482 83.6836 61.1833 84.3743 60.586C84.4489 60.5393 84.5049 60.5487 84.5423 60.614L84.7943 60.936C84.8503 60.992 84.8456 61.048 84.7803 61.104C83.9776 61.804 83.0769 62.154 82.0783 62.154C81.2943 62.154 80.6223 61.9207 80.0623 61.454C79.5023 60.9873 79.2223 60.3573 79.2223 59.564V57.352C79.2223 56.484 79.4929 55.8167 80.0343 55.35C80.5756 54.874 81.2616 54.636 82.0923 54.636C82.9229 54.636 83.6043 54.874 84.1363 55.35C84.6683 55.8167 84.9343 56.484 84.9343 57.352ZM84.2063 57.352C84.2063 56.708 84.0103 56.2087 83.6183 55.854C83.2356 55.4993 82.7269 55.322 82.0923 55.322C81.4389 55.322 80.9209 55.4993 80.5383 55.854C80.1649 56.1993 79.9783 56.6987 79.9783 57.352V58.15H84.2063V57.352ZM87.982 62H87.478C87.394 62 87.352 61.9627 87.352 61.888V54.916C87.352 54.832 87.394 54.79 87.478 54.79H87.982C88.0567 54.79 88.094 54.832 88.094 54.916V57.926H92.112V54.916C92.112 54.832 92.1493 54.79 92.224 54.79H92.728C92.812 54.79 92.854 54.832 92.854 54.916V61.888C92.854 61.9627 92.812 62 92.728 62H92.224C92.1493 62 92.112 61.9627 92.112 61.888V58.598H88.094V61.888C88.094 61.9627 88.0567 62 87.982 62ZM97.9362 62H97.4322C97.3576 62 97.3202 61.9627 97.3202 61.888V55.462H94.9402C94.8562 55.462 94.8142 55.4247 94.8142 55.35V54.916C94.8142 54.832 94.8562 54.79 94.9402 54.79H100.428C100.512 54.79 100.554 54.832 100.554 54.916V55.35C100.554 55.4247 100.512 55.462 100.428 55.462H98.0622V61.888C98.0622 61.9627 98.0202 62 97.9362 62ZM102.576 55.14C103.434 54.804 104.312 54.636 105.208 54.636C106.15 54.636 106.888 54.888 107.42 55.392C107.961 55.8867 108.232 56.638 108.232 57.646V59.158C108.232 60.1287 107.966 60.8707 107.434 61.384C106.902 61.8973 106.169 62.154 105.236 62.154C104.508 62.154 103.84 61.9673 103.234 61.594V64.548C103.234 64.6227 103.196 64.66 103.122 64.66H102.618C102.534 64.66 102.492 64.6227 102.492 64.548V55.28C102.492 55.2147 102.52 55.168 102.576 55.14ZM105.194 61.482C106.715 61.482 107.476 60.7073 107.476 59.158V57.646C107.476 56.0873 106.715 55.308 105.194 55.308C104.484 55.308 103.831 55.42 103.234 55.644V60.866C103.831 61.2767 104.484 61.482 105.194 61.482ZM116.423 59.466C116.423 60.2593 116.157 60.908 115.625 61.412C115.103 61.9067 114.375 62.154 113.441 62.154C112.517 62.154 111.789 61.9067 111.257 61.412C110.725 60.908 110.459 60.2593 110.459 59.466V57.338C110.459 56.5447 110.725 55.896 111.257 55.392C111.789 54.888 112.517 54.636 113.441 54.636C114.365 54.636 115.093 54.888 115.625 55.392C116.157 55.896 116.423 56.5447 116.423 57.338V59.466ZM111.215 59.466C111.215 60.0727 111.407 60.5627 111.789 60.936C112.181 61.3 112.732 61.482 113.441 61.482C114.169 61.482 114.725 61.3 115.107 60.936C115.49 60.5627 115.681 60.0727 115.681 59.466V57.338C115.681 56.7313 115.49 56.246 115.107 55.882C114.725 55.5087 114.169 55.322 113.441 55.322C112.732 55.322 112.181 55.5087 111.789 55.882C111.407 56.246 111.215 56.7313 111.215 57.338V59.466ZM121.871 62H119.057C118.973 62 118.931 61.9627 118.931 61.888V54.916C118.931 54.832 118.973 54.79 119.057 54.79H121.871C122.637 54.79 123.225 54.9627 123.635 55.308C124.055 55.6533 124.265 56.0873 124.265 56.61C124.265 57.0113 124.149 57.352 123.915 57.632C123.682 57.912 123.374 58.1033 122.991 58.206C124.018 58.4673 124.531 59.074 124.531 60.026C124.531 60.614 124.298 61.09 123.831 61.454C123.365 61.818 122.711 62 121.871 62ZM119.673 55.42V57.968H121.843C122.347 57.968 122.753 57.856 123.061 57.632C123.369 57.3987 123.523 57.0767 123.523 56.666C123.523 56.2927 123.383 55.994 123.103 55.77C122.823 55.5367 122.403 55.42 121.843 55.42H119.673ZM119.673 58.57V61.37H121.843C122.487 61.37 122.973 61.244 123.299 60.992C123.626 60.74 123.789 60.3947 123.789 59.956C123.789 59.508 123.617 59.1673 123.271 58.934C122.926 58.6913 122.45 58.57 121.843 58.57H119.673ZM136.458 62H135.828C135.763 62 135.716 61.9767 135.688 61.93L132.664 58.514L131.614 59.494V61.888C131.614 61.9627 131.577 62 131.502 62H131.012C130.928 62 130.886 61.9627 130.886 61.888V54.916C130.886 54.832 130.928 54.79 131.012 54.79H131.502C131.577 54.79 131.614 54.832 131.614 54.916V58.584L135.492 54.846C135.52 54.8087 135.571 54.79 135.646 54.79H136.276C136.323 54.79 136.351 54.804 136.36 54.832C136.379 54.86 136.369 54.8927 136.332 54.93L133.168 57.996L136.528 61.86C136.593 61.9533 136.57 62 136.458 62ZM143.723 59.466C143.723 60.2593 143.457 60.908 142.925 61.412C142.403 61.9067 141.675 62.154 140.741 62.154C139.817 62.154 139.089 61.9067 138.557 61.412C138.025 60.908 137.759 60.2593 137.759 59.466V57.338C137.759 56.5447 138.025 55.896 138.557 55.392C139.089 54.888 139.817 54.636 140.741 54.636C141.665 54.636 142.393 54.888 142.925 55.392C143.457 55.896 143.723 56.5447 143.723 57.338V59.466ZM138.515 59.466C138.515 60.0727 138.707 60.5627 139.089 60.936C139.481 61.3 140.032 61.482 140.741 61.482C141.469 61.482 142.025 61.3 142.407 60.936C142.79 60.5627 142.981 60.0727 142.981 59.466V57.338C142.981 56.7313 142.79 56.246 142.407 55.882C142.025 55.5087 141.469 55.322 140.741 55.322C140.032 55.322 139.481 55.5087 139.089 55.882C138.707 56.246 138.515 56.7313 138.515 57.338V59.466ZM146.287 55.14C147.146 54.804 148.023 54.636 148.919 54.636C149.862 54.636 150.599 54.888 151.131 55.392C151.673 55.8867 151.943 56.638 151.943 57.646V59.158C151.943 60.1287 151.677 60.8707 151.145 61.384C150.613 61.8973 149.881 62.154 148.947 62.154C148.219 62.154 147.552 61.9673 146.945 61.594V64.548C146.945 64.6227 146.908 64.66 146.833 64.66H146.329C146.245 64.66 146.203 64.6227 146.203 64.548V55.28C146.203 55.2147 146.231 55.168 146.287 55.14ZM148.905 61.482C150.427 61.482 151.187 60.7073 151.187 59.158V57.646C151.187 56.0873 150.427 55.308 148.905 55.308C148.196 55.308 147.543 55.42 146.945 55.644V60.866C147.543 61.2767 148.196 61.482 148.905 61.482ZM154.493 55.14C155.352 54.804 156.229 54.636 157.125 54.636C158.068 54.636 158.805 54.888 159.337 55.392C159.879 55.8867 160.149 56.638 160.149 57.646V59.158C160.149 60.1287 159.883 60.8707 159.351 61.384C158.819 61.8973 158.087 62.154 157.153 62.154C156.425 62.154 155.758 61.9673 155.151 61.594V64.548C155.151 64.6227 155.114 64.66 155.039 64.66H154.535C154.451 64.66 154.409 64.6227 154.409 64.548V55.28C154.409 55.2147 154.437 55.168 154.493 55.14ZM157.111 61.482C158.633 61.482 159.393 60.7073 159.393 59.158V57.646C159.393 56.0873 158.633 55.308 157.111 55.308C156.402 55.308 155.749 55.42 155.151 55.644V60.866C155.749 61.2767 156.402 61.482 157.111 61.482ZM168.103 57.352V58.668C168.103 58.7427 168.061 58.78 167.977 58.78H163.147V59.564C163.147 60.152 163.348 60.6187 163.749 60.964C164.15 61.3093 164.654 61.482 165.261 61.482C166.092 61.482 166.852 61.1833 167.543 60.586C167.618 60.5393 167.674 60.5487 167.711 60.614L167.963 60.936C168.019 60.992 168.014 61.048 167.949 61.104C167.146 61.804 166.246 62.154 165.247 62.154C164.463 62.154 163.791 61.9207 163.231 61.454C162.671 60.9873 162.391 60.3573 162.391 59.564V57.352C162.391 56.484 162.662 55.8167 163.203 55.35C163.744 54.874 164.43 54.636 165.261 54.636C166.092 54.636 166.773 54.874 167.305 55.35C167.837 55.8167 168.103 56.484 168.103 57.352ZM167.375 57.352C167.375 56.708 167.179 56.2087 166.787 55.854C166.404 55.4993 165.896 55.322 165.261 55.322C164.608 55.322 164.09 55.4993 163.707 55.854C163.334 56.1993 163.147 56.6987 163.147 57.352V58.15H167.375V57.352ZM176.093 62H175.463C175.397 62 175.351 61.9767 175.323 61.93L172.299 58.514L171.249 59.494V61.888C171.249 61.9627 171.211 62 171.137 62H170.647C170.563 62 170.521 61.9627 170.521 61.888V54.916C170.521 54.832 170.563 54.79 170.647 54.79H171.137C171.211 54.79 171.249 54.832 171.249 54.916V58.584L175.127 54.846C175.155 54.8087 175.206 54.79 175.281 54.79H175.911C175.957 54.79 175.985 54.804 175.995 54.832C176.013 54.86 176.004 54.8927 175.967 54.93L172.803 57.996L176.163 61.86C176.228 61.9533 176.205 62 176.093 62ZM184.287 63.834H183.825C183.741 63.834 183.699 63.7967 183.699 63.722V62H178.169C178.094 62 178.057 61.9627 178.057 61.888V54.916C178.057 54.832 178.094 54.79 178.169 54.79H178.673C178.757 54.79 178.799 54.832 178.799 54.916V61.328H182.803V54.916C182.803 54.832 182.845 54.79 182.929 54.79H183.433C183.507 54.79 183.545 54.832 183.545 54.916V61.328H184.287C184.361 61.328 184.399 61.37 184.399 61.454V63.722C184.399 63.7967 184.361 63.834 184.287 63.834ZM187.292 62H186.676C186.592 62 186.55 61.9627 186.55 61.888V54.916C186.55 54.832 186.592 54.79 186.676 54.79H187.18C187.254 54.79 187.292 54.832 187.292 54.916V59.452C187.292 60.1333 187.287 60.628 187.278 60.936H187.292C187.581 60.4413 187.922 59.8953 188.314 59.298L191.464 54.86C191.51 54.8133 191.562 54.79 191.618 54.79H192.22C192.294 54.79 192.332 54.832 192.332 54.916V61.888C192.332 61.9627 192.294 62 192.22 62H191.716C191.632 62 191.59 61.9627 191.59 61.888V57.548C191.59 57.3893 191.59 57.1187 191.59 56.736C191.599 56.3533 191.604 56.078 191.604 55.91C191.044 56.7967 190.708 57.324 190.596 57.492L187.432 61.93C187.404 61.9767 187.357 62 187.292 62ZM195.839 62H195.223C195.139 62 195.097 61.9627 195.097 61.888V54.916C195.097 54.832 195.139 54.79 195.223 54.79H195.727C195.802 54.79 195.839 54.832 195.839 54.916V59.452C195.839 60.1333 195.835 60.628 195.825 60.936H195.839C196.129 60.4413 196.469 59.8953 196.861 59.298L200.011 54.86C200.058 54.8133 200.109 54.79 200.165 54.79H200.767C200.842 54.79 200.879 54.832 200.879 54.916V61.888C200.879 61.9627 200.842 62 200.767 62H200.263C200.179 62 200.137 61.9627 200.137 61.888V57.548C200.137 57.3893 200.137 57.1187 200.137 56.736C200.147 56.3533 200.151 56.078 200.151 55.91C199.591 56.7967 199.255 57.324 199.143 57.492L195.979 61.93C195.951 61.9767 195.905 62 195.839 62ZM212.667 61.3C211.93 61.8693 211.108 62.154 210.203 62.154C209.326 62.154 208.626 61.9067 208.103 61.412C207.59 60.908 207.333 60.2733 207.333 59.508V57.282C207.333 56.5167 207.59 55.8867 208.103 55.392C208.626 54.888 209.326 54.636 210.203 54.636C211.006 54.636 211.757 54.8787 212.457 55.364C212.522 55.42 212.536 55.476 212.499 55.532L212.261 55.896C212.205 55.952 212.149 55.9613 212.093 55.924C211.514 55.5227 210.884 55.322 210.203 55.322C209.54 55.322 209.018 55.5087 208.635 55.882C208.262 56.246 208.075 56.7127 208.075 57.282V59.508C208.075 60.0867 208.262 60.5627 208.635 60.936C209.018 61.3 209.54 61.482 210.203 61.482C210.931 61.482 211.622 61.244 212.275 60.768C212.34 60.712 212.396 60.7167 212.443 60.782L212.681 61.132C212.728 61.2067 212.723 61.2627 212.667 61.3ZM216.094 59.466C215.954 60.4367 215.735 61.104 215.436 61.468C215.147 61.832 214.69 62.0233 214.064 62.042C213.99 62.042 213.952 62.0047 213.952 61.93V61.496C213.952 61.412 213.99 61.37 214.064 61.37C214.438 61.3513 214.722 61.202 214.918 60.922C215.124 60.6327 215.278 60.0773 215.38 59.256C215.511 58.332 215.623 56.8853 215.716 54.916C215.735 54.832 215.777 54.79 215.842 54.79H220.308C220.383 54.79 220.42 54.832 220.42 54.916V61.888C220.42 61.9627 220.383 62 220.308 62H219.804C219.72 62 219.678 61.9627 219.678 61.888V55.462H216.43C216.346 57.0393 216.234 58.374 216.094 59.466ZM228.006 60.6V54.916C228.006 54.832 228.048 54.79 228.132 54.79H228.636C228.711 54.79 228.748 54.832 228.748 54.916V62.042C228.748 62.9007 228.515 63.5727 228.048 64.058C227.582 64.5527 226.882 64.8 225.948 64.8C224.968 64.8 224.086 64.4547 223.302 63.764C223.246 63.708 223.242 63.652 223.288 63.596L223.554 63.232C223.601 63.1667 223.652 63.162 223.708 63.218C224.436 63.8153 225.183 64.1187 225.948 64.128C227.348 64.1187 228.039 63.4093 228.02 62V61.314C227.395 61.6033 226.737 61.748 226.046 61.748C225.188 61.748 224.483 61.5147 223.932 61.048C223.391 60.5813 223.12 59.9047 223.12 59.018V54.916C223.12 54.832 223.158 54.79 223.232 54.79H223.736C223.82 54.79 223.862 54.832 223.862 54.916V58.99C223.862 59.6807 224.063 60.1987 224.464 60.544C224.875 60.8893 225.43 61.062 226.13 61.062C226.821 61.062 227.446 60.908 228.006 60.6ZM234.263 58.332L236.853 61.86C236.881 61.8973 236.886 61.93 236.867 61.958C236.858 61.986 236.83 62 236.783 62H236.153C236.088 62 236.041 61.9767 236.013 61.93L233.815 58.864L231.603 61.93C231.575 61.9767 231.529 62 231.463 62H230.833C230.787 62 230.754 61.986 230.735 61.958C230.726 61.93 230.735 61.8973 230.763 61.86L233.353 58.332L230.917 54.93C230.861 54.8367 230.885 54.79 230.987 54.79H231.603C231.669 54.79 231.715 54.818 231.743 54.874L233.815 57.8L235.873 54.874C235.901 54.818 235.948 54.79 236.013 54.79H236.629C236.676 54.79 236.704 54.804 236.713 54.832C236.732 54.86 236.727 54.8927 236.699 54.93L234.263 58.332ZM238.587 55.364C239.278 54.8787 240.132 54.636 241.149 54.636C242.008 54.636 242.666 54.8647 243.123 55.322C243.59 55.7793 243.823 56.4327 243.823 57.282V61.538C243.823 61.6033 243.791 61.65 243.725 61.678C242.904 61.9953 242.036 62.154 241.121 62.154C240.272 62.154 239.567 61.958 239.007 61.566C238.457 61.174 238.181 60.614 238.181 59.886C238.181 59.1767 238.443 58.6307 238.965 58.248C239.488 57.8653 240.207 57.674 241.121 57.674C241.616 57.674 242.269 57.7487 243.081 57.898V57.296C243.081 55.98 242.428 55.322 241.121 55.322C240.309 55.322 239.595 55.5133 238.979 55.896C238.923 55.9427 238.872 55.9333 238.825 55.868L238.587 55.504C238.541 55.4387 238.541 55.392 238.587 55.364ZM238.937 59.886C238.937 60.3807 239.138 60.7727 239.539 61.062C239.941 61.342 240.468 61.482 241.121 61.482C241.775 61.482 242.428 61.37 243.081 61.146V58.542C242.437 58.402 241.784 58.332 241.121 58.332C239.665 58.332 238.937 58.85 238.937 59.886Z" fill="#1C626B" />
    <path d="M29.1526 58.7142C25.949 55.6656 23.4078 52.0465 21.674 48.0634C19.9403 44.0803 19.0479 39.8112 19.0479 35.4999C19.0479 31.1886 19.9403 26.9195 21.674 22.9364C23.4078 18.9532 25.949 15.3342 29.1526 12.2856L36.905 19.6628C34.7195 21.7426 32.9857 24.2116 31.803 26.9289C30.6202 29.6462 30.0114 32.5586 30.0114 35.4999C30.0114 38.4411 30.6202 41.3535 31.803 44.0708C32.9857 46.7881 34.7195 49.2572 36.905 51.337L29.1526 58.7142Z" fill="#31CBDC" />
    <path d="M43.865 49.1903C42.0359 47.3143 40.585 45.0871 39.5951 42.636C38.6052 40.1848 38.0957 37.5577 38.0957 34.9046C38.0957 32.2515 38.6052 29.6243 39.5951 27.1732C40.585 24.722 42.0359 22.4949 43.865 20.6189L50.0005 26.9116C48.977 27.9612 48.1652 29.2074 47.6113 30.5788C47.0575 31.9503 46.7724 33.4201 46.7724 34.9046C46.7724 36.389 47.0575 37.8589 47.6113 39.2304C48.1652 40.6018 48.977 41.848 50.0005 42.8976L43.865 49.1903Z" fill="#31CBDC" />
    <path d="M14.4639 70.619C9.87832 66.007 6.24071 60.532 3.75906 54.5062C1.2773 48.4804 0 42.0221 0 35.4999C0 28.9777 1.2773 22.5193 3.75906 16.4936C6.24071 10.4679 9.87832 4.99281 14.4639 0.380859L22.619 8.58273C19.1045 12.1176 16.3164 16.314 14.4143 20.9324C12.5121 25.5509 11.5331 30.5009 11.5331 35.4999C11.5331 40.4988 12.5121 45.449 14.4143 50.0674C16.3164 54.6859 19.1045 58.8822 22.619 62.4171L14.4639 70.619Z" fill="#31CBDC" />
    <path d="M72.106 24H70.342C70.138 24 70.066 23.898 70.126 23.694L74.446 11.346C74.506 11.202 74.602 11.13 74.734 11.13H76.786C76.918 11.13 77.014 11.202 77.074 11.346L81.394 23.694C81.454 23.898 81.382 24 81.178 24H79.414C79.246 24 79.144 23.928 79.108 23.784L78.226 21.066H73.294L72.412 23.784C72.364 23.928 72.262 24 72.106 24ZM75.724 13.506L73.906 19.104H77.614L75.796 13.506H75.724ZM86.6241 24H85.0761C84.8961 24 84.8061 23.91 84.8061 23.73V16.512H82.2861C82.1061 16.512 82.0161 16.422 82.0161 16.242V14.928C82.0161 14.76 82.1061 14.676 82.2861 14.676H89.3961C89.5761 14.676 89.6661 14.76 89.6661 14.928V16.242C89.6661 16.422 89.5761 16.512 89.3961 16.512H86.8941V23.73C86.8941 23.91 86.8041 24 86.6241 24ZM93.7887 24H92.2587C92.0787 24 91.9887 23.91 91.9887 23.73V14.928C91.9887 14.76 92.0787 14.676 92.2587 14.676H94.0047C94.1607 14.676 94.2627 14.736 94.3107 14.856L96.9027 19.986H96.9387L99.5307 14.856C99.5787 14.736 99.6807 14.676 99.8367 14.676H101.583C101.763 14.676 101.853 14.76 101.853 14.928V23.73C101.853 23.91 101.763 24 101.583 24H100.053C99.8847 24 99.8007 23.91 99.8007 23.73V20.544C99.8007 19.896 99.8127 18.996 99.8367 17.844H99.8187C99.3747 18.852 99.0567 19.548 98.8647 19.932L97.6947 22.254C97.6467 22.374 97.5447 22.434 97.3887 22.434H96.4527C96.2967 22.434 96.1947 22.374 96.1467 22.254L94.9767 19.932C94.7007 19.356 94.3827 18.66 94.0227 17.844H94.0047C94.0407 19.572 94.0587 20.472 94.0587 20.544V23.73C94.0587 23.91 93.9687 24 93.7887 24ZM112.92 20.58C112.92 21.696 112.548 22.584 111.804 23.244C111.06 23.892 110.064 24.216 108.816 24.216C107.568 24.216 106.572 23.892 105.828 23.244C105.084 22.584 104.712 21.696 104.712 20.58V18.168C104.712 17.04 105.084 16.14 105.828 15.468C106.572 14.796 107.568 14.46 108.816 14.46C110.064 14.46 111.06 14.796 111.804 15.468C112.548 16.14 112.92 17.04 112.92 18.168V20.58ZM106.818 20.58C106.818 21.756 107.484 22.344 108.816 22.344C109.464 22.344 109.956 22.194 110.292 21.894C110.64 21.594 110.814 21.156 110.814 20.58V18.168C110.814 17.58 110.64 17.13 110.292 16.818C109.944 16.494 109.452 16.332 108.816 16.332C108.168 16.332 107.67 16.488 107.322 16.8C106.986 17.112 106.818 17.568 106.818 18.168V20.58ZM122.691 23.208C121.743 23.88 120.681 24.216 119.505 24.216C118.257 24.216 117.273 23.886 116.553 23.226C115.833 22.566 115.473 21.684 115.473 20.58V18.078C115.473 16.974 115.833 16.098 116.553 15.45C117.273 14.79 118.251 14.46 119.487 14.46C120.531 14.46 121.515 14.748 122.439 15.324C122.583 15.42 122.607 15.546 122.511 15.702L121.809 16.782C121.713 16.914 121.587 16.938 121.431 16.854C120.831 16.506 120.201 16.332 119.541 16.332C118.905 16.332 118.413 16.482 118.065 16.782C117.729 17.082 117.561 17.514 117.561 18.078V20.598C117.561 21.15 117.729 21.582 118.065 21.894C118.413 22.194 118.899 22.344 119.523 22.344C120.255 22.344 120.951 22.128 121.611 21.696C121.779 21.6 121.905 21.624 121.989 21.768L122.745 22.848C122.841 22.992 122.823 23.112 122.691 23.208ZM131.455 27.42H129.907C129.739 27.42 129.655 27.33 129.655 27.15V24H128.359C127.327 24 126.463 23.688 125.767 23.064C125.071 22.44 124.723 21.522 124.723 20.31V18.348C124.723 17.184 125.083 16.284 125.803 15.648C126.523 15 127.435 14.676 128.539 14.676H129.655V11.4C129.655 11.22 129.739 11.13 129.907 11.13H131.455C131.623 11.13 131.707 11.22 131.707 11.4V14.676H132.985C134.089 14.676 134.977 15 135.649 15.648C136.321 16.284 136.657 17.184 136.657 18.348V20.31C136.657 21.51 136.315 22.428 135.631 23.064C134.947 23.688 134.125 24 133.165 24H131.707V27.15C131.707 27.33 131.623 27.42 131.455 27.42ZM126.775 20.274C126.775 20.934 126.931 21.414 127.243 21.714C127.555 22.002 128.047 22.146 128.719 22.146H129.655V16.512H128.629C127.393 16.512 126.775 17.142 126.775 18.402V20.274ZM131.707 22.146H132.643C133.315 22.146 133.807 22.002 134.119 21.714C134.431 21.414 134.587 20.934 134.587 20.274V18.402C134.587 17.142 133.969 16.512 132.733 16.512H131.707V22.146ZM147.076 18.15V19.968C147.076 20.136 146.986 20.22 146.806 20.22H141.334V20.724C141.334 21.264 141.502 21.678 141.838 21.966C142.186 22.242 142.654 22.38 143.242 22.38C144.118 22.38 144.964 22.104 145.78 21.552C145.924 21.456 146.044 21.474 146.14 21.606L146.878 22.596C146.998 22.728 146.98 22.854 146.824 22.974C145.78 23.802 144.562 24.216 143.17 24.216C142.066 24.216 141.13 23.916 140.362 23.316C139.606 22.704 139.228 21.834 139.228 20.706V18.15C139.228 16.914 139.612 15.99 140.38 15.378C141.148 14.766 142.084 14.46 143.188 14.46C144.28 14.46 145.198 14.766 145.942 15.378C146.698 15.99 147.076 16.914 147.076 18.15ZM145.042 18.132C145.042 17.508 144.868 17.046 144.52 16.746C144.172 16.446 143.728 16.296 143.188 16.296C141.952 16.296 141.334 16.908 141.334 18.132V18.6H145.042V18.132ZM150.036 15.108C151.14 14.676 152.352 14.46 153.672 14.46C154.92 14.46 155.922 14.79 156.678 15.45C157.434 16.11 157.812 17.094 157.812 18.402V20.382C157.812 21.546 157.44 22.476 156.696 23.172C155.952 23.868 154.998 24.216 153.834 24.216C153.174 24.216 152.538 24.084 151.926 23.82V27.15C151.926 27.33 151.836 27.42 151.656 27.42H150.108C149.928 27.42 149.838 27.33 149.838 27.15V15.396C149.838 15.252 149.904 15.156 150.036 15.108ZM153.654 22.38C155.01 22.38 155.688 21.72 155.688 20.4V18.384C155.688 17.64 155.514 17.106 155.166 16.782C154.818 16.458 154.302 16.296 153.618 16.296C152.898 16.296 152.334 16.38 151.926 16.548V21.876C152.418 22.212 152.994 22.38 153.654 22.38ZM160.58 15.414C161.504 14.778 162.68 14.46 164.108 14.46C165.272 14.46 166.184 14.766 166.844 15.378C167.516 15.978 167.852 16.89 167.852 18.114V23.37C167.852 23.514 167.786 23.616 167.654 23.676C166.49 24.036 165.284 24.216 164.036 24.216C162.872 24.216 161.912 23.976 161.156 23.496C160.4 23.016 160.022 22.254 160.022 21.21C160.022 20.262 160.376 19.548 161.084 19.068C161.804 18.576 162.764 18.33 163.964 18.33C164.444 18.33 165.044 18.378 165.764 18.474V18.132C165.764 17.484 165.626 17.022 165.35 16.746C165.086 16.458 164.624 16.314 163.964 16.314C163.076 16.314 162.308 16.506 161.66 16.89C161.516 16.998 161.396 16.974 161.3 16.818L160.58 15.72C160.496 15.588 160.496 15.486 160.58 15.414ZM162.128 21.192C162.128 21.6 162.302 21.906 162.65 22.11C162.998 22.302 163.46 22.398 164.036 22.398C164.588 22.398 165.164 22.326 165.764 22.182V20.148C165.116 20.052 164.534 20.004 164.018 20.004C162.758 20.004 162.128 20.4 162.128 21.192ZM182.601 23.208C181.653 23.88 180.591 24.216 179.415 24.216C178.167 24.216 177.183 23.886 176.463 23.226C175.743 22.566 175.383 21.684 175.383 20.58V18.078C175.383 16.974 175.743 16.098 176.463 15.45C177.183 14.79 178.161 14.46 179.397 14.46C180.441 14.46 181.425 14.748 182.349 15.324C182.493 15.42 182.517 15.546 182.421 15.702L181.719 16.782C181.623 16.914 181.497 16.938 181.341 16.854C180.741 16.506 180.111 16.332 179.451 16.332C178.815 16.332 178.323 16.482 177.975 16.782C177.639 17.082 177.471 17.514 177.471 18.078V20.598C177.471 21.15 177.639 21.582 177.975 21.894C178.323 22.194 178.809 22.344 179.433 22.344C180.165 22.344 180.861 22.128 181.521 21.696C181.689 21.6 181.815 21.624 181.899 21.768L182.655 22.848C182.751 22.992 182.733 23.112 182.601 23.208ZM187.725 20.94C187.497 22.08 187.149 22.884 186.681 23.352C186.213 23.808 185.469 24.054 184.449 24.09C184.281 24.09 184.197 24 184.197 23.82V22.506C184.197 22.35 184.281 22.254 184.449 22.218C184.797 22.194 185.067 22.05 185.259 21.786C185.463 21.522 185.631 21.048 185.763 20.364C185.967 19.176 186.117 17.364 186.213 14.928C186.237 14.76 186.327 14.676 186.483 14.676H192.603C192.783 14.676 192.873 14.76 192.873 14.928V23.73C192.873 23.91 192.783 24 192.603 24H191.055C190.875 24 190.785 23.91 190.785 23.73V16.512H188.157C188.097 18.228 187.953 19.704 187.725 20.94ZM201.704 21.48V14.928C201.704 14.76 201.794 14.676 201.974 14.676H203.522C203.702 14.676 203.792 14.76 203.792 14.928V23.406C203.792 26.202 202.454 27.6 199.778 27.6C198.338 27.6 197.162 27.222 196.25 26.466C196.118 26.37 196.1 26.25 196.196 26.106L196.97 25.008C197.066 24.852 197.18 24.822 197.312 24.918C198.116 25.47 198.932 25.746 199.76 25.746C200.432 25.746 200.936 25.566 201.272 25.206C201.608 24.858 201.758 24.258 201.722 23.406C201.026 23.622 200.384 23.73 199.796 23.73C198.764 23.73 197.864 23.412 197.096 22.776C196.328 22.128 195.944 21.222 195.944 20.058V14.928C195.944 14.76 196.034 14.676 196.214 14.676H197.78C197.948 14.676 198.032 14.76 198.032 14.928V19.968C198.032 20.616 198.224 21.09 198.608 21.39C198.992 21.69 199.484 21.84 200.084 21.84C200.696 21.852 201.236 21.732 201.704 21.48ZM211.633 19.32L214.531 23.676C214.651 23.892 214.597 24 214.369 24H212.461C212.317 24 212.209 23.94 212.137 23.82L210.337 20.76L208.537 23.82C208.465 23.94 208.357 24 208.213 24H206.323C206.083 24 206.023 23.892 206.143 23.676L209.041 19.32L206.305 14.982C206.257 14.898 206.251 14.826 206.287 14.766C206.323 14.706 206.389 14.676 206.485 14.676H208.303C208.435 14.676 208.543 14.736 208.627 14.856L210.337 17.862L212.047 14.856C212.131 14.736 212.239 14.676 212.371 14.676H214.189C214.285 14.676 214.351 14.706 214.387 14.766C214.423 14.826 214.417 14.898 214.369 14.982L211.633 19.32ZM216.588 15.414C217.512 14.778 218.688 14.46 220.116 14.46C221.28 14.46 222.192 14.766 222.852 15.378C223.524 15.978 223.86 16.89 223.86 18.114V23.37C223.86 23.514 223.794 23.616 223.662 23.676C222.498 24.036 221.292 24.216 220.044 24.216C218.88 24.216 217.92 23.976 217.164 23.496C216.408 23.016 216.03 22.254 216.03 21.21C216.03 20.262 216.384 19.548 217.092 19.068C217.812 18.576 218.772 18.33 219.972 18.33C220.452 18.33 221.052 18.378 221.772 18.474V18.132C221.772 17.484 221.634 17.022 221.358 16.746C221.094 16.458 220.632 16.314 219.972 16.314C219.084 16.314 218.316 16.506 217.668 16.89C217.524 16.998 217.404 16.974 217.308 16.818L216.588 15.72C216.504 15.588 216.504 15.486 216.588 15.414ZM218.136 21.192C218.136 21.6 218.31 21.906 218.658 22.11C219.006 22.302 219.468 22.398 220.044 22.398C220.596 22.398 221.172 22.326 221.772 22.182V20.148C221.124 20.052 220.542 20.004 220.026 20.004C218.766 20.004 218.136 20.4 218.136 21.192Z" fill="#1C8594" />
</svg>

