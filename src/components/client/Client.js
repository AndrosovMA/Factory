import React from "react";

/**Import react-router-dom */
import {useNavigate} from "react-router-dom";

/**Import Redux */
import {useSelector, useDispatch} from "react-redux";
import {selectMaterial, selectTypeProduction} from "../../store/productionSlice";
import {addProduction} from "../../store/factorySlice";


function Client() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const material = useSelector(selectMaterial);
    const type_production = useSelector(selectTypeProduction);

    const formHandler = (event) => {
        event.preventDefault();
        let orderItems = [];
        for (let i = 0; i < event.target.length - 1; i++) {
            orderItems.push(event.target[i].value);
        }
        dispatch(addProduction(orderItems));
        // navigate('/cart', {replace:true});
    };

    return (
        <div className='client-wrapper'>
            <div className='client-section  _container'>
                <div className="client-section__header">
                    <h3>Сформировать предварительную заявку на изготовление новой продукции</h3>
                </div>
                <div className="client-section__body">
                    <form className='client-form' onSubmit={formHandler}>
                        <div className='client-form__element'>
                            материал изготовления:
                            <select className='select-css' defaultValue={'asd'}>
                                {material.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </div>
                        <div className='client-form__element'>
                            тип продукции:
                            <select className='select-css' >
                                {type_production.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </div>
                        <div className='client-form__element'>
                            наименование товара:
                            <input className='input-css' placeholder='черенок лопаты и т.п.' type="text"/>
                        </div>
                        <div className='client-form__element'>
                            колличество:
                            <input className='input-css' placeholder='шт.' type="number"/>
                        </div>
                        <div className='client-form__element'>
                            дополнительные параметры:
                            <input className='input-css'
                                   placeholder='не более 200 символов'
                                   type="text"/>
                        </div>
                        <div className='client-form__element'>
                            срок выполнения заказа:
                            <input className='input-css'
                                   type="date"/>
                        </div>
                        <div className='client-form__element'>
                            адрес доставки:
                            <input className='input-css'
                                   placeholder='в случаи самовывоза поле не заполнять'
                                   type="text"/>
                        </div>
                        <button className="btn" type='submit'><span>Отправить</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Client;