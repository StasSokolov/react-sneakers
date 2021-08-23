import React, {useContext} from "react";
import style from "../Basket/Basket.module.scss";
import {AppContext} from "../../context";

const Info = ({title, description, image}) => {
    const {onClose} = useContext(AppContext)
    return (
        <div className={style.basketEmpty}>
            <img className='mb-20' src={image} alt="empty box"/>
            <h2>{title}</h2>
            <p className='opacity-6'>{description}</p>
            <button onClick={onClose} className='greenButton'>
                <img className='arrowLeft' src="/img/arrow-right.svg" alt="Arrow"/>
                Вернуться назад
            </button>
        </div>
    )
}

export default Info