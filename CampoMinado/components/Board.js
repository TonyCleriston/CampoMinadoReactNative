import * as React from 'react';
import { Text, View } from 'react-native';
import { createBoard } from '../utils/createBoard';
import { gameReducer } from '../reducers/gameReducer';
import Cell from './Cell';
const BOARD_SIZE = 10;
const BOMBS_NUM = 10;

export default function Board() {
    const [gameState, dispatch] = React.useReducer(gameReducer, {
        board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMBS_NUM),
        isGameOver: false,
    })

    function handlePress(row,col) {
        dispatch({ type: 'HANDLE_CELL', row,col})
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 32, fontWeight: '800',marginBottom: 20,color: 'white', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>{gameState.isGameOver ? 'Você Perdeu!' : 'Campo Minado'}</Text>
            {gameState.board.map((row, rowIndex) => (
                <View key={rowIndex} style={{ flexDirection: 'row', }}>
                    {row.map((cell, cellIndex) => (
        
                        <Cell key={cellIndex} handlePress={handlePress} {...cell} />
                
                    ))}
                </View>
            ))}
        </View>
    )
}
