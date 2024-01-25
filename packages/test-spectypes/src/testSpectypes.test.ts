import { array, limit, map, number, tuple, unknown } from "spectypes";

test("tuple", () => {
  const check = tuple(number, number, number);
  const checked = check([1, 2, 3]);

  expect(checked).toEqual({ tag: "success", success: [1, 2, 3] });

  if (checked.tag === "success") {
    const result = checked.success; // readonly [number, number, number]
  }
});
