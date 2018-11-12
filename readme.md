# gigs-adapter-workingnomads

> A [gigs](https://github.com/alebelcor/gigs) adapter for [Working Nomads](https://www.workingnomads.co)

## Install

Ensure you have [Node.js](https://nodejs.org) version 10+ installed. Then run the following:

```bash
npm install --save gigs
npm install --save gigs-adapter-workingnomads
```

## Usage

```js
const gigs = require('gigs');

const adapter = require('gigs-adapter-workingnomads');

gigs([adapter])
  .process()
  .then(gigs => {
    console.log(gigs);
    //=> [ {title: 'Senior Node.js Developer'}, ... ]
  });
```

## Related

* [gigs](https://github.com/alebelcor/gigs) - A jobs/careers/openings/positions aggregator

## License

MIT © Alejandro Beltrán

## Disclaimer

This was made for illustrative purposes.
I do not own the content generated by this tool.
All rights belong to their respective owners.
No copyright infringement intended.
