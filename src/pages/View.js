import React, { useState, useEffect } from 'react'
import {
    Container,
    Grid,
    Card,
    Image,
    Icon,
    Button
} from "semantic-ui-react"
import Axios from 'axios';
import { Link } from "react-router-dom"

export default function View(props) {
    const { match: { params: { id } } } = props;
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setData(response.data);
        })();
    }, [id]);

    return (
        <Container text style={{ marginTop: '7em' }}>
            <Link to="/">
                <Button>Go Back</Button>
            </Link>
            {data &&
            <Grid centered columns={2}>
                <Grid.Column>
                    <Card>
                        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{data.title}</Card.Header>
                            <Card.Meta>Joined in 2016</Card.Meta>
                            <Card.Description>
                                {data.body}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            10 Friends
                        </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>}
        </Container>
    )
}
