import React, {Component} from 'react';
import '../../../assets/style.css'
import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/responsive.css';
import '../../../assets/css/custom.css';

export default class Navbar extends Component{
	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll-trigger" href="#page-top">
						<img className="img-fluid" src="images/logo.png" alt="" />
					</a>
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					Menu
					<i className="fa fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
					<ul className="navbar-nav text-uppercase ml-auto">
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger active" href="#home">Home</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#about">About Us</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#services">Services</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#blog">Blog</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#team">Our Team</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#pricing">Pricing</a>
						</li>
						<li className="nav-item">
						<a className="nav-link js-scroll-trigger" href="#contact">Contect Us</a>
						</li>
					</ul>
					</div>
				</div>
			</nav>
		)
	}
}