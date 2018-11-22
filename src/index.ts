type ObjectMap<K extends keyof any = keyof any, V = any> = { [id in K]: V };

type If<Condition extends boolean, Then, Else = never> = Condition extends true
  ? Then
  : Else;
type And<A extends boolean, B extends boolean> = If<
  A,
  If<B, true, false>,
  false
>;
export type Extends<A, B> = A extends B ? true : false;
export type HasProperties<T, K extends keyof any> = Extends<T, ObjectMap<K>>;
export type Not<T extends boolean> = If<Extends<T, true>, false, true>;
export type Equals<A, B> = And<Extends<A, B>, Extends<B, A>>;

export function assert<T extends boolean>(expected: T) {}
export function assertTrue<T extends true>() {}
export function assertFalse<T extends false>() {}
