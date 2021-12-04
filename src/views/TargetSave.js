import { useState } from 'react/cjs/react.development'
import '../assets/jumppal.css'


function TargetSave() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [commitCount, setCommitCount] = useState('')


  // 쩜팔 시작하기 버튼 클릭 이벤트
  const submit = () => {
    // TODO: 
    console.log(`기간 ::: ${start} ~ ${end}`)
    console.log(`커밋 수 ::: ${commitCount}`)
  }

  // input change 이벤트
  const changeInputValue = (e, targetStateName) => {

    switch(targetStateName) {
      case 'start': {
        setStart(e.target.value)
        break
      }
      case 'end': {
        setEnd(e.target.value)
        break
      }
      case 'commitCount': {
        setCommitCount(e.target.value)
        break
      }
      default: {
        break
      }
    }
  }

  const githubClientId = 'd08f513121fec5be6203'
  const githubCallbackUrl = 'http://localhost:3000/githubauth'
  const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${githubClientId}&redirect_uri=${githubCallbackUrl}`

  return (
    <div className="frm">
      <ul className="ul_def">
        <li className="li_def">설정 기간</li>
        <li className="li_def">
          <input  type="text"
                  className="inp w140 h50"
                  placeholder="YYYYMMDD"
                  value={start}
                  onChange={(e) => { changeInputValue(e, 'start') }}
          /> ~
          <input  type="text"
                  className="inp w140 h50"
                  placeholder="YYYYMMDD"
                  value={end}
                  onChange={(e) => { changeInputValue(e, 'end') }}
          />
        </li>
      </ul>
      <ul className="ul_def">
        <li className="li_def">목표 commit수</li>
        <li>
          <input  type="text"
                  className="inp w140 h50"
                  placeholder="숫자만 입력"
                  value={commitCount}
                  onChange={(e) => { changeInputValue(e, 'commitCount') }}
          />
        </li>
      </ul>
      <ul className="ul_def">
        <li className="li_def">Github 연동하기</li>
        <li className="btn_wrap">
          {/* <button className="mini_btn wp50 h55" onClick={userAccessGithub}>인증하러가기</button> */}
          <a href={githubLoginUrl}>인증하러가기</a>
        </li>
      </ul>
      
      <div className="btn_wrap">
        <button className="bottom_btn wp90 h55" onClick={submit}>쩜팔 시작하기</button>
      </div>
    </div>
  )
}

export default TargetSave;