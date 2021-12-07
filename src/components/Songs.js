import React from "react";
import { Grid } from "semantic-ui-react";
import Song from "./Song";

class Songs extends React.Component {

    renderSongs = () => {
        return this.props.songs.map((song) => <Song {...song} deleteSong={this.props.deleteSong} addLike={this.props.addLike}/>)
    }

    render() {
        return (
            <div>
                <h3>Songs</h3>
                <Grid columns={4} divided>
                    {this.renderSongs()}
                </Grid>
            </div>
        )
    };
};

export default Songs;