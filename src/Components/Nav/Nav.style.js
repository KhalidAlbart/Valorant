import styled from 'styled-components'
import { Tint, BorderRadius } from '../../constants'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: fit-content;
    padding: 1.53rem 2.43rem;
    background: ${ Tint.gray };
    border-top-left-radius: ${ BorderRadius };
    border-top-right-radius: ${ BorderRadius };
`

export const Wrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.17rem;
`

export const Link = styled.a`
    font-size: 0.47rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    cursor: pointer;
`

export const SelectLink = styled(Link)`
    position: relative;

    &:after {
        content: '\u25bc';
        top: 0;
        right: 0;
        font-size: 0.2rem;
        position: absolute;
        display: block;
        translate: 0.6rem 75%;
    }
`