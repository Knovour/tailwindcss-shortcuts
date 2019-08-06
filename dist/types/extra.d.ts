import { Argument } from './_utils/types';
export declare const custom: (className?: string, ...args: Argument[]) => string | ((...args: Argument[]) => string);
declare type Elem = 'a' | 'input' | 'button';
export declare const reset: (elem?: Elem) => string;
export {};
