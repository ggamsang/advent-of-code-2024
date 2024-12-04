import * as path from 'path'
import * as fs from 'fs'

const text = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
const regex = /mul\([0-9]+,[0-9]+\)/g
const matches = text.match(regex)
let sum = 0
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



const solution = (sentences: string[]): Promise<number> => {
  return new Promise((resolve) => {
    const regex = /mul\([0-9]+,[0-9]+\)/g
    let sum: number = 0
    for(const sentence of sentences) {
        const matches = sentence.match(regex)
        if(matches) {
          matches?.map((match: string) => {
            const chunk: any = match.match(/[0-9]+,[0-9]+/)
            chunk.map((blob:any)=>{
              const [a, b] = blob.split(",")
              sum += (a * b)
            })
        })
        }
    }
    resolve(sum)
  })
}
solution([text]).then(console.log)


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

