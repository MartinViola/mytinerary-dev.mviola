import React from 'react'
import './Footer.css'
import FooterMenu from './FooterMenu'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


function Footer() {
  return (
    <footer>
      <FooterMenu className="FooterMenu"/>
      <div className="ContactContainer">
        <h4>Contact us 24/7</h4>
        <div>
          <PhoneIcon fontSize="large"/>
          <EmailIcon fontSize="large"/>
          <LinkedInIcon fontSize="large"/>
          <InstagramIcon fontSize="large"/>
          <FacebookIcon fontSize="large"/>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.7896716113983!2d-58.3744259181317!3d-34.60898325905424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadb57fd1e5f%3A0xcc737c4eb0a8614b!2sPlaza%20de%20Mayo!5e0!3m2!1sen!2sar!4v1645369024367!5m2!1sen!2sar"></iframe>
    </footer>
  )
}

export default Footer