/**
 * Created by Pritok on 02.02.2016.
 */
//Tasks part one with skype
console.log("tasks part one");
console.log("------------------------------------------------------------");

//this function print all types variables and their types
function typesOfVariables() {
    var num = 256;
    var bool = true;
    var str = "it_string";
    var obj = {};
    var arr = [1, 2, 3, 4, 5];
    var func = function() {};
    var undef = undefined;;

    console.log("It's easy types");
    console.log("num = ", typeof(num));
    console.log("bool = ", typeof(bool));
    console.log("str = ", typeof(str));

    console.log("It's hard types");
    console.log("obj = ", typeof(obj));
    console.log("arr = ", typeof(arr));
    console.log("func = ", typeof(func));

    console.log("It's special types");
    console.log("undef = ", typeof(undef));
}

//this function change values with String and Number and change types
function changeStringToNumber(str,num) {
    console.log("str = ", str, "type = ", typeof(str));
    console.log("num = ", num, "type = ", typeof(num));

    str = Number(str);
    num = num.toString();

    console.log("str = ", str, "type = " , typeof(str));
    console.log("num = ", num, "type = " , typeof(num));
}

//this function compare two variables String and Number
function compareStringAndNumber(str,num){
    if ((typeof(str) == "string") && (typeof(num) == "number")){
        console.log("str = ", str);
        console.log("num = ", num);

        if (str == num) {
            console.log("string variable is equals with numbers");
        } else {
            console.log("string variable is not equals with number");
        }

        if (str === num) {
            console.log("string variable is identical with number");
        } else {
            console.log("string variable is not identical with number");
        }
    }
}

//this function is encripting numbers information, encriptTheNumber(Number, EncriptionSystem, (true/false))
function encriptTheNumber(num, encriptSystem, encript) {
    if (encript) {
        return num.toString(encriptSystem);
    } else {
        return parseInt(num, encriptSystem);
    }
}

typesOfVariables();

changeStringToNumber("5", 6);

compareStringAndNumber("5", 5);
compareStringAndNumber("10", 5);

console.log("Encrition number 5 to number 101 to ",encriptTheNumber(encriptTheNumber(5, 2, true), 2, false));

//Tasks part two with presentation

console.log("tasks part two");
console.log("----------------------");

//foo => 10 because function has local scope , and foo in function  == undefined, and !foo equals true
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log("foo = ", foo);
}
bar();

//a => 1 because function define first and function a(){} inpreter as var a = function(){} and this define a for this scope
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log("a = ", a);

//a => 10 because I change assigment function
var aFixed = 1;
function bFixed() {
    aFixed = 10;
    aFixed = function aFixed() {}
    return;
}
bFixed();
console.log("aFixed = ", aFixed);


//type operators

//unary operators
console.log("unary operator is '++, --, -, +'...");
var i = 2;
console.log("2++ = ", i++);
i = 2;
console.log("2-- = ", --i);
console.log("-2 = ", -2);
console.log("+'2' = ", +'2');

//binary operators
console.log("binary operators is '+, -, *, /'...");
var i = 2;
console.log("2 + 2 = ", 2 + 2);
i = 2;
console.log("2 - 2 = ", 2 - 2);
console.log("2 * 2 = ", 2 * 2);
console.log("2 / 2 = ", 2 / 2);

//ternary operator
console.log("ternary operator is '?'");
console.log(true ? "? is working!":"? is not working!");

//function write song about sun and mother
function songAboutSun() {
    var str = "Нехай завжди буд";
    var arr = ["е сонце,", "е небо,", "е мама,", "у я."];
    var newArr = [];
    var i;

    for(i in arr) {
        newArr = newArr.concat(str + arr[i]);
    }

    for (i in newArr) {
        console.log(newArr[i]);
    }
}
songAboutSun();

//function that draw to use "*"
function drawStars() {
    var counter = 10;

    //this internal function that generate string that include "*"
    function drawling(end) {
        var str = "";

        for(j = 0; j < end; j++) {
            str += "*";
        }
        return str;
    }

    for(i = 9; i <= 29; i += counter) {
        console.log(drawling(i));
        counter -= 2;

        if (!counter) {
            break;
        }
    }

    counter = 0;

    for(i = 29; i >= 9; i -= counter) {
        console.log(drawling(i));
        counter += 2;

        if (!counter) {
            break;
        }
    }
}

drawStars();



// this function define timer on 10 second
function timerOnTenSecond() {
    var data1 = new Date();
    var data2;
    var secondCounter = 1;

    do{
        data2 = new Date();

        if (((data2 - data1) / 1000) > secondCounter){
            console.log(secondCounter + " second");
            secondCounter++;
        }
    }while(((data2 - data1) / 1000) < 10);
    console.log("10 second");
}

timerOnTenSecond();
