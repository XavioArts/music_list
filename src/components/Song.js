import React from "react";
import { Button, ButtonContent, Grid, Header, Icon, Label } from "semantic-ui-react";
import SongForm from "./SongForm";
import { Ptext } from "./Styles";

class Song extends React.Component {

    state = { show: false };

    toggleShow = () => {
        this.setState({ show: !this.state.show});
    };

    render() {
        const {name, artist, likes, deleteSong, addLike, id, editSong} = this.props;

        return (
            <>
            <Grid.Row>
                <Grid.Column>
                    <Header as="h5">
                        <Icon inverted name="music" />
                        <Header.Content>
                            <Ptext>
                                {name}
                            </Ptext>
                        </Header.Content>
                    </Header>
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4">
                        <Icon inverted name="user outline" />
                        <Header.Content>
                        <Ptext>
                            {artist}
                        </Ptext>
                        </Header.Content>
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
                    <Button.Group>
                        <Button color='grey' onClick={()=>deleteSong(id)}>Delete</Button>
                        <Button.Or />
                        <Button basic color='grey' onClick={this.toggleShow}>Edit</Button>
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>
            {this.state.show && (
                <div style={{display:"flex", alignItems: "center", justifyContent: "center", margin: "auto"}}>
                    <Grid.Row>
                        <SongForm id={id} name={name} artist={artist} likes={likes} toggleShow={this.toggleShow} editSong={editSong}/>
                    </Grid.Row>
                </div>
            )}
            </>
        )
    };
};

export default Song;