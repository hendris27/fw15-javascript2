console.log ("Perbedaan var , let dan const");
// 1. var merupakan salah satu variable javascript yang dimana variable tersebut berfungsi menyimpan data yang sudah dideklarasikan,
// var sendiri yaitu variabale yang dideklarasikans secara global variable non blcok scope serta data yang sudah dideklarasikan dapat diubah //

console.log("contoh penggunaan VAR \n");

// nilai yang ditentukan integer 30
var bilangan = 30;
// var ini bisa di ganti dengan deklarasi var lain
var value =false;
// jika kondisi salah nilai ini akan ditampilkan, bukan yang false, value=false sudah diganti
var value =("value=false --sudah diganti dengan keterangan ini--");
  
if (bilangan >90) {
// akan ditampilkan (true) jika nilainya benar
  var value =true;
// akan menampikan true serta mengubah nilai variable global nya ( var value = false)
  console.log("output1 contoh var : \n= "+value);
}
// akan menampilkan nilai true karena nilai variable sudah diubah sebelumnya
console.log("output2 contoh var : \n="+value);


// 2. let dan const merupakan variable javascript yang bersifat block, untuk let data variable yang sudah dideklarasikan bisa diubah seperti halnya var, untuk const data yang sudah dideklarasikan tidak dapatdiubah //
console.log ("\n")
console.log ("contoh penggunaan LET \n")

let angka = 10;
let nilai =false;
// jika kondisi salah nilai ini akan ditampilkan, bukan yang false, value=false sudah diganti
nilai =("nilai=false sudah diganti dengan keterangan ini");

if (angka >1) {
  // hanya berfungsi jika nilai nya benar
  let nilai =true;
  // akan menampikan true jika nilainya benar, jika nilainya salah outuput1 akan kosong karena variable yang ada diblockscope hanya ada 1 variable yaitu hanya let nilai=true;
  console.log("output1 contoh let : \n"+nilai);
}
// jika kondisi benar ataupun salah output2 akan selalu menampilkan pesan ->("nilai=false sudah diganti dengan keterangan ini")" karena let bersifat block scope
console.log("output2 contoh let : \n"+nilai);

// const sama halnya dengan let , variable const berisfat scope block letak perbedaan pada data yang sudah dideklarasikan tidak bisa diubah //
console.log("\n")
console.log("contoh penggunaan CONST \n");

const score = 10;
const note =false;
// code dibawah ini jika tidak diblok, maka akan error karena vaariable const tidak bisa d ganti
// note ="note=false sudah diganti dengan keterangan ini";

if (score >1) {
  // akan ditampilkan (true) jika nilainya benar
  const note =true;
  // akan menampilkan true  saja karena di block scope hnya ada kondisi jika dia benar
  console.log("output1 contoh const : \n= "+note);
}
// akan menampilkan nilai false walaupun kondisi benar atau salah karena code ini dilua block scope
console.log("output2 contoh const : \n="+note);