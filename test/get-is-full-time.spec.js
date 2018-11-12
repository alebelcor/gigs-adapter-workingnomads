'use strict';

import test from 'ava';

import getIsFullTime from '../lib/get-is-full-time';

test('it should return true', t => {
  t.true(getIsFullTime({position_type: 'ft'})); // eslint-disable-line camelcase
});

test('it should return false', t => {
  t.false(getIsFullTime({}));
  t.false(getIsFullTime({position_type: ''})); // eslint-disable-line camelcase
});
