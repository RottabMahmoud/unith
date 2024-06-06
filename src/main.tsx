import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); // Note: The non-null assertion operator (!) is used here to tell TypeScript that the container will not be null.

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
