import React, { useEffect, useState } from "react";
import "./App.css";
import HTHeader from "./HTHeader/HTHeader";
import HTMain from "./HTMain/HTMain";
import HTCompany from "./HTCompany/HTCompany";
import HTHoneyStory from "./HTHoneyStory/HTHoneyStory";
import HTSweetNews from "./HTSweetNews/HTSweetNews";
import HTLink from "./HTLink/HTLink";
import HTFooter from "./HTFooter/HTFooter";

import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";

function App(): JSX.Element {
  $((): void => {
    ($("#fullpage") as any).fullpage({ scrollOverflow: true });
  });

  return (
    <div className="App">
      <header className="App-header">
        <HTHeader />
      </header>
      <div id="fullpage">
        <section className="section">
          <HTMain />
        </section>
        <section className="section">
          <HTCompany />
        </section>
        <section className="section">
          <HTHoneyStory />
        </section>
        <section className="section">
          <HTSweetNews />
        </section>
        <section className="section">
          <HTLink />
        </section>
      </div>
      <footer className="App-footer">
        <HTFooter />
      </footer>
    </div>
  );
}

export default App;
