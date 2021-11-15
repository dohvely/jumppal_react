import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch'


function App() {

  const { loading, data, error } = useFetch({ url: `http://125.132.213.115:8080/v1/user?userId=hooook` })

  console.log(`[App] data ::: ${JSON.stringify(data)}`)

  if(loading) { return <p>Loading...</p> }
  if(error) { return <p>Error!</p> }
  if(data) { return <p>data delivered</p> }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
