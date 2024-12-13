var x = 'hello'
var x = 'world'
console.log('x' + 'y');


// javascript object
var staff ={
    fullname: 'EHI IDK MAN',
    job: 'Tech Support',
    age: undefined,
    disabilities: null,
    wagePerDay: 20000,
    marriedStatus: true,
    phoneNumber: 9911919191,
    hobbies: ['coding', 'cooking', 'traveling'],
    address: {
        number: 17,
        Street: 'alagomeji',
        city: 'yaba',
        state: 'lagos',
        country: 'nigeria',
    }


}


    var staff2 ={
        fullname: 'MICAHEL SIDNEY',
        job: 'graphic designer',
        age: undefined,
        disabilities: null,
        wagePerDay: 3500,
        numberOfDaysPresent: 17,
        salary: function(){
          return this.wagePerDay*this.numberOfDaysPresent
          
        },
        marriedStatus: false,
        phoneNumber: 9911919191,
        hobbies: ['vidoe editing', 'watching anime', 'gaming'],
        address: {
            number: 44,
            Street: 'karimu',
            city: 'sabo',
            state: 'lagos',
            country: 'Nigeria',
        }

        
}
staff2.marriedStatus = true
console.log(staff2);


console.log(staff2.hobbies[2]);
console.log(staff2.address.city);
staff2.address.city = 'ikeja'
console.log(staff2);
staff2.hobbies[1] = 'dancing'
console.log(staff2);

console.log(staff2.salary());

function seasonGreetings(){
    return console.log("Merry Christmas");
    
}
seasonGreetings()

function add(x,y){
    var sum = x + y 
    return console.log(sum);
    
}
add(10,25)
add(229,1)

function AreaOfCircle(r){
    var AreaOfCircle = Math.PI * r**2
    return console.log(AreaOfCircle);
    
    
}
AreaOfCircle(10)

function areaOfTriangle(h,b){
    var areaOfTriangle =  (h*b)/2
    return console.log(areaOfTriangle);
    

}
areaOfTriangle(7,5)

function perimeterOfTriangle( a, b, c ){
    var perimeterOfTriangle = (a+b+c)
    return console.log(perimeterOfTriangle);
    
}
perimeterOfTriangle(5,5,5)

function salute(name){
    return console.log('hello' + name);
    
}
salute(' sidney ')

var score = 70
switch(score){
    case score <= 40:
        console.log('your grade is D');
        break;
    case score >= 41 && score <= 50: 
        console.log('your grade is C');
        break;
        case score >= 51 && score <= 70:
            console.log('your grade is B');
        break;
    default:
    console.log('your grade is A');}
                



var score = 0;
if (score <=20)
    console.log('your grade is F');
else if (score >= 31 && score <=40) {
    console.log('your grade is D');
} else if (score >= 41 && score <= 50) {
    console.log('your grade is C');
} else if (score >= 51 && score <= 70) {
    console.log('your grade is B');
} else {
    console.log('your grade is A');
}