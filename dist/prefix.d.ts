export declare const screen: (media: string, ...classes: string[]) => string | ((...classes: string[]) => string);
declare type Status = 'all' | 'hover' | 'focus' | 'active' | 'group-hover' | 'focus-within';
export declare const status: (status: Status, ...classes: string[]) => string | ((...classes: string[]) => string);
export {};
