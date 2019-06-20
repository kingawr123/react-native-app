import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { padd } from '../../styles/base';

export class HightSchoolList extends React.Component {

  listOfSubsInHightSchool = [
    {
        title: 'Present Perfect',
        key: 'item1',
        nav: 'Vocabulary',
    },
    {
        title: 'Present Perfect Continous',
        key: 'item2',
        nav: 'Home',
    },
    {
        title: 'Past Perfect',
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

            <FlatList
                data={this.listOfSubsInHightSchool}
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
    padding: padd.listItem,
}
});

export default withNavigation(HightSchoolList);
  

  