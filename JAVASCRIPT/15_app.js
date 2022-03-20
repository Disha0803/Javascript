let Student={
    name:'Rahul',
    age:23,
    course:'MTech',
    college:'BPUT',
    email:'rahul@gmail.coml'
};
let StudentString=JSON.stringify(Student)
console.log(StudentString);  

// {"name":"Rahul","age":23,"course":"MTech","college":"BPUT","email":"rahul@gmail.coml"}

let StudentObject=JSON.parse(StudentString)
console.log(StudentObject);  

// {name: "Rahul", age: 23, course: "MTech", college: "BPUT", email: "rahul@gmail.coml"}