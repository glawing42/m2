import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import "./footer.css";

class Footer extends Component {
    
      render() {
        
        return (

				<footer>
					<div className="container">

						<div className="row">
							<div className="col-lg-3 col-sm-3 col-xs-5">										
							<a href="/contact">Contact us</a>
							</div>

							<div className="col-sm-3 col-lg-3 hidden-xs">
								
							<a href="mailto:m2graphicsllc@gmail.com">m2graphicsllc@gmail.com</a>
							</div>

							<div className="col-sm-3 col-lg-3 hidden-xs">
								<ul>
									<li className="visa"></li>
									<li className="mastercard"></li>
									<li className="paypal"></li>
								</ul>	
							
							</div>
							

							<div className="col-lg-3 col-sm-3 col-xs-5">
								<p>Connect with us! </p>
							<i className="fa fa-linkedin fa-3x" aria-hidden="true"></i>
							<SocialIcon url="https://www.facebook.com/m2graphicsllc/" />
							<SocialIcon url="https://www.instagram.com/m2_graphics/" />
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