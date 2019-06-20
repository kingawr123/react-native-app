import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fonts, baseColors } from '../../../styles/base';
import { SubHeader } from '../../SubHeader';
import { listOfSubsInPrimarySchool } from '../PrimarySchoolList';


export class Vocabulary extends React.Component {
    render(){
        return(
            <View>
            <SubHeader title="Podstawowe słownictwo"/>
            <View>
                <Text>Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku.</Text>
            </View>
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     textCon: {
//         backgroundColor: 'red',
//     }
// })