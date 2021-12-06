import React from "react";
import { Grid } from "semantic-ui-react";

class Song extends React.Component {

    render() {
        return (
            <Grid.Row>
                <Grid.Column>
                    <p>{this.props.name}</p>
                </Grid.Column>
                <Grid.Column>
                    <p>{this.props.artist}</p>
                </Grid.Column>
                <Grid.Column>
                    <p>{this.props.likes}</p>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Song;