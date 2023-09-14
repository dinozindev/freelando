import styled from "@emotion/styled"

// qual a tag html.
const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodybold: 'strong',
    body2: 'p',
    body2bold: 'strong',
    subtitle: 'p',
    subtitle2: 'p'
}

// estilos a serem aplicados na tag html desejada. 
const estilos = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
    `,
    h2: `
        font-size: 32px;
        font-weight: 600;
        line-height: 39px;
    `,
    h3: `
        font-size: 24px;
        font-weight: 500;
        line-height: 29px;
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
    `,
    bodybold: `
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    `,
    body2: `
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    `,
    body2bold: `
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    `,
    subtitle: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    `,
    subtitle2: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-decoration: underline;
    `
}

// componente responsável por receber props relacionadas a tag html e os estilos que serão aplicados nela, imprimindo um ComponenteEstilizado com essas características. 
export const Tipografia = ({ variante, componente, children }) => {
    // atribui a const tag o valor da propriedade que corresponde ao componente informado via props (ex: componente="body" --> body: 'p')
    const tag = componentes[componente];
    //  cria um componente estilizado com base no componente presente no array de componentes.
    const ComponenteEstilizado = styled[tag]`
        // usa os estilos correspondentes a variante informada. 
        ${estilos[variante]}
    `
    return (
        <ComponenteEstilizado>
            {children}
        </ComponenteEstilizado>

    )
}