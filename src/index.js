import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store, persistor } from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'react-bootstrap';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate
        loading={
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
