# Object Notes

## 1. Object Creation Methods

### Q1) Different ways to create objects in JavaScript?

1. **Object Literal**

   ```javascript
   const user = {
     name: "Satyam",
     age: 25,
   };
   ```

2. **Object Constructor**

   ```javascript
   const obj = new Object();
   ```

3. **Constructor Function**

   ```javascript
   function Person(name) {
     this.name = name;
   }
   const p1 = new Person("John");
   ```

4. **Class**

   ```javascript
   class Employee {
     constructor(name) {
       this.name = name;
     }
   }
   ```

5. **Object.create()**
   ```javascript
   const person = {
     greet() {
       console.log("Hello");
     },
   };
   const student = Object.create(person);
   ```

## 2. Important Object Methods

### Object.keys()

### Q2) What is Object.keys()?

Returns all keys in array format.

```javascript
const user = {
  name: "Satyam",
  age: 25,
};
console.log(Object.keys(user));
// Output: ["name", "age"]
```

### Object.values()

### Q3) What is Object.values()?

Returns all values.

```javascript
console.log(Object.values(user));
// Output: ["Satyam", 25]
```

### Object.entries()

### Q4) What is Object.entries()?

Converts object into key-value array.

```javascript
console.log(Object.entries(user));
// Output: [["name", "Satyam"], ["age", 25]]
```

### Object.fromEntries()

### Q5) What is Object.fromEntries()?

Converts array back into object.

```javascript
const arr = [
  ["name", "Satyam"],
  ["age", 25],
];
console.log(Object.fromEntries(arr));
// Output: { name: "Satyam", age: 25 }
```

### Object.assign()

### Q6) What is Object.assign()?

Used to merge/copy objects.

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = Object.assign({}, obj1, obj2);
console.log(result);
// Output: { a: 1, b: 2 }
```

### Object.freeze()

### Q7) What is Object.freeze()?

Cannot add/update/delete properties.

```javascript
const user = {
  name: "Satyam",
};
Object.freeze(user);
user.name = "Rahul";
console.log(user.name);
// Output: Satyam
```

### Object.seal()

### Q8) Difference between freeze() and seal()?

```javascript
const user = {
  name: "Satyam",
};
Object.seal(user);
user.name = "Rahul"; // allowed
delete user.name; // not allowed
user.age = 25; // not allowed
```

| Method | Update | Add | Delete |
| ------ | ------ | --- | ------ |
| freeze | ❌     | ❌  | ❌     |
| seal   | ✅     | ❌  | ❌     |

### hasOwnProperty()

### Q9) What is hasOwnProperty()?

Checks property exists or not.

```javascript
const user = {
  name: "Satyam",
};
console.log(user.hasOwnProperty("name"));
// Output: true
```

### Optional Chaining

### Q10) What is Optional Chaining?

Avoids undefined errors.

```javascript
const user = {
  address: {
    city: "Bangalore",
  },
};
console.log(user?.address?.city); // "Bangalore"
console.log(user?.company?.name); // undefined (no error)
```

### Destructuring

### Q11) What is Object Destructuring?

```javascript
const user = {
  name: "Satyam",
  age: 25,
};
const { name, age } = user;
console.log(name); // "Satyam"
```

### Spread Operator

### Q12) Object Spread Operator?

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = {
  ...obj1,
  ...obj2,
};
console.log(result); // { a: 1, b: 2 }
```

### Deep Copy vs Shallow Copy

### Q13) Difference?

**Shallow Copy**

```javascript
const user = {
  name: "Satyam",
  address: {
    city: "Bangalore",
  },
};
const copy = { ...user };
copy.address.city = "Delhi";
console.log(user.address.city); // "Delhi" (reference shared)
```

**Deep Copy**

```javascript
const deepCopy = structuredClone(user);
// OR
const deepCopy = JSON.parse(JSON.stringify(user));
copy.address.city = "Delhi";
console.log(user.address.city); // "Bangalore" (independent copy)
```

### this keyword in object

### Q14) Explain this keyword

```javascript
const user = {
  name: "Satyam",
  greet() {
    console.log(this.name);
  },
};
user.greet(); // "Satyam"
```

### for...in loop

### Q15) Difference between for...in and for...of?

**for...in** (for objects):

```javascript
const user = {
  name: "Satyam",
  age: 25,
};
for (let key in user) {
  console.log(key, user[key]);
}
```

**for...of** (for iterables like arrays):

```javascript
const arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}
```

### Object Comparison

### Q16) Why object comparison returns false?

```javascript
console.log({} === {});
// Output: false
```

Because objects compare by reference, not value.

### Delete Operator

### Q17) delete operator?

```javascript
const user = {
  name: "Satyam",
  age: 25,
};
delete user.age;
console.log(user); // { name: "Satyam" }
```

### Object Chaining Output Question

### Q18) Output?

```javascript
const obj = {
  a: 1,
};
const b = obj;
b.a = 100;
console.log(obj.a);
// Output: 100
```

Because both point to same reference.

### Tricky Interview Question

### Q19) Output?

```javascript
const obj = {
  name: "Satyam",
  getName() {
    return this.name;
  },
};
const fn = obj.getName;
console.log(fn()); // undefined (this lost)
```

**Fix this problem**

```javascript
const fn = obj.getName.bind(obj);
console.log(fn()); // "Satyam"
```

### Object.entries Real Interview

### Q20) Convert object into array?

```javascript
const user = {
  name: "Satyam",
  age: 25,
};
const result = Object.entries(user);
console.log(result); // [["name", "Satyam"], ["age", 25]]
```

## Frequently Asked Scenario Questions

### Q21) How to check empty object?

```javascript
const obj = {};
console.log(Object.keys(obj).length === 0); // true
```

### Q22) How to clone object?

```javascript
const clone = { ...obj };
// OR
const clone = Object.assign({}, obj);
```

### Q23) How to iterate object?

```javascript
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

## Most Important Output Questions

### Q24)

```javascript
const obj = {
  name: "Satyam",
};
Object.freeze(obj);
obj.name = "Rahul";
console.log(obj.name);
// Output: Satyam
```

### Q25)

```javascript
const obj = {
  a: 1,
};
const copy = obj;
copy.a = 50;
console.log(obj.a);
// Output: 50
```

## Advanced MNC Questions

### Q26) Difference between Map and Object?

| Feature   | Object                | Map          |
| --------- | --------------------- | ------------ |
| Keys      | String/symbol only    | Any datatype |
| Iteration | Not directly iterable | Iterable     |
| Use case  | Static data           | Dynamic data |

### Q27) What is prototype inheritance?

```javascript
const parent = {
  greet() {
    console.log("Hello");
  },
};
const child = Object.create(parent);
child.greet(); // "Hello"
```

## VERY IMPORTANT FOR INTERVIEW

### freeze vs seal

- **freeze**: Prevents any changes (add, update, delete).
- **seal**: Allows updates but not add/delete.

### shallow vs deep copy

- **Shallow**: Copies top-level, shares nested references.
- **Deep**: Copies everything recursively.

### object reference

- Objects are passed by reference, not value.

### this keyword

- Refers to the object the method belongs to.

### destructuring

- Extracts properties into variables: `const {a, b} = obj;`

### optional chaining

- Safely access nested properties: `obj?.prop?.subprop`

### object cloning

- Use spread `{...obj}` or `Object.assign({}, obj)` for shallow.

### Object.keys / values / entries

- `keys()`: Array of keys
- `values()`: Array of values
- `entries()`: Array of [key, value] pairs

### Map vs Object

- Map: Any key types, ordered, iterable; Object: String keys, unordered.

### prototype inheritance

- Objects inherit from prototypes via `__proto__` or `Object.create()`.

### bind/call/apply

- `bind`: Returns new function with bound `this`
- `call`: Invokes with specific `this` and args
- `apply`: Invokes with specific `this` and array of args

### spread operator

- Expands iterables: `{...obj}` for objects, `[...arr]` for arrays.

## Top 10 Rapid Fire Questions

1. **Can objects have duplicate keys?**  
   No, duplicate keys overwrite previous values.  
   Example: `const obj = {a:1, a:2}; console.log(obj.a); // 2`

2. **Difference between == and === in objects?**  
   Both compare references, not values. No type coercion difference for objects.  
   Example: `{x:1} == {x:1}` is `false`.

3. **Why {} === {} false?**  
   Each object literal creates a new reference in memory.

4. **What is shallow copy?**  
   Copies top-level properties, but nested objects share references.  
   Example: `const copy = {...original}; copy.nested.prop = 'changed';` affects original.

5. **What is deep copy?**  
   Recursively copies all levels, creating independent objects.  
   Example: `JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)`.

6. **Difference between seal and freeze?**  
   Seal: Can update existing props, but not add/delete. Freeze: No changes at all.

7. **How to merge objects?**  
   Use `Object.assign({}, obj1, obj2)` or `{...obj1, ...obj2}`.

8. **How to iterate object?**  
   Use `for...in`, `Object.keys(obj).forEach()`, or `Object.entries(obj).forEach()`.

9. **Difference between Object and Map?**  
   Object: String/symbol keys, not iterable. Map: Any key type, iterable, ordered.

10. **What is prototype chain?**  
    Objects inherit properties from their prototype, chaining up to `Object.prototype`.
