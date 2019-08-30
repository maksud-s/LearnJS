function MyFuc1(id, fname){
    MyFuc1.count = 0;

    this.id = id;
    this.fname = fname;
    this.print = function(){
        console.log(this.id, this.fname);
    }

    MyFuc1.prototype.test= 'Test';
    MyFuc1.prototype.printInfo = function(){
        console.log(this.id, this.fname);
    }
}

    let a = new MyFuc1(15414, "Maksud");
    console.log(a);
    
    let b = new MyFuc1(1,'Amaan');
    console.log(b);

    a.test = "Test11";
    console.log(b.test);
    console.log(MyFuc1.prototype);
    a.printInfo();
    b.printInfo();

    console.log(a.test);

    a.print = function() {
        console.log("Func A Print");
    }
    a.print();
    b.print();

    a.printInfo = function() {
        console.log("PrintInfo A")
    } 
    a.printInfo();

    console.log(a.count);
    console.log(MyFuc1.count);