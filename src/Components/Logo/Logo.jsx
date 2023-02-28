import React from 'react'
import {Wrapper, BigLogo, SmallLogo, Sepparator } from './Logo.style'

function Logo(props) {
    return <Wrapper>
        <img src={BigLogo} alt="BigLogo" />
        <Sepparator>|</Sepparator>
        <img src={SmallLogo} alt="SmallLogo" />
    </Wrapper>
}

export default Logo