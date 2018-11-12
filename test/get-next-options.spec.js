'use strict';

import test from 'ava';
import isPlainObj from 'is-plain-obj';

import getNextOptions from '../lib/get-next-options';

test('it should return a plain object', t => {
  t.true(isPlainObj(getNextOptions({gotOptions: {query: {from: 0}}})));
});

test('it should return the options with the next page', t => {
  let options;

  options = getNextOptions({gotOptions: {query: {from: 0, size: 10}}});
  t.deepEqual(10, options.gotOptions.query.from);

  options = getNextOptions({gotOptions: {query: {from: 50, size: 50}}});
  t.deepEqual(100, options.gotOptions.query.from);

  options = getNextOptions({gotOptions: {query: {from: 999, size: 1}}});
  t.deepEqual(1000, options.gotOptions.query.from);
});
