import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";

const App = () => {
    return (
        <div className='wrapper clear'>
            <Basket />
            <Header/>
            <div className='content p-40'>
                <div className='d-flex justify-between align-center mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block'>
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder='Поиск....'/>
                    </div>
                </div>
                <Card/>
            </div>
        </div>
    );
}

export default App;
