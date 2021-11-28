import { useState } from 'react/cjs/react.development'
import '../assets/jumppal.css'


function TargetSave() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [commitCount, setCommitCount] = useState('')
  const [gitUserId, setGitUserId] = useState('')
  const [gitUserPwd, setGitUserPwd] = useState('')

  // 쩜팔 시작하기 버튼 클릭 이벤트
  const submit = () => {
    console.log(`기간 ::: ${start} ~ ${end}`)
    console.log(`커밋 수 ::: ${commitCount}`)
    console.log(`git계정 ::: ${gitUserId}, ${gitUserPwd}`)

  }

  // input change 이벤트
  const changeInputValue = (e, targetStateName) => {

    // console.log(`changeInputValue ::: ${targetStateName} => ${e.target.value}`)

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
      case 'gitUserId': {
        setGitUserId(e.target.value)
        break
      }
      case 'gitUserPwd': {
        setGitUserPwd(e.target.value)
        break
      }
    }
  }

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
        <li className="li_def">Github 계정 정보</li>
        <li>
          <input  type="text"
                  className="inp w310 h50"
                  placeholder="아이디"
                  value={gitUserId}
                  onChange={(e) => { changeInputValue(e, 'gitUserId') }}
          /><br/>
          <input  type="password"
                  className="inp w310 h50"
                  placeholder="비밀번호"
                  value={gitUserPwd}
                  onChange={(e) => { changeInputValue(e, 'gitUserPwd') }}
          />
        </li>
      </ul>
      
      <div className="btn_wrap">
        <button className="wp90 h55" onClick={submit}>쩜팔 시작하기</button>
      </div>
    </div>
  )
}

export default TargetSave;