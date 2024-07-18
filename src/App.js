import React, {Component} from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Projects} />

          </main>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
