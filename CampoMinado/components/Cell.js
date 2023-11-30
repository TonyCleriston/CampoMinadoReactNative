import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Cell({ row, col, isBomb, value, isFlipped, handlePress }) {
    const isEvenRow = row % 2 === 0;
    const isEvenCol = col % 2 === 0;
    
    const backgroundColor = !isFlipped ? (isEvenRow ? (isEvenCol ? 'rgb(167, 217, 72)' : 'rgb(142, 204, 57)') : (isEvenCol ? 'rgb(142, 204, 57)' : 'rgb(167, 217, 72)')) : 'transparent';
    const backgroundColorFlipped = isFlipped ? (isEvenRow ? (isEvenCol ? 'rgb(229, 194, 159)' : 'rgb(215, 184, 153)') : (isEvenCol ? 'rgb(229, 194, 159)' : 'rgb(215, 184, 153)')) : 'transparent';

    return (
        <TouchableOpacity onPress={() => handlePress(row, col)} style={[styles.container, {backgroundColor: isFlipped ? backgroundColorFlipped : backgroundColor}]}>
            <Text style={styles.text}>{isFlipped && (isBomb ? '💣' : (value !== 0 ? value : ''))}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        height: 45,
        width: 45,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
