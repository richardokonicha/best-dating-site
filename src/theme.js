import { createMuiTheme } from '@material-ui/core';

export const theme =  createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: "#E90D66"
        },
        text: {
            primary: "#ffffff",
            secondary: "#E90D66"
        }
    },
    typography: {
        fontWeight: "700",
    },

    overrides: {

        MuiTypography: {
            h4: {
              fontFamily: 'Segoe UI',
              fontSize: "40px",
              fontWeight: "700"
            },
            h6: {
                fontFamily: 'Segoe UI, Semibold',
                fontSize: "20px",
            }
        },

        MuiButton: {
            root: {
                height: "49px",
                borderRadius: "8px",
                padding: '3px'
            }
        },

        MuiCardHeader: {
            title: {
                fontFamily: 'Segoe UI, Semibold',
                fontSize: "30px",
                color: '#6E6D6D',
                paddingTop: '1rem'
            }
        }
    }
})