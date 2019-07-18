import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts, baseColors, padd, dimensions } from '../../../styles/base';
import { SubHeader } from '../../SubHeader';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import  baseVocabulary from '../../../data/baseVocabulary.json';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Vocabulary extends React.Component {
     ShowHideCom(item) {
        if(item.show == false){
            return true;
        }
        else {
            return false;
        }
    };

    render(){
        return(
            <View>
            <SubHeader title="Podstawowe słownictwo"/>
            {baseVocabulary.map((item, index) => {
                return <View style={styles.textInListContainer} key={index}>
                <Text 
                style={styles.text2}>
                {item.fL}
                </Text>
                <Button 
                type='clear'
                icon={
                    <Icon
                    name="angle-down"
                    color="grey"
                    size={50}/>
                }
                onPress={() => item.show = !item.show}
                containerStyle={styles.btn}/>
                {
                    item.show ? (<Text style={styles.text}>{item.vocabulary.key} - {item.vocabulary.value}</Text>) : null
                }
             
                    </View>
            })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: baseColors.mainHeader,
        paddingLeft: 20
    },

    text2: {
        color: 'black',
        padding: 0,
        margin: 0,
        fontSize: 25,
    },

    textInListContainer:{
        borderBottomWidth: .5,
        borderBottomColor: 'black',
        padding: padd.listItem,
    },
    
    btn: {
        width: 80,
        position: 'absolute',
        left: dimensions.fullWidth - 80
    }
})