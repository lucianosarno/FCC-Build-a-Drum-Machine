import React from 'react';

interface DisplayProps {
    displayText: string;
}

const Display: React.FC<DisplayProps> = ({ displayText }) => {
    return (
        <div className="display">
            {displayText}
        </div>
    );
};

export default Display;