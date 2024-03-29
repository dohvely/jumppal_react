import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
// import TargetSave from './views/TargetSave'
// import GithubAuthorize from './views/GithubAuthorize';
// import GithubAuthCode from './views/GithubAuthCode';
// import MainBoard from './views/MainBoard'
import GithubTargetSave from './views/GithubTargetSave';
import MainBoardFigma from './views/MainBoardFigma'


function App() {

  return (
    <BrowserRouter>
      {/* Github 인증 */}
      {/* <Route path="/github/auth" exact component={GithubAuthorize}></Route> */}
      {/* Github 인증 코드 수신 */}
      {/* <Route path="/github/auth/code" exact component={GithubAuthCode}></Route> */}
      {/* 목표 저장 */}
      {/* <Route path="/target/save" exact component={TargetSave}></Route> */}
      <Route path="/target/save" exact component={GithubTargetSave}></Route>
      {/* 메인 화면 */}
      <Route path="/" exact component={MainBoardFigma}></Route>
      {/* <Route path="/" exact component={MainBoard}></Route> */}
    </BrowserRouter>
  );
}

export default App;
