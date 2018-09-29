import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Card from './Card'
export default class AlbumDetails extends Component {
  render() {
    return (
      <Card>
        <Text> {this.props.album.title} </Text>
      </Card>
    )
  }
}

const styles = StyleSheet.create({})
