import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
  }

  export const baseColors  = {
    mainBackground: '#FFFFFF',
    mainHeader: '#6997C9',
    subHeader: '#FFFFFF',
    subBackground: '#6997C9'
  }

  export const fonts = {
      subHeaderFontSize: 30,
  }

  export const padd = {
    listItem: 10,
}