
/**
 * @jest-environment node
 */


const Adapter = require('enzyme-adapter-react-16')
const Enzyme = require('enzyme')

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.mount = Enzyme.mount
