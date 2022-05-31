// nested1
function triangleHypotenuse(base,height)
{
function square(side){
return side*side;
}
return Math.sqrt(square(base)+square(height));
}
// document.write("Hypotenuse of triangle is : "+triangleHypotenuse(3,4));
// document.write("Hypotenuse of triangle is : "+triangleHypotenuse(1,1));
// document.write("Hypotenuse of triangle is : "+triangleHypotenuse(5,12));


// document.getElementById("bob").innerHTML = "Hypotenuse of triangle is : "+triangleHypotenuse(3,4);
// document.getElementById("bob1").innerHTML = "Hypotenuse of triangle is : "+triangleHypotenuse(1,1);
// document.getElementById("bob2").innerHTML = "Hypotenuse of triangle is : "+triangleHypotenuse(5,12);

function findHypotenuse(base, height)
{
    function findSquare(side)
    {
        return side*side;
    }
    return Math.sqrt(findSquare(base) + findSquare(height));
}

document.getElementById("bob").innerHTML = "Hypotenuse of triangle is : "+findHypotenuse(3,4);
document.getElementById("bob1").innerHTML = "Hypotenuse of triangle 1 is : "+findHypotenuse(1,1);
document.getElementById("bob2").innerHTML = "Hypotenuse of triangle 2 is : "+findHypotenuse(5,12);


//Research for Bob's example below

    //   function add(a,b) {
    //     let sum = parseInt(a) + parseInt(b);
    //     alert(sum);
    //     document.getElementById("bob4").innerHTML = "Sum is : "+sum;
    //   }


//Bob's example from form submitting base and height to calculation of area
let base = function(selectbase){
    return base;
}
let height = function(selectheight){
    return height;
}


function findArea (base, height)
{
    function newBase(base)
    {
        return base/2;
        
    }
    return newBase(base) * height;
    
}
alert(findArea(base, height));
document.getElementById("bob3").innerHTML = "Area of triangle 3 is : "+findArea(base, height);
//document.getElementById("bob4").innerHTML = "Area of triangle 4 is : "+findArea(1,1);
//document.getElementById("bob5").innerHTML = "Area of triangle 5 is : "+findArea(5,12);

//MDN example of form input and event listener
//MDN loops and iterations exercise to go with html code - a great example!!!
let howMany = function(selectObject) { 
let numberSelected = 0;
for(let i = 0; i < selectObject.options.length; i++) {
if(selectObject.options[i].selected){
numberSelected++;
}
}
return numberSelected;
}
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {

alert ("Number of options selected: " + howMany(document.selectForm.musicTypes))
console.log("Number of options selected: " + howMany(document.selectForm.musicTypes))
//document.write("Number of options selected:" + howMany(document.selectForm.musicTypes))
document.getElementById("bob6").innerHTML= ("Number of options selected: " + howMany(document.selectForm.musicTypes));
});