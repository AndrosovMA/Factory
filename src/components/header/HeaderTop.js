import logoF from "./img/logoF6.png";

/**Import react-router-dom */
import {Link, NavLink} from "react-router-dom";
import {selectSettingEntrance} from "../../store/registrationSlice";
import {useNavigate} from "react-router-dom";

/**Import Redux */
import {useSelector} from "react-redux";
import {useState} from "react";


function HeaderTop() {
    const selectEntrance = useSelector(selectSettingEntrance);
    const navigate = useNavigate();
    const [menuActive, setMenuActive] = useState(false)

    // Предоставление достпука к разделу - Заказчик
    const linkClient = () => {
        // console.log('Вход выполнен: ',selectEntrance);
        if (selectEntrance === false) {
            alert('Доступ предоставляется только зарегистрированным пользователям');
            navigate("/");
        }
    }

    return (
        <div className="header__top top-header">
            <div className="top-header__content _container">
                <div className="top-header__column">
                    <div className="top-header__menu menu">
                        <div className={menuActive ? 'menu__icon icon-menu _active' : 'menu__icon icon-menu'} onClick={()=> {setMenuActive(!menuActive)}}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </div>
                        <nav className={menuActive ? 'menu__body _active' : 'menu__body'} onClick={()=> {setMenuActive(false)}}>
                            <ul className="menu__list">
                                <li><NavLink to="/about" className="menu__link">Кто мы</NavLink></li>
                                <li><NavLink to="/security" className="menu__link">Гарантии</NavLink></li>
                                <li><NavLink to="/production" className="menu__link">Производителям</NavLink></li>
                                <li><NavLink to="/contacts" className="menu__link">Контакты</NavLink></li>
                                <li><NavLink to="/payment" className="menu__link">Оплата</NavLink></li>
                                <li onClick={linkClient}><NavLink to="/client" className="menu__link">Заказчикам </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="top-header__column top-header__column_logo">
                    <Link to="/" className="top-header__logo">
                        <img src={logoF} className="" alt={'img'}/>
                    </Link>
                </div>
                <div className="top-header__column">
                    <div className="top-header__contacts contacts-header">
                        <div className="contacts-header__column">
                            <div className="contacts-header__item contacts-header__item_icon">
                                <div className="contacts-header__label">Санкт-Петербург</div>
                                <a href="tel:89142585682" className="contacts-header__phone">8-914-258-56-82</a>
                            </div>
                        </div>
                        <div className="contacts-header__column contacts-header__column_forcart">
                            <div className="contacts-header__item contacts-header__item_second-phone">
                                <div className="contacts-header__label">Бесплатно для России</div>
                                <a href="tel:88000000000" className="contacts-header__phone">8-800-000-00-00</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;