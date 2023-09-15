import { ThemeProvider } from "@emotion/react"


const theme = {
    colors: {
        white: '#fff',
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
            a: '#373737',
            b: '',
            c: '#f5f5f5',
            d: ''
        }
    },
    spacing: {
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px'
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}