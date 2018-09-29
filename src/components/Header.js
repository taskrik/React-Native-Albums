import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.text}> Albums! </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: 'blue'
    },
    viewStyle: {
      paddingTop: 15,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
      width: '100%',
      height: 60,
      shadowColor: '#000',
      shadowOffset: {width: 0 , height: 2},
      shadowOpacity: 0.5

    }
})


export default Header
