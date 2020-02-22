import React, {Component} from 'react';
import Banner01 from '../../../assets/uploads/banner-01.jpg';
import '../../../assets/style.css'

export default class Home extends Component{
	render(){
		return (
			<div>
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