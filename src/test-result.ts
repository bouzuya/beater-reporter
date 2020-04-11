import { Error } from "./error";
import { Test } from "./test";

interface TestResult {
  test: Test;
  error?: Error;
}

export { TestResult };
