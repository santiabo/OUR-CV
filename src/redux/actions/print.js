export const PRINT = "PRINT";

export const print = (printing) => {
  return {
    type: PRINT,
    printing
  }
}