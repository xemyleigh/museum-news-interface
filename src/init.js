import App from './App';
import store from './slices/index';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';

export const init = () => {
    return (
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
  
    )
}