export interface Error {
  columnNumber: number | null;
  fileName: string | null;
  lineNumber: number | null;
  message: string;
  name: string;
  stack: string | null;
}
