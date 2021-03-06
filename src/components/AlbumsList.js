import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import axios from 'axios'
import AlbumDetails from './AlbumDetails';



export default class AlbumsList extends Component {
  
state = { albums:[] }

  componentWillMount(){
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}))
  }

  renderAlbums(){
     return  this.state.albums.map(album => <AlbumDetails key={album.title} album={album}/>)
  }

    render() {
        console.log(this.state);
        
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    
})