import { Currying } from './_utils/types';
export declare const screen: (variant: string, ...classes: string[]) => string | Currying;
declare type Status = 'hover' | 'focus' | 'active' | 'group-hover' | 'focus-within' | 'disabled' | 'visited';
export declare const status: (variant: Status, ...classes: string[]) => string | Currying;
declare type Child = 'first' | 'last' | 'odd' | 'even';
export declare const child: (variant: Child, ...classes: string[]) => string | Currying;
export {};
