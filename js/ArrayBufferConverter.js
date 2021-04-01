import getBuffer from './getBuffer';

require('fast-text-encoding');

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load() {
    return new TextDecoder().decode(this.buffer);
  }
}
