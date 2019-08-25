import { c as create } from './_helpers.js';

const size = (w, h = w) => `${create('w')(w)} ${create('h')(h)}`.trim();
const maxSize = (w, h = w) => `${create('max-w')(w)} ${create('max-h')(h)}`.trim();
const minSize = (w, h = w) => `${create('min-w')(w)} ${create('min-h')(h)}`.trim();

export { maxSize, minSize, size };
