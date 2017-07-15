# beater-reporter

[beater][bouzuya/beater] reporter interface.

See: [bouzuya/beater][] README.

Note:

- `beater-reporter@<=0.4` ... `beater@<=5.x`
- `beater-reporter@<=0.3` ... `beater@<=0.4.x`
- `beater-reporter@<=0.2` is beater default reporter implementation (is not interface). [bouzuya/beater-cli][] default reporter moved into [bouzuya/beater-cli-reporter][].

[bouzuya/beater]: https://github.com/bouzuya/beater
[bouzuya/beater-cli]: https://github.com/bouzuya/beater-cli
[bouzuya/beater-cli-reporter]: https://github.com/bouzuya/beater-cli-reporter

## Installation

```
$ npm install beater-reporter
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

[![npm version][npm-badge-url]][npm-url]
[![Circle CI][circleci-badge-url]][circleci-url]

[npm-badge-url]: https://badge.fury.io/js/beater-reporter.svg
[npm-url]: https://www.npmjs.com/package/beater-reporter
[circleci-badge-url]: https://circleci.com/gh/bouzuya/beater-reporter.svg?style=svg
[circleci-url]: https://circleci.com/gh/bouzuya/beater-reporter

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
