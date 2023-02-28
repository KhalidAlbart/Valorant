import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper, Skill, Column, Level, Name, Icon, Desc } from './Description.style'

function Description(props) {
    const levels = ['Basic', 'Signature', 'Ultimate', 'Extra']
    const abilities = useSelector(state => state)
    const CLOSED = 'closed'

    const toggle = function(...args) {
        const index = args[0]
        const clickedElement = document.getElementsByClassName('skill')[index]

        if (clickedElement.classList.contains(CLOSED)) {
            let index = args[0] === 0 ? 3 : 0
            document.querySelector('.' + CLOSED).classList.remove(CLOSED)
            document.getElementsByClassName('skill')[index].classList.add(CLOSED)
        }
    }

    return <Wrapper>
        <SkillComponent 
            onClick={ toggle.bind(null, 0) } 
            level={ levels[0] } 
            icon={ abilities[0] } 
            delay={0.1} />
        <SkillComponent level={ levels[1] } icon={ abilities[1] } delay={0.2} />
        <SkillComponent level={ levels[2] } icon={ abilities[2] } delay={0.3} />
        <SkillComponent 
            default={ CLOSED } 
            onClick={ toggle.bind(null, 3) } 
            level={ levels[3] } 
            icon={ abilities[3] }
            delay={0.4} />
    </Wrapper>
}

function isChild(element) {
    const template = ['skill__name', 'skill__level', 'skill__desc', 'skill__icon']

    for(let _class of template) {
        if (element.classList.contains(_class)) {
            return true
        }
    }

    return false
}

function SkillComponent(props) {
    const handleClick = (event) => props.onClick ? props.onClick(event, this) : null

    return <Skill 
            layout
            onClick={ handleClick } 
            className={ props.default ?? '' }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, translateY: '100%' }}
            whileInView={{ transition: { delay: 1 + props.delay, duration: 0.5 }, opacity: 1, translateY: 0 }}>
        <Column>
            <Level>{ props.level }</Level>
            <Name>Slow orb</Name>
            <Desc>
                Cast out a radianite orb that <br/>
                breaks into a slowing field upon <br/>
                impact with the ground.
            </Desc>
        </Column>
        <Icon>
            <img className='icon__ability' src={ '../src/assets/Icons/'+ props.icon +'.png' } alt={ props.icon } />
            <img className='icon__red-block' src='../src/assets/red-block.png' alt='red-block' />
        </Icon>
    </Skill>
}

export default Description