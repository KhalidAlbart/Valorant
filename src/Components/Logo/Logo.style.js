import styled from 'styled-components'
import BigLogo from '../../assets/logo-full.png'
import SmallLogo from '../../assets/logo.png'

export {
    BigLogo,
    SmallLogo,
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
        max-width: 100%;
        max-height: 1.3rem;
        cursor: pointer;
    }
`

export const Sepparator = styled.span`
    font-size: 1.25rem;
    font-weight: lighter;
    color: white;
`