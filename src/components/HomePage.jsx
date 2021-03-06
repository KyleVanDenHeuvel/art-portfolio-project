import React from "react";

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HomePage;
