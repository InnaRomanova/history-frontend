import React from 'react';
import './Result.css';


function Result({ result }) {

    return (
        <section className="result">
            {result ? (<img src={result} alt="foto" className="cards__result" />) : (
               <img src={result} alt="foto" className="cards__result_inactive" />
            )}
        </section>
    )
}

export default Result;