// useState is a React hook
import { useState } from "react";
// save in MoodChanger.jsx
function MoodChanger() {
    // two variables :
    // mood stores current mood, default happy
    // setMood is a function for updating mood
    const [mood, setMood] = useState('Sad');

    return (
        <>
            <div className="MoodChanger componentBox">
                Current Mood: {mood}
            </div>
            <div>
                <button onClick={() => test()}> Stay Up Late </button> &nbsp;&nbsp;
                <button onClick={() => setMood('hungry')}> Skip Lunch</button>
            </div>
        </>
    )
}
export default MoodChanger;