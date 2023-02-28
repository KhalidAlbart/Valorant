import React from 'react'
import { Wrapper, Avatar, UserName, Picture } from './User.style'

function User(props) {
    const picture = props.picture ?? Picture

    return <Wrapper>
        <Avatar src={picture} alt='avatar.png' />
        <UserName>UNEPICKID</UserName>
    </Wrapper>
}

export default User