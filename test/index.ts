import assert from 'assert';
import {
  Error,
  Test,
  TestReporter,
  TestResult
} from '../src';

const reporter: TestReporter = {
  finished(_: TestResult[]): void {
    // ...
  },

  started(_: Test[]): void {
    // ...
  },

  testFinished(result: TestResult): void {
    if (typeof result.error !== 'undefined') {
      const e: Error = result.error;
      assert(e.columnNumber === null || typeof e.columnNumber === 'number');
      assert(e.fileName === null || typeof e.fileName === 'string');
      assert(e.lineNumber === null || typeof e.lineNumber === 'number');
      assert(typeof e.message === 'string');
      assert(typeof e.name === 'string');
      assert(e.stack === null || typeof e.stack === 'string');
    }
  },

  testStarted(test: Test): void {
    assert(typeof test === 'function');
    assert(typeof test.name === 'string');
  }
}

assert(reporter);
