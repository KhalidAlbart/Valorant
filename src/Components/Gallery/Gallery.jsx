import React, { useState } from 'react'
import Character from '../Character/Character'
import Description from '../Description/Description'
import { Wrapper } from './Gallery.style'

function Gallery(props) {
    return <Wrapper>
        <Character 
            active={ true }
            picture='PHOENIX.png'
            nick='PHOENIX'
            location='United Kingdom'
            abilities={ ['curveball', 'hothands', 'blaze', 'runitback'] }
            delay={0.1}
        />
        <Character 
            picture='JETT.png'
            nick='JETT'
            location='South Korea'
            abilities={ ['updraft', 'tailwind', 'cloudburst', 'bladestorm'] }
            delay={0.3}
        />
        <Character 
            picture='SOVA.png'
            nick='SOVA'
            location='Russia'
            abilities={ ['shockbolt', 'reconbolt', 'owldrone', 'huntersfury'] }
            delay={0.5}
        />
        <Character 
            picture='SAGE.png'
            nick='SAGE'
            location='China'
            abilities={ ['sloworb', 'healingorb', 'barrierorb', 'resurrection'] }
            delay={0.7}
        />
        <Description />
    </Wrapper>
}

export default Gallery