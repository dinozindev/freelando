import styled from "@emotion/styled"
import { Logo } from "../Logo"
import { Col, Container, Row } from "react-grid-system"
import { Tipografia } from "../Tipografia"
import { IconeInstagram } from "../Icones/IconeInstagram"
import { IconeTwitch } from "../Icones/IconeTwitch"
import { IconeTwitter } from "../Icones/IconeTwitter"
import { IconeWhatsApp } from "../Icones/IconeWhatsApp"

const StyledFooter = styled.footer`
    background: ${props => props.theme.colors.primary.a};
    padding: ${props => props.theme.spacing.xl};
    color: ${props => props.theme.colors.white};
`

const StyledList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; 
`

const StyledListItem = styled.li`
    display: inline-block;
`

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <Row align="center">
                <Col>
                <Logo />
                <Tipografia componente="subtitle" variante="subtitle">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
                </Col>
                <Col style={{textAlign: 'right'}}>
                <Tipografia componente="subtitle" variante="subtitle">Acesse nossas redes:</Tipografia>
                <StyledList style={{textAlign: 'right'}}>
                    <StyledListItem>
                        <a href="/">
                            <IconeInstagram />
                        </a>
                    </StyledListItem>
                    <StyledListItem>
                        <a href="/">
                            <IconeTwitch />
                        </a> 
                    </StyledListItem>
                    <StyledListItem>
                        <a href="/">
                            <IconeTwitter />
                        </a> 
                    </StyledListItem>
                    <StyledListItem>
                        <a href="/">
                            <IconeWhatsApp />
                        </a>
                    </StyledListItem>
                </StyledList>
                </Col>
            </Row>
            </Container>
        </StyledFooter>
    )
}