/**
 * Use to make all properties optional.
 */
export type TSprkOptionalProps<T> = {
    [P in keyof T]?: T[P];
};
