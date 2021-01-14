import './App.css';
import Main from './Component/Main/Main.js'
// import {Route, Router} from 'react-router-dom'
import LandingPage from './Component/LandingPage/LandingPage';
// import { useState, useEffect } from 'react';

function App() {
  // const [hasError, setErrors] = useState(false);
  // const [data, setData] = useState({})
 

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch( "https://www.themealdb.com/api/json/v1/1/categories.php");
  //     res
  //       .json()
  //       .then(res => setData(res))
  //       .catch(err => setErrors(err));
  //   }

  //   fetchData();
  // });

  
  return (
    <div className="App">
      
       {/* <div>
      <span>{JSON.stringify(data)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div> */}
    <Main/>
    <LandingPage/>
    {/* <Route path='/' component={LandingPage}/> */}
    {/* {JSON.stringify(data)} */}
    </div>
  );
  
}

export default App;
