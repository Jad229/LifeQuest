// sanity.test.js

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });
  
  test('multiplication test', () => {
    expect(2 * 3).toBe(6);
  });
  
  test('string test', () => {
    expect('hello').toMatch('hello');
  });
  