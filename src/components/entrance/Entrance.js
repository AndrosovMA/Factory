import React from "react";

/**Import react-router-dom */
import {useNavigate} from "react-router-dom";

/**Import Redux */
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/registrationSlice";

/**Import React-hook-form */
import {useForm} from 'react-hook-form';


function Entrance() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({mode: 'onBlur'});

    const onSubmit = data => {
        let dataUser = JSON.parse(localStorage.getItem(data["Last name"]));
        let messageHi = `Добро пожаловать в Factory ${dataUser["Last name"]} ${dataUser["First name"]}`;

        if (data["Mobile number"] === dataUser["Mobile number"] && data["Password"] === dataUser["Password"] ) {
            dispatch(login(dataUser));
            alert (messageHi);
            navigate("../");
        } else {
            alert ('Некорректно указанные данные, повторите попытку');
        }
    }

    return (
        <div className='entrance-wrapper'>
            <div className='entrance-section  _container'>
                <div className="entrance-section__header">
                    <h3>Вход в личный кабинет пользователя</h3>
                </div>
                <div className="entrance-section__body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            Введите фамилию
                            <input className="input-css" type="text" placeholder="" {...register("Last name", {
                                required: true,
                                minLength: 3,
                                maxLength: 100
                            })} />
                        </label>
                        <label>
                            Введите номер мобильного телефона
                            <input className="input-css" type="number"
                                   placeholder="" {...register("Mobile number", {
                                required: true,
                                minLength: 6,
                                maxLength: 12
                            })} />
                        </label>
                        <label>
                            Введите пароль
                            <input className="input-css" type="password"
                                   placeholder="" {...register("Password", {
                                minLength: 6,
                                maxLength: 20,
                            })} />
                        </label>
                        <button className="btn" type='submit' disabled={!isValid}><span>Вход</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Entrance;