import React from "react";
import { Grid } from "semantic-ui-react";
import Song from "./Song";

class Songs extends React.Component {

    renderSongs = () => {
        const {deleteSong, addLike, editSong} = this.props;
        return this.props.songs.map((song) => <Song {...song} deleteSong={deleteSong} addLike={addLike} editSong={editSong}/>)
    }

    render() {
        return (
            <div>
                <Grid columns={4} divided>
                    {this.renderSongs()}
                </Grid>
            </div>
        )
    };
};

export default Songs;