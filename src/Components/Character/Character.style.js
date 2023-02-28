import styled, { css } from 'styled-components'
import { motion } from "framer-motion"
import { Tint } from '../../constants'

const fontMixin = css`
    font-family: 'Druk Wide Bold';
    writing-mode: vertical-lr;
    letter-spacing: 0.2rem;
`

export const Picture = styled.img`
    object-fit: cover;
    max-height: 100%;
    scale: 1.4;
    translate: 0 15%;
`

export const Information = styled.div`
    top: 1.3rem;
    left: -10%;
    position: absolute;
    display: flex;
    z-index: 100;
`

export const Location = styled.span`
    color: ${ Tint.red };
    font-size: 0.8rem;
    font-family: 'Druk Wide Bold';
    ${ fontMixin }
`

export const Nick = styled.h2`
    margin: 0;
    font-size: 2.4rem;
    color: transparent;
    line-height: 3.1rem;
    text-transform: uppercase;
    -webkit-text-stroke-width: 0.3px;
    -webkit-text-stroke-color: white;
    transition: 0.2 -webkit-text-stroke-color ease-in;
    ${ fontMixin }
`

export const Overflow = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Wrapper = styled(motion.div)`
    border-top-left-radius: 1rem;
    position: relative;
    max-width: 14.7rem;
    max-height: 33rem;
    width: 14.7rem;
    height: 33rem;
    background: ${ Tint.gray };
    z-index: 90;
    transition: 0.2s background ease-in;

    &.character-active {
        background: ${ Tint.white };

        ${ Nick } {
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: ${ Tint.gray }
        }
    }
`
