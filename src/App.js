import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import './styles.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainMenu/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;