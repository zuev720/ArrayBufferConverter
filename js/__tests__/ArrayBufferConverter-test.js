import ArrayBufferConverter from '../ArrayBufferConverter';

it('Метод load(), экземпляра класса должен возвращать строку', () => {
  const received = new ArrayBufferConverter().toString();
  expect(received).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
