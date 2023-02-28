import React from 'react'
import Nav from '../Nav/Nav'
import Gallery from '../Gallery/Gallery'
import { Wrapper, Footer } from './Container.style'

function Container(props) {
    return <Wrapper 
            layout
            transition={{ duration: 0.75 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }} >
        <Nav />
        <Gallery />
        <Footer></Footer>
    </Wrapper>
}

export default Container