// a quien quiero operar en este proyecto , "CIPHER"
describe('cipher', () => {
// It que voy a testear, primero global y despues por metodos
//() lo que deberia devolver , y despies lo que voy a comparar   
  it('debería ser un objeto', () => {
// assert es mi comparacion
    assert.equal(typeof cipher, 'object');
  });
// al hacer mi testa deberia salimo que esto es un objeto 
// NPN

// . del objeto 
describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
  });

});


VIEW