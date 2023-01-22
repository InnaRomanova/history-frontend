import React from 'react';
import './Comparison.css';
import comparison1 from '../../images/1.jpg';
import comparison2 from '../../images/2.jpg';
import comparison3 from '../../images/3.jpg';
import comparison4 from '../../images/4.jpg';

function Comparison() {


    return (
        <section className="comparison">
            <figure className="comparison__photo-list">
                <img src={comparison1} alt="foto" className="comparison__photo" />
                <img src={comparison2} alt="foto" className="comparison__photo" />
                <img src={comparison3} alt="foto" className="comparison__photo" />
                <img src={comparison4} alt="foto" className="comparison__photo" />
                <figcaption className="dialog__photo-text">Fotos de las pacientes de Rogelio Orozco
                    antes y después de usar Inno Gialuron</figcaption></figure>
                    <div className="dialog__list">
            <p className="dialog__list-text">— Dice que los poderosos gigantes de productos cosméticos
                dificultan su entrada al mercado. ¿Cómo se comercializa su producto? ¿Dónde se puede comprar?</p>
            <p className="dialog__list-text">— Por ahora, lamentablemente, solo se vende en nuestra
                web oficial. Esperamos que en el futuro podamos llegar a los estantes de las farmacias
                y tiendas mientras seguimos negociando, pero esta situación beneficia a los compradores:
                dado que la producto no se comercializa en nuestro país y no la publicitamos entre los
                consumidores como parte de un programa de marketing, a menudo llevamos a cabo promociones
                limitadas con descuentos.</p></div>

        </section>
    )
}

export default Comparison;