const addPrefix = (prefix, classes) => `${prefix}:${classes.join(' ').replace(/\s([a-zA-Z\-])/g, ` ${prefix}:$1`)}`;
const screen = (variant, ...classes) => classes.length
    ? addPrefix(variant, classes)
    : (...classes) => addPrefix(variant, classes);
const status = (variant, ...classes) => classes.length
    ? addPrefix(variant, classes)
    : (...classes) => addPrefix(variant, classes);
const child = (variant, ...classes) => classes.length
    ? addPrefix(variant, classes)
    : (...classes) => addPrefix(variant, classes);

export { child, screen, status };
