import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Board} from './Tic-Tac-toe';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Board />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
