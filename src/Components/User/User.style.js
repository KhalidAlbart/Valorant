import styled from 'styled-components'
import * as Template from '../Nav/Nav.style'
import Picture from '../../assets/avatar.png'

export { Picture }

export const UserName = styled(Template.SelectLink)``

export const Wrapper = styled(Template.Wrapper)`
    gap: 0.6rem;
`
export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 1.4rem;
    max-height: 1.4rem;
`
