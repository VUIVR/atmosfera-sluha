import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
    <div>
        <Link to='/'>Главная</Link>
        <Link to='/AboutCompany'>О компании</Link>
        {/* <Link to='/'>Услуги</Link>
        <Link to='/'>Слуховые аппараты</Link>
        <Link to='/'>Акссесуары</Link>
        <Link to='/'>Контакты</Link>  */}
    </div>)
}