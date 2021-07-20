import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from './App';


ReactDOM.render(
  <RecoilRoot>
    <HashRouter>
      <App />
    </HashRouter>
  </RecoilRoot>
  ,
  document.getElementById('root')
);

