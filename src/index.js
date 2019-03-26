import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// импортируем библиотеку redux и редьюсер, для этого сначала ставим через консоль redux:
// npm install --save redux
import {createStore} from 'redux';
import reducer from './store/reducer';
// импортируем компонент Provider, в который "обернем" все наше приложение, и передадим ему хранилище
// для этого в консоли нужно установить react-redux:
// npm install --save react-redux
import { Provider } from 'react-redux';

// создаем store - центральное хранилище данных для работы приложения
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
