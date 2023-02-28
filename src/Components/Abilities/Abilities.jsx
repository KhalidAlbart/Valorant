import React from 'react'
import { Wrapper, Ability } from './Abilities.style'

const PATH = '../src/assets/icons/'
const icon = {
    curveball: PATH + 'curveball.png',
    hothands: PATH + 'hothands.png',
    blaze: PATH + 'blaze.png',
    runitback: PATH + 'runitback.png',
    updraft: PATH + 'updraft.png',
    tailwind: PATH + 'tailwind.png',
    cloudburst: PATH + 'cloudburst.png',
    bladestorm: PATH + 'bladestorm.png',
    shockbolt: PATH + 'shockbolt.png',
    reconbolt: PATH + 'reconbolt.png',
    owldrone: PATH + 'owldrone.png',
    huntersfury: PATH + 'huntersfury.png',
    sloworb: PATH + 'sloworb.png',
    healingorb: PATH + 'healingorb.png',
    barrierorb: PATH + 'barrierorb.png',
    resurrection: PATH + 'resurrection.png',
}

function Abilities(props) {
    const abilities = [...props.abilities]

    return <Wrapper>
        {
            abilities.map((ability) => <Ability 
                key={ 'icon-' + ability }
                src={ icon[`${ ability }`] } 
                alt={ ability } />
            )
        }
    </Wrapper>
}

export default Abilities