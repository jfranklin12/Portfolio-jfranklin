import '../../../App.css';
import './header.css';
import React, { Component } from 'react';
import NameAnimation from '../../nameAnimation/nameAnimation';
import background from '../../../images/background.jpg';

class Header extends Component {
render() {
	// background does not always fit whole page
	const myStyle={
		backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
		backgroundRepeat: 'repeat',
	};
	return (
    <div style={myStyle} className="header">
		<p id="myName"><NameAnimation /></p>
	</div>
	);
}
}


export default Header;