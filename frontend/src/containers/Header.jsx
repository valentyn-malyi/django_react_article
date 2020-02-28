import React, {Component} from 'react';

class Header extends Component {
    render() {
        return <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#">Home</a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                </div>
            </div>
        </nav>
    }
}

export default Header;