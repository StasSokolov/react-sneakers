import React, {useState} from "react";
import style from './Basket.module.scss'
import Info from "../Info/Info";
import axios from "axios";
import useCart from "../../hooks/useCart";

const Basket = ({onClose, removeItemBasket, items = [], opened}) => {
    const [isCompleted, setIsCompleted] = useState(false)
    const [orderID, setOrderID] = useState(null)
    const {basketItems, setBasketItems, totalPrice} = useCart()

    const onClickOrder = async () => {
        try {
            const response = await axios.post('https://6122542dd980b40017e09224.mockapi.io/orders', {items: basketItems})
            setOrderID(response.data.id)
            setIsCompleted(true)
            setBasketItems([])
        } catch (error) {
            alert('Не удалось добавить заказ :(')
        }
    }

    const removeItem = (id) => {
        removeItemBasket(id)
    }

    return (
        <div className={`${style.overlay}  ${opened ? style.overlayVisible : ' '}`}>
            <div className={style.drawer}>
                <h2 className='d-flex justify-between mb-30'>Корзина <img onClick={onClose} className='cu-p'
                                                                          src="img/delete.svg" alt="delete"/>
                </h2>

                {items.length > 0 ?
                    <>
                        <div className={style.items}>
                            {items.map(({name, price, id, img}) => {
                                return (
                                    <div key={id} className={style.cart_item}>
                                        <img width={70} height={70} src={img} alt="Sneakers"/>
                                        <div className={style.cart_item_info}>
                                            <h5 className='mb-5'>{name}</h5>
                                            <b>{price}</b>
                                        </div>

                                        <img onClick={() => removeItem(id)} className={style.remove_btn}
                                             src="img/delete.svg"
                                             alt="delete"/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={style.cart_total_block}>
                            <ul>
                                <li>
                                    <span>Итого: </span>
                                    <div/>
                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>{(totalPrice / 100) * 5} руб. </b>
                                </li>
                            </ul>
                            <button onClick={onClickOrder} className='greenButton'>Оформить заказ <img
                                src="/img/arrow-right.svg" alt="arrow"/>
                            </button>
                        </div>
                    </>
                    :
                    <Info title={isCompleted ? 'Заказ оформлен!' : 'Корзина пустая'} image={isCompleted ? '/img/done.jpg' : "/img/emptyBox.png"}
                          description={isCompleted ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}/>
                }


            </div>
        </div>
    )
}

export default Basket