import React    from 'react'
import { Link } from 'gatsby'
import logo     from '../img/logo-inverse-668x68.png';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      activeClass: 'top',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
        {
          active: !this.state.active,
        },
        // after state has been updated,
        () => {
          // set the class in state for the navbar accordingly
          this.state.active
              ? this.setState({
                navBarActiveClass: 'is-active',
              })
              : this.setState({
                navBarActiveClass: '',
              })
        }
    )
  }

  scrollListener = () => {
    const activeClass = (window.scrollY < 5) ? 'top' : 'normal';
    this.setState({ activeClass });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    return (
        <nav
            className={`navbar is-fixed-top ${this.state.activeClass}`}
            role="navigation"
            aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={logo} alt="" />
              </Link>
              {/* Hamburger menu */}
              <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-end">
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/products">
                  Babysitters
                </Link>
                <Link className={`navbar-item ${this.state.navBarActiveClass}`} to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar
