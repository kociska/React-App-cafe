import { createTheme } from '@mui/material/styles';
import { Typography, useTheme } from '@mui/material';


const theme = createTheme ({
    palette: {
        primary: {
            main:'#8C6872',
            blushPink: '#D9BAC9',
            stone: '#D9D8D7',
            choco: '#8C5946',
            coffee: '#592C22',
        },
        secondary: {
           main: '#D9BAC9'
        },  
        
        tabText: {
            main: '#D9D8D7'
        },

        footer: {
            main: '#592C22',
            contrastText: '#D9D8D7',

        }
    },
    typography: {

        fontFamily: '"Roboto", sans-serif',

        logo: {
            fontFamily: '"Josefin Sans", sans-serif',
            fontWeight: 700,
            letterSpacing: 2,
        },


        h4: {
            fontSize: '2rem',
            fontWeight: '600',
            color: 'grey[400]',
        },

        h6: {
            color: 'white',
            
        },

        h3: {
            fontSize: '3rem'
        }
    }
});


export default theme;
