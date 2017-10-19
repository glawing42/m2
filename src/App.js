import React, {Component} from 'react';
import Home from './Home/Home.js';
import Header from './Header/Header.js';
import Upload from './Upload/Upload.js';
import Footer from './Footer/footer';
import './App.css';

class App extends Component {

  render() {

    return (
      <div>

        <Header/>
        <br/>
        <Home/>
        <br />
        <Upload />
        <Footer/>
      </div>
    );
  }
}

export default App;
