import "./App.css";

import React, {useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import LoadingBar from "react-top-loading-bar";

const App=()=> {
  const pageSize = 5;
  const apiKey=process.env.REACT_APP_NEWS_API

  const[progress,setProgress]=useState(0);
  

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Switch>
            <Route exact path="/business">
              <News setProgress={setProgress} apiKey={apiKey} 
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={setProgress} apiKey={apiKey}  
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News setProgress={setProgress} apiKey={apiKey}  
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News setProgress={setProgress} apiKey={apiKey}  
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={5} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={setProgress} apiKey={apiKey}  
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
}

export default App;