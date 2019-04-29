import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { Button, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2979FF',
  },

  btnHomeSceen: {
    width: 180,
    margin: 10
  },

  textInList:{
    fontSize: 20,
  },

  textInListContainer:{
  borderBottomWidth: .5,
  borderBottomColor: 'black',
  padding: 10
  }
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Angielski - Nauka Dla każdego</Text>
        <Button
          containerStyle={styles.btnHomeSceen}
          title="PODSTAWÓWKA"
          type={"outline"}
          raised={true}
          onPress={() => this.props.navigation.navigate('PrimarySchoolList')} />

        <Button
          containerStyle={styles.btnHomeSceen}
          title="LIECEUM"
          type={"outline"}
          raised={true}
          onPress={() => this.props.navigation.navigate('HightSchoolList')} />
      </View>
    );
  }
}

class PrimarySchoolList extends React.Component {
  render() {
    return (
      <View>
      <FlatList 
      data={[
        {
          title: 'Podstawowe słownictwo',
          key: 'item1'
        },
        {
          title: 'Odmiana przez osoby',
          key: 'item2'
        }
      ]}
      renderItem={({item}) => 
      <View style={styles.textInListContainer}>
        <Button type="clear" titleStyle={styles.textInList} title={item.title}></Button>
      </View>
    }
      />
      </View>
    );
  }
}

class HightSchoolList extends React.Component {
  render() {
    return (
      <View>
        <Text>Tu będzie lista tematów</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  PrimarySchoolList: {
    screen: PrimarySchoolList,
  },
  HightSchoolList: {
    screen: HightSchoolList
  },
}, {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator);


