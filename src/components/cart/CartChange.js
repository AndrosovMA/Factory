import React from "react";

/**Import react-router-dom */
import {useNavigate} from "react-router-dom";

/**Import Redux */
import {useDispatch, useSelector} from "react-redux";
import {selectMaterial, selectTypeProduction} from "../../store/productionSlice";
import {selectNumbersChange, selectObjectChange} from "../../store/factorySlice";
import {changeProduction} from "../../store/factorySlice";


function CartChange () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const numbersChange = useSelector(selectNumbersChange)
    const objectChange = useSelector(selectObjectChange)
    const material = useSelector(selectMaterial);
    const type_production = useSelector(selectTypeProduction);

    const formHandler = (event) => {
        event.preventDefault();
        let orderItems = [];
        for (let i = 0; i < event.target.length - 1; i++) {
            orderItems.push(event.target[i].value);
        }
        dispatch(changeProduction(orderItems));
        navigate('/cart', {replace:true});
    };

    return (
        <div className='client-wrapper'>
            <div className='client-section  _container'>
                <div className="client-section__header">
                    <h3>Изменить предварительную заявку №{numbersChange} </h3>
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
                            <input className='input-css' defaultValue={objectChange['name_production']}  type="text"/>

                        </div>
                        <div className='client-form__element'>
                            колличество:
                            <input className='input-css' defaultValue={objectChange['quantity']} type="number"/>
                        </div>
                        <div className='client-form__element'>
                            дополнительные параметры:
                            <input className='input-css'
                                   defaultValue={objectChange['other_parameters']}
                                   type="text"/>
                        </div>
                        <div className='client-form__element'>
                            срок выполнения заказа:
                            <input className='input-css' defaultValue={objectChange['date']}
                                   type="date"/>
                        </div>
                        <div className='client-form__element'>
                            адрес доставки:
                            <input className='input-css'
                                   defaultValue={objectChange['address']}
                                   type="text"/>
                        </div>
                        <button className="btn btn_cart-change-2" type='submit'><span>Изменить</span> </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CartChange;