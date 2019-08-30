// 1
var obj1 = { id:1 , fname:"Maksud", lname:"Shaikh"};
console.log(obj1);

// 2
var obj2 = new Object();
obj2.id = 2;
obj2.fname = "Amaan";
obj2.lname = "Mansoori";
console.log(obj2);

// 3
var obj3 = Object.create(obj2);
console.log(obj3.id);
console.log(obj3.fname);
console.log(obj3.lname);

// 4
function MyFunc(id, fname, lname){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.print = function(){
        console.log(this.id , this.fname , this.lname)
    }
}
var obj4 = new MyFunc(10 , "Hemant" , "Gupta");
console.log(obj4);

// 5
class MyClass {
    constructor(id , fname , lname){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    print(){
        console.log(this.id , this.fname , this.lname);
    }
}

var obj5 = new MyClass(5 , "Jitendra" , "Solanki");
console.log(obj5);