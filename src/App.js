import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from "react";
import HomePage from "./views/Home Page";
import News from "./views/News";
import AboutNews from "./views/About News";
import Signin from "./componets/Signin";
import SignUp from "./componets/SignUp";
import NotFound from "./views/NotFound";


function App(){
  return (
    <div className='container mt-5'>
      <Router>
        <Switch>
          <Route exact path='/'><HomePage/></Route>
          <Route exact path='/news/'><News/></Route>
          <Route path='/news/:id'><AboutNews/></Route>
          <Route  path='/signin'><Signin/></Route>
          <Route  path='/signup'><SignUp/></Route>
          <Route  path='*'><NotFound/></Route>
        </Switch>


      </Router>
    </div>

  )

}
export default App;
