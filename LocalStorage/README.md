# 📦 Local Storage: In-Depth Guide

## 🔍 What is `localStorage`?

- `localStorage` is part of the Web Storage API, enabling persistent client-side storage of key-value pairs in the browser.
- Data **never expires** (unless explicitly cleared), surviving browser restarts and tabs.
- Storage is **scoped to the origin** (protocol + domain + port).
- **Capacity:** Typically 5-10 MB per origin (much larger than cookies).
- **Data type:** Only strings are stored; objects/arrays must be serialized.

---

## 🆚 `localStorage` vs `sessionStorage` vs Cookies

| Feature           | `localStorage`      | `sessionStorage`    | Cookies           |
|-------------------|--------------------|---------------------|-------------------|
| Persistence       | Until cleared      | Until tab closed    | Set by expiry     |
| Capacity          | ~5-10 MB           | ~5-10 MB            | ~4 KB             |
| Accessible by JS  | Yes                | Yes                 | Yes               |
| Sent to server    | No                 | No                  | Yes (with requests)|
| Use case          | Long-term storage  | Per-tab/session     | Auth, server comm.|

---

## 🛠️ Common Operations with `localStorage`

### 1. Set Data

```js
localStorage.setItem('key', 'value');
```
- Stores a string value under a key.

### 2. Get Data

```js
const value = localStorage.getItem('key');
```
- Returns the value for the key, or `null` if not found.

### 3. Remove Data

```js
localStorage.removeItem('key');
```
- Deletes the key and its value.

### 4. Get Number of Items

```js
const length = localStorage.length;
```
- Returns the count of stored items.

### 5. Get Key by Index

```js
const key = localStorage.key(index);
```
- Retrieves the key at the given index.

### 6. Clear All Data

```js
localStorage.clear();
```
- Removes all keys and values.

---

## 🧩 Storing Arrays & Objects

- **Why?** `localStorage` only stores strings.
- **How?** Use `JSON.stringify()` to store, `JSON.parse()` to retrieve.

```js
// Store array/object
const user = { name: "Alice", age: 30 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse
const userObj = JSON.parse(localStorage.getItem('user'));
console.log(userObj.name); // "Alice"
```

---

## 💡 Practical Tips & Best Practices

- **Avoid sensitive data:** Never store passwords or tokens in `localStorage` (vulnerable to XSS).
- **Version your data:** Use versioned keys to handle schema changes.
- **Graceful fallback:** Always check for `null` when reading.
- **Storage events:** Listen for `storage` events to sync data across tabs.

```js
window.addEventListener('storage', (event) => {
  // Respond to changes in localStorage from other tabs
  console.log(event.key, event.oldValue, event.newValue);
});
```

---

## 📝 Example: All-in-One

```js
// Set
localStorage.setItem('name', 'satyam agrahari');
localStorage.setItem('age', '22');

// Get
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// Remove
localStorage.removeItem('name');

// Count
const count = localStorage.length;

// Clear
localStorage.clear();

// Store array
const arr = [1,2,3,4,5];
localStorage.setItem('arr', JSON.stringify(arr));

// Retrieve array
const getArr = JSON.parse(localStorage.getItem('arr'));
console.log(getArr); // [1,2,3,4,5]
```

---

## 🚀 Use Cases

- Caching API responses for offline use.
- Saving user preferences (theme, language).
- Storing form data temporarily.
- Persisting shopping cart items.

---

## ⚠️ Limitations

- Not secure for sensitive data.
- Synchronous API (can block main thread if misused).
- Data is accessible by any script on the same origin.

---

## 🏁 Summary

- Use `localStorage` for persistent, client-side, non-sensitive data.
- Prefer `sessionStorage` for per-tab/session data.
- Use cookies for server communication (e.g., authentication).
- Always serialize/deserialize objects and arrays.

---
