import React, {useContext} from "react";
import Card from "../components/Card/Card";
import {AppContext} from "../context";
import Info from "../components/Info/Info";

const Favorites = () => {
    const {favorites, onAddFavorite, onAddToCart} = useContext(AppContext)
    const renderItems = () => {
        return favorites
            .map((item) => {
                return <Card onFavorite={onAddFavorite}
                             key={item.id}
                             favorited={true}
                             onPlus={onAddToCart}
                             {...item}
                />
            })
    }

    return (
        <div className='content p-40'>
            <div className='d-flex justify-between align-center mb-40'>
                <h1>Мои закладки</h1>
            </div>
            <div className='d-flex flex-wrap'>
                {favorites.length > 0 ?
                    renderItems() :
                    <Info image='/img/sad.png' description='Вы ничего не добавляли в закладки' title='Закладок нет :('/>}
            </div>
        </div>
    )
}

export default Favorites