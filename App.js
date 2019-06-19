import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HightSchoolList } from './components/HightSchoolList/HightSchoolList';
import { PrimarySchoolList } from './components/PrimarySchoolList/PrimarySchoolList';
import { Vocabulary } from './components/PrimarySchoolList/Subjects/Vocabulary';
import { baseColors, dimensions } from './styles/base';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imgContainer}>
      <Image 
      style={styles.img}
      source={require('./assets/eng-icon.png')}>
      </Image>
      </View>
        <Text style={styles.h1}>Angielski - Nauka Dla Każdego</Text>
        <Button
          containerStyle={styles.btnHomeSceen}
          title="SZKOŁA PODSTAWOWA"
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: baseColors.mainBackground,
  },

  headerContainer: {
    backgroundColor: baseColors.mainHeader
  },

  h1: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: baseColors.mainHeader,
  },

  btnHomeSceen: {
    width: 300,
    margin: 15,
  },

  btnTitle: {
    fontSize: 20
  },

  img: {
    height: 80,
    width: dimensions.fullWidth / 3,
    borderRadius: 10,
  },

  imgContainer: {
    position: 'absolute',
    top: dimensions.fullHeight / 8,
    left: dimensions.fullWidth / 3
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


