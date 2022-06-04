//New code upper, from stackoverflow, previous code all moved lower! 
//Upper----------------------------------------------------------------------------------
//Adding two numbers, stackoverflow
// const btn = document.getElementById('btn');
// const calc = document.getElementById('calc');

// function add() {
//   const num1 = parseInt(document.getElementById('num1').value);
//   const num2 = parseInt(document.getElementById('num2').value);
//   const result = document.getElementById('result');
//   if (num1 && num2 !== NaN) {
//     let sum = num1 + num2;
//     result.value = sum;
//     return false;

//   } else {
//     alert("Enter Valid Number");
//   }
// }
// calc.addEventListener('click', () => {
//   add();
// });
// btn.addEventListener('click', () => {
//   num1.value = " ";
//   num2.value = " ";
//   result.value = " ";
// });


//Area of a triangle
const btn = document.getElementById('btn');
const calc = document.getElementById('calc');

function area() {
    const base = parseInt(document.getElementById('base').value);
    const height = parseInt(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (base && height !== NaN) {
        let area = base/2 * height;
        result.value = area;
        return false;

        } else {
        alert("Enter Valid Number");
        }
    }   
    calc.addEventListener('click', () => {
        area();
      });
      btn.addEventListener('click', () => {
        base.value = " ";
        height.value = " ";
        result.value = " ";
      });
//Lower----------------------------------------------------------------------------------
//JScript&formsInfoW1
//Test Input
// function testResults (form) {
//     var TestVar = form.inputbox.value;
//     alert ("You typed: " + TestVar);
//     document.getElementById("bob4").innerHTML = "You typed : "+ TestVar;
// }
// Here's how the script works. JavaScript calls the testResults function 
// when you click the button in the form. The testResults function is 
// passed the form object using the syntax this.form (the this keyword 
// references the button control; form is a property of the button control 
// and represents the form object). I've given the form object the name form 
// inside the testResult function, but you can any name you like.

// The testResults function is simple -- it merely copies the contents of the 
// text box to a variable named TestVar. Notice how the text box contents was referenced. 
// I defined the form object I wanted to use (called form), the object within the form 
// that I wanted (called inputbox), and the property of that object I wanted (the value property).

// function baseM (form) {
//     let baseM = form.inputbox.value;
//     //alert ("You typed base: " + baseM);
    
//     return baseM;
// }
//document.getElementById("bob5").innerHTML = "You typed base: "+ base;


// function heightM (form) {
//     let heightM = form.inputbox.value;
//     //alert ("You typed height: " + heightM);
    
//     return heightM;   
// }

// alert ("You typed base: " + baseM + " and height:" + heightM);
// document.getElementById("bob6").innerHTML = "You typed height: "+ height;


// let base = function(baseM){
//     return base;
// }
// let height = function(heightM){
//     return height;
// }


// function findArea (base, height)
// {
//     function newBase(base)
//     {
//         return base/2;
        
//     }
//     return newBase(base) * height;
    
// }
// alert(findArea(base, height));
// document.getElementById("bob7").innerHTML = "Area of triangle is : "+findArea(base, height);