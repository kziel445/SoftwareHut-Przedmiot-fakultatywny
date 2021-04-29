import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Movie from './Views/movie/Movie';
import Home from './Views/home/Home';
import Page404 from './Views/page404/Page404';

import './App.css';


const App = () => {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/movie/:id" component={Movie}/>
            <Route path="/" component={Home} exact />
            <Route path="*" component={Page404}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
