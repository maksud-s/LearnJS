var val1 = 500;

let lamda = (x) => (x*x) + val1;
console.log("callback1 : " + lamda(5));

function doSomething(val , callback) {
    console.log("doSomething" + val);
    callback(val * val);
}

doSomething(5 , (v) => console.log("callback2 : " + (v + val1)));
