import React from 'react';

const Tiles = ({ className, value, onClick, playerTurn }) => {
    const hoverClass = value === null ? `${playerTurn.toLowerCase()}-hover` : '';
    // let hoverClass = '';
    // hoverClass = value == null && playerTurn !== null ? `${playerTurn.toLowerCase()}-hover`:`${playerTurn.toLowerCase()}-hover`;
    
    return (
        <div
            onClick={onClick}
            className={`tile ${className} ${hoverClass}`}
        >
            {value}
        </div>
    );
};

export default Tiles;
