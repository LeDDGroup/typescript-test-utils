import { assert, HasProperties, Extends, Equals } from "./index";

type DataType = { a: string; b: string };

assert<HasProperties<DataType, "a">>(true);
assert<HasProperties<DataType, "a" | "b">>(true);
assert<HasProperties<DataType, "a" | "b" | "c">>(false);
assert<HasProperties<DataType, "c">>(false);
assert<Extends<DataType, { c: string }>>(false);
assert<Extends<DataType, { a: string; b: string }>>(true);
assert<Equals<DataType, { a: string; b: string }>>(true);
