import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Tint } from '../../constants'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: fit-content;
    gap: 2.6rem;
    position: absolute;
    bottom: -3%;
    left: -7.5%;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
    gap: 1rem;
`

export const Skill = styled(motion.div).attrs({ className: 'skill' })`
    position: relative;
    padding-left: 1.6rem;
    padding-right: 3.9rem;
    background-color: ${ Tint.white };
    max-height: 8.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1.3rem;
    border: 1px solid black;
    border-top-left-radius: 1.25rem;

    &.closed {
        padding: 0 3.3rem;
        align-items: center;

        &:before {
            content: '▼';
            rotate: -90deg;
            color: black;
            font-size: 0.65rem;
        }

        * {
            display: none;
        }
    }
`

export const Level = styled.span.attrs({ className: 'skill__level' })`
    font-size: 1.3rem;
    font-family: 'Druk Wide Bold';
    text-transform: uppercase;
    color: #C4C4C4;
`

export const Name = styled.h3.attrs({ className: 'skill__name' })`
    font-size: 0.8rem;
    font-family: 'Druk Wide Bold';
    color: black;
    margin: 0;
    line-height: normal;
`

export const Desc = styled.p.attrs({ className: 'skill__desc' })`
    font-size: 0.5rem;
    text-align: left;
    color: #1F2326;
    margin: 0;
    line-height: normal;
    letter-spacing: 0.1rem;
`

export const Icon = styled.div.attrs({ className: 'skill__icon' })`
    position: relative;
    max-width: 6rem;

    .icon__red-block {
        object-fit: contain;
        max-width: 100%;
        height: auto;
    }

    .icon__ability {
        position: absolute;
        top: -25%;
        right: -25%;
        object-fit: contain;
        max-width: 100%;
        height: auto;
        filter: invert(1);
    }
`