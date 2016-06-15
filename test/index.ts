import assert from 'power-assert';
import { test } from 'beater';
import { Error, Message, Reporter, Test, TestResult } from '../src/';

test('Reporter', () => {
  class MyReporter implements Reporter {
    started(): void { }
    finished(results: TestResult[]): void { }
    testStarted(test: Test): void { }
    testFinished(result: TestResult): void { }
  }
  assert(MyReporter);
});
