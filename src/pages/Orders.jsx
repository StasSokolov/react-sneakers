import React, {useContext, useEffect, useState} from "react";
import Info from "../components/Info/Info";
import Card from "../components/Card/Card";
import axios from "axios";
import {AppContext} from "../context";
import Preloader from "../components/Preloader/Preloader";

export const Orders = () => {
    const [orders, setOrders] = useState([])
    const {onAddFavorite, onAddToCart} = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetching = async () => {
            try {
                const {data} = await axios.get('https://6122542dd980b40017e09224.mockapi.io/orders')
                setOrders(data.map(obj => obj.items).flat())
                setIsLoading(false)
            } catch (error) {
                alert('Не могу получить заказы ;(')
                console.error(error)
            }
        }

        fetching()
    }, [])

    const renderItems = () => {
        return orders
            .map((item) => {
                return isLoading ? <Preloader/> :
                    <Card key={item.id} {...item}/>
            })
    }

    return (
        <div className='content p-40'>
            <div className='d-flex justify-between align-center mb-40'>
                <h1>Мои заказы</h1>
            </div>
            <div className='d-flex flex-wrap'>
                {orders.length > 0 ?
                    renderItems() :
                    <Info image='/img/sad.png' description='Вы ничего не заказывали' title='Заказов нет :('/>}
            </div>
        </div>
    )
}