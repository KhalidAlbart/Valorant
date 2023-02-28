import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Tint } from '../../constants'

export const Wrapper = styled.div.attrs({ className: 'abilities' })`
    right: -7.5%;
    bottom: -2.5%;
    overflow: hidden;
    position: absolute;
    padding: 0.63rem 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    width: 100%;
    height: 3.7rem;
    max-height: 3.7rem;
    background: inherit;
    border: 0.65px solid white;
`

const animate = {
    whileHover: {
        transition: {
            duration: 0.1
        },
        scale: 1.5
    }
}

export const Ability = styled(motion.img).attrs(animate)`
    object-fit: contain;
    overflow: auto;
    mix-blend-mode: difference;
`