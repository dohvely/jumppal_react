import axios from "axios";
import { useState } from "react/cjs/react.development";

function GithubAuthCode({ location, history }) {

  const [boolLoading, setBoolLoading] = useState(true)

  const current = decodeURI(window.location.href);
  const search = current.split("?")[1];
  const params = new URLSearchParams(search);
  const code = params.get('code');

  if(code !== undefined && code !== null && code !== '') {

    axios.post(`http://192.168.0.16:8080/v1/user/code`, {
      clientId: 'd08f513121fec5be6203',
      clientSecret: 'eab141144e284db150b8583a20b55b17a51e037e',
      code
    })
    .then(function(response) {

      if(response !== undefined && response !== null
        && response.data !== undefined && response.data !== null
        && response.data.accessToken !== undefined && response.data.accessToken !== null) {

          sessionStorage.setItem('access_token', response.data.accessToken)
          setBoolLoading(false)

          // 목표설정 화면으로
          history.push('/target/save')
      }
      

    })
    .catch(function(error) {

      console.error(`axios post error ::: ${error}`)
      alert('알 수 없는 에러가 발생하였습니다. 다시 시도해주세요.')
    })
  }

  return (
    <div>
      {
        boolLoading ? <span>로딩중입니다.</span> : <span>인증코드 발급 되었습니다.</span>
      }
    </div>
  )
}

export default GithubAuthCode;