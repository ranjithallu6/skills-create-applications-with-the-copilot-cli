#!/usr/bin/env node
// Node.js CLI Calculator
// Supports: addition, subtraction, multiplication, division

const [,, operation, ...args] = process.argv;

function printUsage() {
  console.log('Usage: calculator <add|subtract|multiply|divide> num1 num2');
  console.log('Example: calculator add 2 3');
}

if (!operation || args.length !== 2) {
  printUsage();
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.log('Both arguments must be numbers.');
  process.exit(1);
}

switch (operation) {
  case 'add':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 'subtract':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 'multiply':
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 'divide':
    if (num2 === 0) {
      console.log('Error: Division by zero.');
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    printUsage();
    process.exit(1);
}