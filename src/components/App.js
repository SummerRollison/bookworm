import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import ReadList from "./ReadList";
import WantList from "./WantList";
import HomeView from "./HomeView";
import GoalEdit from "./GoalEdit";
import CurrentChallenge from "./CurrentChallenge";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/read" component={ReadList} />
            <Route exact path="/want-to-read" component={WantList} />
            <Route exact path="/edit-goal" component={GoalEdit} />
            <Route
              exact
              path="/current-challenge"
              component={CurrentChallenge}
            />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
