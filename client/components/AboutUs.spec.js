/* global describe beforeEach it */

import { expect}  from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AboutUs from '/AboutUs.js'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CheckoutConfirmation', () => {


  beforeEach(() => {
    AboutUs = shallow(<AboutUs />)
  })

  it('renders the name in a Paper component', () => {
    expect(AboutUs.find('p').text()).to.be.equal('Could someone survive inside a transporter buffer for 75 years? When has justice ever been as simple as a rule book? Talk about going nowhere fast. My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? The unexpected is our normal routine.')
  })
})
