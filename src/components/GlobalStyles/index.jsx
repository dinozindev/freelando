import { Global } from "@emotion/react"

const style = (theme) => {
 return {
    html: {
        fontFamily: theme.fontFamily
    },
    body: {
        margin: 0,
        padding: 0
    }
 }
}


export const Styles = () => {
    return (
        <Global styles={style}/>
    )
}