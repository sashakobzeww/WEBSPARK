import React, {Component} from 'react'
import './Header.css'
import logo from "./img/logo.jpg"

class Header extends Component {
    render() {
        return (
            <div className="left">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

export default Header

