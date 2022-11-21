import '../assets/jumppal.css'


function GithubAuthorize() {

  const githubClientId = 'd08f513121fec5be6203'
  const githubCallbackUrl = 'http://localhost:3000/github/auth/code'
  const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubCallbackUrl}`

  return (
    <div className="frm">
      <ul className="ul_def">
        <li className="li_def">Github 연동하기</li>
        <li className="btn_wrap">
          <a href={githubLoginUrl}>인증하러가기</a>
        </li>
      </ul>
    </div>
  )
}

export default GithubAuthorize;