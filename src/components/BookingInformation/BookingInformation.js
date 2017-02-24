import React, { Component } from 'react'
import ReactGA from 'react-ga'

class BookingsInformation extends Component {
  constructor (props) {
    super(props)

    this.openBrochure = this.openBrochure.bind(this)
  }

  openBrochure () {
    ReactGA.event({
      category: 'click',
      action: 'show-brochure',
      label: 'brochure'
    })

    var brochureUrl = 'assets/docs/Golden-Palms-Brochure-0816.pdf'
    var win = window.open(brochureUrl, '_blank')
    win.focus()
  }

  render () {
    return (
      <div className='row'>
        <div className='box'>
          <div className='col-lg-12'>
            <hr />
            <h4 className='text-center'>Bookings open now</h4>
            <hr />

            <p className='text-center'>
              See our <span onClick={this.openBrochure} className='link'>brochure</span> or contact us for more details
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default BookingsInformation
