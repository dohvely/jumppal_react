import { useState } from 'react'
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

// console 오류 발생.
/* async function testGithub() {
  const ghrepos = require("ghrepos");
  // 2023.05.01 생성 tokens(notes : jummpal_react
  const authOptions = { use: "dohvely", token: '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' }
  // const authOptions = { use: "dohvely", token: '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' }

  await ghrepos.listUser(authOptions, "dohvely", (err, repolist) => {
      repolist.forEach((repo) => {
        console.log(repo);
      })
  })
} */

function GithubTargetSave({ location, history }) {

  const [userName, setUserName] = useState(() => localStorageGetter('userName'))
  const [repoName, setRepoName] = useState(() => localStorageGetter('repoName'))
  const [targetCommitCount, setTargetCommitCount] = useState(() => localStorageGetter('targetCommitCount'))
  const [targetStartDate, setTargetStartDate] = useState(() => localStorageGetter('targetStartDate'))
  const [targetEndDate, setTargetEndDate] = useState(() => localStorageGetter('targetEndDate'))
  const [enterUserName, setEnterUserName] = useState('')
  const [enterRepoName, setEnterRepoName] = useState('')

  function localStorageGetter(key) {
    console.log(`localStorageGetter ::: ${key}`)

    if(key) {
      return localStorage.getItem(key) ?? ''
    } else {
      return ''
    }
  }

  const onChangeEnterUserName = (e) => {
    setEnterUserName(e.target.value ?? '')
  }
  const onChangeEnterRepoName = (e) => {
    setEnterRepoName(e.target.value ?? '')
  }
  const saveGithubUserInfo = () => {

    if(!enterUserName || !enterRepoName) {
      alert('사용자명 또는 repository명을 입력해주세요.')
      return false
    }

    localStorage.setItem('userName', enterUserName)
    localStorage.setItem('repoName', enterRepoName)
    setUserName(enterUserName)
    setRepoName(enterRepoName)
  }

  const changeTargetDate = (e, type) => {
    if(!type) {
      alert('알 수 없는 오류가 발생되었습니다. 개발자에게 문의하세요.')
      return false
    }

    if(type === 'start') {
      setTargetStartDate(e.target.value ?? '')
    } else if(type === 'end') {
      setTargetEndDate(e.target.value ?? '')
    }
  }

  const onChangeTargetCommitCount = (e) => {
    setTargetCommitCount(e.target.value ?? 0)
  }

  const saveGithubTarget = (e) => {

    if(!targetCommitCount || targetCommitCount === '') {
      alert('목표 커밋 수를 입력해주세요.')
      return false
    }
    if(!targetStartDate || !targetEndDate || targetStartDate === '' || targetEndDate == '') {
      alert('목표 설정기간을 입력해주세요.')
      return false
    }

    localStorage.setItem('targetStartDate', targetStartDate)
    localStorage.setItem('targetEndDate', targetEndDate)
    localStorage.setItem('targetCommitCount', targetCommitCount)

    history.push('/')
  }



  // const githubClientId = 'd08f513121fec5be6203'
  // const githubCallbackUrl = 'http://localhost:3000/github/auth/code'
  // const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubCallbackUrl}`

  return (
    <div className="frm">
      <ul className="ul_def">
        <li className="li_def">Jummpal 시작하기</li>
      </ul>
      {!userName && !repoName && 
        <ul className="ul_def">
          <li>
            Github 사용자명 : <input type="text" onChange={onChangeEnterUserName} /><br/>
            Github repository명 : <input type="text" onChange={onChangeEnterRepoName} /><br/>
          </li>
          <li className="btn_wrap">
            <br/>
            <button type="primary" onClick={saveGithubUserInfo}>저장하기</button>
          </li>
        </ul>
      }
      {userName && repoName && 
        <ul className="ul_def">
          <li>
            목표를 설정하자!
          </li>
          <li>
            설정 기간 :
            <input  type="text"
                    className="inp w140 h50"
                    placeholder="YYYYMMDD"
                    onChange={(e) => { changeTargetDate(e, 'start') }}
            /> ~
            <input  type="text"
                    className="inp w140 h50"
                    placeholder="YYYYMMDD"
                    onChange={(e) => { changeTargetDate(e, 'end') }}
            />
          </li>
          <li>
            커밋 목표 : <input type="number" onChange={onChangeTargetCommitCount} /><br/>
          </li>
          <li className="btn_wrap">
            <br/>
            <button type="primary" onClick={saveGithubTarget}>목표 저장하기</button>
          </li>
        </ul>
      }
    </div>
  )
}

export default GithubTargetSave;