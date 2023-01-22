import React from 'react';
import './Cards.css';
import Result from '../Result/Result';

function Cards({ name, time, text, image, result }) {

    return (
        <section className="cards">
            <ul className="cards__list">
                <li className="cards__item">
                   <h4 className="cards__user">{name}</h4>
                <p className="cards__data">{time}</p>
                <img src={image} alt="foto" className="cards__photo" />
                <p className="cards__text">{text}</p> 
                </li>
                <Result result={result} />
            </ul>
        </section>
    )
}

export default Cards;