import RWR from 'react-webpack-rails';
RWR.run();

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import StudentContainer from './components/students/student-container';
RWR.registerComponent('StudentContainer', StudentContainer);

