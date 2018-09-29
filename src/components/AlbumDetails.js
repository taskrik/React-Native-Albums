import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Card from './Card'
import CardSection from './CardSection';



export default class AlbumDetails extends Component {
  render() {
    return (
      <Card>
        <CardSection>
            <View></View>
            <View>
                <Text>{this.props.album.title}</Text>
                <Text>{this.props.album.artist}</Text>
            </View>
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})
