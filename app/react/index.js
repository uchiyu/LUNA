import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

RWR.run();

integrationsManager.register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager.register('redux-container', RWRRedux.containerIntegrationWrapper);

import HelloWorld from './components/hello-world';
RWR.registerComponent('HelloWorld', HelloWorld);

import StudentContainer from './components/students/student-container';
RWR.registerComponent('StudentContainer', StudentContainer);

import Store from './store';
RWRRedux.registerStore('Store', Store);

import Document from './containers/Document';
RWRRedux.registerContainer('Document', Document);
