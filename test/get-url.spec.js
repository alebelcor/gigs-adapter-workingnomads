'use strict';

import test from 'ava';

import getUrl from '../lib/get-url';

test('it should return null', t => {
  t.deepEqual(null, getUrl({}));
  t.deepEqual(null, getUrl({slug: ''}));
});

test('it should return the url', t => {
  t.deepEqual('https://www.workingnomads.co/jobs/foo/bar', getUrl({slug: 'foo/bar'}));
});
