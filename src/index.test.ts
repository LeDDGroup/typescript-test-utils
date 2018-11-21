import {
  assert,
  HasProperties,
  Extends,
  Equals,
  Not,
  assertTrue,
  assertFalse
} from "./index";

type DataType = { a: string; b: string };

// HasProperties
assert<HasProperties<DataType, "a">>(true);
assert<HasProperties<DataType, "a" | "b">>(true);
assert<HasProperties<DataType, "a" | "b" | "c">>(false);
assert<HasProperties<DataType, "c">>(false);

// Extends
assert<Extends<DataType, { c: string }>>(false);
assert<Extends<DataType, { a: string; b: string }>>(true);

//Equals
assert<Equals<DataType, { a: string; b: string }>>(true);
assert<Not<Equals<DataType, { a: string; b: string }>>>(false);

// Extra
assertTrue<Equals<DataType, { a: string; b: string }>>();
assertFalse<Extends<DataType, { c: string }>>();
