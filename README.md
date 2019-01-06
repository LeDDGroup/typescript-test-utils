# typescript-test-utils

[![npm version](https://img.shields.io/npm/v/typescript-test-utils.svg "test")](https://www.npmjs.com/package/typescript-test-utils)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/LeDDGroup/typescript-test-utils.svg)](https://greenkeeper.io/)

Helper types for testing your package exported types

- Only depends on typescript installed.
- Easily extendable

## Note

I have notice some issues with typescript if your types are too complex, so I recommend using `assertTrue` and `assertFalse` instead of `assert`

## Usage

You test them with the assert method ( wich is just a placeholder, it doesn't run anything ) and the type helpers

```ts
import {
  assert,
  assertTrue,
  assertFalse,
  HasProperties
} from "typescript-test-utils";

assertTrue<true>(); // ok
assertTrue<false>(); // nop
assertFalse<true>(); // nop
assertFalse<false>(); // ok

assert<true>(true); // ok
assert<false>(true); // nop

type MyType = { a: string };
assertTrue<HasProperties<MyType, "a">>(); // ok
assertFalse<HasProperties<MyType, "a">>(); // nop
assertTrue<HasProperties<MyType, "b">>(); // nop
assertFalse<HasProperties<MyType, "b">>(); // ok
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
import { assert, HasProperties, Extends, Equals, Not } from "typescript-test-utils";

HasProperties<{ a: string, b: number }, "a" | "b"> // true
HasProperties<{ a: string, b: number }, "a" | "c"> // false

Extends<{ a: string, b: string }, { a: string }> // true
Extends<{ a: string, b: string }, { c: string }> // false

Equals<{ a: string }, { a: string }> // true
Equals<{ a: string, b: string }, { a: string }> // false

Not<true> // false
Not<false> // true

Not<Equals<{ a: string, b: string }, { a: string }>> // true
```

## Adding your own assertions

You only need to make a type that returns true or false, for example:

```ts
type Not<T extends boolean> = T extends true ? false : true;
```

or

```ts
type Extends<T, K> = T extends K ? true : false;
```

These are the definitions of the `Not` and `Extends` helpers
