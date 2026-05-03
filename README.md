# TypeScript Tutorial

TypeScript is a strongly typed superset of JavaScript. It adds optional static typing, syntax checks, and modern language features while compiling down to plain JavaScript.

- TypeScript: strongly typed language. You can declare types explicitly or rely on type inference. The compiler checks types before the code runs, which helps catch errors early.
- JavaScript: dynamically typed language. Variables can hold values of any type and types are determined at runtime. This makes JavaScript more flexible but can lead to runtime errors if types are used incorrectly.

Key concepts:

- Static typing: type checking happens at compile time. TypeScript verifies that the code follows the declared types before generating JavaScript.
- Dynamic typing: type checking happens at runtime. JavaScript evaluates types as the program runs, and values can change type over time.

Example:

- TypeScript:
  ```ts
  let count: number = 5;
  count = 10; // valid
  // count = 'hello'; // error: Type 'string' is not assignable to type 'number'
  ```

- JavaScript:
  ```js
  let count = 5;
  count = 'hello'; // allowed at runtime
  ```

TypeScript is useful for building larger applications because it provides better tooling, readability, and fewer type-related bugs.

## `interface` vs `type`: When to use each?

In TypeScript, both `interface` and `type` can be used to define the shape of objects and functions. While they are very similar and often interchangeable, there are some key differences:

### `interface`
- **Object shapes only:** Interfaces are specifically designed to declare the shapes of objects.
- **Declaration merging:** If you define multiple interfaces with the same name, TypeScript will automatically merge them into one. This is extremely useful for extending built-in types or types from third-party libraries.
- **Extending:** Interfaces can extend other interfaces or types using the `extends` keyword.

### `type` (Type Aliases)
- **More flexible:** Type aliases can describe any type, including primitives (string, number), union types, intersection types, and tuples, not just objects.
- **No declaration merging:** You cannot declare the same type alias twice; it will result in an error.
- **Intersections:** Instead of `extends`, type aliases use the `&` operator to combine types (intersection).

### Summary: Which one should you choose?
- **Use `interface`** by default for defining object shapes, API contracts, or classes. It provides better error messages in some cases and allows for declaration merging.
- **Use `type`** when you need to define a union type (e.g., `string | number`), a tuple, or when you need to use complex utility types (mapped types, conditional types, etc.).

**Example of `interface`:**
```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
```

**Example of `type`:**
```ts
type ID = string | number; // Union type (impossible with interface)
type Point = [number, number]; // Tuple
```


##Resources:
[https://youtu.be/gieEQFIfgYc?si=i534gIWQOUconM1o]
[Documentation: https://www.typescriptlang.org/]