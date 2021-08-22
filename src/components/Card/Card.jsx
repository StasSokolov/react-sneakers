import React, {useState} from "react";
import style from './Card.module.scss'

const Card = ({name, price, img, id, onPlus}) => {
    const [checked, setChecked] = useState(false)
    const [favorite, setFavorite] = useState(false)

    const onAddCart = (obj) => {
        onPlus(obj)
        setChecked(!checked)
    }

    const onAddFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <div className={style.content_card}>
            <div className={style.content_card_like}>
                <img onClick={onAddFavorite} width={35} height={35} src={favorite ? "/img/like-card-active.svg" : "/img/like-card.svg"} alt="Like"/>
            </div>
            <img width={133} height={112} src={img} alt="shoes"/>
            <h5>{name}</h5>
            <div className={style.content_card_info}>
                <div>
                    <p>Цена:</p>
                    <b>{price}</b>
                </div>
                <img onClick={() => onAddCart({name, price, img, id})} className='cu-p' src={checked ? "/img/added.svg" : "/img/add.svg"} alt="add"/>
            </div>
        </div>
    )
}

export default Card;