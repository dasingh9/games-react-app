//import gamesArray from './games-data.json';
import {GamesList} from "./GamesList";
import {FlexContainer} from "../container/FlexContainer";
import {GamesFilter} from "./GamesFilter";
import { useState, useEffect } from 'react';

const gamesArray = [{
    "id": 517,
    "title": "Lost Ark",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/517\/thumbnail.jpg",
    "short_description": "Smilegate\u2019s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
    "game_url": "https:\/\/www.freetogame.com\/open\/lost-ark",
    "genre": "ARPG",
    "platform": "PC (Windows)",
    "publisher": "Amazon Games",
    "developer": "Smilegate RPG",
    "release_date": "2022-02-11",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/lost-ark"
},
{
    "id": 516,
    "title": "PUBG: BATTLEGROUNDS",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/516\/thumbnail.jpg",
    "short_description": "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    "game_url": "https:\/\/www.freetogame.com\/open\/pubg",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "KRAFTON, Inc.",
    "developer": "KRAFTON, Inc.",
    "release_date": "2022-01-12",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/pubg"
},
{
    "id": 508,
    "title": "Enlisted",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/508\/thumbnail.jpg",
    "short_description": "Get ready to command your own World War II military squad in Gaijin and Darkflow Software\u2019s MMO squad-based shooter Enlisted. ",
    "game_url": "https:\/\/www.freetogame.com\/open\/enlisted",
    "genre": "Shooter",
    "platform": "PC (Windows)",
    "publisher": "Gaijin Entertainment",
    "developer": "Darkflow Software",
    "release_date": "2021-04-08",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/enlisted"
},
{
    "id": 345,
    "title": "Forge of Empires",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/345\/thumbnail.jpg",
    "short_description": "A free to play 2D browser-based online strategy game, become the leader and raise your city.",
    "game_url": "https:\/\/www.freetogame.com\/open\/forge-of-empires",
    "genre": "Strategy",
    "platform": "Web Browser",
    "publisher": "InnoGames",
    "developer": "InnoGames",
    "release_date": "2012-04-17",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/forge-of-empires"
},
{
    "id": 475,
    "title": "Genshin Impact",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/475\/thumbnail.jpg",
    "short_description": "If you\u2019ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you\u2019re going to want to check out miHoYo\u2019s Genshin Impact.",
    "game_url": "https:\/\/www.freetogame.com\/open\/genshin-impact",
    "genre": "Action RPG",
    "platform": "PC (Windows)",
    "publisher": "miHoYo",
    "developer": "miHoYo",
    "release_date": "2020-09-28",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/genshin-impact"
},
{
    "id": 523,
    "title": "Fall Guys",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/523\/thumbnail.jpg",
    "short_description": "Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ",
    "game_url": "https:\/\/www.freetogame.com\/open\/fall-guys",
    "genre": "Battle Royale",
    "platform": "PC (Windows)",
    "publisher": "Mediatonic",
    "developer": "Mediatonic",
    "release_date": "2020-08-04",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/fall-guys"
},
{
    "id": 340,
    "title": "Game Of Thrones Winter Is Coming",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/340\/thumbnail.jpg",
    "short_description": "A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.",
    "game_url": "https:\/\/www.freetogame.com\/open\/game-of-thrones-winter-is-coming",
    "genre": "Strategy",
    "platform": "Web Browser",
    "publisher": "GTArcade",
    "developer": "YOOZOO Games ",
    "release_date": "2019-11-14",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/game-of-thrones-winter-is-coming"
},
{
    "id": 347,
    "title": "Elvenar",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/347\/thumbnail.jpg",
    "short_description": "A browser based city-building strategy MMO set in the fantasy world of Elvenar.",
    "game_url": "https:\/\/www.freetogame.com\/open\/elvenar",
    "genre": "Strategy",
    "platform": "Web Browser",
    "publisher": "InnoGames",
    "developer": "InnoGames",
    "release_date": "2015-04-08",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/elvenar"
},
{
    "id": 11,
    "title": "Neverwinter",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/11\/thumbnail.jpg",
    "short_description": "A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ",
    "game_url": "https:\/\/www.freetogame.com\/open\/neverwinter",
    "genre": "MMORPG",
    "platform": "PC (Windows)",
    "publisher": "Perfect World Entertainment",
    "developer": "Cryptic Studios",
    "release_date": "2013-12-06",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/neverwinter"
},
{
    "id": 380,
    "title": "Dark Orbit Reloaded",
    "thumbnail": "https:\/\/www.freetogame.com\/g\/380\/thumbnail.jpg",
    "short_description": "A browser-based 3D space-combat MMO with a massive playerbase!",
    "game_url": "https:\/\/www.freetogame.com\/open\/darkorbit",
    "genre": "Shooter",
    "platform": "Web Browser",
    "publisher": "Bigpoint",
    "developer": "Bigpoint",
    "release_date": "2006-12-11",
    "freetogame_profile_url": "https:\/\/www.freetogame.com\/darkorbit"
}];

export function GamesComponent () {

    const [allGames, setAllGames] = useState(null);
    const [games, setGames] = useState(null);

    useEffect( ()=> {
            /*const url = `http://localhost:3000/games`;
            fetch(url)
            .then(response => response.json())
            .then(gamesArray => {
                setGames(gamesArray);
                setAllGames(gamesArray);
            });
            */
           setGames(gamesArray);
           setAllGames(gamesArray);
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