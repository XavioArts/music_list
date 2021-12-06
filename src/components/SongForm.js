import { render } from "@testing-library/react";
import React from "react";
import { Button, Form } from "semantic-ui-react";

class SongForm extends React.Component {
    state = { name: "", artist: "", likes: 0, show: true };

    toggleShow = () => {
        this.setState({ show: !this.state.show});
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = () => {
        let id = Math.ceil(Math.random() * 1000000);
        this.props.addSong({
            id: id,
            name: this.state.name,
            artist: this.state.artist,
            likes: this.state.likes,
        });
        this.setState({ name: "", artist: "", likes: 0 });
    };

    render() {
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
                            <Form.Input name="likes" label="Previous likes:" value={this.state.likes} onChange={this.handleChange} />
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </div>
        )
    }
};

export default SongForm;