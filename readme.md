# JavaScript Runtimes Explained

This document explains **JavaScript runtimes** in simple words and compares  
**Browser (Chrome – V8)**, **Node.js**, **Deno**, and **Bun**.

---

## What is a JavaScript Runtime?

JavaScript **cannot run by itself**.

A **JavaScript runtime** is an environment that provides:
- A **JavaScript Engine** → executes JS code
- **APIs** → like `fetch`, `setTimeout`, file system, etc.
- An **Event Loop** → handles asynchronous operations

Without a runtime, JavaScript is just plain text.

---

## JavaScript Engine vs Runtime

| Term | Meaning |
|-----|--------|
| JavaScript Engine | Converts JavaScript into machine code |
| JavaScript Runtime | Engine + APIs + Event Loop |

Example:
- **V8** → JavaScript Engine
- **Chrome / Node.js** → JavaScript Runtime

---

## Browser Runtime (Chrome – V8)

### Purpose
Runs JavaScript **inside the browser**

### Provides
- V8 JavaScript Engine
- DOM APIs (`document`, `window`)
- Browser APIs (`alert`, `localStorage`, `fetch`)

### Example
```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Hello from Browser!");
});
