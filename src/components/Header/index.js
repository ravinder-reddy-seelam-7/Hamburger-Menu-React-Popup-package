// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="trigger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <button
            data-testid="closeButton"
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ul className="popup-text-container">
            <li>
              <Link to="/" className="popup-sec-container">
                <AiFillHome />
                <p className="popup-text">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="popup-sec-container">
                <BsInfoCircleFill />
                <p className="popup-text">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
