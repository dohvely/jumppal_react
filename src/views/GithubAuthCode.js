import axios from "axios";
import { useState } from "react/cjs/react.development";

function GithubAuthCode() {

  const [boolLoading, setBoolLoading] = useState(true)

  const current = decodeURI(window.location.href);
  const search = current.split("?")[1];
  const params = new URLSearchParams(search);
  const code = params.get('code');

  if(code !== undefined && code !== null && code !== '') {

    axios.post(`http://172.30.1.34:8080/v1/user/code`, {
      clientId: 'd08f513121fec5be6203',
      clientSecret: 'eab141144e284db150b8583a20b55b17a51e037e',
      code
    })
    .then(function(response) {
      
      //test
      console.log(`response ::: ${JSON.stringify(response)}`)

      if(response !== undefined && response !== null
        && response.data !== undefined && response.data !== null
        && response.data.accessToken !== undefined && response.data.accessToken !== null) {

          sessionStorage.setItem('access_token', response.data.accessToken)
          setBoolLoading(false)

          
      }
      

    })
    .catch(function(error) {

      console.error(`axios post error ::: ${error}`)
    })
  }


  //sample
  /* return (
    <div>
      {
        1 === 1
        ? <p>참이면 보여줄 HTML</p>
        : null
      }
    </div>
  ) */

  return (
    <div>
      {
        boolLoading ? <span>로딩중입니다.</span> : <span>인증코드 발급 되었습니다.</span>
      }
    </div>
  )
}

export default GithubAuthCode;