import * as fs from 'fs'
import * as path from 'path'

const abs = (a: number) => a > 0 ? a : -a

const solution = (input: number []): Promise<number> => {

  return new Promise((resolve) => {
  
    // split and sort each
    const left: number[] = input.filter((_num: number, index: number) => index % 2 === 0).sort()
    const right: number[] = input.filter((_num: number, index: number) => index % 2 !== 0).sort()

    const disparity: number[] = []

    // calc disparity same rank
    for(let i = 0; i < left.length; ++i ) {
      disparity.push(abs(left[i] - right[i]))
    }
  
    resolve(disparity.reduce((a:number, c:number): number => a + c))

  })
}

const inputFile = path.join(__dirname, 'input.txt')
const fileContent = fs.readFileSync(inputFile, 'utf-8')
const parsedInput = fileContent
    .split('\n')
    .filter((line) => line.trim() !== '') 
    .flatMap((line) => line.split(/\s+/).map(Number))

solution(parsedInput).then(console.log)


