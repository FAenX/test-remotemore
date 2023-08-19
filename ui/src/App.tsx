
import './App.css';
import { Provider } from 'react-redux'
import { CssBaseline, ThemeOptions, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './redux/store';
import {HomePage as Home} from './pages/home';
import {Track} from './pages/track';



export const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Provider store={store}>
              <CssBaseline />
              <Router>
                <Routes>
                  <Route path={"/"} element={<Home/>} />
                  <Route path={"/track"} element={<Track/>} />
                </Routes>
              </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
