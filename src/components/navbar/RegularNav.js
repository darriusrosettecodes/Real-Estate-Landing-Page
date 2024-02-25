import React from 'react'
import Logo from '../../images/logo.png'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
    }

    const styles = {
        display: !menuOpen ? 'none' : ''
    }

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen((prevState) => !prevState)
      }
    };

    return(
        <nav>
          <img src={Logo} alt='logo'/>

          <ul className='regular-nav'>
            <li><a  onClick={() => scrollToSection('residencies')}>Residencies</a></li>
            <li><a  onClick={() => scrollToSection('value')}>Our Value</a></li>
            <li><a  onClick={() => scrollToSection('contact')}>Contact Us</a></li>
            <li><a  onClick={() => scrollToSection('get-started')}>Get Started</a></li>
            <li><button>Contact</button></li>
          </ul>

          <i class={menuOpen ? "fa-solid fa-xmark menu-bars" : "fa-solid fa-bars menu-bars"} onClick={toggleMenu}></i>

          <ul style={styles} className='menu-nav'>
          <li><a  onClick={() => scrollToSection('residencies')}>Residencies</a></li>
            <li><a  onClick={() => scrollToSection('value')}>Our Value</a></li>
            <li><a  onClick={() => scrollToSection('contact')}>Contact Us</a></li>
            <li><a  onClick={() => scrollToSection('get-started')}>Get Started</a></li>
            <li><button>Contact</button></li>
          </ul>
        </nav>
    )
}
