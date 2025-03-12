import React from 'react';

interface DrumPadProps {
    audioClip: string;
    id: string;
    displayText: string;
    onPlay: (id: string) => void;
}

const DrumPad: React.FC<DrumPadProps> = ({ audioClip, id, displayText, onPlay }) => {
    const handleClick = () => {
        const audio = document.getElementById(id) as HTMLAudioElement;
        audio.currentTime = 0;
        audio.play();
        onPlay(id);
    };

    return (
        <div className="drum-pad" id={id} onClick={handleClick}>
            {displayText}
            <audio id={id} src={audioClip} />
        </div>
    );
};

export default DrumPad;