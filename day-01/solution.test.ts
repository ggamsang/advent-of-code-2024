import { solution } from './solution'
import * as fs from 'fs'
import * as path from 'path'

// 테스트 데이터
const testInput = [ 3, 4, 4, 3, 2, 5, 1, 3, 3, 9, 3, 3]
const expectedOutput = 11

test('solution function works correctly', async () => {
  expect(await solution(testInput)).toBe(expectedOutput)
})

test('solution function works correctly with input.txt file', async () => {

  const inputFile = path.join(__dirname, 'input.txt')

  const fileContent = fs.readFileSync(inputFile, 'utf-8')

  const parsedInput = fileContent
    .split('\n')
    .flatMap((line) =>
      line
        .trim()
        .split(/\s+/)
        .map(Number)
    )
  console.log(parsedInput)
  const result = await solution(parsedInput);

  console.log('Result from input.txt:', result);

  expect(typeof result).toBe('number');
});
