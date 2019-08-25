import { f as format, c as create } from './_helpers.js';

const spacing = (type, args) => {
    if (!args.length)
        return '';
    const targets = [[''], ['y', 'x'], ['t', 'x', 'b'], ['t', 'r', 'b', 'l']];
    return format(targets[args.slice(0, 4).length - 1]
        .map((target, idx) => create(`${type}${target}`)(args[idx]))
        .join(' '));
};
const margin = (...args) => spacing('m', args);
const padding = (...args) => spacing('p', args);

export { margin, padding };
