import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TargetSave from './views/TargetSave'
import GithubAuthCode from './views/GithubAuthCode';
import MainBoard from './views/MainBoard'


function App() {

  return (
    <BrowserRouter>
      {/* 목표 저장 */}
      <Route path="/target/save" exact component={TargetSave}></Route>
      {/* Github 인증 코드 수신 */}
      <Route path="/githubauth" exact component={GithubAuthCode}></Route>
      {/* 메인 화면 */}
      <Route path="/" exact component={MainBoard}></Route>
    </BrowserRouter>
  );
}

export default App;
