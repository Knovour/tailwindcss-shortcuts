import { a as curry2, f as format, t as toClassList, c as create } from './_helpers.js';

const custom = curry2((className = '', args) => format(toClassList(create(className), args)));
const reset = (elem) => {
    const resetStyle = {
        a: 'outline-none no-underline',
        input: 'outline-none',
        button: 'focus:outline-none',
    };
    return resetStyle[elem] || '';
};

export { custom, reset };
