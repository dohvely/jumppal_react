import axios from "axios";
import CommonUtil from '../js/common.util.js'
import { useState } from 'react/cjs/react.development'
import Slider from '@mui/material/Slider'
import '../assets/jumppal_figma.css'
import { useEffect } from "react";

const { Octokit } = require("@octokit/rest")

function MainBoardFigma() {
  const commitPer = useState(0) // 커밋 진행률(%)
  const [todoText, setTodoText] = useState('') // 나의 To-do 텍스트

  const targetCommitCount = localStorage.getItem('targetCommitCount')
  const targetStartDate = localStorage.getItem('targetStartDate')
  const targetEndDate = localStorage.getItem('targetEndDate')
  const [githubCommitList, setGithubCommitList] = useState([])
  const [githubCommitCount, setGithubCommitCount] = useState(0)
  let today = new Date()

  useEffect(() => {
    fetchRepos().then(commitList => {
      setGithubCommitList(commitList)

      // TODO: githubCommitCount set state.

    })
  })

  const fetchRepos = async function() {

    const token = localStorage.getItem('token')

    if(!token || token === '') {
      alert('Github 토큰 정보가 없어 조회할 수 있는 데이터가 없습니다.')
    }

    // 최근 commit 리스트 조회
    const octokit = new Octokit({
      auth: token
    })
    let response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: localStorage.getItem('userName'),
      repo: localStorage.getItem('repoName'),
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    if(response.status === 200) {

      // response.data 가공하여 return
      const commitList = response.data.map(item => {
        return {
          date: item.commit.committer.date,
          message: item.commit.message,
        }
      })

      return commitList

    } else {
      alert('Github 데이터 조회 오류 발생')
      return false
    }
  }

  // 나의 To-do 저장
  const saveTodoText = event => {

    setTodoText(event.target.value)

    // TODO : DB에 저장해야겠는데..

  }

  // formatter 처리한 날짜 return하는 함수
  const dateStringWithFormat = function(yyyy = today.getFullYear(), mm = today.getMonth()+1, dd = today.getDate()) {
    return `${yyyy}년 ${mm}월 ${dd}일`
  }


  // 필요한 component들..
  // 1. gaugebar => slider? Customized sliders
  return (
    <div className="v1_2">
      <div className="v1_7"></div>
      <div className="v1_12"></div>
        <span className="v1_13">{githubCommitCount}/{targetCommitCount}회</span>
        <span className="v1_14">{CommonUtil.dateToMMDDKoreanFormat({ date: today })}</span>
        <span className="v1_15">
          {dateStringWithFormat(targetStartDate.substring(0,4), targetStartDate.substring(4,6), targetStartDate.substring(6))} ~ 
          {dateStringWithFormat(targetEndDate.substring(0,4), targetEndDate.substring(4,6), targetEndDate.substring(6))}
        </span>
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