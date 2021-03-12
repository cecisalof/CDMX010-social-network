/* eslint-disable no-console */
// eslint-disable-next-line import/no-cycle
import { routes, rootDiv, loadDependencies } from './routes.js';
import * as firebase from './firebase.js';

// eslint-disable-next-line no-unused-expressions
routes;
// eslint-disable-next-line no-unused-expressions
rootDiv;

loadDependencies(firebase);
console.log(firebase);
