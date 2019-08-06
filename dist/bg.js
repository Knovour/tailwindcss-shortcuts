import { f as format, t as toClassList, c as create } from './_helpers.js';

var bg = (...args) => format(toClassList(create('bg'), args).replace('bg-full-cover', 'bg-cover bg-center bg-no-repeat'));

export default bg;
