import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts, baseColors } from '../../../styles/base';
import { SubHeader } from '../../SubHeader';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { padd } from '../../../styles/base'

export class Vocabulary extends React.Component {
    
    listOfVocabulary = [
        {
            value: 'eat',
            key: 'jeść'
        },
        {
            value: 'sleep',
            key: 'spać'
        }
    ]

    renderItem({ item }){
        return <View style={styles.textInListContainer}><Text style={styles.text}>{item.key} - {item.value}</Text></View>
    }

    render(){
        return(
            <View>
                <SubHeader title="Podstawowe słownictwo"/>
            <View>
            <FlatList
                data={this.listOfVocabulary}
                renderItem={this.renderItem.bind(this)}>
            </FlatList> 
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: baseColors.mainHeader
    },

    textInListContainer:{
        borderBottomWidth: .5,
        borderBottomColor: 'black',
        padding: padd.listItem,
    }
})