import { GameCard } from "./GameCard";
export function GamesList({ games }) {

    return (
        games.map(game => (<GameCard key={game.id} game={game} />))

        /*<>
            <ul>
                {games.map(game => <li key={game.id}><a href={game.game_url}>{game.title}</a></li>)}
            </ul>
        </>*/
    )
}