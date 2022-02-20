import CommonUtil from '../js/common.util.js'
import { useState } from 'react/cjs/react.development'
import Slider from '@mui/material/Slider'

function MainBoard() {
  const [commitCnt, commitTargetCnt] = useState(0)  // 커밋 수, 목표 커밋 수
  const commitPer = useState(0) // 커밋 진행률(%)
  const todoText = useState('') // 나의 To-do 텍스트

  let today = new Date()

  // TODO: 최근 commit 리스트 조회
  // TODO : 나의 To-do 저장
  const saveTodoText = (todoText) => {
    console.log('저장하자')
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
            <textarea value={todoText} onChange={saveTodoText}></textarea>
          </li>
        </ul>
      </div>
    </section>
  )

}

export default MainBoard;