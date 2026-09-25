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


let a:any;
a = 90;
a = "Ashu";
a = true;

function Ashu(a:number, b:string = "Ashu"){
    return false;
}

interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);