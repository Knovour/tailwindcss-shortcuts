import { Argument } from './types';
export declare const create: (name: string) => (arg: Argument) => string;
export declare const format: (classes: string) => string;
export declare const toClassList: (createClass: (arg: Argument) => string, args: Argument[]) => string;
export declare const curry2: (fn: (currentName: string, currentArgs: Argument[]) => string) => (variant: string, ...args: Argument[]) => any;
