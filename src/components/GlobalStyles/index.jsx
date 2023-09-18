import { Global } from "@emotion/react"

const style = (theme) => {
 return {
    html: {
        fontFamily: theme.fontFamily
    },
    body: {
        margin: 0,
        padding: 0
    },
    button: {
        fontFamily: theme.fontFamily
    }
 }
}


export const Styles = () => {
    return (
        <Global styles={style}/>
    )
}