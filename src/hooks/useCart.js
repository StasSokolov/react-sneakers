import React, {useContext} from "react";
import {AppContext} from "../context";

const useCart = () => {
    const {basketItems, setBasketItems} = useContext(AppContext)
    const totalPrice = basketItems.reduce((sum, prev) => +prev.price + +sum, 0)

    return { basketItems, setBasketItems, totalPrice }
}

export default useCart