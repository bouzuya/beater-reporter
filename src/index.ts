import { ChildProcess } from 'child_process';
import { red, green } from 'colo';
import * as setBlocking from 'set-blocking';
import { Reporter as IReporter } from './reporter';
import { console } from './console';

export default class Reporter implements IReporter {
  // file = test (test.js)
  // test = sub test (test('sub-test', done => /* ... */))
  private totalTestNum: number;

  constructor() {
    // FIXME: workaround for https://github.com/nodejs/node/pull/6773
    setBlocking(true);

    this.totalTestNum = 0;
  }

  finished(
    files: string[],
    errors: { [file: string]: Error[]; }
  ): void {
    Object
      .keys(errors)
      .map(file => [file, errors[file]])
      .forEach(([file, errors]: [string, Error[]]) => {
        if (errors.length === 0) return;
        console.log(`${red('✗ failure: ')}${file}`);
        errors.forEach(({ name, message, stack }) => {
          // TODO: use stack option
          if (false && stack) {
            console.log(stack);
          } else {
            console.log(`${name}: ${message}`);
          }
        });
      });

    const hasError = Object.keys(errors).some(file => errors[file].length > 0);
    const totalFileNum = files.length;
    const failedFileNum = Object
      .keys(errors).filter(file => errors[file].length > 0).length;
    const totalTestNum = this.totalTestNum;
    const failedTestNum = Object
      .keys(errors).reduce((count, file) => count + errors[file].length, 0);
    const summary = hasError
      ? red(
        `✗ ${failedFileNum} of ${totalFileNum} files` +
        `, ${failedTestNum} of ${totalTestNum} tests failed`
      )
      : green(`✓ ${totalFileNum} files ${totalTestNum} tests completed`);
    console.log(summary);
  }
  started(files: string[]): void {
    // NOTE: this.totalFileNum = totalFileNum;
    console.log(`${files.length} files`);
  }

  fileFinished(file: string, errors: Error[]): void {
    if (errors.length === 0) {
      console.log(`${green('✓ success: ')}${file}`);
    }
  }

  fileStarted(_file: string): void {
    // do nothing
  }

  testFinished(_file: string, _test: string, _error?: Error): void {
    this.totalTestNum += 1;
  }

  testStarted(_file: string, _test: string): void {
    // do nothing
  }
}
