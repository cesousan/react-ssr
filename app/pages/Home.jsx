import React from "react";
import { Helmet } from "react-helmet-async";
import Page from "../components/Page";

const Home = () => (
  <Page>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <div>
      Follow me <a href="">somewhere</a> :)
    </div>
  </Page>
);
export default Home;
