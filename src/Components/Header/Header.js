import React from 'react';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink, withRouter } from 'react-router-dom';
import { HomeRounded, Telegram } from '@mui/icons-material';
import jobInfo from '../../Utils/jobInfo';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky='top' className='header'>
      <Nav.Link as={NavLink} to='/'>
        <Navbar.Brand className='header_home'>
          <HomeRounded/>
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse> 
        <Nav className='header_left'>
          <Nav.Link as={NavLink} to='/' className={pathName == '/portfolio-homepage' ? 'header_link_active' : 'header_link'}>
            Resume
          </Nav.Link>

          <Nav.Link as={NavLink} to='/portfolio' className={pathName == '/portfolio' ? 'header_link_active' : 'header_link'}>
            Portfolio
          </Nav.Link>

          <Nav.Link as={NavLink} to='/contact' className={pathName == '/contact' ? 'header_link_active' : 'header_link'}>
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(jobInfo.socials).map(key => (
            <a href={jobInfo.socials[key].link} target="_blank">
              {jobInfo.socials[key].icon}
              
            </a>
          ))}
          <a href="mailto:imata@bu.edu" className="contact_me_link">
            <CustomButton text={'Contact Me'} icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;