import axios from "axios";
import CommonUtil from '../js/common.util.js'
import { useState } from 'react/cjs/react.development'
import Slider from '@mui/material/Slider'

function MainBoard() {
  const [commitCnt, commitTargetCnt] = useState(0)  // 커밋 수, 목표 커밋 수
  const commitPer = useState(0) // 커밋 진행률(%)
  const [todoText, setTodoText] = useState('') // 나의 To-do 텍스트

  let today = new Date()

  // TODO: 최근 commit 리스트 조회

  // 나의 To-do 저장
  const saveTodoText = event => {

    setTodoText(event.target.value)

    // TODO : DB에 저장해야겠는데..

  }

  //test
  const submit = () => {


    /* let GitHub = require('github-api')
    let noAuth = new GitHub()

    let dohvely = noAuth.getUser('dohvely')
    dohvely.listStarredRepos(function(err, repos) {
      console.log(`repos ::: ${JSON.stringify(repos)}`)
    }) */


    // sample1
    /* axios.get(`https://api.github.com/repos/dohvely/jumppal_react/commits`, {
      id: sessionStorage.getItem('access_token'),
    })
    .then(function(response) {

      //test
      console.log(`response ::: ${JSON.stringify(response)}`)

      if(response === undefined || response === null || response.status !== 200) {
        if(response.statusText !== '') {
          alert(response.statusText)
        } else {
          alert('저장에 실패하였습니다. 다시 시도해주세요.')
        }

        return false
      }
    })
    .catch(function(error) {

      console.error(`axios post error ::: ${error}`)
      alert('알 수 없는 에러가 발생하였습니다. 다시 시도해주세요.')
    }) */
  }


  // 필요한 component들..
  // 1. gaugebar => slider? Customized sliders
  return (
    <section>
      <div className="main_box_wrap">
        <div className="box">{CommonUtil.dateToMMDDKoreanFormat({ date: today })}</div>
        <div className="box">10/<span>100회</span></div>
      </div>
      <Slider
        defaultValue={30}
        sx={{
          width: 300,
          color: 'success.main'
        }}
      ></Slider>
      <div className="main_box_wrap">
        <ul>
          <li>
            <span>최근 commit.</span>
          </li>
          <li>
            <span>리스트..</span>
          </li>
        </ul>
      </div>
      <div className="main_box_wrap">
        <ul>
          <li>
            <span>나의 To-do.</span>
          </li>
          <li>
            <textarea placeholder="To-do를 입력하세요." value={todoText} onChange={saveTodoText} />
          </li>
        </ul>
      </div>
      {/* //test */}
      <button className="bottom_btn wp90 h55" onClick={submit}>저장</button>
    </section>
  )

}

export default MainBoard;