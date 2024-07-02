import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GamesList } from "./games/GamesList";
import gamesArray from './games/games-data.json';

function App() {
   
    return (
        <>
            <GamesList games={gamesArray}></GamesList>
        </>
    )
}

export default App
