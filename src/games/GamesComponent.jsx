//import gamesArray from './games-data.json';
import {GamesList} from "./GamesList";
import {FlexContainer} from "../container/FlexContainer";
import {GamesFilter} from "./GamesFilter";
import { useState, useEffect } from 'react';

export function GamesComponent () {

    const [allGames, setAllGames] = useState(null);
    const [games, setGames] = useState(null);

    useEffect( ()=> {
            const url = `http://localhost:3000/games`;
            fetch(url)
            .then(response => response.json())
            .then(gamesArray => {
                setGames(gamesArray);
                setAllGames(gamesArray);
            });
        },
        []
    )
   
    const handleOnFilter = (filteredGames)=> {
        //console.log(filteredGames.length);
        setGames(filteredGames);
    }

    return (
        <>
        <FlexContainer>
            { allGames && <GamesFilter games={allGames} onFilter={handleOnFilter}></GamesFilter> }
        </FlexContainer>

        <FlexContainer>
            { games && <GamesList games={games}></GamesList> }
        </FlexContainer>
        </>

    );

}