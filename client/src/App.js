import { React, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/LoginScreen/loginScreen";
import Dashboard from "./pages/MainDashboard/mainDashboard";
import Arena from "./pages/Arena/arena";
import Tournament from "./pages/Tournament/tournament";
import axios from "axios";
import API from "./utils/API";
import UserContext from "./utils/UserContext";

function App() {
  // logged in user data that is linked to usercontext
  const [userState, setUserState] = useState({
    id: "",
    name: "",
    portrait: "",
    LobbyCode: "",
    participants: [],
    competitors: "",
    brawlers: ""
  });

  //function to update user context passed down as prop
  const updateContext = (LobbyCode, participants, brawlers) => {
    setUserState({
      ...userState,
      LobbyCode: LobbyCode,
      participants: participants,
      brawlers: brawlers
    })
  }
  // sets userState on login
  useEffect(() => {
    axios
      .get("/User")
      .then((res) => {
        if (res.data.id) {
          API.getUserByUserId(res.data.id)
            .then(res => {
              setUserState({
                ...userState,
                id: res.data._id,
                name: res.data.name,
                portrait: res.data.portrait,
              });
            });
        }
        else {
          return;
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
        <UserContext.Provider value={userState} id="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/dashboard" >
                <Dashboard updateContext={updateContext} />
              </Route>
              <Route path="/arena" component={Arena} />
              <Route path="/tournament" component={Tournament} />
            </Switch>
          </BrowserRouter>
        </UserContext.Provider>
  );
}

export default App;
