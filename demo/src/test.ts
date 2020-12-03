/*
 * @Date: 2020-12-02 09:39:13
 * @LastEditors: sam
 * @LastEditTime: 2020-12-02 10:05:37
 * @FilePath: /chart-demo/demo/src/test.ts
 */

interface Person {
  readonly name: string
  age: number
  [propName: string]: number | string | boolean
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  tall: 1.78,
  sex: false,
}

let fibonacci: number[] = [1, 2, true, 3, 4]
fibonacci.push('string')

let fibonacci2: Array<number> = [1, 2, 3, 4]

interface NumberArray {
  [index: number]: number
}

let fibonacci3: NumberArray = [1, 2, 3, 4]

function sum() {
  let args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
  let args2: IArguments = arguments
}
let list: any[] = ['string', 3, { a: 3 }]
