// let a:number;
// a = 99

// let b :string;
// b = "heyyo"

// let online:boolean;
// online = false

// let arr:number[];
// arr = [23,542,11,68]

// let arr1:[number, string];
// arr1 = [77, "Meoww"]

// enum role {
//     "user", "admin"
// }


// let a:any;
// a = 90;
// a = "Ashu";
// a = true;

// function Ashu(a:number, b:string = "Ashu"){
//     return false;
// }


// // type inference

// let b=88

// // type annotation

// let a:number


// type ayush = number | string

// let a:ayush;

// a = 89
// a = "Ashu"

// type status = "Success" | "error" | "Pending"

// let b:status
// b = "error"


type user = {
  name: string,
  age: number
}

let obj:user = {
  name: "Ashu",
  age: 19
}

type post = {
  desciption: string,
  image?: string,
  likes: number
}

let testpost:post = {
  desciption: "helloo",
  likes: 90
}


type MathFn = (a:number, b:number) => number;

let add:MathFn = (a,b) =>{
  return a+b;
}


// type A = {
//   a: number;
// }

// type B = {
//   b: string;
// }

// type AB = A & B

// let obj_1:AB = {
//   a: 78,
//   b: "Ashu"
// }


// interface A {
//   a:number
// }

// interface B extends A {
//   b:string
// }

// let obj_2: B = {
//   a:23,
//   b:"AKI"
// }


function addtwo<T>(a:T, b:T) :T {
  return a
}

addtwo<number>(12, 521)

interface user_1<T> {
  name: "Ashu",
  age: T
}

let ashu:user_1<number> ={
  name: "Ashu",
  age: 19
}

let userinfo = {
  name: "Kimi",
  age: 19
}

let ashuid:userid = 8291;