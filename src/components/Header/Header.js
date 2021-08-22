import React from "react";
import style from './Header.module.scss'

const Header = () => {
    return (
        <header className='header d-flex justify-between p-40'>
            <div className="header-left d-flex align-center">
                <img className='mr-15' width={40} height={40} src='/img/logo.png' alt="logo"/>
                <div>
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p className='opacity-5'>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className='d-flex align-center'>
                <li className='mr-30'>
                    <img className='mr-10' width={18} height={18} src='/img/basket.svg' alt="basket"/>
                    <span>1205 руб.</span></li>
                <li className='mr-30'>
                    <img width={20} height={20} src='/img/likes.svg' alt="likes"/>
                </li>
                <li>
                    <img width={20} height={20} src='/img/user.svg' alt="user"/>
                </li>
            </ul>
        </header>
    )
}

export default Header