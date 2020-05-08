import React from 'react'
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'
import { Link } from "react-router-dom"

const Nav = () => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Project Name
            </Menu.Item>
            <Menu.Item as='a'>
                <Link to="/">
                    Home
                </Link>
            </Menu.Item>
        </Container>
    </Menu>
)

export default Nav