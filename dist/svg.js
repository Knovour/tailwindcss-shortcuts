const svgClass = {
    fill: 'fill-current',
    stroke: 'stroke-current',
};
var svg = (...attrs) => attrs
    .map(target => svgClass[target] || '')
    .join(' ')
    .trim();

export default svg;
