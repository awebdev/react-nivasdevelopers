import React, { Component } from 'react'
import Footer from 'components/Footer'
import ReactGA from 'react-ga'

import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends Component {
  constructor (props) {
    super(props)

    ReactGA.initialize('UA-81192606-1')
  }

  componentDidMount () {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)

    // Feature detects Navigation Timing API support.
    if (window.performance) {
      // Gets the number of milliseconds since page load
      // (and rounds the result since the value must be an integer).
      var timeSincePageLoad = Math.round(window.performance.now())

      // Sends the timing hit to Google Analytics.
      ReactGA.event({
        category: 'timing',
        action: 'load',
        label: 'JS Load time',
        value: timeSincePageLoad
      })
    }
  }

  render () {
    return (
      <div className='core-layout__viewport'>
        {this.props.children}

        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
