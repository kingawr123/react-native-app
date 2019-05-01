import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HightSchoolList } from './components/HightSchoolList/HightSchoolList';
import { PrimarySchoolList } from './components/PrimarySchoolList/PrimarySchoolList';
import { Vocabulary } from './components/PrimarySchoolList/Subjects/Vocabulary'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Angielski - Nauka Dla każdego</Text>
        <Button
          containerStyle={styles.btnHomeSceen}
          title="PODSTAWÓWKA"
          titleStyle={styles.btnTitle}
          type="outline"
          raised={true}
          onPress={() => this.props.navigation.navigate('PrimarySchoolList')} />

        <Button
          containerStyle={styles.btnHomeSceen}
          title="LIECEUM"
          titleStyle={styles.btnTitle}
          type="outline"
          raised={true}
          onPress={() => this.props.navigation.navigate('HightSchoolList')} />
      </View>
    );
  }
}

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
    width: 300,
    margin: 15,
  },

  btnTitle: {
    fontSize: 20
  }
});

const StackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  PrimarySchoolList: {
    screen: PrimarySchoolList,
  },
  Vocabulary: {
    screen: Vocabulary,
  },
  HightSchoolList: {
    screen: HightSchoolList
  },
},
  {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


