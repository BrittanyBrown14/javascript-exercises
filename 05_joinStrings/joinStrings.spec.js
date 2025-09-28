const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Carlos', () => {
    expect(values.firstName).toEqual('Brittany');
  });
  test('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Brown-Nitu');
  });
  test('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(1999);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Brittany Brown-Nitu and I am 26 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Brittany Brown-Nitu', () => {
    expect(values.fullName).toEqual('Brittany Brown-Nitu');
  });
  test('age is 26', () => {
    expect(values.age).toEqual(26);
  });
});
