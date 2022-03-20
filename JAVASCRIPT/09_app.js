//-----------------------
//For in Loop
//-----------------------
// let student={
//     SI_no:19,
//     name:"Sibun",
//     age:21,
//     course:"BCA"
// };
// for (key in student){
//     // console.log(key);
//     // console.log(student[key]);
//     // console.log(student.key);//undefined
//     console.log(`${key}:${student[key]}`);
// }

//-------------------------
//Array of Object
//-------------------------
// let bike=[
//     {
//         name:'bullet',
//         price:1110000,
//         color:'black'
//     },
//     {
//         name:'bullet-2',
//         price:1210000,
//         color:'silver'
//     },
//     {
//         name:'bullet-3',
//         price:1510000,
//         color:'silver'
//     }
// ];
// // console.log(bike[0]["price"]);
// console.log(bike[1]);
// console.log(bike[2]);

//------------------------
//Method inside object
//------------------------
// let kidslearn={
//     A:"Apple",
//     B:"Bat",
//     C:"Cat",
//     D:"Dog",
//     m1:function(){
//         console.log(`I am a mehod`);
//         console.log(`Hy myself no one`);
//     }
// }
// // console.log(kidslearn);
// kidslearn.m1();
// console.log(kidslearn.C);

// ----------------------------------------------------------------
// this keyword --> Access current object properties inside method
//----------------------------------------------------------------- 
// let mydetails={
//     name:"Disha",
//     age:21,
//     color:"black",
//     qlf:"BCA",

//     myInfo:function(){
//         console.log(`My name is: ${this.name}`);
//     }
// };
// mydetails.myInfo();

// ---------------------------------
// Function Body Part outside object
// ---------------------------------
// let mydetails={
//         name:"Disha",
//         age:21,
//         color:"black",
//         qlf:"BCA",

//         myInfo(){
//             console.log("Outside Object");
//         }

//         };
// mydetails.myInfo();

// ---------------------------------
// Passing argument
// ---------------------------------
let mydetails={
    name:"Disha",
    age:21,
    color:"black",
    qlf:"BCA",

    myInfo(value){
        console.log(`This is ${value}`);
    }

    };
let a="disha";
mydetails.myInfo(a);