import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper _container">
                <div className="footer__left-side">
                    <div className="left-side_body">
                        Copyright © 2021 Factory Inc.
                    </div>
                </div>

                <div className="footer__right-side">
                    <div className="right-side-column">
                        <div className="right-side-column__header">
                            ЗАКАЗЧИКАМ
                        </div>
                        <div className="right-side-column__body">
                            <nav className="menu__body-foot">
                                <ul className="">
                                    <li><Link to="/client" className="menu__link _footer">СФОРМИРОВАТЬ ЗАЯВКУ</Link></li>
                                    <li><Link to="/cart" className="menu__link _footer">ЗАЯВКИ В РАБОТЕ</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="right-side-column">
                        <div className="right-side-column__header">
                            ПРОИЗВОДИТЕЛЯМ
                        </div>
                        <div className="right-side-column__body">
                            <nav className="menu__body-foot">
                                <ul className="">
                                    <li><Link to="/production" className="menu__link _footer">СФОРМИРОВАТЬ ЗАЯВКУ</Link></li>
                                    <li><Link to="/cart" className="menu__link _footer">ЗАЯВКИ В РАБОТЕ</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="right-side-column right-side-column_hidden">
                        <div className="right-side-column__header ">
                            ДОПОЛНИТЕЛЬНО
                        </div>
                        <div className="right-side-column__body">
                            <nav className="menu__body-foot">
                                <ul className="">
                                    <li><Link to="/" className="menu__link _footer">ГЛАВНАЯ СТРАНИЦА</Link></li>
                                    <li><Link to="/about" className="menu__link _footer">КОНТАКТЫ</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;