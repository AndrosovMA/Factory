function Customer() {
    return (
        <div className="customer">
            <div className="customer__wrapper _container">
                <div className="customer__left-side">
                    <div className="header-left-side">
                        <h3>С чего начать заказчику</h3>
                    </div>
                    <div className="body-left-side">
                        <ol>
                            <li>Сформировать предварительную заявку на изготовление новой продукции</li>
                            <li>
                                В течении двух рабочих дней, придет сообщение о возможности/невозможности реализации
                                указанной продукции согласно предявляемых условий
                            </li>
                            <li>
                                В случаи положительного согласования направленной предварительной заявки, оформляется контранкт на три стороны (трехсторонний договор)
                            </li>
                            <li>
                                В случаи невозможности реализации продукции, Вам будут предложены оптималные варианты по
                                изменеию требований к продукции, соласно которых Вы принимаете окончательное решение
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="customer__right-side">
                    <div className="info-right-side">

                    </div>
                    <div className="hover-right-side">
                            <span>НАЧНИ СВОЁ ПРОИЗВОДСТВО</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer;