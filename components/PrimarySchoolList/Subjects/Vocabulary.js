import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts, baseColors } from '../../../styles/base';
import { SubHeader } from '../../SubHeader';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { padd } from '../../../styles/base';
import  baseVocabulary from '../../../data/baseVocabulary.json'

export class Vocabulary extends React.Component {

    render(){
        return(
            <View>
            <SubHeader title="Podstawowe słownictwo"/>
            {baseVocabulary.map((vocabulary, index) => {
                return <View style={styles.textInListContainer} key={index}><Text style={styles.text}>{vocabulary.key} - {vocabulary.value}</Text></View>
            })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: baseColors.mainHeader
    },

    textInListContainer:{
        borderBottomWidth: .5,
        borderBottomColor: 'black',
        padding: padd.listItem,
    }
})