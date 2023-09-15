import { ThemeProvider } from "@emotion/react"


const theme = {
    colors: {
        white: '#fff',
        warning: '',
        focus: '#b009ff',
        primary: {
            a: '#5754ED',
            b: '#d93114',
            c: ''
        },
        secondary: {
            a: '#f8f8fd',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '#b61b00',
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