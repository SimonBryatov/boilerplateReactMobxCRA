import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ViewStore from "./stores/ViewStore"
import { Provider } from "mobx-react" 
import registerServiceWorker from './registerServiceWorker';

let viewStore = new ViewStore();

ReactDOM.render(<Provider ViewStore={viewStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
