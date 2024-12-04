import * as fs from 'fs'
import * as path from 'path'

const sample: number[][] =
  [[7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9]
  ]

// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.
const increDecreSafty = (diff: number): boolean => {
  return Math.abs(diff) >= 1 && Math.abs(diff) <= 3
}
type IcrementType = 1
type DescrementType = -1
type DeltaType = DescrementType | 0 | IcrementType
const checkIncrement = (nums: DeltaType[]): boolean => {
  return nums.every(num => num === 1) || nums.every(num => num === -1)
}
const validationSafety = (levels: number[]): boolean => {

  const diffs: number[] = []
  const incrementDecrement: DeltaType[] = []
  for (let i = 0; i < levels.length - 1; i++) {
    const diff: number = levels[i + 1] - levels[i]
    diffs.push(diff)
    incrementDecrement.push((diff === 0 ? 0 : (diff / Math.abs(diff))) as DeltaType)
  }
  const inc = checkIncrement(incrementDecrement)
  const safe = diffs.every(num => increDecreSafty(num))
  console.log(inc ? "up or down" : "none", safe ? "safe" : "not-safe", levels, diffs, incrementDecrement)//, isNotSafe)// ? "not safe" : "safe")

  return safe && inc
}

const solution = (nums: number[][]): Promise<number> => {
  return new Promise((resolve) => {
    const safety = nums.filter((levels: number[]) => validationSafety(levels))
    resolve(safety.length)
  })
}
solution(sample).then(console.log)

const inputFile = path.join(__dirname, 'input.txt')
const fileContent = fs.readFileSync(inputFile, 'utf-8')
const parsedInput = fileContent
  .split('\n')
  .filter((line) => line.trim() !== '')
  .map((line) =>
    // console.log(line.split(/\s+/)))
    line.split(/\s+/).map(Number))

// console.log(parsedInput)

solution(parsedInput).then(console.log)
