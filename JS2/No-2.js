console.log("Method Javascript \n")

console.log("No.1 toUpperCase()")// untuk mengubah string yang diinput menjadi huruf kapital//
var word = "Fazztrack";
var hurufKapital = word.toUpperCase();
console.log(hurufKapital); // OUTPUT: FAZZTRACK 

console.log("\n")

console.log("No.2 Split()")//  untuk memisahkan suatu string menjadi array //
const city = "bandung, jakara";
const listcity = city.split(", ");
console.log(listcity); // OUTPUT: ["bandung", "jakarta"]
 
console.log("\n") 

console.log("No.3 Push()") // untuk menambahkan suatu elemen di akhir array
var electronic = ["radio", "television", "hp"];
electronic.push("pc");
console.log(electronic); // OUTPUT: ["radio", "television", "hp", "pc"]

console.log("\n") 

console.log("No.4 round()")
let num = 10.8;
let roundedNum = Math.round(num);
console.log(roundedNum); // OUTPUT:10

console.log("\n")

console.log("No.5 spilce() ")
const number= ['1', '2', '3']
number.splice(0, 0, '0') 
// menambah 1 data ke di index 0 
console.log(number) // OUTPUT [ '0', '1', '2', '3' ]

console.log("\n")

console.log("No.6 POP()") // menghapus data terakhir array
const mynumber= [1, 2, 3]
mynumber.pop();
console.log(mynumber)// OUTPUT : [1, 2]

console.log("\n")

console.log("No.7 Concat")
let a = "Selamat"
let b = "Sukses"
let c = "Talent"
let d = "Fazztrack"

let Gabung = a.concat(b, c, d)
console.log(Gabung) // OUTPUT :SelamatSuksesTalentFazztrak

console.log("\n")

console.log("No.8 length()") // untuk menghitung panjang karakter
const materials = 'Fazztrack'
console.log(materials.length);// OUTPUT : 9

console.log("\n")

console.log("No.9 tofixed()")
let Number =45
let NumberDec = Number.toFixed(3)// untuk memberikan angka nol di belakang koma (,)
console.log(NumberDec) // OUTPUT: 45.00

console.log("\n")
console.log("No.10  IsNan()")
function check(a) {
    if (isNaN(a)) {
      return 'Not a Number!';
    }
    return a
  }
  
  console.log(check('8985FDD')); // OUTPUT: "Not a Number!"

  console.log(check('1234')); // OUTPUT: 1234