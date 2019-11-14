import assert from 'assert';
import {
  Error,
  Test,
  TestFn,
  TestMeta,
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
      assert(e);
    }
  },

  testStarted(test: Test): void {
    const fn: TestFn = test.fn;
    const meta: TestMeta = test.meta;
    assert(fn);
    assert(meta);
  }
}

assert(reporter);
