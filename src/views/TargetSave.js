import '../assets/jumppal.css'

function TargetSave() {


  return (

    <div className="frm">
      <ul className="ul_def">
        <li className="li_def">설정 기간</li>
        <li className="li_def">
          <input type="text" className="inp w140 h50" placeholder="YYYYMMDD" /> ~
          <input type="text" className="inp w140 h50" placeholder="YYYYMMDD" />
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
        <button className="wp90 h55">쩜팔 시작하기</button>
      </div>
    </div>
  )

}

export default TargetSave;