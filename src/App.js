import React, { useState, useEffect } from 'react'
import {
    Container,
    Grid,
    Table,
    Button,
    Icon
} from 'semantic-ui-react'
import { Link } from "react-router-dom"
import axios from "axios"

const FixedMenuLayout = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {

        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const { data } = response;
            setDataList(data);
        })();

    }, [])

    return (
        <>
            <Container text style={{ marginTop: '7em' }}>
                <Grid columns='equal'>
                    <Grid.Column>
                        <Link to="/new">
                            <Button basic color='green' floated="right">
                                New
                            </Button>
                        </Link>
                        <br />
                        {dataList &&
                            <Table celled>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>ID</Table.HeaderCell>
                                        <Table.HeaderCell>USER ID</Table.HeaderCell>
                                        <Table.HeaderCell>TITLE</Table.HeaderCell>
                                        <Table.HeaderCell>BODY</Table.HeaderCell>
                                        <Table.HeaderCell>ACTION</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {dataList.map(item => (
                                        <Table.Row key={item.id}>
                                            <Table.Cell>{item.id}</Table.Cell>
                                            <Table.Cell>{item.userId}</Table.Cell>
                                            <Table.Cell>{item.title}</Table.Cell>
                                            <Table.Cell>{item.body}</Table.Cell>
                                            <Table.Cell>
                                                <Link to={`/${item.id}`}>
                                                    <Button icon>
                                                        <Icon name='angle right' />
                                                    </Button>
                                                </Link>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        }


                    </Grid.Column>
                </Grid>
            </Container>
        </>
    )
}

export default FixedMenuLayout;