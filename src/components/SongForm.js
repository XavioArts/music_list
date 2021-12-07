import { render } from "@testing-library/react";
import React from "react";
import { Button, Form } from "semantic-ui-react";

class SongForm extends React.Component {
    state = { name: "", artist: "", likes: 0, show: false };

    toggleShow = () => {
        this.setState({ show: !this.state.show});
    };

    componentDidMount() {
        console.log("mounted");
        if (this.props.id) {
            this.setState({
                name: this.props.name,
                artist: this.props.artist,
                likes: this.props.likes,
            });
        }
    }
    
    componentDidUpdate() {
        console.log("updated");
    };
    
    componentWillUnmount() {
        console.log("will unmount");
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        if (this.props.id) {
            let editedSong = {
                id: this.props.id,
                name: this.state.name,
                artist: this.state.artist,
                likes: this.state.likes,
            };
            this.props.editSong(editedSong);
            this.props.toggleShow();
        } else {
            let newId = Math.ceil(Math.random() * 1000000);
            this.props.addSong({
                id: newId,
                name: this.state.name,
                artist: this.state.artist,
                likes: this.state.likes,
            });
            this.setState({ name: "", artist: "", likes: 0 });
        }
    };

    render() {
        if (this.props.id) {
            return (
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Form.Input name="name" label="Song name:" value={this.state.name} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="artist" label="Song artist:" value={this.state.artist} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input type="integer" name="likes" label="Previous likes:" value={this.state.likes} onChange={this.handleChange} />
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            )
        } else {
            return (
                <div>
                <h2>Add a new song?</h2>
                <Button onClick={this.toggleShow}>
                    {this.state.show ? "Cancel" : "Add New"}
                </Button>
                {this.state.show && (
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Form.Input name="name" label="Song name:" value={this.state.name} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input name="artist" label="Song artist:" value={this.state.artist} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input type="integer" name="likes" label="Previous likes:" value={this.state.likes} onChange={this.handleChange} />
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </div>
        )
        }
    }
};

export default SongForm;