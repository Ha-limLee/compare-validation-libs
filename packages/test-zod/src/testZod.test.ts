import { z } from 'zod';

const schema = z.tuple([z.number(), z.number()]).rest(z.number()).readonly();

test('success', () => {
  const data = [1, 2, 3];
  const parsed = schema.safeParse(data);
  if (parsed.success) {
    const successData = parsed.data; // readonly [number, number, ...number[]]
    const x0 = successData[0]; // number
    const x1 = successData[1]; // number
    const x2 = successData[2]; // number
    const x3 = successData[3]; // number | undefined
  } else {
    const fail = parsed.error;
  }
  expect(parsed).toEqual({ success: true, data: [1, 2, 3] });
});

test('fail', () => {
  const data = [1];
  const parsed = schema.safeParse(data);
  expect(parsed.success).toBe(false);
})
