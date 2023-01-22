import React from 'react';
import './Comments.css';
import Cards from '../Cards/Cards';
import photo1 from '../../images/photo1.jpg';
import photo2 from '../../images/photo2.jpg';
import photo3 from '../../images/photo3.jpg';
import photo4 from '../../images/photo4.jpg';
import photo5 from '../../images/photo5.jpg';
import photo6 from '../../images/photo6.jpg';
import photo7 from '../../images/photo7.jpg';
import photo8 from '../../images/photo8.jpg';
import photo9 from '../../images/photo9.jpg';
import photo10 from '../../images/photo10.jpg';
import photo11 from '../../images/photo11.jpg';
import photo12 from '../../images/photo12.jpg';
import photo13 from '../../images/photo13.jpg';
import photo14 from '../../images/photo14.jpg';
import photo99 from '../../images/photo99.jpg';
import photo1212 from '../../images/photo1212.jpg';
import result1 from '../../images/result1.jpg';

const image = [
    { _id: 1, image: photo1 },
    { _id: 2, image: photo2 },
    { _id: 3, image: photo3 },
    { _id: 4, image: photo4 },
    { _id: 5, image: photo5 },
    { _id: 6, image: photo6 },
    { _id: 7, image: photo7 },
    { _id: 8, image: photo8 },
    { _id: 9, image: photo9 },
    { _id: 10, image: photo10 },
    { _id: 11, image: photo11 },
    { _id: 12, image: photo12 },
    { _id: 13, image: photo13 },
    { _id: 14, image: photo14 },
]

function Comments() {

    return (
        <section className="comments">
            <h3 className="comment__title">Comentarios:</h3>
            <Cards name='Claudia Espinosa' time='20.01.2023'
                image={photo1} text='Quizás la gente no pensaría que es la novia de su hijo si no posara en la foto como si lo fuera.' />
            <Cards name='Jorge Manuel' time='20.01.2023'
                image={photo2} text='Claudia, estoy de acuerdo. Parece bastante extraño.' />
            <Cards name='Luz Marina' time='20.01.2023'
                image={photo3} text='¿Entonces por qué otros dermatólogos aún no han creado una producto tan milagrosa? ¿Cuál es el problema? ¿No son especialistas?' 
                result={photo99} />
           
            <Cards name='Gabriela N.' time='20.01.2023'
                image={photo4} text='Luz, porque no todo el mundo quiere eso, puede permitírselo o conoce a las personas adecuadas.' />
            <Cards name='María Celeste' time='20.01.2023'
                image={photo5} text='¡Este producto realmente funciona! Por cierto, me enteré de ella por los comentarios en Facebook y no por este dermatólogo ni por sus pacientes.' 
                result={result1} />
            
            <Cards name='Luisa Fernanda' time='20.01.2023'
                image={photo6} text='No me gusta la dama del artículo. Es demasiado narcisista...' />
            <Cards name='Esperanza Gómez' time='20.01.2023'
                image={photo7} text='Lo más importante es la transformación interior. Primero rejuvenece tu cara, y luego tu vida comienza a llenarse de todo tipo de emociones. Y es algo que no se puede expresar con palabras.' />
            <Cards name='Xiomara L.' time='20.01.2023'
                image={photo8} text='¡Estoy totalmente de acuerdo con eso! Después de usar este producto, mi marido volvió a interesarse en mí como si volviéramos a la adolescencia, ¡y ahora tenemos relaciones sexuales con más frecuencia que hace 20 años!' />
            <Cards name='Vilma Pérez' time='20.01.2023'
                image={photo9} text='Le pedí este producto a mi madre. El tubo no se ve tan bonito como los productos de marcas famosas, por supuesto, pero es comprensible, ya que se trata claramente de una producción independiente. Mi madre está feliz y ya lleva 2 meses usándola.' />
            <Cards name='Ofelia Valle' time='20.01.2023'
                image={photo10} text='¡Acabo de ganar un 50% de descuento! ¿Alguien más se lo ha llevado también?' />
            <Cards name='Isabel Hidalgo' time='20.01.2023'
                image={photo11} text='Yo obtuve un 30% de descuento. Actualicé la página varias veces y volví a intentarlo, pero solo conseguí un 30% así que la pedí.' />
            <Cards name='Carmen Martínez' time='20.01.2023'
                image={photo12} text='¡¡¡Realmente funciona!!! Me la pedí hace 3 meses y he estado usándola todos los días desde entonces, espero que no paren la producción.' />
            <Cards name='Darlisa García' time='20.01.2023'
                image={photo13} text='¿Y cuánto durará el período de promoción?' 
                result={photo1212} />
            <Cards name='Mayra Carrozo' time='20.01.2023'
                image={photo14} text='Ahora la gente me dice que aparento menos de 30 años, ¡es increíble! Solía ​​avergonzarme de mi aspecto, pero ahora me avergüenza decir que en realidad tengo 43 :)' />

        </section>
    )
}

export default Comments;