import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts, baseColors } from '../styles/base';

export class SubHeader extends React.Component {
    render(){
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.text}>{this.props.title}</Text>
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
        borderBottomColor: 'black',
        borderBottomWidth: .5
    },
})