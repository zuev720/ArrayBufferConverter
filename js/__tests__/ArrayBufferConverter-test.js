import ArrayBufferConverter from '../ArrayBufferConverter';

it('Метод load(), экземпляра класса должен возвращать строку', () => {
  const received = new ArrayBufferConverter().load();
  expect(received).toBe('{ " d a t a " : { " u s e r " : { " i d " : 1 , " n a m e " : " H i t m a n " , " l e v e l " : 1 0 } } } ');
});
