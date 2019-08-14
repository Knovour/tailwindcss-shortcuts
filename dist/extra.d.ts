import { Argument, Currying } from './_utils/types';
export declare const custom: (className?: string, ...args: Argument[]) => string | Currying;
declare type Elem = 'a' | 'input' | 'button';
export declare const reset: (elem?: Elem) => string;
export {};
