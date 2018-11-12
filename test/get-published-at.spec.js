'use strict';

import test from 'ava';

import getPublishedAt from '../lib/get-published-at';

test('it should return the date when the job was published', t => {
  t.deepEqual('2018-11-11', getPublishedAt({pub_date: '2018-11-11T19:48:29.127880+00:00'})); // eslint-disable-line camelcase
  t.deepEqual('2017-05-19', getPublishedAt({pub_date: '2017-05-19T02:24:28+00:00'})); // eslint-disable-line camelcase
});

test('it should return null', t => {
  t.deepEqual(null, getPublishedAt({}));
});
