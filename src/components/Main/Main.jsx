import React from 'react';
import './Main.css';
import OrganicPromo from '../OrganicPromo/OrganicPromo';
import Dialog from '../Dialog/Dialog';
import Comparison from '../Comparison/Comparison';
import Comments from '../Comments/Comments';


function Main({user}) {
    return (
        <main>
            <OrganicPromo />
            <Dialog />
            <Comparison />
            <Comments cards={user}/>
        </main>

    );
}

export default Main;