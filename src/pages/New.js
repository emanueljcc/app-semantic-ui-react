import React, { useState } from 'react'
import {
    Container,
    Grid,
    Input,
    Button,
    Header,
    Message
} from "semantic-ui-react"
import axios from "axios"

const New = () => {
    const [ready, setReady] = useState(false);
    const [state, setState] = useState({
        title: "",
        body: "",
        userId: 1
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json; charset=UTF-8' },
                data: state,
                url,
            };
            const lol = await axios(options);
            setReady(true)
            console.log(lol)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container text style={{ marginTop: '7em' }}>
            <Header as='h1'>Form</Header>
            <Grid columns='equal'>
                <Grid.Column>
                    <Input placeholder='title...' name="title" id="title" onChange={handleChange} />
                </Grid.Column>
                <Grid.Column>
                    <Input placeholder='body...' name="body" id="body" onChange={handleChange} />
                </Grid.Column>
            </Grid>
            <Button primary onClick={handleSubmit}>Primary</Button>

            {ready && <Message positive>
                <Message.Header>Saved completed</Message.Header>
            </Message>}
        </Container>
    )
}

export default New;
