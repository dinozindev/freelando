import styled from "@emotion/styled"

const StyledLabel = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
`

const StyledInput = styled.input`
    display:block;
    width: 100%;
    box-sizing: border-box;
    margin-top: ${props => props.theme.spacing.xs};
    background: ${props => props.theme.colors.white};
    border: 1px solid;
    border-color: ${props => props.theme.colors.default.a};
    border-radius: ${props => props.theme.spacing.s};
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
`

export const InputText = ({label}) => {
    return (
        <StyledLabel>
            {label}
            <StyledInput />
        </StyledLabel>
    )
}