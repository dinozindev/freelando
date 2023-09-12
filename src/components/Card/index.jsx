import styled from "@emotion/styled"

const StyledDiv = styled.div`
    padding: 32px;
    border-radius: 16px;
    border: 1px solid #5754ED;
    background: #EBEAF9;
`

export const Card = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}