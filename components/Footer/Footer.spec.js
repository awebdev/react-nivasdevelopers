import React from 'react'
import { Footer } from 'components/Footer'
// import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Footer', () => {
  let _component

  beforeEach(() => {
    _component = shallow(<Footer />)
  })

  it('Renders a footer element', () => {
    expect(_component.contains(
      <br /> Copyright &copy; Nivas Developers}
    )).to.be.true
  })

  /*
  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(_wrapper.contains(
        <IndexLink activeClassName='route--active' to='/'>
          Home
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to Counter route', () => {
      expect(_wrapper.contains(
        <Link activeClassName='route--active' to='/counter'>
          Counter
        </Link>
      )).to.be.true
    })
  })
  */
})
