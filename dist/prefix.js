const addPrefix = (prefix, classes) => `${prefix}:${classes.join(' ').replace(/\s([a-zA-Z])/g, ` ${prefix}:$1`)}`;
const screen = (media, ...classes) => classes.length
    ? addPrefix(media, classes)
    : (...classes) => addPrefix(media, classes);
const generate = (status, classes) => status === 'all'
    ? ['hover', 'focus', 'active', 'group-hover', 'focus-within']
        .map(prefix => addPrefix(prefix, classes))
        .join(' ')
    : addPrefix(status, classes);
const status = (status, ...classes) => classes.length
    ? generate(status, classes)
    : (...classes) => generate(status, classes);

export { screen, status };
