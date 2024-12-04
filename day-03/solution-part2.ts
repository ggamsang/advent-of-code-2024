import * as path from 'path'
import * as fs from 'fs'


//const text = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
//const regex = /(?<!don't\.)\b(?:do)?x?mul\(\d+,\d+\)/g;

//const matches = text.match(regex) ?? []; // null 방지
//console.log(matches); // ['xmul(2,4)', 'mul(8,5)']


//const text = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"
//const regex = /mul\(\d+,\d+\)/g
///{do|}.*mul\([0-9]+,[0-9]+\)/g
//const matches = text.match(regex)
/*let sum = 0
if(matches) {
  matches?.map((match: string) => {
    const chunk: any = match.match(/[0-9]+,[0-9]+/)
    chunk.map((blob:any) => {
      const tmp = blob.split(",");
      const [a, b] = tmp;
      sum += (a * b)
    })
  })
}
console.log(sum)
*/
//console.log(matches)

const solution = (sentences: string[]): Promise<number> => {
  return new Promise((resolve) => {
    const regex = /(do\(\)|don't\(\)|mul\((\d+),(\d+)\))/g
    let isMulEnabled = true
    let sum: number = 0

    for (const sentence of sentences) {
      const matches = sentence.matchAll(regex)

      for (const match of matches) {
        const [fullMatch, instruction, a, b] = match

        if (instruction === "do()") {
          isMulEnabled = true
        } else if (instruction === "don't()") {
          isMulEnabled = false
        } else if (isMulEnabled && a && b) {
          sum += parseInt(a, 10) * parseInt(b, 10)
        }
      }
    }

    resolve(sum)
  })
}



const inputFile = path.join(__dirname, 'input.txt')
const fileContent = fs.readFileSync(inputFile, 'utf-8')
const parsedInput = fileContent
  .split('\n')
  .filter((line) => line.trim() !== '')
 // .map((line) =>
    // console.log(line.split(/\s+/)))
   // line.split(/\s+/).map(Number))

// console.log(parsedInput)

solution(parsedInput).then(console.log)

