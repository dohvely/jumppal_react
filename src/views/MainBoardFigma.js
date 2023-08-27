import axios from "axios";
import CommonUtil from '../js/common.util.js'
import { useState } from 'react/cjs/react.development'
import Slider from '@mui/material/Slider'
import '../assets/jumppal_figma.css'
import { useEffect } from "react";

const { Octokit } = require("@octokit/rest")

function MainBoardFigma() {
  const [commitCnt, commitTargetCnt] = useState(0)  // 커밋 수, 목표 커밋 수
  const commitPer = useState(0) // 커밋 진행률(%)
  const [todoText, setTodoText] = useState('') // 나의 To-do 텍스트

  let today = new Date()

  useEffect(() => {
    fetchRepos().then(response => {
      console.log(`here!!!`)
      console.log(response)
    })
  })

  const fetchRepos = async function() {

    const octokit = new Octokit({
      auth: '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'
    })
    await octokit.request('GET /orgs/{org}/repos', {
      org: 'CBNU-TUX'
    })

    // TODO: 최근 commit 리스트 조회
    /* const octokit = new Octokit({
      auth: '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'
    })
    return await octokit.request('GET /repos/{owner}/{repo}', {
      owner: 'dohvely',
      repo: 'jumppal_react',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }) */
    /* fetch(`https://api.github.repos/dohvely/jumppal_react/commits`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      },
      // body: {}
    }).then(response => response.json())
    .then(response => {
      console.log(`response ::: ${JSON.stringify(response)}`)
    }) */
  }

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
    <div className="v1_2">
      <div className="v1_7"></div>
      <div className="v1_12"></div>
        <span className="v1_13">10/100회</span><span className="v1_14">{CommonUtil.dateToMMDDKoreanFormat({ date: today })}</span>
        <span className="v1_16">
          <Slider
            defaultValue={30}
            sx={{
              width: 300,
              color: 'success.main'
            }}
          ></Slider>
        </span>
        {/* <span className="v1_18">2022.12.01</span> */}
        {/* <span className="v1_16">2022.12.31</span><span className="v1_18">2022.12.01</span> */}
        <span className="v1_19">최근 commit</span>
          <span className="v1_20">
            dfdfd
            fdfdfd
            d
          </span>
      <div className="v1_34">
        <div className="v1_35"></div>
      </div>
      <span className="v3_36">나의 To-do</span>
      <div className="v3_40">
        <div className="v3_41"></div>
      </div>
      <div className="v3_42"></div>
    </div>
  )

}

export default MainBoardFigma;