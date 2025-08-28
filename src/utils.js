// src/utils.js

// BAD: using eval is a security risk
function runUserCode(input) {
  return eval(input);
}

// GOOD: safe function
function add(a, b) {
  return a + b;
}

// GOOD: sanitizing user input (mock example)
function safeQuery(userInput) {
  const sanitized = userInput.replace(/['"]/g, "");
  return `SELECT * FROM users WHERE name = '${sanitized}'`;
}

module.exports = { runUserCode, add, safeQuery };
