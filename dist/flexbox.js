import { t as toClassList, c as create, f as format } from './_helpers.js';

const flexAttrs = [
    'inline',
    'row',
    'row-reverse',
    'col',
    'col-reverse',
    'no-wrap',
    'wrap',
    'wrap-reverse',
    'middle',
];
const flex = (...args) => {
    const flexType = args.includes('inline') ? 'inline-flex' : 'flex';
    const classes = toClassList(create('flex'), args.filter(arg => flexAttrs.includes(arg)));
    return format(`${flexType} ${classes}`
        .replace('flex-middle', 'justify-center items-center')
        .replace('flex-inline', ''));
};
const items = [
    'initial',
    '1',
    1,
    'auto',
    'none',
    'grow',
    'grow-0',
    'shrink',
    'shrink-0',
];
const flexItem = (...args) => format(toClassList(create('flex'), args.filter(arg => items.includes(arg))));

export { flex, flexItem };
