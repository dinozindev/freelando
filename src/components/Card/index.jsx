import styled from "@emotion/styled"

const StyledDiv = styled.div`
    padding: ${props => props.theme.spacing.l};
    border-radius: ${props => props.theme.spacing.s};
    border: 1px solid ${props => props.theme.colors.primary.a};
    background: ${props => props.theme.colors.secondary.a};
`

export const Card = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}