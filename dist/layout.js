import { f as format, t as toClassList, c as create } from './_helpers.js';

const object = (...args) => format(toClassList(create('object'), args));
const overflowType = ['auto', 'hidden', 'visible', 'scroll'];
const overflow = (yOrAll = 'auto', x) => {
    const oY = overflowType.includes(yOrAll) ? yOrAll : '';
    const oX = x && overflowType.includes(x) ? x : '';
    return !x
        ? create('overflow')(oY)
        : `${create('overflow-y')(oY)} ${create('overflow-x')(oX)}`.trim();
};
const place = (...args) => {
    if (!args.length)
        return 'inset-auto';
    const directions = [
        ['inset'],
        ['inset-y', 'inset-x'],
        ['top', 'inset-x', 'bottom'],
        ['top', 'right', 'bottom', 'left'],
    ];
    return format(directions[args.slice(0, 4).length - 1]
        .map((target, idx) => create(target)(args[idx]))
        .join(' '));
};

export { object, overflow, place };
