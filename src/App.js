import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import ShowSearch from "./ui/features/ShowSearch";
import ShowDetails from "./ui/features/ShowDetails";

const getUsersURL = "http://jsonplaceholder.typicode.com/users";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/show/:id">
              <ShowDetails />
            </Route>
            <Route path="/">
              <ShowSearch />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
