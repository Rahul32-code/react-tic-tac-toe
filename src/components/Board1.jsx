import React from 'react'
import Tiles from './Tiles'
import Strike from './Strike'

const Board = ({ tiles, onTileclick }) => {

    const getTileClassName = (index) => {
        const bottomClass = index < 6 ? 'border-bottom' : '';
        const rightClass = index % 3 == 0 ? 'border-right' : '';
        return bottomClass + rightClass;
    };

    return (
        <div className='board'>
            {tiles.map((tile, index) => {
                // console.log(index);
                <Tiles
                    key={index}
                    onClick={() => onTileclick(index)}
                    value={tile}
                    className={getTileClassName(index)}
                />
            })}
            {/* <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[0]}
                className='border-bottom border-right'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[1]}
                className='border-bottom border-right'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[2]}
                className='border-bottom'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[3]}
                className='border-bottom border-right'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[4]}
                className='border-bottom border-right'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[5]}
                className='border-bottom'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[6]}
                className='border-right'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[7]}
                className='border-right'
            />
            <Tiles
                onClick={(e) => { onTileclick(e) }}
                value={tiles[8]}
            /> */}
            <Strike />
        </div>
    )
}

export default Board
