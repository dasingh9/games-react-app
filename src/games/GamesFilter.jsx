import { useState } from "react";

export function GamesFilter(props) {
    const [keyword, setKeyword] = useState("");

    const handleSearchByKeyword = (searchKeyword) => {
        setKeyword(searchKeyword);

        let filteredGames = [];
        if (searchKeyword.length > 0)
            filteredGames = props.games.filter(
                game => game.title.toLowerCase().includes(searchKeyword.toLowerCase())
            );
        else
            filteredGames = props.games;

        props.onFilter(filteredGames);
    }

    return (
        <form>
            <input
                type="text" name="keyword"
                onChange={(e) => handleSearchByKeyword(e.target.value)}
                value={keyword}
                className="input-name-filter">
            </input>
        </form>
    );
}