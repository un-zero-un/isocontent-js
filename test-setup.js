//require('raf/polyfill');
/**
 * As jsDom do not support mutationobserver and
 * quill requires mutationobserver, thus a shim is needed
 * */
//require('mutationobserver-shim');

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
