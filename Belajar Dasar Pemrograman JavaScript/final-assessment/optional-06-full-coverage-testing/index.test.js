import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function - valid numbers', (t) => {
  assert.strictEqual(sum(2, 3), 5, '2 + 3 should equal 5');
  assert.strictEqual(sum(0, 0), 0, '0 + 0 should equal 0');
});

test('sum function - invalid inputs', (t) => {
  assert.strictEqual(sum('2', 3), 0, 'String input should return 0');
  assert.strictEqual(sum(2, '3'), 0, 'String input should return 0');
  assert.strictEqual(sum(null, undefined), 0, 'Null and undefined should return 0');
});

test('sum function - negative numbers', (t) => {
  assert.strictEqual(sum(-1, 3), 0, 'Negative input should return 0');
  assert.strictEqual(sum(2, -3), 0, 'Negative input should return 0');
});