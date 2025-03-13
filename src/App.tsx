import React, { useState } from 'react';
import DrumPad from './components/DrumPad';
import Display from './components/Display';
import './styles/App.css';

const App = () => {
    const [display, setDisplay] = useState('');

    const handlePadClick = (id: string) => {
        setDisplay(id);
    };

    return (
        <div id="drum-machine">
            <Display displayText={display} />
            <div className="drum-pads">
                <DrumPad id="Heater 1" audioClip="path/to/audio1.mp3" displayText="Heater 1" onPlay={handlePadClick} />
                <DrumPad id="Heater 2" audioClip="path/to/audio2.mp3" displayText="Heater 2" onPlay={handlePadClick} />
                <DrumPad id="Heater 3" audioClip="path/to/audio3.mp3" displayText="Heater 3" onPlay={handlePadClick} />
                <DrumPad id="Heater 4" audioClip="path/to/audio4.mp3" displayText="Heater 4" onPlay={handlePadClick} />
                <DrumPad id="Clap" audioClip="path/to/audio5.mp3" displayText="Clap" onPlay={handlePadClick} />
                <DrumPad id="Open Hi Hat" audioClip="path/to/audio6.mp3" displayText="Open Hi Hat" onPlay={handlePadClick} />
                <DrumPad id="Kick-n'-Hat" audioClip="path/to/audio7.mp3" displayText="Open Hi Hat" onPlay={handlePadClick} />
                <DrumPad id="Kick" audioClip="path/to/audio8.mp3" displayText="Kick" onPlay={handlePadClick} />
                <DrumPad id="Closed Hi Hat" audioClip="path/to/audio9.mp3" displayText="Closed Hi Hat" onPlay={handlePadClick} />
            </div>
        </div>
    );
};

export default App;