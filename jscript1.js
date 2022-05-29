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
document.getElementById("bob1").innerHTML = "Hypotenuse of triangle is : "+findHypotenuse(1,1);
document.getElementById("bob2").innerHTML = "Hypotenuse of triangle is : "+findHypotenuse(5,12);


function findArea (base, height)
{
    function newBase(base)
    {
        return base/2;
        
    }
    return newBase(base) * height;
}
document.getElementById("bob3").innerHTML = "Area of triangle 1 is : "+findArea(3,4);
document.getElementById("bob4").innerHTML = "Area of triangle 2 is : "+findArea(1,1);
document.getElementById("bob5").innerHTML = "Area of triangle 3 is : "+findArea(5,12);