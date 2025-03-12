import React, { useState } from 'react';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import './styles/App.css';

const App = () => {
    const [display, setDisplay] = useState('');

    const handlePadClick = (id: string, audioSrc: string) => {
        const audio = new Audio(audioSrc);
        audio.play();
        setDisplay(id);
    };

    return (
        <div id="drum-machine">
            <Display displayText={display} />
            <div className="drum-pads">
                <DrumPad id="Heater 1" audioSrc="path/to/audio1.mp3" onClick={handlePadClick} />
                <DrumPad id="Heater 2" audioSrc="path/to/audio2.mp3" onClick={handlePadClick} />
                <DrumPad id="Heater 3" audioSrc="path/to/audio3.mp3" onClick={handlePadClick} />
                <DrumPad id="Heater 4" audioSrc="path/to/audio4.mp3" onClick={handlePadClick} />
                <DrumPad id="Clap" audioSrc="path/to/audio5.mp3" onClick={handlePadClick} />
                <DrumPad id="Open Hi Hat" audioSrc="path/to/audio6.mp3" onClick={handlePadClick} />
                <DrumPad id="Kick" audioSrc="path/to/audio7.mp3" onClick={handlePadClick} />
                <DrumPad id="Closed Hi Hat" audioSrc="path/to/audio8.mp3" onClick={handlePadClick} />
            </div>
        </div>
    );
};

export default App;