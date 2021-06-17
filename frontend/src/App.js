import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Register } from './Register'
import { Main } from './Main'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
