import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyled from './style/GlobalStyle';
import { Provider } from 'react-redux';
import store from './store'; 
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyled />
            <App />
        </Provider>
    </React.StrictMode>

);
