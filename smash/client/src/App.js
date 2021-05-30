import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginScreen/loginScreen";
import Dashboard from "./pages/MainDashboard/mainDashboard";
import axios from "axios";
import API from "./utils/API";
import UserContext from "./utils/UserContext";

function App() {

  const [userState, setUserState] = useState({
    id: "",
    name: "",
    portrait: "",
    // invites: [],
    // loggedIn: false,
  });

  useEffect(() => {
    axios
      .get("/User")
      .then((res) => {
        console.log("first res", res);
        console.log(res.data.id, "------------------------------------------------------------------");
        if (res.data.id) {
        API.getUserByUserId(res.data.id)
          .then(res => {
            console.log("in api then")
            setUserState({
              ...userState,
              id: res.data._id,
              name: res.data.name,
              portrait: res.data.portrait,
            });
            console.log(res, "second res");
          });
        }
        else{
          return;
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={userState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
