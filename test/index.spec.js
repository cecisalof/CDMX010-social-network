// importamos la funcion que vamos a testear
import { onNavigate } from '../src/routes.js';
// // eslint-disable-next-line no-unused-vars
// import { fire } from '../src/lib/firebase.js';

// const test = require('firebase-functions-test')({
//   projectId: 'novaapp-67e15',
//   storageBucket: 'novaapp-67e15.appspot.com',
// }, './test/credentials.json');

// test.mockConfig({
// // HAY QUE "MOCKEAR" LAS VARIABLES DE CONFIGURACI{ON DE ENTORNO?

// });

describe('onNavigate', () => {
  it('should be a function', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
