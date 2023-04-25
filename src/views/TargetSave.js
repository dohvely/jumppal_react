import axios from "axios";
import { useState } from 'react/cjs/react.development'
import '../assets/jumppal.css'


function TargetSave({ location, history }) {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [commitCount, setCommitCount] = useState('')


  // 쩜팔 시작하기 버튼 클릭 이벤트
  const submit = () => {

    axios.put(`http://192.168.0.16:8080/v1/target`, {
      id: sessionStorage.getItem('access_token'),
      startDt: start,
      endDt: end,
      commitCnt: commitCount
    })
    .then(function(response) {

      if(response === undefined || response === null || response.status !== 200) {
        if(response.statusText !== '') {
          alert(response.statusText)
        } else {
          alert('저장에 실패하였습니다. 다시 시도해주세요.')
        }

        return false
      }

      history.push('/')

      /* if(response !== undefined && response !== null
        && response.data !== undefined && response.data !== null
        && response.data.accessToken !== undefined && response.data.accessToken !== null) {

      } */
      

    })
    .catch(function(error) {

      console.error(`axios post error ::: ${error}`)
      alert('[TargetSave] 알 수 없는 에러가 발생하였습니다. 다시 시도해주세요.')
    })
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
      
      <div className="btn_wrap">
        <button className="bottom_btn wp90 h55" onClick={submit}>저장</button>
      </div>
    </div>
  )
}

export default TargetSave;