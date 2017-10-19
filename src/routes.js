import React from 'react';
import {Route, Router} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/footer';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <Header auth={auth} {...props}/>}/>
        <Route path="/" render={(props) => <Home auth={auth} {...props}/>}/>
        <Route
          path="/callback"
          render={(props) => {
          handleAuthentication(props);
          return <Callback {...props}/>
        }}/>
        <br/>
        <Footer/>
      </div>

    </Router>
  );
}
