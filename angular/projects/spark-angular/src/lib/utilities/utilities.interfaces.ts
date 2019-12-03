/**
 * Use to make all properties optional.
 */
export type SprkOptionalProps<T> = {
    [P in keyof T]?: T[P];
};
