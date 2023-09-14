import styled from "@emotion/styled"
import { Logo } from "../Logo"

const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.primary.a};
    padding: ${props => props.theme.spacing.m} 120px;
    display:flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.default.c};
        font-size: 20px;
    }
`

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <a href="/">Login</a>
        </StyledHeader>
    )
} 