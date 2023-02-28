import React from 'react'
import Abilities from '../Abilities/Abilities'
import { useDispatch } from 'react-redux'
import agentAction from '../../Actions/Agent'
import { Wrapper, Picture, Information, Location, Nick, Overflow } from './Character.style'

function Character(props) {
    let classList = 'character'
    const active = 'character-active'
    const PATH = '../src/assets/Characters/'
    const abilities = props.abilities
    const dispatch = useDispatch()

    const handleClick = (event) => {
        document.querySelector('.' + active)?.classList.remove(active)
        event.target.offsetParent.classList.add(active)
        showInformation(abilities)
    }

    const showInformation = (data) => {
        dispatch(agentAction([...data]))
    }

    if (props.active) {
        classList += ' ' + active
        showInformation(abilities)
    }
    
    return <Wrapper 
            layout
            onClick={ handleClick } 
            className={ classList }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, translateX: '100%' }}
            whileInView={{ transition: { delay: 1 + (props.delay ?? 0), duration: 0.5 }, opacity: 1, translateX: 0 }}
            >
        <Information>
            <Nick>{ props.nick }</Nick>
            <Location>{ props.location }</Location>
        </Information>
        <Overflow>
            <Picture src={ PATH + props.picture } alt={ props.picture } />
        </Overflow>
        <Abilities abilities={ abilities } />
    </Wrapper>
}

export default Character