import React, {useEffect, useState} from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import axios from "axios";
import style from "./components/Basket/Basket.module.scss";


const App = () => {
    const [items, setItems] = useState([])
    const [basketItems, setBasketItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        axios.get('https://6122542dd980b40017e09224.mockapi.io/items')
            .then(response => {
                setItems(response.data)
            })
        axios.get('https://6122542dd980b40017e09224.mockapi.io/cart')
            .then(response => {
                setBasketItems(response.data)
            })
    }, [])

    const onAddToCart = (obj) => {
        setBasketItems((prevState) => [...prevState, obj])
        axios.post('https://6122542dd980b40017e09224.mockapi.io/cart', obj)
    }

    const removeItemBasket = (id) => {
        axios.delete(`https://6122542dd980b40017e09224.mockapi.io/cart/${id}`)
        setBasketItems(prevState => prevState.filter(prevItem => prevItem.id !== id))
    }

    const onSearchItem = (e) => {
        setSearchValue(e.target.value)
    }

    const clearSearch = () => {
        setSearchValue('')
    }

    return (
        <div className='wrapper clear'>
            {cartOpened &&
            <Basket items={basketItems} removeItemBasket={removeItemBasket} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>
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
                    {items
                        .filter(item => item.name.toLowerCase().includes(searchValue))
                        .map(({name, id, price, img}) => {
                            return <Card key={id} name={name} id={id} price={price} img={img} onPlus={onAddToCart}/>
                        })}
                </div>
            </div>
        </div>
    );
}


export default App;
