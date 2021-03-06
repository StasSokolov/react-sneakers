import React, {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import axios from "axios";
import {Route} from "react-router";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import {AppContext} from "./context";
import {Orders} from "./pages/Orders";


const App = () => {
    const [items, setItems] = useState([])
    const [basketItems, setBasketItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const cartResponse = await axios.get('https://6122542dd980b40017e09224.mockapi.io/cart')
                const favoriteResponse = await axios.get('https://6122542dd980b40017e09224.mockapi.io/favorite')
                const itemsResponse = await axios.get('https://6122542dd980b40017e09224.mockapi.io/items')

                setIsLoading(false)

                setBasketItems(cartResponse.data)
                setFavorites(favoriteResponse.data)
                setItems(itemsResponse.data)
            } catch (error) {
                console.log('Ошибка при запросе!(')
            }
        }

        fetchData()
    }, [])


    const onAddToCart = async (obj) => {
        try {
            const findItem = basketItems.find(item => item.parentId == obj.id)
            if (findItem) {
                setBasketItems(prev => prev.filter(item => item.parentId !== obj.id))
                await axios.delete(`https://6122542dd980b40017e09224.mockapi.io/cart/${findItem.id}`)
            } else {
                const {data} = await axios.post('https://6122542dd980b40017e09224.mockapi.io/cart', obj)
                setBasketItems((prevState) => [...prevState, data])
            }
        } catch (error) {
            alert('Ошибка при добавлении в корзину!(')
        }
    }

    const removeItemBasket = (id) => {
        axios.delete(`https://6122542dd980b40017e09224.mockapi.io/cart/${id}`)
        setBasketItems(prevState => prevState.filter(prevItem => prevItem.id !== id))
    }

    const onAddFavorite = async (obj) => {
        try {
            if (favorites.find(item => item.id === obj.id)) {
                axios.delete(`https://6122542dd980b40017e09224.mockapi.io/favorite/${obj.id}`)
                setFavorites(prev => prev.filter(item => item.id !== obj.id))
            } else {
                const response = await axios.post(`https://6122542dd980b40017e09224.mockapi.io/favorite`, obj)
                setFavorites(prevItems => [...prevItems, response.data])
            }
        } catch (error) {
            console.log('Не удалось добавить в избранное!')
        }
    }

    const onSearchItem = (e) => {
        setSearchValue(e.target.value)
    }

    const clearSearch = () => {
        setSearchValue('')
    }

    const getAddedItems = (id) => {
        return basketItems.some(obj => obj.parentId == id)
    }

    return (
        <AppContext.Provider value={{
            items,
            favorites,
            basketItems,
            setBasketItems,
            searchValue,
            clearSearch,
            cartOpened,
            isLoading,
            onAddFavorite,
            onAddToCart,
            onSearchItem,
            getAddedItems,
            onClose: () => setCartOpened(false)
        }}>
            <div className='wrapper clear'>
                {cartOpened &&
                <Basket opened={cartOpened} items={basketItems} removeItemBasket={removeItemBasket}
                        onClose={() => setCartOpened(false)}/>}
                <Header onClickCart={() => setCartOpened(true)}/>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/favorites'>
                    <Favorites/>
                </Route>
                <Route path='/orders'>
                    <Orders/>
                </Route>
            </div>
        </AppContext.Provider>
    );
}


export default App;
