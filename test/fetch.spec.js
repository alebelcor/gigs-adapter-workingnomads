'use strict';

import test from 'ava';
import proxyquire from 'proxyquire';

test('it should return a promise', t => {
  const fetch = proxyquire('../lib/fetch', {
    got: {
      get: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              body: {hits: {hits: []}}
            });
          }, 250);
        });
      }
    }
  });

  t.true(typeof fetch({}).then === 'function'); // eslint-disable-line promise/prefer-await-to-then
});

test('it should accumulate/flatten the results', async t => {
  let count = 0;
  const fetch = proxyquire('../lib/fetch', {
    got: {
      get: () => {
        const body = {hits: {hits: [{_source: {title: 'foo'}}, {_source: {title: 'bar'}}]}};

        return new Promise(resolve => {
          setTimeout(() => {
            if (count < 2) {
              resolve({
                body
              });
            } else {
              resolve({
                body: {hits: {hits: []}}
              });
            }
            count += 1;
          }, 250);
        });
      }
    }
  });

  const results = await fetch({gotOptions: {query: {from: 0, size: 4}}});

  t.true(Array.isArray(results));
  t.deepEqual(4, results.length);
});
