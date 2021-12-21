import React from "react";

/**Import react-router-dom */
import {Link} from "react-router-dom";

/**Import Redux */
import {useSelector, useDispatch} from "react-redux";
import {selectNumbersOrders} from "../../store/factorySlice"
import {selectDataEntrance} from "../../store/registrationSlice";
import {logout} from "../../store/registrationSlice";
import {selectUserPersonalData} from "../../store/registrationSlice";


function HeaderDown() {
    const dispatch = useDispatch()
    const numberOrders = useSelector(selectNumbersOrders);
    const dataEntrance = useSelector(selectDataEntrance);
    const dataUser = useSelector(selectUserPersonalData);

    const changeHeaderLoginLogout = () => {
        if (dataEntrance === 'Выход') {
            dispatch(logout());
        }
    };

    const changeHeaderRegistration = () => {
        if (dataEntrance === 'Выход') {
           return dataUser['Last name'] + '.' +  dataUser['First name'][0];
        } else {
            return 'Регистрация';
        }
    };

    const changeLinkRegistration = () => {
        if (dataEntrance === 'Выход') {
            return "contactInformation";
        } else {
            return "/registration";
        }
    }

    return (
        <div className="header__bottom bottom-header">
            <div className="bottom-header__container _container">
                <div className="bottom-header__row">
                    <div className="bottom-header__column">
                        <ul className="bottom-header__actions actions-header">
                            <li>
                                <Link to="/entrance"
                                   className="actions-header__item actions-header__item_login"><span onClick={changeHeaderLoginLogout}>{dataEntrance}</span></Link>
                            </li>
                            <li>
                                <Link to={changeLinkRegistration()}
                                   className="actions-header__item actions-header__item_reg"><span>{changeHeaderRegistration()}</span></Link>
                            </li>
                            <li>
                                <a href="mailto:factory@gmail.com"
                                   className="actions-header__item actions-header__item_email"><span>factory@gmail.com</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-header__column">
                        <div className="bottom-header__info info-header">
                            <div className="info-header__column">
                                <Link to="" className="info-header__callback"><span>Обратный звонок</span></Link>
                            </div>
                            <div className="info-header__column">
                                <div className="info-header__schedule">
                                    <p><span>Пн–Пт:</span> 09:00–21:00;</p>
                                    <p><span>Сб–Вс:</span> 10:00–20:00 </p>
                                </div>
                            </div>
                            <div className="info-header__column">
                                <Link to="cart" className="info-header__cart">
                                    <span>{numberOrders.length-1}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderDown;