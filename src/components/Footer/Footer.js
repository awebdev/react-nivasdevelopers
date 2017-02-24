import React, { Component } from 'react'
import ReactGA from 'react-ga'

import './Footer.scss'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.sendEmailToNivas = this.sendEmailToNivas.bind(this)
  }

  sendEmailToNivas () {
    ReactGA.event({
      category: 'click',
      action: 'email',
      label: 'nivasdevelopers@hotmail.com'
    })

    var emailLink = 'mailto:nivasdevelopers@hotmail.com'
    window.open(emailLink)
  }

  render () {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <p>
                <img className='company-logo' src='assets/logo/nivas-logo.png' />
                <br /> Nivas Developers
                <br /> H.No.1-9-312&#x2F;2 &amp; 1-9-321&#x2F;2A
                <br /> Hyderabad, Telangana,
                <br /> India - 500044
                <br /> Tel: +91 (996) 643-0011
                <br /> E-mail: <span onClick={this.sendEmailToNivas} className='link'>nivasdevelopers@hotmail.com</span>
                <br />
                <br /> Copyright &copy; Nivas Developers {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
