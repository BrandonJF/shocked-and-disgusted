/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/MainMenu/MainMenu.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import MainMenu from './MainMenu'

describe('<MainMenu />', () => {
  let component

  beforeEach(() => {
    component = shallow(<MainMenu />)
  });

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
