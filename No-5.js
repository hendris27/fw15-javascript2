console.log("Pemanggilan Spred Operator\n")
let biodata1={ nama :"hendri"}
let biodata2={email:'hendri1234@gmail.com'}
let biodata3={hobbies:['mancing','hiking','badminton'],}
let biodata4={...biodata1,...biodata2,...biodata3}
console.log(biodata4)


console.log( "Pemanggilan Destructuring\n")
const data={
    street:'Kulas Light',
    city:'GwenBorough'
}
const {street, city}=data
console.log(data)