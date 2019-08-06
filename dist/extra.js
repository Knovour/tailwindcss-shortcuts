import { f as format, t as toClassList, c as create } from './_helpers.js';

const custom = (className = '', ...args) => args.length
    ? format(toClassList(create(className), args))
    : (...args) => format(toClassList(create(className), args));
const reset = (elem) => {
    const resetStyle = {
        a: 'outline-none no-underline',
        input: 'outline-none',
        button: 'focus:outline-none',
    };
    return resetStyle[elem] || '';
};

export { custom, reset };
