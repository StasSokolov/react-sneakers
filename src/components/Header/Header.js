import React from "react";
import {NavLink} from "react-router-dom";
import useCart from "../../hooks/useCart";

const Header = ({onClickCart}) => {
    const {totalPrice} = useCart()

    return (
        <header className='header d-flex justify-between p-40'>
            <NavLink to='/'>
                <div className="header-left d-flex align-center">
                    <img className='mr-15' width={40} height={40} src='/img/logo.png' alt="logo"/>
                    <div>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p className='opacity-5'>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </NavLink>


            <ul className='d-flex align-center'>
                <li onClick={onClickCart} className='mr-30 cu-p'>
                    <img className='mr-10' width={18} height={18} src='/img/basket.svg' alt="basket"/>
                    <span>{totalPrice} руб.</span></li>
                <NavLink to='/favorites'>
                    <li className='mr-30'>
                        <img width={20} height={20} src='/img/likes.svg' alt="likes"/>
                    </li>
                </NavLink>
                <NavLink to='/orders'>
                    <li>
                        <img width={20} height={20} src='/img/user.svg' alt="user"/>
                    </li>
                </NavLink>
            </ul>
        </header>
    )
}

export default Header