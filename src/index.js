import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const array = ['Выпить кофе','Выпить чаю','Сьесть печеньку']

const Header = () => (<h1>To do list2</h1>);

const Input = () => (<input placeholder='введи значение'></input>);

const List = () => (
    <ul>
      <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
    </ul>
  );  

const Apptest = () => {
  return(
    <div id='lol'>
      <Header />
      <Input />
      <List />
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);