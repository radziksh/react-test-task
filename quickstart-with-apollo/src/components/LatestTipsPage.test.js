
/**
 * @jest-environment node
 */
import React from 'react'
import { LatestTipsPage } from './LatestTipsPage'
test('render LatestTips', () => {
  const wrapper = global.render(
    <LatestTipsPage allTipsQuery={{
      loading: false
    }}
    />
  )
  expect(wrapper).toMatchSnapshot()
})
