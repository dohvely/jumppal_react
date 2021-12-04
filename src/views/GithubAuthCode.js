
function GithubAuthCode() {

  const current = decodeURI(window.location.href);
  const search = current.split("?")[1];
  const params = new URLSearchParams(search);
  const code = params.get('code');

  return <div>code ::: {code}</div>
}

export default GithubAuthCode;