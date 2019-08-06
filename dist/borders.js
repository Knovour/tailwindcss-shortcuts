import { f as format, c as create } from './_helpers.js';

const generate = (className, args) => {
    switch (args.length) {
        case 0:
            return className;
        case 1:
            const all = args[0];
            return format(create(className)(!all && all !== 0 ? 'default' : all));
        default:
            const [p1, p2, p3 = p1, p4 = p2] = args;
            const currents = [p1, p2, p3, p4];
            const targets = className === 'border'
                ? ['border-t', 'border-r', 'border-b', 'border-l']
                : ['rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'];
            return format(targets.map((target, idx) => create(target)(currents[idx])).join(' '));
    }
};
const borderWidth = (...args) => generate('border', args);
const border = (w = 'default', style, color) => {
    const border = create('border');
    return format(`${borderWidth(...[w].flat())} ${border(style)} ${border(color)}`);
};
const rounded = (...args) => generate('rounded', args);
const roundedX = (r = 'default', l = r) => format(`${create('rounded-r')(r)} ${create('rounded-l')(l)}`);
const roundedY = (t = 'default', b = t) => format(`${create('rounded-t')(t)} ${create('rounded-b')(b)}`);

export { border, borderWidth, rounded, roundedX, roundedY };
