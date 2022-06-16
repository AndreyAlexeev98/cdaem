import generalStyle from './App.module.css';
import Header from './components/shared/header/header.jsx';
import Main from './components/shared/main/main.jsx';
import state from './data/state.js'



function App() {
  return (
    <div className={generalStyle.container}>
      <Header state={state} />
      <Main />
    </div>
  );
}

export default App;
