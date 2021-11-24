import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import TargetSave from './views/TargetSave'
import MainBoard from './views/MainBoard'


function App() {

  return (
    <HashRouter>
      {/* 목표 저장 */}
      <Route path="/target/save" exact component={TargetSave}></Route>
      {/* 메인 화면 */}
      <Route path="/" exact component={MainBoard}></Route>
    </HashRouter>
  );
}

export default App;
