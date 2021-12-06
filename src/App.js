import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './App.css';
import SongForm from './components/SongForm';
import Songs from './components/Songs';

class App extends React.Component {
  state = {
    songs: [
      { id:1, name: "Juice", artist: "Chance the Rapper", likes: 10 },
      { id:2, name: "EdEddnEddy", artist: "J.I.D.", likes: 20 },
      { id:3, name: "Circus Clown", artist: "Mom Jeans", likes: 30 },
    ]
  }

  addSong = (song) => {
    const newSongs = [...this.state.songs, song];
    this.setState({songs: newSongs});
  };

  render() {
    return (
      <Container textAlign="center">
        <Header as="h1">Music List App</Header>
        <Songs songs={this.state.songs}/>
        <SongForm addSong={this.addSong} />
      </Container >
    );
  }
}

export default App;
