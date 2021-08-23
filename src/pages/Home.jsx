import React, {useContext} from "react";
import Card from "../components/Card/Card";
import {AppContext} from "../context";

const HomePage = () => {
    const {
        items,
        searchValue,
        isLoading,
        clearSearch,
        onSearchItem,
        onAddToCart,
        onAddFavorite
    } = useContext(AppContext)

    const renderItems = () => {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchValue))
        return (isLoading ? [...Array(12)] : filteredItems)
            .map((item, index) => {
                return <Card key={index}
                             isLoading={isLoading}
                             onFavorite={onAddFavorite}
                             onPlus={onAddToCart}
                             {...item}
                />
            })
    }

    return (
        <div className='content p-40'>
            <div className='d-flex justify-between align-center mb-40'>
                <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
                <div className='search-block'>
                    <img src="/img/search.svg" alt="Search"/>
                    {searchValue && <img onClick={clearSearch} className='clear' src="img/delete.svg" alt="clear"/>}
                    <input value={searchValue} onChange={onSearchItem} type="text" placeholder='Поиск....'/>
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {renderItems()}
            </div>
        </div>
    )
}

export default HomePage