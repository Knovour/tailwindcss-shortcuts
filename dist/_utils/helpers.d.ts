import { Arg } from './types';
export declare const create: (name: string) => (arg: Arg) => string;
export declare const format: (classes: string) => string;
export declare const toClassList: (createClass: (arg: Arg) => string, args: Arg[]) => string;
export declare const curry2: (fn: (currentName: string, currentArgs: Arg[]) => string) => (variant: string, ...args: Arg[]) => any;
