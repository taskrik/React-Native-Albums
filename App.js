

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header } from './src/components/Header';
import AlbumsList from './src/components/AlbumsList';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Header />
        <AlbumsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

});
