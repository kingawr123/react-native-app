import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts } from '../../../styles/base';

export class Vocabulary extends React.Component {
    render(){
        return(
            <View>
                <Text style={styles.Text}>Tu będzie ten temat</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Text: {
        color: 'blue',
        fontSize: fonts.subHeaderFontSize
    }
})