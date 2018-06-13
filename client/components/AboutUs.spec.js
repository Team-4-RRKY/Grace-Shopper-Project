/* global describe beforeEach it */

import { expect}  from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from './AboutUs.js'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('AboutUs', () => {
  let AboutUsTest;

  beforeEach(() => {
    AboutUsTest = shallow(<AboutUs />)
  })

  xit('renders the name in a Paper component', () => {
    expect(AboutUsTest.find('.paragraph-test').text()).to.be.equal('<WithStyles(Typography) />')
  })
})
