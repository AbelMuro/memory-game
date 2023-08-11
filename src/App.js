import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import MainMenu from './MainMenu';
import Game from './Game'
import './styles.css';

function App() {
    return(
        <Provider store={store}>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainMenu/>}/>
                        <Route path='/start' element={<Game/>}/>
                    </Routes>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;