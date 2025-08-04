# 🗂️ Session Storage: In-Depth Guide

## 🔍 What is `sessionStorage`?

- `sessionStorage` is part of the Web Storage API, providing temporary client-side storage of key-value pairs.
- Data **persists only for the duration of the page session** (as long as the browser tab is open).
- Each tab/window has its own separate `sessionStorage`.
- **Capacity:** Typically 5-10 MB per origin.
- **Data type:** Only strings are stored; objects/arrays must be serialized.

---

## 🆚 `sessionStorage` vs `localStorage` vs Cookies

| Feature           | `sessionStorage`    | `localStorage`      | Cookies           |
|-------------------|---------------------|---------------------|-------------------|
| Persistence       | Until tab closed    | Until cleared       | Set by expiry     |
| Capacity          | ~5-10 MB            | ~5-10 MB            | ~4 KB             |
| Accessible by JS  | Yes                 | Yes                 | Yes               |
| Sent to server    | No                  | No                  | Yes (with requests)|
| Use case          | Per-tab/session     | Long-term storage   | Auth, server comm.|

---

## 🛠️ Common Operations with `sessionStorage`

### 1. Set Data

```js
sessionStorage.setItem('key', 'value');
```
- Stores a string value under a key.

### 2. Get Data

```js
const value = sessionStorage.getItem('key');
```
- Returns the value for the key, or `null` if not found.

### 3. Remove Data

```js
sessionStorage.removeItem('key');
```
- Deletes the key and its value.

### 4. Get Number of Items

```js
const length = sessionStorage.length;
```
- Returns the count of stored items.

### 5. Get Key by Index

```js
const key = sessionStorage.key(index);
```
- Retrieves the key at the given index.

### 6. Clear All Data

```js
sessionStorage.clear();
```
- Removes all keys and values.

---

## 🧩 Storing Arrays & Objects

- **Why?** `sessionStorage` only stores strings.
- **How?** Use `JSON.stringify()` to store, `JSON.parse()` to retrieve.

```js
// Store array/object
const user = { name: "Bob", age: 25 };
sessionStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse
const userObj = JSON.parse(sessionStorage.getItem('user'));
console.log(userObj.name); // "Bob"
```

---

## 💡 Practical Tips & Best Practices

- **Sensitive data:** Avoid storing sensitive information (still accessible by JS).
- **Tab isolation:** Each tab/window has its own `sessionStorage`—useful for multi-tab workflows.
- **Graceful fallback:** Always check for `null` when reading.
- **Storage events:** Listen for `storage` events to sync data across tabs (note: `sessionStorage` events only fire within the same tab).

```js
window.addEventListener('storage', (event) => {
  // sessionStorage events are not shared across tabs
  console.log(event.key, event.oldValue, event.newValue);
});
```

---

## 📝 Example: All-in-One

```js
// Set
sessionStorage.setItem('sessionUser', 'john doe');
sessionStorage.setItem('sessionAge', '28');

// Get
const user = sessionStorage.getItem('sessionUser');
const age = sessionStorage.getItem('sessionAge');

// Remove
sessionStorage.removeItem('sessionUser');

// Count
const count = sessionStorage.length;

// Clear
sessionStorage.clear();

// Store array
const arr = [10,20,30];
sessionStorage.setItem('arr', JSON.stringify(arr));

// Retrieve array
const getArr = JSON.parse(sessionStorage.getItem('arr'));
console.log(getArr); // [10,20,30]
```

---

## 🚀 Use Cases

- Temporary form data (lost on tab close).
- Per-tab authentication or state.
- Multi-step wizards or checkout flows.
- Data that should not persist after the tab is closed.

---

## ⚠️ Limitations

- Data is lost when the tab or window is closed.
- Not suitable for long-term storage.
- Synchronous API (can block main thread if misused).
- Not secure for sensitive data.

---

## 🏁 Summary

- Use `sessionStorage` for temporary, per-tab/session, non-sensitive data.
- Prefer `localStorage` for persistent data across sessions.
- Use cookies for server communication (e.g., authentication).
- Always serialize/deserialize objects and arrays.

---
