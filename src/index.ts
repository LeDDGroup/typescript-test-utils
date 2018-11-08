type IndexType = string | number | symbol;
type ObjectWithProperties<K extends IndexType> = { [id in K]: any };
export type Equals<T, K> = T extends K ? (K extends T ? true : false) : false;
export type Extends<T, K> = T extends K ? true : false;
export type HasProperties<T, K extends IndexType> = Extends<
  T,
  ObjectWithProperties<K>
>;
export type Not<T extends boolean> = T extends true ? false : true;

export function assert<T>(expected: T) {}
export function assertTrue<T extends true>() {}
export function assertFalse<T extends false>() {}
