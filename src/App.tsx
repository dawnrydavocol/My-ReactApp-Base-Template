import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkScrollbar } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import { Provider } from 'react-redux';
import store from './hooks/redux/store';
import Dashboard from '@src-pages/DashBoard';

const theme = createTheme({
    palette: {
        background: {
            default: '#ffffff'
        },
        primary: {
            main: '#164D9A'
        },
        secondary: {
            main: '#9A6316'
        }
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    ...darkScrollbar({
                        track: blueGrey[100],
                        thumb: blueGrey[300],
                        active: blueGrey[20]
                    })
                }
            }
        }
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Provider store={store}>
                    <Dashboard></Dashboard>
                </Provider>
            </CssBaseline>
        </ThemeProvider>
    );
};

export default App;
