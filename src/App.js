import {BrowserRouter as Router, Route} from 'react-router-dom'
import React from "react";
import HomePage from "./views/Home Page";
import News from "./views/News";
import AboutNews from "./views/About News";
import Signin from "./componets/Signin";


function App(){
  return (
    <div className='container mt-5'>
      <Router>
        <Route exact path='/'><HomePage/></Route>
        <Route  path='/news/'><News/></Route>
        <Route  path='/new/:id'><AboutNews/></Route>
        <Route  path='/signin'><Signin/></Route>

      </Router>
    </div>

  )

}
export default App;
