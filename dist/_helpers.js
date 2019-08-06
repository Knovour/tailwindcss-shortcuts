const create = (name) => (arg) => {
    if (!arg && arg !== 0)
        return '';
    return arg.toString()[0] === '-' ? `-${name}${arg}` : `${name}-${arg}`;
};
const format = (classes) => classes
    .replace(/\-default/g, '')
    .replace(/ +/g, ' ')
    .trim();
const toClassList = (createClass, args) => args.map(arg => createClass(arg)).join(' ');

export { create as c, format as f, toClassList as t };
