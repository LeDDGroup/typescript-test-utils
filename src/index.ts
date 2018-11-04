type IndexType = string | number | symbol;
type ObjectWithProperties<K extends IndexType> = { [id in K]: any };
export type Equals<T, K> = T extends K ? (K extends T ? true : false) : false;
export type Extends<T, K> = T extends K ? true : false;
export type HasProperties<T, K extends IndexType> = Extends<
  T,
  ObjectWithProperties<K>
>;

export function assert<T>(expected: T) {}
