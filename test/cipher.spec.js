describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz', 33),'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "6789012345" para "1234567890" con offset 5', () => {
      assert.equal(cipher.encode('1234567890', 5),'6789012345');
    });    

    it('debería retornar "DP 5632 1DP" para "AM 2309 8AM" con offset 3', () => {
      assert.equal(cipher.encode('AM 2309 8AM', 3),'DP 5632 1DP');
    }); 

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', 33),'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "1234567890" para "6789012345" con offset 5', () => {
      assert.equal(cipher.decode('6789012345', 5),'1234567890');
    });   

    it('debería retornar "AM 2309 8AM" para "DP 5632 1DP" con offset 3', () => {
      assert.equal(cipher.decode('DP 5632 1DP', 3),'AM 2309 8AM');
    }); 

  });
});