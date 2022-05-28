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



function findArea(base, height)
{
    function halfBase(hb);
    {
    return  base/2;
    }
    return findArea(hb) * findArea(height);
}

document.getElementById("bob3").innerHTML = "Area of triangle is : "+findArea(3,4);