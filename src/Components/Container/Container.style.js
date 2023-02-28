import styled from 'styled-components'
import { Tint, BorderRadius } from '../../constants'
import Background from '../../assets/background.png'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.section)`
    position: relative;
    box-shadow: 0 0 10px 5px #1a1a1a;
    max-width: 888px;
    max-height: 572px;
    width: 100%;
    height: 100%;
    border-radius: ${ BorderRadius };
    background-color: ${ Tint.red };
    background-image: url(${ Background });
    background-size: cover;
    background-blend-mode: multiply;
    display: flex;
    flex-direction: column;
`

export const Footer = styled.footer`
    height: 2.25vw;
    background: white;
    border-bottom-left-radius: ${ BorderRadius };
    border-bottom-right-radius: ${ BorderRadius };
`