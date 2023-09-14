import { ThemeProvider } from "@emotion/react"


const theme = {
    colors: {
        white: '',
        warning: '',
        focus: '',
        primary: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secondary: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
        },
        default: {
            a: '',
            b: '',
            c: '#f5f5f5',
            d: ''
        }
    },
    spacing: {
        s: '16px',
        m: '24px',
        l: '32px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}