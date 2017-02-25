import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders container', () => {
    const div = _component.find('div')
    expect(div).to.exist
    expect(div.attr('class')).to.match(/container/)
  })
})
