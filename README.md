# Tailwind Shortcuts <!-- omit in toc -->

[![NPM version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=0.1.0&x2=0)](https://www.npmjs.com/package/tailwindcss-shortcuts)
[![Node version](https://img.shields.io/badge/node-%3E=%2011.0.0-brightgreen.svg)]()

Use functions to generate tailwindcss classes.

```js
size(16) // w-16 h-16
margin(24, 32) // my-24 mx-32
```
## Install <!-- omit in toc -->

```
npm i tailwind-shortcuts
```

# Functions <!-- omit in toc -->
- [Backgrounds](#backgrounds)
- [Borders](#borders)
	- [Border](#border)
	- [Border Width](#border-width)
	- [Rounded](#rounded)
	- [Rounded X](#rounded-x)
	- [Rounded Y](#rounded-y)
- [Flexbox](#flexbox)
	- [Flex](#flex)
	- [Flex Item](#flex-item)
- [Layout](#layout)
	- [Object](#object)
	- [Overflow](#overflow)
	- [Place](#place)
- [Sizing](#sizing)
	- [Size](#size)
	- [Max Size](#max-size)
	- [Min Size](#min-size)
- [Spacing](#spacing)
	- [Margin](#margin)
	- [Padding](#padding)
- [Svg](#svg)
- [Typo](#typo)
	- [Font](#font)
	- [List](#list)
	- [Text](#text)
- [Prefix](#prefix)
	- [Screen](#screen)
	- [Dom Status](#dom-status)
	- [Nth-child](#nth-child)
- [Extra](#extra)
	- [Custom](#custom)
	- [Reset](#reset)

## Backgrounds

```typescript
bg(...attributes)
```

Tailwind classes
- [Background Attachment](https://tailwindcss.com/docs/background-attachment)
- [Background Color](https://tailwindcss.com/docs/background-color)
- [Background Position](https://tailwindcss.com/docs/background-position)
- [Background Repeat](https://tailwindcss.com/docs/background-repeat)
- [Background Size](https://tailwindcss.com/docs/background-size)


```js
import { bg } from 'tailwind-shortcuts'

// Or
import bg from 'tailwind-shortcuts/bg'

bg('repeat', 'cover', 'fixed')
// Become: 'bg-repeat bg-cover bg-fixed'
```

**Class alias: `full-cover`**
```js
bg('full-cover') // Become: bg-cover bg-no-repeat bg-center
```

## Borders

### Border

```typescript
border(width: (string | number)[] = 'default', style?: string, color?: string)
```

Check [Border Width](#border-width) for more info.

Tailwind Classes
- [Border Color](https://tailwindcss.com/docs/border-color)
- [Border Style](https://tailwindcss.com/docs/border-style)
- [Border Width](https://tailwindcss.com/docs/border-width)

```js
import { border } from 'tailwind-shortcuts'

// Or
import { border } from 'tailwind-shortcuts/border'

border(undefined, 'solid', 'black')
// Become: 'border border-solid border-black'

border(1, 'solid', 'black')
// Become: 'border-1 border-solid border-black'

border([1, 2], 'solid', 'black')
// Become: 'border-t-1 border-r-2 border-b-1 border-l-2 border-solid border-black'
```

### Border Width

```typescript
border(top = 'default', right, bottom, left)
```
Simliar to `border-width` css

Tailwind Classes
- [Border Width](https://tailwindcss.com/docs/border-width)

```js
import { borderWidth } from 'tailwind-shortcuts'

// Or
import { borderWidth } from 'tailwind-shortcuts/border'

borderWidth()
// Become: 'border'

borderWidth(1)
// Become: 'border-1'
// border-width: 1px;

borderWidth(1, 2)
// Become: 'border-t-1 border-r-2 border-b-1 border-l-2'
// border-width: 1px 2px;

borderWidth(1, 2, 3)
// Become: 'border-t-1 border-r-2 border-b-3 border-l-2'
// border-width: 1px 2px 3px;

borderWidth(1, 2, 3, 4)
// Become: 'border-t-1 border-r-2 border-b-3 border-l-4'
// border-width: 1px 2px 3px 4px;
```

### Rounded

```typescript
rounded(topLeft = 'default', topRight, bottomRight, bottomLeft)
```
Simliar to `border-radius` css

Tailwind Classes
- [Border Radius](https://tailwindcss.com/docs/border-radius)


```js
import { rounded } from 'tailwind-shortcuts'

// Or
import { rounded } from 'tailwind-shortcuts/rounded'

rounded()
// Become: 'rounded'

rounded(1)
// Become: 'rounded-1'
// border-radius: 1px;

rounded(1, 2)
// Become: 'rounded-tl-1 rounded-tr-2 rounded-br-1 rounded-bl-2'
// border-radius: 1px 2px;

rounded(1, 2, 3)
// Become: 'rounded-tl-1 rounded-tr-2 rounded-br-3 rounded-bl-2'
// border-radius: 1px 2px 3px;

rounded(1, 2, 3, 4)
// Become: 'rounded-tl-1 rounded-tr-2 rounded-br-3 rounded-bl-4'
// border-radius: 1px 2px 3px 4px;
```

### Rounded X
```typescript
roundedY(top = 'default', bottom)
```

Tailwind Classes
- [Border Radius](https://tailwindcss.com/docs/border-radius)

```js
import { roundedY } from 'tailwind-shortcuts'

// Or
import { roundedX } from 'tailwind-shortcuts/rounded'

roundedX()
// Become: 'rounded-r rounded-l'

roundedX(1)
// Become: 'rounded-r-1 rounded-l-1'
// border-radius: 1px;

roundedX(1, 2)
// Become: 'rounded-r-1 rounded-l-2'
// border-radius: 2px 1px 1px 2px;
```

### Rounded Y
```typescript
roundedY(left = 'default', right)
```

Tailwind Classes
- [Border Radius](https://tailwindcss.com/docs/border-radius)

```js
import { roundedY } from 'tailwind-shortcuts'

// Or
import { roundedY } from 'tailwind-shortcuts/rounded'

roundedY()
// Become: 'rounded-t rounded-b'

rounded(1)
// Become: 'rounded-t-t rounded-b-1'
// border-radius: 1px;

rounded(1, 2)
// Become: 'rounded-t-1 rounded-b-2'
// border-radius: 1px 1px 2px 2px;
```

## Flexbox

### Flex
```typescript
flex(...attributes)
```
Attributes: `inline`, `row`, `row-reverse`, `col`, `col-reverse`, `no-wrap`, `wrap`, `wrap-reverse`, `middle`


Tailwind Classes
- [Flex Direction](https://tailwindcss.com/docs/flex-direction)
- [Flex Wrap](https://tailwindcss.com/docs/flex-wrap)

```js
import { flex } from 'tailwind-shortcuts'

// Or
import { flex } from 'tailwind-shortcuts/flexbox'

flex()
// Become: 'flex'

flex('inline')
// Become: 'inline-flex'

flex('col', 'wrap')
// Become: 'flex-col flex-wrap'
```

**Special keyword: `middle`**

```js
flex('middle')
// Become: 'justify-center items-center'
```

### Flex Item

```typescript
flexItem(...attributes)
```
Attributes: `initial` (default), `1`, `auto`, `none`, `grow`, `grow-0`, `shrink`, `shrink-0`

Tailwind Classes
- [Flex](https://tailwindcss.com/docs/flex)
- [Flex Grow](https://tailwindcss.com/docs/flex-grow)
- [Flex Shrink](https://tailwindcss.com/docs/flex-shrink)

```js
import { flexItem } from 'tailwind-shortcuts'

// Or
import { flexItem } from 'tailwind-shortcuts/flexbox'

flexItem()
// Become: 'flex-initial'

flexItem('grow', 'shrink-0')
// Become: 'flex-grow flex-shrink-0'
```

## Layout

### Object
```typescript
object(...attributes)
```

Tailwind Classes
- [Object Fit](https://tailwindcss.com/docs/object-fit)
- [Object Position](https://tailwindcss.com/docs/object-fit)

```js
import { object } from 'tailwind-shortcuts'

// Or
import { object } from 'tailwind-shortcuts/layout'

object('cover', 'center')
// Become: 'object-cover object-center'
```

### Overflow
```typescript
overflow(y = 'auto', x)
```

Tailwind Classes
- [Overflow](https://tailwindcss.com/docs/overflow)

```js
import { overflow } from 'tailwind-shortcuts'

// Or
import { overflow } from 'tailwind-shortcuts/layout'

overflow()
// Become: 'overflow-auto'

overflow('scroll')
// Become: 'overflow-scroll'

overflow('hidden', 'auto')
// Become: 'overflow-y-hidden overflow-x-auto'
```

### Place
```typescript
place(top = 'auto', right, bottom, left)
```

Tailwind Classes
- [Top / Right / Bottom / Left](https://tailwindcss.com/docs/top-right-bottop-left)

```js
import { place } from 'tailwind-shortcuts'

// Or
import { place } from 'tailwind-shortcuts/layout'

place()
// Become: 'inset-auto'

place(0)
// Become: 'inset-0'

place(0, 1)
// Become: 'inset-y-0 inset-x-1'

place(0, 1, 2)
// Become: 'top-0 inset-x-1 bottom-2'

place(0, 1, 2, 3)
// Become: 'top-0 right-1 bottom-2 left-3'

place(0, -1, 2, -3)
// Become: 'top-0 -right-1 bottom-2 -left-3'
```

## Sizing

### Size
```typescript
size(width = 'auto', height = width)
```

Tailwind Classes
- [Width](https://tailwindcss.com/docs/width)
- [Height](https://tailwindcss.com/docs/height)

```js
import { size } from 'tailwind-shortcuts'

// Or
import { size } from 'tailwind-shortcuts/sizing'

size()
// Become: 'w-auto h-auto'

size(0)
// Become: 'w-0 h-0'

size(24, 32)
// Become: 'w-24 h-32'

size(24, '')
// Become: 'w-24'
```

### Max Size
```typescript
maxSize(width = 'auto', height = width)
```

Tailwind Classes
- [Max Width](https://tailwindcss.com/docs/max-width)
- [Max Height](https://tailwindcss.com/docs/max-height)

```js
import { maxSize } from 'tailwind-shortcuts'

// Or
import { maxSize } from 'tailwind-shortcuts/sizing'

maxSize()
// Become: 'max-w-auto max-h-auto'

maxSize(0)
// Become: 'max-w-0 max-h-0'

maxSize(24, 32)
// Become: 'max-w-24 max-h-32'
```

### Min Size
```typescript
minSize(width = 'auto', height = width)
```

Tailwind Classes
- [Min Width](https://tailwindcss.com/docs/min-width)
- [Min Height](https://tailwindcss.com/docs/min-height)

```js
import { minSize } from 'tailwind-shortcuts'

// Or
import { minSize } from 'tailwind-shortcuts/sizing'

minSize()
// Become: 'min-w-auto min-h-auto'

minSize(0)
// Become: 'min-w-0 min-h-0'

minSize(24, 32)
// Become: 'min-w-24 min-h-32'
```

## Spacing

### Margin
```typescript
margin(top = 'auto', right, bottom, left)
```

Tailwind Classes
- [Margin](https://tailwindcss.com/docs/margin)

```js
import { margin } from 'tailwind-shortcuts'

// Or
import { margin } from 'tailwind-shortcuts/spacing'

margin()
// Become: 'm-auto'

margin(0)
// Become: 'm-0'

margin(1, 2)
// Become: 'my-1 mx-2'

margin(1, 2, 3)
// Become: 'mt-1 mx-2 mb-3'

margin(1, 2, 3, 4)
// Become: 'mt-1 mr-2 mb-3 ml-4'

margin(1, -2, 3, -4)
// Become: 'mt-1 -mr-2 mb-3 -ml-4'
```

### Padding
```typescript
padding(top = 0, right, bottom, left)
```

Tailwind Classes
- [Padding](https://tailwindcss.com/docs/padding)

```js
import { padding } from 'tailwind-shortcuts'

// Or
import { padding } from 'tailwind-shortcuts/spacing'

padding()
// Become: 'p-0'

padding(0)
// Become: 'p-0'

padding(1, 2)
// Become: 'py-1 px-2'

padding(1, 2, 3)
// Become: 'pt-1 px-2 pb-3'

padding(1, 2, 3, 4)
// Become: 'pt-1 pr-2 pb-3 pl-4'
```

## Svg
```typescript
svg(...attributes)
```
Attributes: `fill`, `stroke`

Tailwind Classes
- [Fill](https://tailwindcss.com/docs/fill)
- [Stroke](https://tailwindcss.com/docs/stroke)

```js
import { svg } from 'tailwind-shortcuts'

// Or
import { svg } from 'tailwind-shortcuts/svg'

svg('fill')
// Become: 'fill-current'

svg('fill', 'stroke')
// Become: 'fill-current stroke-current'
```

## Typo

### Font
```typescript
font(...attributes)
```

Tailwind Classes
- [Font Family](https://tailwindcss.com/docs/font-family)
- [Font Smoothing](https://tailwindcss.com/docs/font-smoothing)
- [Font Style](https://tailwindcss.com/docs/font-style)
- [Font Weight](https://tailwindcss.com/docs/font-weight)

```js
import { font } from 'tailwind-shortcuts'

// Or
import { font } from 'tailwind-shortcuts/typo'

font('sans', 'bold')
// Become: 'font-sans font-bold'
```

**Special keyword: `smooth`, `i`**

```js
font('smooth')
// Become: 'antialiased'

font('i')
// Become: 'italic'
```

### List
```typescript
list(...attributes)
```

Tailwind Classes
- [List Style Type](https://tailwindcss.com/docs/list-style-type)
- [List Style Position](https://tailwindcss.com/docs/list-style-position)

```js
import { list } from 'tailwind-shortcuts'

// Or
import { list } from 'tailwind-shortcuts/typo'

list('decimal', 'inside')
// Become: 'list-decimal list-inside'
```

### Text
```typescript
text(...attributes)
```

Tailwind Classes
- [Font Size](https://tailwindcss.com/docs/font-size)
- [Text Align](https://tailwindcss.com/docs/text-align)
- [Text Color](https://tailwindcss.com/docs/text-color)
- [Text Transform](https://tailwindcss.com/docs/text-transform)

```js
import { text } from 'tailwind-shortcuts'

// Or
import { text } from 'tailwind-shortcuts/typo'

text('xl', 'center', 'black')
// Become: 'text-xl text-center text-black'
```

**Special keyword: `upper`, `lower`, `cap`**

```js
text('upper')
// Become: 'uppercase'

text('lower')
// Become: 'lowercase'

text('cap')
// Become: 'capitalize'
```

## Prefix

### Screen

```typescript
screen(breakpoint, ...classes)

// Currying
screen(breakpoint)(...classes)
```

Tailwind Classes
- [Breakpoints](https://tailwindcss.com/docs/breakpoints)


```js
import { screen } from 'tailwind-shortcuts'

// Or
import { screen } from 'tailwind-shortcuts/prefix'

screen('md', 'w-320', 'mx-16', 'text-xl')
// Become: 'md:w-320 md:mx-16 md:text-xl'

// Currying
const md = screen('md')
md('w-320', 'mx-16', 'text-xl')
// Become: 'md:w-320 md:mx-16 md:text-xl'
```

### Dom Status
```typescript
status(variant, ...classes)

// Currying
status(variant)(...classes)
```
Variants: 'hover', 'focus', 'active', 'group-hover', 'focus-within', 'disabled', 'visited'

Tailwind Classes
- [Configuring Variants](https://tailwindcss.com/docs/configuring-variants)

```js
import { status } from 'tailwind-shortcuts'

// Or
import { status } from 'tailwind-shortcuts/prefix'

status('hover', 'w-320', 'mx-16', 'text-xl')
// Become: 'hover:w-320 hover:mx-16 hover:text-xl'

// Currying
const hover = status('hover')
hover('w-320', 'mx-16', 'text-xl')
// Become: 'hover:w-320 hover:mx-16 hover:text-xl'
```

### Nth-child
```typescript
child(variant, ...classes)

// Currying
child(variant)(...classes)
```
Variants: 'first', 'last', 'odd', 'even'

Tailwind Classes
- [Configuring Variants](https://tailwindcss.com/docs/configuring-variants)

```js
import { child } from 'tailwind-shortcuts'

// Or
import { child } from 'tailwind-shortcuts/prefix'

child('first', 'w-320', 'mx-16', 'text-xl')
// Become: 'first:w-320 first:mx-16 first:text-xl'

// Currying
const first = child('first')
first('w-320', 'mx-16', 'text-xl')
// Become: 'first:w-320 first:mx-16 first:text-xl'
```

## Extra

### Custom

Generate classes from plugins

```typescript
custom(name, ...attributes)

// Currying
custom(name)(...attributes)
```

```js
import { custom } from 'tailwind-shortcuts'

// Or
import { custom } from 'tailwind-shortcuts/extra'

custom('transition', 'all', 100, 'ease')
// Become: 'transition-all transition-100 transition-ease'

// Currying
const transition = custom('transition')
transition('all', 100, 'ease')
// Become: 'transition-all transition-100 transition-ease'
```

### Reset

Add some reset classes you might need it

```typescript
reset(domName)
```
Dom Name: `a`, `input`, `button`

```js
import { reset } from 'tailwind-shortcuts'

// Or
import { reset } from 'tailwind-shortcuts/extra'

reset('a')
// Become: 'outline-none no-underline'

reset('input')
// Become: 'outline-none'

reset('button')
// Become: 'focus:outline-none'
```

# Usage <!-- omit in toc -->

## JSX <!-- omit in toc -->

```jsx
<div className={`size(16) m-24`}></div>
```

## With [classnames](https://github.com/JedWatson/classnames?ts=2) <!-- omit in toc -->

```js
classnames(
	`absolute ${place-0}`,
	{
		[`${margin(0, 16)}`]: true
	}
)
```

## Add Prefix  <!-- omit in toc -->

```js
const xl = screen('xl')
const hover = status('hover')
xl(hover('mx-3', rounded(1), size(40)))

// Become: 'xl:hover:mx-3 xl:hover:rounded-1 xl:hover:w-40 xl:hover:h-40'
```

# License <!-- omit in toc -->

MIT
