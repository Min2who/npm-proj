import { hello } from '../src';

test('Hello World is correct or not', () => {
  const result = hello('cops member');
  expect(result).toBe('Hello cops member');
});