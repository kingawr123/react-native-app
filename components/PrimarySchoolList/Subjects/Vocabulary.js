import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts, baseColors } from '../../../styles/base';

export class Vocabulary extends React.Component {
    render(){
        return(
            <View>
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Podstawowe Słownictwo</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: baseColors.subHeader,
        fontSize: fonts.subHeaderFontSize,
    },

    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: baseColors.subBackground,
        height: 80,
    }
})