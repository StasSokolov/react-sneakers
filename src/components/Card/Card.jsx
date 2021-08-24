import React, {useContext, useState} from "react";
import style from './Card.module.scss'
import Preloader from "../Preloader/Preloader";
import {AppContext} from "../../context";

const Card = ({name, price, img, id, onPlus, isLoading, onFavorite, favorited = false}) => {
    const [favorite, setFavorite] = useState(favorited)
    const {getAddedItems} = useContext(AppContext)

    const onAddCart = (obj) => {
        onPlus(obj)
        getAddedItems(obj.id)
    }

    const onAddFavorite = (obj) => {
        onFavorite(obj)
        setFavorite(!favorite)
    }

    return (
        isLoading ?
            <Preloader/>
            :
            <div className={style.content_card}>
                <div className={style.content_card_like}>
                    {
                        onFavorite && <img onClick={() => onAddFavorite({name, price, img, id})} width={35} height={35}
                                           src={favorite ? "/img/like-card-active.svg" : "/img/like-card.svg"}
                                           alt="Like"/>
                    }
                </div>
                <img width={133} height={112} src={img} alt="shoes"/>
                <h5>{name}</h5>
                <div className={style.content_card_info}>
                    <div>
                        <p>Цена:</p>
                        <b>{price}</b>
                    </div>
                    {onPlus && <img onClick={() => onAddCart({name, price, parentId: id, img, id})} className='cu-p'
                                    src={getAddedItems(id) ? "/img/added.svg" : "/img/add.svg"} alt="add"/>}
                </div>
            </div>
    )
}

export default Card;