import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Container} from './container/Container';
import {Circle} from './Circle';
import Pet from './Pet';
import MoodChanger from './MoodChanger';
import {GamesComponent} from "./games/GamesComponent"
import { LoginForm } from './LoginForm';
import ExplodingBomb from "./ExplodingBomb";
import Clock from "./Clock";
import ClockDisplay from "./ClockDisplay";
import { FlexContainer } from './container/FlexContainer';

function App() {
   
    return (
        <>
            
            <GamesComponent></GamesComponent>
      

        </>
    )
}

export default App
