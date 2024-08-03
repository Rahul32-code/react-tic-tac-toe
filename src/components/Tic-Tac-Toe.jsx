import { useState, useEffect } from "react"
import Board from "./Board"
import GameOver from "./GameOver";
import Gamestate from "./GamneState";
import Reset from "./Reset";

const TicTacToe = () => {
    // define player
    const player_X = 'X';
    const player_O = 'O';

    // winning codition
    const winningCondition = [
        // Rows
        { combo: [0, 1, 2], strikeclass: 'strike-row-1' },
        { combo: [3, 4, 5], strikeclass: 'strike-row-2' },
        { combo: [6, 7, 8], strikeclass: 'strike-row-3' },

        // collumns
        { combo: [0, 3, 6], strikeclass: 'strike-collumn-4' },
        { combo: [1, 4, 7], strikeclass: 'strike-collumn-5' },
        { combo: [2, 5, 8], strikeclass: 'strike-collumn-6' },

        //diagonals
        { combo: [0, 4, 8], strikeclass: 'strike-diagonal-7' },
        { combo: [2, 4, 6], strikeclass: 'strike-diagonal-8' },
    ]

    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(player_X);
    const [strikeClass, setStrikeClass] = useState('');
    //set game status
    const [gamestate, setGamestate] = useState(Gamestate.inProgress);

    const handleCheckwinner = (tiles, setStrikeClass) => {
        for (const { combo, strikeclass } of winningCondition) {
            const [ a, b, c] = combo;
            if(tiles[a] !== null && tiles[a] === tiles[b] && tiles[a] && tiles[c]){
                setStrikeClass(strikeclass);
                setGamestate(tiles[a] === player_X? Gamestate.PlayerxWins : Gamestate.PlayeroWins);
                return;
            }
            // const tilesValue1 = tiles[combo[0]];
            // const tilesValue2 = tiles[combo[1]];
            // const tilesValue3 = tiles[combo[2]];

            // if (tilesValue1 !== null && tilesValue1 === tilesValue2 && tilesValue1 === tilesValue3) {
            //     setStrikeClass(strikeclass);
            //     //set game status
            //     tilesValue1 === player_X ? setGamestate(Gamestate.PlayerxWins) : setGamestate(Gamestate.PlayeroWins);
            //     return;
            // }
        }
        // setStrikeClass('');

        // Check for a draw
        if(tiles.every(tile => tile !== null)) {
            setGamestate(Gamestate.draw);
        } else {
            setStrikeClass('');
        }
        // const allTileAreFilledIn = tiles.every(tile => tile !== null);
        // if (allTileAreFilledIn) {
        //     setGamestate(Gamestate.draw); 
        // }
    }

    const handleClick = (index) => {
        if(gamestate !== Gamestate.inProgress || tiles[index]) return;
        // if (gamestate !== Gamestate.inProgress) return;
        
        // if(tiles[index] !== null) return;

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        // next player
        setPlayerTurn(prev => (prev === player_X? player_O : player_X));
        // setPlayerTurn(playerTurn == player_X ? player_O : player_X);
    };

    const handleReset = () => {
        setGamestate(Gamestate.inProgress);
        setPlayerTurn(player_X);
        setStrikeClass('');
        setTiles(Array(9).fill(null));
    }

    useEffect(() => {
        handleCheckwinner(tiles, setStrikeClass);
    }, [tiles]);


    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board
                playerTurn={playerTurn}
                tiles={tiles}
                onTileclick={handleClick}
                strikeClass={strikeClass}
            />
            <GameOver gamestate={gamestate} />
            <Reset gamestate={gamestate} onReset={handleReset} />
        </div>
    )
}

export default TicTacToe
