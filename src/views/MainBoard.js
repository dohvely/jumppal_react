import CommonUtil from '../js/common.util.js'
import Slider from '@mui/material/Slider'

function MainBoard() {

  let today = new Date()


  // 필요한 component들..
  // 1. gaugebar => slider? Customized sliders
  // 2. textarea
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
    </section>
  )

}

export default MainBoard;