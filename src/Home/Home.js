import React, {Component} from 'react';
import "./Home.css";

class Home extends Component {

  render() {

    return (

      <div className="bg">
        <div className="jumbotron">
          <div className="row"></div>
        </div>
        <div className="col-lg-12">
          <div
            className="row products products-padding products-round margin-top-sm margin-bottom-sm">

            <a
              href="https://stickerapp.com/custom-stickers/popular/"
              className="col-xs-6 col-sm-6 col-md-4">
              <img src={require('../images/wraps.jpg')} alt="wraps"/>

              <h3 className="Wraps">Wraps</h3>
            </a>

            <a
              href="https://stickerapp.com/custom-stickers/popular/"
              className="col-xs-6 col-sm-6 col-md-4">
              <img src={require('../images/decals.jpg')} alt="Decals"/>

              <h3 className="Decals">Decals</h3>
            </a>

            <a
              href="https://stickerapp.com/materials/"
              className="col-xs-6 col-sm-6 col-md-4">
              <img src={require('../images/custom.jpg')} alt="Custom Desgin"/>

              <h3 className="Custom-Design">Custom Design</h3>
            </a>

          </div>
        </div>
      </div>

    );
  }
}

export default Home;