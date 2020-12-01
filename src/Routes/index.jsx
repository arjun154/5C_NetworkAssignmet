import React from "react";
import { Switch, Route } from "react-router-dom";
import InputBox from "../Components/InputBox";
import RepoDetails from "../Components/RepoDetails";
import Followers from "../Components/Followers";
import RepoList from "../Components/RepoList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={InputBox} />
      <Route path="/repo/:username" exact component={RepoList} />
      <Route path="/repoDetails/:repo" exact component={RepoDetails} />
      <Route path="/followers/:username" exact component={Followers} />
    </Switch>
  );
};

export default Routes;
