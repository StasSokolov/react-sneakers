import React from "react";
import style from './Card.module.scss'

const Card = () => {
    return (
        <div className={style.content_card}>
            <div className={style.content_card_like}>
                <img width={35} height={35} src="/img/like-card.svg" alt="Like"/>
            </div>
            <img width={133} height={112} src="/img/sneakers1.png" alt="shoes"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className={style.content_card_info}>
                <div>
                    <p>Цена:</p>
                    <b>12 999 руб.</b>
                </div>
                <button>
                    <img src="/img/add.svg" alt="add"/>
                </button>
            </div>
        </div>
    )
}

export default Card;