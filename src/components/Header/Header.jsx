import React from 'react';
import './Header.css';
import Logo from '../../images/Logo.png';
import basket from '../../images/basket.svg';

function Header() {
    

    return (
            <header className="header">
                <img  src={Logo} alt="Логотип" className="header__logo" />
                <ul className="header__container">
                    <li className="header__link"><a href="#" className="header__link-menu">CASA</a></li>
                    <li className="header__link"><a href="#" className="header__link-menu">TIENDA</a></li>
                    <li className="header__link"><a href="#" className="header__link-menu">SOBRE</a></li>
                    <li className="header__link"><a href="#" className="header__link-menu">REVISTA</a></li>
                    <li className="header__link"><a href="#" className="header__link-menu">CONTACTO</a></li></ul>
                    <div><a href="#" className="header__link-basket"><img src={basket} alt="Корзина" className="header__link-image" /></a></div>
            </header>     
    );
}

export default Header;