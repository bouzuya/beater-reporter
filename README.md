# beater-reporter

[beater][bouzuya/beater] reporter interface for TypeScript.

See: [bouzuya/beater][] README.

Note:

- `beater-reporter@<=1.0` ... `beater@<=7.x`
- `beater-reporter@<=0.4` ... `beater@<=5.x`
- `beater-reporter@<=0.3` ... `beater@<=0.4.x`
- `beater-reporter@<=0.2` is beater default reporter implementation (is not interface). [bouzuya/beater-cli][] default reporter moved into [bouzuya/beater-cli-reporter][].

[bouzuya/beater]: https://github.com/bouzuya/beater
[bouzuya/beater-cli]: https://github.com/bouzuya/beater-cli
[bouzuya/beater-cli-reporter]: https://github.com/bouzuya/beater-cli-reporter

## Installation

```
$ npm install --save-dev beater-reporter
```

## Usage

```ts
// index.ts
import { runWithOptions } from 'beater'; // beater v5.x
import { TestReporter } from 'beater-reporter';

const reporter: TestReporter = () => {
  /* ... */
};

const test1 = test(/* ... */);
runWithOptions({ reporter: reporter() })([test1]).catch(() => process.exit(1));
```

## Badges

[![NPM][npm-badge-url]][npm-url]
[![Travis CI][travis-ci-badge-url]][travis-ci-url]

[npm-badge-url]: https://img.shields.io/npm/v/beater-reporter
[npm-url]: https://www.npmjs.com/package/beater-reporter
[travis-ci-badge-url]: https://img.shields.io/travis/bouzuya/beater-reporter
[travis-ci-url]: https://travis-ci.org/bouzuya/beater-reporter

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([https://bouzuya.net/][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: https://bouzuya.net/
