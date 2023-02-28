import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    padding-top: 4rem;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    justify-content: flex-end;
    width: 100%;
    translate: 2.5% 0;
    gap: 4rem;
    
    &::before {
        content: 'Agents';
        position: absolute;
        left: 6.8rem;
        writing-mode: vertical-lr;
        text-transform: uppercase;
        line-height: 6.8rem;
        font-size: 5.2rem;
        font-family: 'Druk Wide Bold';
        letter-spacing: 0.4rem;
        color: transparent;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color: white;
    }
`