import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import FirstRegist from './views/FirstRegist'
import MainBoard from './views/MainBoard'


function App() {

  return (
    <HashRouter>
      {/* 최초 등록 scene */}
      <Route path="/first" exact component={FirstRegist}></Route>
      {/* 메인 화면 */}
      <Route path="/" exact component={MainBoard}></Route>
    </HashRouter>
  );
}

export default App;
