
/**
 * @jest-environment node
 */
import React from 'react'
import { NewestLocalsPage } from './NewestLocalsPage'
test('render NewestLocalsPage', () => {
  const wrapper = global.render(
    <NewestLocalsPage allLocalsQuery={{
      loading: false
    }}
    />
  )
  expect(wrapper).toMatchSnapshot()
})

test('render NewestLocalsPage with loading state', () => {
  const wrapper = global.render(
    <NewestLocalsPage allLocalsQuery={{
      loading: true
    }}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
