'use strict';

import test from 'ava';

import getFilteredResponse from '../lib/get-filtered-response';

test('it should return an array of json objects', t => {
  t.deepEqual([{foo: 'bar'}, {bar: 'foo'}], getFilteredResponse({hits: {hits: [{_source: {foo: 'bar'}}, {_source: {bar: 'foo'}}]}}));
});

test('it should filter out expired entries', t => {
  t.deepEqual([], getFilteredResponse({hits: {hits: [{_source: {expired: true}}, {_source: {expired: true}}]}}));
});
