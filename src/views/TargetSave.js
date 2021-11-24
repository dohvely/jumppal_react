import { useState } from 'react/cjs/react.development'
import '../assets/jumppal.css'


function TargetSave() {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  // 쩜팔 시작하기 버튼 클릭 이벤트
  const submit = () => {
    console.log('submit!!!')
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
          <input type="text" className="inp w140 h50" />
        </li>
      </ul>
      <ul className="ul_def">
        <li className="li_def">Github 계정 정보</li>
        <li>
          <input type="text" className="inp w310 h50" placeholder="아이디" /><br/>
          <input type="text" className="inp w310 h50" placeholder="비밀번호" />
        </li>
      </ul>
      
      <div className="btn_wrap">
        <button className="wp90 h55" onClick={submit}>쩜팔 시작하기</button>
      </div>
    </div>
  )
}

export default TargetSave;