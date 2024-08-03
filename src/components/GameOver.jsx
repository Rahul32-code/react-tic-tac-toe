import React from 'react'
import Gamestate from './GamneState';

const GameOver = ({gamestate}) => {
    // switch (gamestate) {
    //     case Gamestate.inProgress:
    //         return <></>;
    //     case Gamestate.PlayerxWins:
    //         return <div className='game-over'>X Wins</div>
    //     case Gamestate.PlayeroWins:
    //         return <div className='game-over'>O Wins</div>
    //     case Gamestate.draw:
    //         return <div className='game-over'>Draw</div>
    //     default:
    //         return <></>;
    //         break;
    switch (gamestate) {
        case Gamestate.inProgress:
            return null;
        case Gamestate.PlayerxWins:
            return <div className='game-over'>X Wins</div>
        case Gamestate.PlayeroWins:
            return <div className='game-over'>O Wins</div>
        case Gamestate.draw:
            return <div className='game-over'>Draw</div>
        default:
            return null;
    }
}

export default GameOver
