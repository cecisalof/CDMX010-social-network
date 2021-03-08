// importamos la funcion que vamos a testear
// Lee la data de la consola de Cloud Firestore
// y detecta los cambios en los documentos de la colección newPost.
import { getData, savePost } from '../src/firebase';

// primero brobaremos si es una función:
describe('comprobar si es una función', () => {
  test('debería ser una función', () => {
    expect(typeof getData).toBe('function');
  });
});

describe('comprobar si es una función2', () => {
  test('debería ser una función', () => {
    expect(typeof savePost).toBe('function');
  });
});
