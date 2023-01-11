import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from 'react-redux';
import store from './lib/store';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true
  }
}

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl", "xxl"],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1536, xxl: 2560 }
  },
  palette: {
    mode: 'light',
    background: {
      default: "#F5F5F5"
    },
    primary: {
      main: '#2F434C'
    },
    action: {
      disabled: '#7B748580',
      disabledBackground: '#4D7C8250',
    },
    text: {
      primary: "#444444",
      secondary: "#666666"
    },
    error: {
      main: '#AA0006'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: "'Catamaran', sans-serif",
    h1: {
      fontFamily: "'Rubik', sans-serif"
    },
    h2: {
      fontFamily: "'Rubik', sans-serif"
    },
    h3: {
      fontFamily: "'Rubik', sans-serif"
    },
    h4: {
      fontFamily: "'Rubik', sans-serif"
    },
    h5: {
      fontFamily: "'Rubik', sans-serif"
    },
    h6: {
      fontFamily: "'Rubik', sans-serif"
    },
  },
  zIndex: {
    appBar: 1500
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
