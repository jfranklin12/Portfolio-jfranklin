import '../App.css';
import React, { Component } from 'react';
import NameAnimation from './nameAnimation';

function Header() {
return (
<div className="header">
<h1 className="text-center" id="myName"><NameAnimation /></h1>
</div>
)
}

export default Header;