import axios from "axios";
import CommonUtil from '../js/common.util.js'
import { useState } from 'react/cjs/react.development'
import Slider from '@mui/material/Slider'
import '../assets/jumppal_figma.css'

function MainBoardFigma() {
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
    <div class="v1_2"><div class="v1_7"></div><div class="v1_12"></div><span class="v1_13">10/100회</span><span class="v1_14">11/16</span><span class="v1_16">2022.12.31</span><span class="v1_18">2022.12.01</span><span class="v1_19">최근 commit</span><span class="v1_20">dfdfd
fdfdfd
d</span><div class="v1_34"><div class="v1_35"></div></div><span class="v3_36">나의 To-do</span><div class="v3_40"><div class="v3_41"></div></div><div class="v3_42"></div></div>
  )

}

export default MainBoardFigma;