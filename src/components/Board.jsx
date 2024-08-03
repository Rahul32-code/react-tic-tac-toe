import React from 'react';
import Tiles from './Tiles';
import Strike from './Strike';

const Board = ({ tiles, onTileclick, playerTurn, strikeClass }) => {

    const getTileClassName = (index) => {
        const bottomClass = index < 6 ? 'border-bottom ' : '';
        const rightClass = index % 3 !== 2 ? 'border-right ' : '';
        return bottomClass + rightClass;
    };

    return (
        <div className='board'>
            {tiles.map((tile, index) => (
                <Tiles
                    playerTurn={playerTurn}
                    key={index}
                    onClick={() => onTileclick(index)}
                    value={tile}
                    className={getTileClassName(index)}
                />
            ))}
            <Strike strikeClass={strikeClass} />
        </div>
    );
};

export default Board;
