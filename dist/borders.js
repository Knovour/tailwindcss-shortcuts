import { f as format, c as create } from './_helpers.js';

const generate = (className, args) => {
    switch (args.length) {
        case 0:
            return className;
        case 1:
            const [all] = args;
            return !all && all !== 0 ? '' : format(create(className)(all));
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
const border = (w, style, color) => {
    const border = create('border');
    return (format(`${borderWidth(...[w].flat())} ${border(style)} ${border(color)}`) ||
        'border');
};
const rounded = (...args) => args.length ? generate('rounded', args) : 'rounded';
const roundedX = (r, l = r) => format(`${create('rounded-r')(r)} ${create('rounded-l')(l)}`) ||
    'rounded-r rounded-l';
const roundedY = (t, b = t) => format(`${create('rounded-t')(t)} ${create('rounded-b')(b)}`) ||
    'rounded-t rounded-b';

export { border, borderWidth, rounded, roundedX, roundedY };
