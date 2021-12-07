import React from "react";
import { Button, Grid, Header, Icon, Label } from "semantic-ui-react";

class Song extends React.Component {

    render() {
        const {name, artist, likes, deleteSong, addLike, id} = this.props;

        return (
            <Grid.Row>
                <Grid.Column>
                    <Header as="h5">
                        <Icon name="music" />
                        <Header.Content>{name}</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">
                        <Icon name="user outline" />
                        <Header.Content>{artist}</Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                    <Button as="div" labelPosition="right">
                        <Button color="blue" onClick={()=>addLike(id)}>
                            <Icon name="heart" />
                            Likes 
                        </Button>
                        <Label as="a" basic color="blue" pointing="left">
                            {likes}
                        </Label>
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Button color="red" onClick={()=>deleteSong(id)}>Delete</Button>
                </Grid.Column>
            </Grid.Row>
        )
    };
};

export default Song;