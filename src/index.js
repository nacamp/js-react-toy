import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {IntlProvider} from 'react-intl';
// eslint-disable-next-line import/extensions
import ko from './locale/ko.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
console.log('store:', store.getState());
ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="ko" messages={ko}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </IntlProvider>
    </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
