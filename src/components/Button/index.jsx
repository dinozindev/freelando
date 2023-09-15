import styled from "@emotion/styled"

const StyledDefaultButton = styled.button`
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.5px;
    background-color: ${props => props.theme.colors.primary.b};
    box-sizing: border-box;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};    
    height: 40px; 
    border: none;
    outline: none;
    border-radius: ${props => props.theme.spacing.s};

    &:hover {
       background-color: ${props => props.theme.colors.dark.b};  
    }
    &:focus {
        border: 2px solid ${props => props.theme.colors.focus}; 
    }
`


const StyledTransparentButton = styled.button`
    color: ${props => props.theme.colors.primary.b};
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.5px;
    background-color: transparent;
    box-sizing: border-box;
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};    
    height: 40px; 
    border: 2px solid;
    border-color: ${props => props.theme.colors.primary.b};
    border-radius: ${props => props.theme.spacing.s};

    &:hover {
       border-color: ${props => props.theme.colors.dark.b};  
       color:  ${props => props.theme.colors.dark.b};
    }
    &:focus {
        outline-color: ${props => props.theme.colors.focus}; 
    }
`


export const Button = ({ children, variante }) => {
    if (variante === "transparente") {
        return (
            <StyledTransparentButton>
                {children}
            </StyledTransparentButton>
        )
    } else {
        return (
            <StyledDefaultButton>
                {children}
            </StyledDefaultButton>
        )
    }
    
   
}