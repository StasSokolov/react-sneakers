import React from "react";
import style from './Basket.module.scss'

const Basket = () => {
    return (
        <div style={{display: "none"}} className="overlay">
            <div className="drawer d-flex flex-column">
                <h2 className='d-flex justify-between mb-30'>Корзина <img className='cu-p' src="img/delete.svg"
                                                                          alt="delete"/>
                </h2>


                <div className="items">
                    <div className="cart-item d-flex align-center mb-20">
                        <img width={70} height={70} src="/img/sneakers1.png" alt="Sneakers"/>
                        <div className='cart-item-info ml-20 mr-10'>
                            <h5 className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <b>12 999 руб.</b>
                        </div>

                        <img className='remove-btn cu-p' src="img/delete.svg" alt="delete"/>
                    </div>
                </div>


                <div className='cart-total-block'>
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div/>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ <img src="/img/arrow-right.svg" alt="arrow"/>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Basket