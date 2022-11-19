import App from './App';
import store from './slices/index';
import { Provider } from 'react-redux';

export const init = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
  
    )
}