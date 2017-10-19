import React, { Component } from 'react';

import "./footer.css";

class Footer extends Component {
    
      render() {
        
        return (

				<footer>
					<div className="container">

						<div className="row">
							<div className="col-lg-4 col-sm-4 col-xs-5">										
							<a href="/contact">Contact us</a>
							</div>

							<div className="col-sm-4 col-lg-4 hidden-xs">
								
							<a href="mailto:m2graphicsllc@gmail.com">m2graphicsllc@gmail.com</a>
							</div>
							

							<div className="col-lg-3 col-sm-3 col-xs-5">
								<p>Connect with us! </p>
							<i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
							<a className="social" href="https://www.facebook.com/m2graphicsllc/" target="_blank">Facebook</a>
							<a className="social" href="https://www.instagram.com/m2_graphics/" target="_blank">Instagram</a>
						</div>
						</div>


						<div className="text-center margin-top-sm">
							<small><b>© 2017 Graham Lawing</b></small>
						</div>
					</div>
				</footer>


				);
			}
		}


export default Footer;