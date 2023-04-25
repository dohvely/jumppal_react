import '../assets/jumppal.css'
import axios from 'axios'


async function getData() {
  const token = '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'
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.get('https://api.github.com/user', config)
    alert(response.status)
  } catch(error) {
    console.log(`[GithubAuthorize/getData] error 발생 ::: ${error.status}`)
    alert(`[GithubAuthorize/getData] error 발생 ::: ${error.status}`)
  }
}

async function getUser() {
  const token = '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'
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    
    let userName = 'dohvely'

    const response = await axios.get(`https://api.github.com/users/${userName}`, config)
    alert(response.data.email)
    console.log(`getUser ::: ${JSON.stringify(response)}`)

  } catch(error) {
    console.log(`[GithubAuthorize/getData] error 발생 ::: ${error.status}`)
    alert(`[GithubAuthorize/getData] error 발생 ::: ${error.status}`)
  }

}

async function testGithub() {
  const ghrepos = require("ghrepos");
  const authOptions = { use: "dohvely", token: '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' }
  // const authOptions = { use: "seojinseojin", token: process.env.PAT }

  await ghrepos.listUser(authOptions, "dohvely", (err, repolist) => {
      // console.log(repolist)
      repolist.forEach((repo) => {
        console.log(repo);
      })
  })
}

function GithubAuthorize() {

  const githubClientId = 'd08f513121fec5be6203'
  const githubCallbackUrl = 'http://localhost:3000/github/auth/code'
  const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubCallbackUrl}`

  return (
    <div className="frm">
      <ul className="ul_def">
        <li className="li_def">Github 연동하기</li>
        <li className="btn_wrap">
          <a href={githubLoginUrl}>인증하러가기</a><br/><br/>
          <button type="primary" onClick={getData}>인증테스트하기(getData)</button>
          <button type="primary" onClick={getUser}>인증테스트하기(getUser)</button>
          <button type="primary" onClick={testGithub}>인증테스트하기(testGithub)</button>
        </li>
      </ul>
    </div>
  )
}

export default GithubAuthorize;