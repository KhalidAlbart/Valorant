import React from 'react'
import Logo from '../Logo/Logo'
import User from '../User/User'
import * as Styles from './Nav.style'

function Nav(props) {
    return <Styles.Nav id='nav'>
        <Styles.Wrapper>
            <Logo />
            <Styles.Link>Game</Styles.Link>
            <Styles.Link>Champions</Styles.Link>
            <Styles.SelectLink>News</Styles.SelectLink>
            <Styles.Link>Patch Notes</Styles.Link>
            <Styles.SelectLink>Discover</Styles.SelectLink>
            <Styles.Link>Esports</Styles.Link>
            <Styles.Link>Universe</Styles.Link>
            <Styles.Link>Shop</Styles.Link>
            <Styles.Link>Support</Styles.Link>
        </Styles.Wrapper>
        <User />
    </Styles.Nav>
}

export default Nav