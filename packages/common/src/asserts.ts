export function assert(
  condition: boolean,
  message: string = "Assertion error"
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

export function assertNotNull<T>(
  val: T,
  message: string = "Unexpected null"
): asserts val is T extends null ? never : T {
  assert(val !== null, message);
}

export function assertDefined<T>(
  val: T,
  message: string = "Unexpected null"
): asserts val is T extends undefined ? never : T {
  assert(val !== undefined, message);
}

export function assertNotNullish<T>(
  val: T,
  message: string = "Unexpected nullish value"
): asserts val is NonNullable<T> {
  assert(val != null, message);
}
