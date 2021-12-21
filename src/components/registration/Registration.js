import React from 'react';

/**Import react-router-dom */
import {useNavigate } from "react-router-dom";

/**Import React-hook-form */
import {useForm} from 'react-hook-form';


function Registration() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: 'onBlur'});

    // users stored in LocalStorage
    const storedUsers = (data)=> {
        let user = {
            "First name": data["First name"],
            "Last name": data["Last name"],
            "Email": data["Email"],
            "Mobile number": data["Mobile number"],
            "Password": data["Password"],
            "Title": data["Title"],
        };
        let userJSON = JSON.stringify(user);
        localStorage.setItem(data["Last name"], userJSON)
    };

    const onSubmit = data => {
        // console.log(data);
        alert("Регистрация прошла успешно, прошу осуществить вход в личный кабинет согласно указанных данных при регистрации")
        reset();
        storedUsers(data);
        if (isValid === true) { navigate("../") }
    }
    // console.log(errors);


    return (
        <div className='registration-wrapper'>
            <div className='registration-section  _container'>
                <div className="registration-section__header">
                    <h3>Регистрация нового пользователя</h3>
                </div>
                <div className="registration-section__body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            Введите имя
                            <input className="input-css" type="text" placeholder="не менее 3-х символов" {...register("First name", {
                                required: true,
                                minLength: 3,
                                maxLength: 80
                            })} />
                        </label>
                        <div> {errors?.['First name'] && <p>Некорректно введеное имя</p>}</div>
                        <label>
                            Введите фамилию
                            <input className="input-css" type="text" placeholder="не менее 3-х символов" {...register("Last name", {
                                required: true,
                                minLength: 3,
                                maxLength: 100
                            })} />
                        </label>
                        <div> {errors?.['Last name'] && <p>Некорректно введенная фамилия пользователя</p>}</div>
                        <label>
                            Введите Email
                            <input className="input-css" type="text" placeholder="образец: factory@gmail.com" {...register("Email", {
                                required: true,
                                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}/>
                        </label>
                        <div> {errors?.['Email'] && <p>Некорректно введеный email</p>}</div>
                        <label>
                            Введите номер мобильного телефона
                            <input className="input-css" type="number" placeholder="образец: 89142585682" {...register("Mobile number", {
                                required: true,
                                minLength: 6,
                                maxLength: 12
                            })} />
                        </label>
                        <div> {errors?.['Mobile number'] && <p>Некорректно введеный номер телефона</p>}</div>
                        <label>
                            Введите пароль
                            <input className="input-css" type="password" placeholder="не менее 6 символов" {...register("Password", {
                                minLength: 6,
                                maxLength: 20,
                            })} />
                        </label>
                        <div> {errors?.['Password'] && <p>Некорректно введеный пароль</p>}</div>
                        <label>Выберете сферу деятельности - производитель/заказчик
                            <br/>
                            <select className="select-css" {...register("Title", {required: true})}>
                                <option value=""> </option>
                                <option value="Заказчик">Заказчик</option>
                                <option value=" Производитель"> Производитель</option>
                            </select>
                        </label>
                        <div> {errors?.['Title'] && <p>Не выбрано поле</p>}</div>

                        <button className="btn" type='submit' disabled={!isValid}><span>Отправить</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
