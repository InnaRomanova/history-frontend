import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
   const [currentUser, setCurrentUser] = useState({});

    return (
       
        <div className="page">
             <CurrentUserContext.Provider value={ currentUser }>
                <div className="page__content">
                    <Routes>
                        <Route exac path="/history-frontend" element={<>
                          <Header />
                            <Main />
                            <Footer />
                        </>}>
                            </Route>
                    </Routes>

                </div></CurrentUserContext.Provider>
        </div >
    )
}

export default App;