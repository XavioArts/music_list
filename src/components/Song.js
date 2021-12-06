import React from "react";
import { Button, Grid, Header, Icon, Label } from "semantic-ui-react";

class Song extends React.Component {

    render() {
        return (
            <Grid.Row>
                <Grid.Column>
                    <Header as="h5">
                        <Icon name="music" />
                        <Header.Content>{this.props.name}</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">
                        <Icon name="user outline" />
                        <Header.Content>{this.props.artist}</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                    <Button as="div" labelPosition="right">
                        <Button color="blue">
                            <Icon name="heart" />
                            Likes 
                        </Button>
                        <Label as="a" basic color="blue" pointing="left">
                            {this.props.likes}
                        </Label>
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button color="red">Delete</Button>
                </Grid.Column>
            </Grid.Row>
        )
    }
}

export default Song;