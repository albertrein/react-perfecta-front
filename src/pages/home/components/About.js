import React, {Component} from 'react';
import Banner01 from '../../../assets/uploads/banner-01.jpg';
import '../../../assets/style.css'

export default class About extends Component{
	render(){
		return (
			<div id="about" class="section wb">
			       <div class="container">
			           <div class="row">
			               <div class="col-md-6">
			                   <div class="message-box">                        
			                       <h2>Welcome to OnNext</h2>
			                       <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
								<p>Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo.</p>

			                        <a href="#" class="sim-btn hvr-bounce-to-top"><span>Contact Us</span></a>
			                    </div>
			                </div>

			            <div class="col-md-6">
			                <div class="right-box-pro wow fadeIn">
			                    <img src="uploads/about_04.jpg" alt="" class="img-fluid img-rounded">
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		)
	}
}