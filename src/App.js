import { thisExpression } from '@babel/types';
import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import './App.css';
import AppContainer from './components/AppContainer';
import SongForm from './components/SongForm';
import Songs from './components/Songs';
import { MainSeg } from './components/Styles';

class App extends React.Component {
  state = {
    songs: [
      { id:1, name: "Juice", artist: "Chance the Rapper", likes: 10 },
      { id:2, name: "EdEddnEddy", artist: "J.I.D.", likes: 20 },
      { id:3, name: "Circus Clown", artist: "Mom Jeans", likes: 30 },
      { id:4, name: "Jupiter", artist: "Matt Maltese", likes: 4837 },
      { id:5, name: "Traffic", artist: "Reggie", likes: 32801 },
      { id:6, name: "Charmander", artist: "Amine", likes: 94723 },
      { id:7, name: "Forest Fire", artist: "Delta Sleep", likes: 210 },
      { id:8, name: "Grateful", artist: "KOTA the Friend", likes: 12360 },
      { id:9, name: "Say It", artist: "Ebz the Artist", likes: 30070 },
    ]
  }

  addSong = (song) => {
    const newSongs = [...this.state.songs, song];
    this.setState({songs: newSongs});
  };

  deleteSong = (id) => {
    const filteredSongs = this.state.songs.filter((song) => song.id != id);
    this.setState({songs: filteredSongs});
  };

  editSong = (editedSong) => {
    const newSongs = this.state.songs.map((song) => song.id === editedSong.id ? editedSong : song );
    this.setState({songs: newSongs})
  }

  addLike = (id) => {
    let find = this.state.songs.find((song) => song.id === id)
    find.likes++
    const editedLikes = this.state.songs.map((song) => song.id != id ? song : find );
    this.setState({songs: editedLikes});
  }

  render() {
    return (
      <AppContainer>
        <Segment as={MainSeg}>
          <Header as="h1">Music List App</Header>
        </Segment>
        <Segment as={MainSeg}>
          <Songs songs={this.state.songs} deleteSong={this.deleteSong} addLike={this.addLike} editSong={this.editSong}/>
        </Segment>
        <Segment>
          <SongForm addSong={this.addSong} />
        </Segment>
      </AppContainer >
    );
  }
}

export default App;
