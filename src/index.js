import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import './globalStyle.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
