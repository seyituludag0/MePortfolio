import React, { Fragment } from 'react'
import { environment } from "../environment.prod"

export default function Sidebar() {
  return (
    <Fragment>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="#hero">{environment.name}</a></h1>
            <div className="social-links mt-3 text-center">
              {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype" /></a> */}
              <a href={environment.instagramLink} target="_blank" rel="noreferrer" className="instagram"><i className="bx bxl-instagram" /></a>
              <a href={environment.linkedinLink} target="_blank" rel="noreferrer" className="linkedin"><i className="bx bxl-linkedin" /></a>
              <a href={environment.githubLink} target="_blank" rel="noreferrer" className="github"><i className="bx bxl-github" /></a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home" /> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user" /> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li>
              <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content" /> <span>Portfolio</span></a></li>
              <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server" /> <span>Services</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope" /> <span>Contact</span></a></li>
            </ul>
          </nav>{/* .nav-menu */}
        </div>
      </header>
    </Fragment>
  )
}
