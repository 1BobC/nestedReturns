// nested1
function triangleHypotenuse(base,height)
{
function square(side){
return side*side;
}
return Math.sqrt(square(base)+square(height));
}
document.write("Hypotenuse of triangle is :"+triangleHypotenuse(3,4));