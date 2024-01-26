import { Type } from '@sinclair/typebox';
import { TypeCompiler } from '@sinclair/typebox/compiler';

const schema = Type.Array(Type.Integer(), { minItems: 3 });
const T = TypeCompiler.Compile(schema);

test('typebox', () => {
  const data = [123, 321, 123] as unknown;
  if (T.Check(data)) {
    // expected: [number, number, number, ...number[]]
    // actual: number[]
    const k = data; // number[]
    // number | undefined
    // minItems: 3니까 number로 해줬으면
    const x = data[0];
  }
  expect(T.Check(data)).toBe(true);
});
