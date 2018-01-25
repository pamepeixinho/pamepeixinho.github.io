import React from 'react';
import { render } from 'react-snapshot';
import { IntlProvider } from 'react-intl';

import './globalStyle.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
