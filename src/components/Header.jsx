import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler,NavLink, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props)
        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false
        }
    }
    toggleNav() {

        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }

    render() {
        return (
            <React.Fragment>
                <Navbar  dark expand="md">
                    <div className="container">
                        <div className="row">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>

                            <NavbarToggler onClick={this.toggleNav} />
                            <Collapse isOpen={!this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <Link to ="/"><NavItem className='nav-link' > home </NavItem></Link>
                                <Link to ="/menu"><NavItem className='nav-link' > menu </NavItem></Link>
                                <Link to ="/Contact"><NavItem className='nav-link' > contact </NavItem></Link>

                                {/* <NavItem className='nav-link' ><NavLink href="/menu"> <span>menu</span></NavLink>   </NavItem>
                                 <NavItem className='nav-link' ><NavLink href="/Contact"> <span>contact</span></NavLink>   </NavItem> */}

                                {/* <NavItem className='nav-link' href="/home/"> <span>home</span>  </NavItem>
                                <NavItem className='nav-link' to="/menu"> <span>home</span> </NavItem>
                                <NavItem className='nav-link' to="/home">  <span>home</span>  </NavItem> */}
                            </Nav>
                            </Collapse>
                        </div>
                    </div>


                </Navbar>


                {/* <NavLink href="/home"> <span>home</span></NavLink>  */}

                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;