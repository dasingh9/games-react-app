import { GameCard } from "./GameCard";
export function GamesList({ games }) {

    return (
        games.map(game => (<GameCard game={game} />))

        /*<>
            <ul>
                {games.map(game => <li><a href={game.game_url}>{game.title}</a></li>)}
            </ul>
        </>*/
    )
}