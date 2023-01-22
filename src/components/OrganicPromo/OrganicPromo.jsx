import React from 'react';
import './OrganicPromo.css';
import title from '../../images/title.jpg';

function OrganicPromo() {


    return (
        <section className="promo">
            <figure className="promo__container">
                <h1 className="promo__title">Pensaban que una madre de 47 años era la novia de su hijo.
                    Ella revela el secreto de su juventud</h1>
                <img src={title} alt="foto" className="promo__photo" />
                <figcaption className="promo__photo-text">Foto de perfil de Samuel David con su madre Paula la derecha</figcaption></figure>
            <article className="promo__list">
                <p className="promo__list-text">Esta historia increíble se volvió rápidamente muy popular
                    en Internet. Todo comenzó cuando Samuel David, de 22 años, le envió un mensaje a una chica
                    que le gustaba, expresándole su deseo de conocerla. La chica notó que Samuel no estaba
                    sola en su foto de perfil y le preguntó si a su novia no le importaría que se conocieran.
                    La respuesta le sorprendió: "No es mi novia, es mi madre".</p>
                <p className="promo__list-item">La chica pensó que era una excusa ridícula, pero
                    cuando miró detalladamente el perfil de Samuel, descubrió que no le estaba mintiendo.
                    Había varias fotos tituladas "Mi madre y yo" donde podía ver la misma belleza:
                    su madre Paula Andrea, de 47 años. Resultó ser que no era la primera vez que confundían
                    a Paula con la novia de su hijo, y después la bombardeaban con preguntas sobre cómo
                    se las apañaba para verse dos veces más joven. Muchos sospechaban que su aspecto era
                    producto de una cirugía plástica, pero en realidad su secreto era muy diferente.</p>
            </article>
        </section>

    );
}

export default OrganicPromo;