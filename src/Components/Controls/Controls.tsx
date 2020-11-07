import React, { useState } from 'react';
import './Controls.css';


type Props = {
    setTimeInSeconds: Function
};

function Controls(props: Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = () => {
        let interval: any = setInterval(() => {
            setTimeInSeconds((previousState: number) =>
                previousState + 1);
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {

    }

    const handleResetButton = () => {

    }

    return (
        <section className="controls-container">
            <button className="big-button" onClick={handlePlayButton}>Play</button>
            <button className="big-button" onClick={handleStopButton}>Stop</button>
            <button className="big-button" onClick={handleResetButton}>Reset</button>
        </section>
    )
}

export default Controls;