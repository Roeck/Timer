import React from 'react';
import './Controls.css';


type Props = {
    setTimeInSeconds: Function
};

function Controls(props: any) {
    return (
        <section className="controls-container">
            <button className="big-button">Play</button>
            <button className="big-button">Stop</button>
            <button className="big-button">Reset</button>
        </section>
    )
}

export default Controls;