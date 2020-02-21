import React, {Component} from 'react';
import Banner01 from '../../../assets/uploads/banner-01.jpg';
import '../../../assets/style.css'

export default class Home extends Component{
	render(){
		return (
			<div><nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
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
			<section id="home" className="main-banner parallaxie" style={{backgroundImage:`url(${Banner01})` }}>
				<div className="heading">
					<h1>Welcome to OnNext</h1>			
					<h3 className="cd-headline clip is-full-width">
						<span>Lorem Ipsum Dolor Sit Amet </span>
						<span className="cd-words-wrapper">
							<b className="is-visible">Web Developer</b>
							<b>Web Design</b>
							<b>Creative Design</b>
							<b>Graphic Design</b>
						</span>
						<div className="btn-ber">
							<a className="get_btn hvr-bounce-to-top" href="#">Get started</a>
							<a className="learn_btn hvr-bounce-to-top" href="#">Learn More</a>
						</div>
					</h3>
				</div>
			</section></div>
		)
	}
}