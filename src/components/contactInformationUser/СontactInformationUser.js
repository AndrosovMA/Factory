import React from "react";

/**Import react-router-dom */
import {useNavigate} from "react-router-dom";

/**Import Redux */
import {useSelector, useDispatch} from "react-redux";
import {selectUserPersonalData} from "../../store/registrationSlice";
import {changeEmailUser, changeTellUser, changePasswordUser, setChangedParameters} from "../../store/registrationSlice";

function ContactInformationUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userDate = useSelector(selectUserPersonalData);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setChangedParameters())
    }

    const changeEmail = (event) => {
        dispatch(changeEmailUser(event.nativeEvent.data));
    }

    const changeTel = (event) => {
        dispatch(changeTellUser(event.nativeEvent.data));
    }
    const changePassword = (event) => {
        dispatch(changePasswordUser(event.nativeEvent.data));
    }

    return (
        <div className='contactInformation-wrapper'>
            <div className='contactInformation-section  _container'>
                <div className="contactInformation-section__header">
                    <h3>Контактная информация пользователя</h3>
                </div>
                <div className="contactInformation-section__body">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Важно! При необходимости изменить Имя, Фамилию или сферу деятельности необходимо направить запрос в адрес администрации
                            сайта с аргументирующем объяснением. В штатном режиме пользования изменения первичных
                            персональных данных не предоставляется возмжным.
                        </label>
                        <br/>

                        <label>
                            Изменить Email
                            <input className="input-css" type="text" value={userDate['Email']}
                                   placeholder="образец: factory@gmail.com"
                                   onChange={changeEmail}/>
                        </label>

                        <label>
                            Изменить номер мобильного телефона
                            <input className="input-css" type="number"
                                   value={userDate['Mobile number']}
                                   placeholder="образец: 89142585682"
                                   onChange={changeTel}/>
                        </label>

                        <label>
                            Изменить пароль
                            <input className="input-css" type="password"
                                   value={userDate['Password']}
                                   placeholder="не менее 6 символов"
                                   onChange={changePassword}/>
                        </label>

                        <button className="btn" type='submit'><span>Изменить</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactInformationUser;