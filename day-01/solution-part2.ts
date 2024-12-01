import * as fs from 'fs'
import * as path from 'path'

const countNum = (ary: number[], num: number) => ary.reduce((count, current) => current === num ? count + 1 : count, 0)

const solution = (input: number []): Promise<number> => {

  return new Promise((resolve) => {
  
    // split and sort each
    const left: number[] = input.filter((_num: number, index: number) => index % 2 === 0).sort()
    const right: number[] = input.filter((_num: number, index: number) => index % 2 !== 0).sort()

    const similarity: number[] = []

    // calc similarity
    for (const lefy of left) {
      similarity.push(lefy * countNum(right, lefy))
    } 
  
    resolve(similarity.reduce((a:number, c:number): number => a + c))

  })
}

const inputFile = path.join(__dirname, 'input.txt')
const fileContent = fs.readFileSync(inputFile, 'utf-8')
const parsedInput = fileContent
    .split('\n')
    .filter((line) => line.trim() !== '') 
    .flatMap((line) => line.split(/\s+/).map(Number))

solution(parsedInput).then(console.log)


