import React from 'react';
import './Dialog.css';
import photo from '../../images/photo.jpg';
import profile from '../../images/profile.jpg';


function Dialog() {


    return (
        <section className="dialog">
            <figure className="dialog__photo">
                <img src={photo} alt="foto" className="dialog__photo-family" />
                <figcaption className="dialog__photo-text">A la izquierda, Paula de 28 años, con Samuel de 3 años.
                    A la derecha, el 47 cumpleaños de Paula</figcaption></figure>
            <div className="dialog__list">
                <p className="dialog__list-text">— Paula, a juzgar por las fotos, no cambiaste
                    nada en los últimos 20 años. Me gustaría hacerte una pregunta, aunque probablemente
                    ya estés cansada de responderla: ¿cómo lo lograste?</p>
                <p className="dialog__list-text">— En primer lugar, permíteme darte las gracias, me
                    voy a poner roja y todo. Es cierto que cambie, ahora mi estilo y mi forma de vestir
                    es definitivamente mejor. En segundo lugar, tengo suerte: estoy casada con un dermatólogo.</p>
                <p className="dialog__list-text">— Entonces, ¿la razón por la que te ves tan linda
                    y joven es completamente suya?</p>
                <p className="dialog__list-text">— Por supuesto. Es un especialista, un médico.
                    Simplemente sigo sus recomendaciones.</p>
                <p className="dialog__list-text">— Si no es un secreto, ¿cuáles son esas recomendaciones?</p>
                <p className="dialog__list-text">— Las reglas clásicas que habrás escuchado innumerables
                    veces: un buen sueño y una alimentación adecuada, pero sería una mentira si te dijera que
                    es suficiente. Mi marido es un especialista licenciado que trabaja en colaboración con laboratorios.
                    Hace unos 10 años, fue el primero en desarrollar una fórmula rejuvenecedora llamada Inno Gialuron.
                    Yo fui la primera voluntaria en participar en los ensayos clínicos. En ese momento, tenía 37 años y,
                    por supuesto, ya tenía arrugas, manchas pigmentadas, etc.</p>
            </div>
            <figure className="dialog__photo">
                <img src={profile} alt="foto" className="dialog__photo-family" />
                <figcaption className="dialog__photo-text">A los 47 años, Paula luce 20 años más joven gracias a
                    una fórmula desarrollada por su marido dermatólogo</figcaption></figure>
            <div className="dialog__list">
                <p className="dialog__list-text">— ¿Quieres decir que tu marido desarrolló el producto
                    especialmente para ti?</p>
                <p className="dialog__list-text">— Al principio, sí. Al verme en el espejo, estaba más
                    y más molesta con el paso de los días y seguía quejándome de que mi marido era dermatólogo
                    y que no podía hacer nada por el marchitamiento de mi piel. Para mí, las inyecciones de
                    belleza no eran una opción. Como esposa de un médico, era plenamente consciente de las
                    consecuencias de insertar agentes químicos debajo de la piel. Además, tengo un miedo terrible
                    a las agujas, así que la fórmula que desarrolló fue un acierto en la diana por varias
                    razones: en primer lugar, porque tendría una mujer joven y linda, en segundo lugar,
                    porque dejaría de quejarme a él y, en tercer lugar, porque era una especie de desafío:
                    hacía tiempo que deseaba comenzar a desarrollar su propio producto porque en el mercado
                    de los cosméticos no había nada que cumpliera plenamente con sus requisitos.
                </p>
                <p className="dialog__list-text">— ¿El producto dio buenos resultados inmediatamente?
                </p>
                <p className="dialog__list-text">— La fórmula fue probada y ajustada varias veces,
                    pero los primeros resultados fueron muy reveladores solamente después de la segunda
                    o tercera prueba. Me aplicaba la producto cada día durante un mes y, una bonita mañana,
                    al mirarme en el espejo, me di cuenta de que mis arrugas habían desaparecido y que el
                    tono de mi piel se había vuelto uniforme. Desde entonces, desde hace 10 años, mi piel
                    se ve como la ves.
                </p>
                <p className="dialog__list-text">
                    — Dr. Orozco, cuéntenos cómo logró desarrollar una fórmula que da resultados tan notables
                    y por qué casi nadie la conoce.
                </p>
                <p className="dialog__list-text">— Para mí, como especialista, no hay nada complicado
                    en esta fórmula: simplemente hay que saber cómo está construido el cuerpo humano y
                    las funciones de la piel. En cuanto a su segunda pregunta, este producto es muy conocida:
                    yo se la recomiendo a mis pacientes, y estos a sus amigos, etc. Pero debe tener en cuenta
                    que el mercado moderno está lleno de productos cosméticos. Las grandes empresas invierten
                    enormes cantidades de dinero en marketing y publicidad, y es imposible romper el ruido de
                    información que generan.
                </p>
                <p className="dialog__list-text">— Acaba de mencionar que hay que saber cómo funciona la piel humana.
                    ¿Puede explicarnos este proceso con palabras sencillas?</p>
                <p className="dialog__list-text">— A partir de los 25 años, las personas comienzan a perder cada año aproximadamente
                    el 1% del contenido de colágeno en la piel, que es uno de los "bloques de construcción"
                    de la epidermis. Esto conduce a la desorganización de su estructura, es decir,
                    la estructura de la piel se altera. Además, se ralentizan los procesos de regeneración
                    de la piel y de todo el organismo. El nuevo material de construcción se fabrica en
                    cantidades menores, mientras que el antiguo se descompone y no se restaura. Esto
                    conduce a una pérdida de elasticidad y, por lo tanto, a la flacidez de la piel, a
                    la pérdida de volumen y, finalmente, a la formación de arrugas profundas.</p>
                <p className="dialog__list-text">— ¿Y cómo funciona su fórmula?</p>
                <p className="dialog__list-text">— Si el cuerpo no puede producir colágeno, hay que ayudarle. Es por eso que
                    la fórmula está enriquecida con colágeno adicional, pero como sabrá, el colágeno
                    adicional solo afecta a las consecuencias del problema, y nosotros​​tenemos que
                    lidiar con su causa: estimular la síntesis de nuevo colágeno y la acumulación
                    de fibras de colágeno.

                    Tardamos un tiempo para buscar la mejor solución y, en nuestra primera
                    versión de la fórmula, usamos retinol. Sin embargo, los resultados de las
                    pruebas mostraron que el retinol tiene muchos efectos secundarios: descamación
                    de la piel, picazón, reacciones alérgicas, etc. Entonces, decidimos reemplazar
                    el retinol por su análogo vegetal, el bakuchiol.

                    Otros ensayos mostraron que el bakuchiol no solo estimula la liberación
                    de colágeno, es decir, restaura la elasticidad de la piel y alisa las arrugas,
                    sino que además suprime la liberación de melanina, responsable de la
                    formación de las manchas pigmentadas. En algunos casos, gracias a sus
                    propiedades antisépticas, elimina las imperfecciones de la piel y el acné.
                    Fue entonces cuando nos dimos cuenta de que habíamos encontrado lo que necesitábamos.</p>
                <p className="dialog__list-text">— ¿Hay otros ejemplos, además de su esposa, que puedan demostrar la eficacia de la fórmula?</p>
                <p className="dialog__list-text">— Por supuesto. Paula fue la primera, pero después de hacer todas las pruebas
                    de laboratorio, pusimos la producto en producción. Yo, por mi parte, comencé
                    a recomendarla a mis pacientes, y ellos, a su vez, la recomendaban a familiares
                    y amigos. Su experiencia ha demostrado que incluso las mujeres mayores de 65 años
                    pueden deshacerse de las arrugas faciales, resolviendo el problema de la sequedad
                    y la flacidez de la piel.</p></div>
        </section >

    );
}

export default Dialog;