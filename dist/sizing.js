import { c as create } from './_helpers.js';

const size = (w = 'auto', h = w) => `${create('w')(w)} ${create('h')(h)}`.trim();
const maxSize = (w = 'auto', h = w) => size(w, h).replace(/((w|h)-)/g, `max-$1`);
const minSize = (w = 'auto', h = w) => size(w, h).replace(/((w|h)-)/g, `min-$1`);

export { maxSize, minSize, size };
