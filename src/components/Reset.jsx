import React from 'react'
import Gamestate from './GamneState'

const Reset = ({ gamestate, onReset }) => {
    if (gamestate === Gamestate.inProgress) { return; }
    return (
        <button className='reset-btn' onClick={onReset}>
            Reset
        </button>
    )
}

export default Reset
