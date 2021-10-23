import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div>
        <Link to='/'>Главная</Link>
        <Link to='/AboutCompany'>О компании</Link>
        <Link to='/Servises'>Услуги</Link>
        <Link to='/Products'>Слуховые аппараты</Link>
        <Link to='/Acs'>Акссесуары</Link>
        <Link to='/Contacts'>Контакты</Link>
    </div>)
}