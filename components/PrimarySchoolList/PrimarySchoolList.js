import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { Button, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
// import { Vocabulary } from './Subjects/Vocabulary';

export class PrimarySchoolList extends React.Component {

    listOfSubsInPrimarySchool = [
        {
            title: 'Podstawowe słownictwo',
            key: 'item1',
            nav: 'Vocabulary',
            //przejście do konkretnej strony
        },
        {
            title: 'To be',
            key: 'item2',
            nav: 'Home',
        },
        {
            title: 'Can, have got',
            key: 'item3',
            nav: 'Home',
        }
    ]

    renderItem({ item }) {
        return <View style={styles.textInListContainer}><Button type="clear" titleStyle={styles.textInList} title={item.title} onPress={() => this.props.navigation.navigate(item.nav)} ></Button></View>
    }

    render() {
        return (
            <View>
            <Button onPress={() => this.props.navigation.navigate("Vocabulary")} title="title"></Button>
                <FlatList
                    data={this.listOfSubsInPrimarySchool}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInList: {
        fontSize: 20,
    },

    textInListContainer: {
        borderBottomWidth: .5,
        borderBottomColor: 'black',
        padding: 10
    }
});

export default withNavigation(PrimarySchoolList);
