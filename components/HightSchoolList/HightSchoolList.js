import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import { Button, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export class HightSchoolList extends React.Component {
    render() {
      return (
        <View>
          <Text>Tu będzie lista tematów</Text>
        </View>
      );
    }
  }