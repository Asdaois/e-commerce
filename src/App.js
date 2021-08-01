import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.component";

const HatsPage = () => <div className="">HatsPage</div>;

function App() {
  return (
    <div className="font-open-condense">
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/hats"} component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
