import { f as format, t as toClassList, c as create } from './_helpers.js';

const font = (...args) => format(toClassList(create('font'), args)
    .replace('font-smooth', 'antialiased')
    .replace('font-i', 'italic'));
const list = (...args) => format(toClassList(create('list'), args));
const text = (...args) => format(toClassList(create('text'), args)
    .replace(/text-(upper|lower)/, '$1case')
    .replace('text-cap', 'capitalize'));

export { font, list, text };
