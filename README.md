# typescript-test-utils

Helper types for testing your package exported types

- Only depends on typescript installed.
- Easly extendable

## Usage

You test them with the assert method ( wich is just a placeholder, it doesn't run anything ) and the type helpers

```ts
import { assert, HasProperties } from "typescript-test-utils";

assert<true>(true); // ok
assert<false>(true); // nop

type MyType = { a: string };
assert<HasProperties<MyType, "a">>(true); // ok
assert<HasProperties<MyType, "a">>(false); // nop
assert<HasProperties<MyType, "b">>(true); // nop
assert<HasProperties<MyType, "b">>(false); // ok
```

And just run tsc on your test files to check for type errors

```json
{
  "scripts": {
    "test": "tsc --noEmit src/*.test.ts"
  }
}
```

## Assertions

There are currently some implemented, if you have any idea for a new one send a PR or open an issue

```ts
import { assert, HasProperties, Extends, Equals } from "typescript-test-utils";

HasProperties<{ a: string, b: number }, "a" | "b"> // true
assert<HasProperties<{ a: string, b: number }, "a" | "c">>(true) // false

Extends<{ a: string, b: string >, { a: string }> // true
Extends<{ a: string, b: string >, { c: string }> // false

Equals<{ a: string }, { a: string }> // true
Equals<{ a: string, b: string }, { a: string }> // false
```
