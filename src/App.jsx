import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <main>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    </main>
  );
}

export default App;
