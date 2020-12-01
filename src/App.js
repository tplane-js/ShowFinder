import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import "./App.css";
import ShowSearch from "./ui/features/ShowSearch";
import ShowDetails from "./ui/features/ShowDetails";

const getUsersURL = "http://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    // setIsLoading(true);
    // get(getUsersURL)
    //   .then(({ data }) => {
    //     //task said to hardcode data to be 'ordered by Name descending '
    //     const sortedData = orderBy(data, ["name"], "desc");
    //     setUsers(sortedData);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //     console.error(err);
    //   });
  };

  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/show/:id">
              <ShowDetails
                isLoading={isLoading}
                users={users}
                getUsers={getUsers}
              />
            </Route>
            <Route path="/">
              <ShowSearch isLoading={isLoading} users={users} getUsers={getUsers} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;