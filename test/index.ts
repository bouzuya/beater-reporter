import assert from 'power-assert';
import beater from 'beater';
import { Error, Message, Reporter, Test, TestResult } from '../src/';

const { test } = beater();

test('Reporter', () => {
  class MyReporter implements Reporter {
    started(): void { }
    finished(results: TestResult[]): void { }
    testStarted(test: Test): void { }
    testFinished(result: TestResult): void { }
  }
  assert(MyReporter);
});
