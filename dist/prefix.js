import { a as curry2 } from './_helpers.js';

const addPrefix = (prefix, classes) => `${prefix}:${classes.join(' ').replace(/\s([a-zA-Z\-])/g, ` ${prefix}:$1`)}`;
const screen = curry2((variant, classes) => addPrefix(variant, classes));
const responsive = (mediaGroup) => Object.keys(mediaGroup)
    .map(key => addPrefix(key, [mediaGroup[key]]))
    .join(' ');
const status = curry2((variant, classes) => addPrefix(variant, classes));
const child = curry2((variant, classes) => addPrefix(variant, classes));

export { child, responsive, screen, status };
