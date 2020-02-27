import React, {Component} from 'react';
import '../../../assets/style.css'
import About04 from '../../../assets/uploads/about_04.jpg';

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/responsive.css';
import '../../../assets/css/custom.css';

export default class About extends Component{
	render(){
		return (
			<div id="about" className="section wb">
			       <div className="container">
			           <div className="row">
			               <div className="col-md-6">
			                   <div className="message-box">                        
			                       <h2>Welcome to OnNext</h2>
			                       <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
								<p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>

			                        <a href="#" className="sim-btn hvr-bounce-to-top"><span>Contact Us</span></a>
			                    </div>
			                </div>

			            <div className="col-md-6">
			                <div className="right-box-pro wow fadeIn">
			                    <img src={About04} alt="" className="img-fluid img-rounded" />
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}