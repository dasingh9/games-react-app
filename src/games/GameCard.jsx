import "./card.css";

export function GameCard({ game }) {
    return (
        <div className="card" key={game.id} >
            <img className="card-img-top" src={game.thumbnail} alt={game.title} />
            <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">{game.short_description}</p>
                <a className="game-url btn-red-gradient" href={game.game_url} className="btn btn-success">Play Game</a>
            </div>
        </div>
    );
}