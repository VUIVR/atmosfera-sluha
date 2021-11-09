import React from "react";
import { Link } from "react-router-dom";





export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-light navbar-expand-lg bg-light fixed-top ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                        <Link to='/'>Главная</Link>
                        <Link to='/AboutCompany'>О компании</Link>
                        <Link to='/Servises'>Услуги</Link>
                        <Link to='/Products'>Слуховые аппараты</Link>
                        <Link to='/Acs'>Акссесуары</Link>
                        <Link to='/Contacts'>Контакты</Link>
                    </div>
                </div>
            </nav>

        </>
    )

}