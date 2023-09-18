import styled from "@emotion/styled";
import { useState } from "react"

const StyledUl = styled.ul`
    list-style: none;
    border: 1px solid ${props => props.theme.colors.default.a};
    position: absolute;
    background-color: ${props => props.theme.colors.white};
    padding: 0;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    margin: 0;
    border-top: none;
`

const StyledLi = styled.li`
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.default.a};
    padding: ${props => props.theme.spacing.xs} 0;
    cursor: pointer;
    &:last-child {
        border-bottom: none;
    }
    color: ${props => props.focoAtivo ? props.theme.colors.focus : 'inherit'};
    &:focus {
        border-color: ${props => props.theme.colors.focus};    
    }
`

const StyledLabel = styled.label`
    display:block;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    box-sizing: border-box;
    position: relative;
`

const StyledButton = styled.button`
    display:block;
    margin-top: ${props => props.theme.spacing.xs};
    border-radius: ${props => props.theme.spacing.s};
    border: 1px solid ${props => props.theme.colors.default.a};
    background-color: ${props => props.theme.colors.white};
    border-bottom-left-radius: ${props => props.estaAberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.estaAberta ? '0' : '18px'};
    box-sizing: border-box;
    font-weight: 400;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    padding: ${props => props.theme.spacing.s};

    &:focus {
        border-color: ${props => props.theme.colors.focus};
    }
`

export const DropdownList = ({ label, opcoes }) => {
    // estado da situacao atual da dropdownlist, se esta ativa ou nao. 
    const [estaAberta, alternarVisibilidade] = useState(false);

    // estado da opcao que esta em foco.
    const [opcaoOnFocus, setOpcaoOnFocus] = useState(null);

    // estado da opcao que foi selecionada.
    const [opcaoSelect, setOpcaoSelect] = useState(null);

    // a cada pressionada de key down, é aumentado um no valor de opcaoOnFocus com base no valor anterior, que está diretamente correlacionado com o valor do index de cada opção do menu dropdown. Ou seja, opcaoOnFocus servirá para manipular a opção atual em foco conforme a key down é pressionada. 
    const manipularTeclaDoTeclado = (e) => {
        alternarVisibilidade(true);
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setOpcaoOnFocus(focusAntigo => {
                    if (focusAntigo == null) {
                        return 0;
                    }

                    return focusAntigo += 1;

                })
                break;
            case 'ArrowUp':
                e.preventDefault()
                setOpcaoOnFocus(focusAntigo => {
                    if (!focusAntigo) {
                        return 0;
                    }

                    return focusAntigo -= 1;

                })
                break;
            case 'Enter':
                e.preventDefault()
                setOpcaoOnFocus(null)
                alternarVisibilidade(false)
                setOpcaoSelect(opcoes[opcaoOnFocus]);
                break;
            default:
                break;
        }
    }
    return (
        <StyledLabel>
            {label}
            <StyledButton
                estaAberta={estaAberta}
                onClick={() => alternarVisibilidade(!estaAberta)}
                onKeyDown={manipularTeclaDoTeclado}
            >
                <div>{opcaoSelect ? opcaoSelect.text : "Selecione"}</div>
                <div>
                    <span>{estaAberta ? '▲' : '▼'}</span>
                </div>
            </StyledButton>
            {estaAberta && <StyledUl>
                {opcoes.map((opcao, index) =>
                    <StyledLi
                        focoAtivo={index === opcaoOnFocus}
                        key={opcao.value}
                        onClick={() => setOpcaoSelect(opcao)}>
                        {opcao.text}
                    </StyledLi>)}
            </StyledUl>}
        </StyledLabel>
    )
}