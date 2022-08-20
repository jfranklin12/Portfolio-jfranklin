import '../App.css';
import React, { Component } from 'react';
import NameAnimation from './nameAnimation';
import background from '../images/background.jpg';

class Header extends Component {
render() {
	const myStyle={
		backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',

	};
	return (
    <div style={myStyle} className="header">
		<p id="myName"><NameAnimation /></p>
	</div>
	);
}
}


export default Header;