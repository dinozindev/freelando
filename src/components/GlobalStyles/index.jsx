import { Global, css } from "@emotion/react"

const style = css`
    * {
        font-family: 'Montserrat', sans-serif;
    } 
`

export const Styles = () => {
    return (
        <Global styles={style}/>
    )
}