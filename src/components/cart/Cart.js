import React from "react";

/**Import react-router-dom */
import {Link} from "react-router-dom";

/**Import Redux */
import {useSelector, useDispatch} from "react-redux";
import {selectProduction} from "../../store/factorySlice";
import {deleteProduction, getNumberChange} from "../../store/factorySlice";


function Cart() {
    const dispatch = useDispatch();
    let dataProduction = useSelector(selectProduction);

    const arrTableHead = ['№п/п', 'name_production', 'material', 'quantity', 'date', 'other_parameters', 'address', 'action', 'action'];
    let itemProd = Object.values(dataProduction);
    let i = 0;


    const buttonHandlerDel = (event) => {
        let numberRow = event.target.innerHTML.replace(/[^+\d]/g, '');
        dispatch(deleteProduction(numberRow));
    };
    const buttonHandlerChange = (event) => {
        let numberRow = event.target.innerHTML.replace(/[^+\d]/g, '');
        dispatch(getNumberChange(numberRow));
    };

    const keyRandom = (min = 1, max = 10000) => {
        return (Math.floor(Math.random() * (max - min + 1)) + min) + Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div className='cart-wrapper'>
            <div className='cart-section  _container'>
                <div className="cart-section__header">
                    <h3>Отправленные предварительные заявки на изготовление продукции</h3>
                </div>
                <div className="cart-section__body">
                    <table className='table'>
                        <thead>
                        <tr>
                            {arrTableHead.map((item) => <th key={keyRandom()}>{item}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {itemProd.map((item) => {
                            i++
                            return (
                                <tr key={keyRandom()}>
                                    <td key={keyRandom()}>{i}</td>
                                    <td key={keyRandom()}>{item['name_production']}</td>
                                    <td key={keyRandom()}>{item['material']}</td>
                                    <td key={keyRandom()}>{item['quantity']}</td>
                                    <td key={keyRandom()}>{item['date']}</td>
                                    <td key={keyRandom()}>{item['other_parameters']}</td>
                                    <td key={keyRandom()}>{item['address']}</td>
                                    <td key={keyRandom()}>
                                        <Link to="/cartchange" onClick={buttonHandlerChange}>изменить <span className='hidden-number'>{i}</span></Link>
                                    </td>
                                    <td key={keyRandom()}>
                                        <button onClick={buttonHandlerDel}>
                                            удалить <span className='hidden-number'>{i}</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;