import styled from "@emotion/styled"
import logo from "./LogoLight.svg";


const StyledLogo = styled.img`

`

export const Logo = () => {
    return (
        <StyledLogo src={logo} alt="logo freelando"/>
    )   
}