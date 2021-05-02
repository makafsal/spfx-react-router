import React from 'react';
import Routes from "./Routes";
import { HashRouter as Router } from "react-router-dom";
import Layout from './Layout/Layout';

const App: React.FC<IProps> = (props: IProps) => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export interface IProps { }

export default App;