import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

import SlideImg2 from './assets/02.jpg'
import SlideImg3 from './assets/03.jpg'
import SlideImg4 from './assets/04.jpg'

class ControlledCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      interval: 5000
    }
  }

  render () {
    return (
      <Carousel interval={this.state.interval}>
        <Carousel.Item>
          <img className='img-responsive img-full' src={SlideImg2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='img-responsive img-full' src={SlideImg3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className='img-responsive img-full' src={SlideImg4} />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default ControlledCarousel
