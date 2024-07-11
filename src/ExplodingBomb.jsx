import { useState } from 'react';

function Bomb() {
    throw new Error("Bomb");
}

function CustomError({message}) {
    throw new Error(message);
}

function ExplodingBomb() {
    const [exploded, setExploded] = useState(false);
    const [message, setMessage] = useState("");


    function handleButtonClick(e) {
        e.preventDefault();
        //throw new Error("Invalid inputs.");
        try {
           //api call
           throw new Error("Internal Server Error");
           setMessage("Record Successfully created");
        }
        catch(ex) {
            setMessage("Failed to create a record");
        }
    }

    return (
        <div className="ExplodingBomb componentBox">
            <button onClick={(e) => handleButtonClick(e) }>
                DANGER: Click to explode bomb!
            </button>
            {/* Renders the Bomb conditionally, depending on state */}
            <div>
                {message}
            </div>
        </div>
    )
}

export default ExplodingBomb;