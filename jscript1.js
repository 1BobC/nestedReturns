// nested1
function triangleHypotenuse(base,height)
{
function square(side){
return side*side;
}
return Math.sqrt(square(base)+square(height));
}
document.write("Hypotenuse of triangle is : "+triangleHypotenuse(3,4));
document.write("Hypotenuse of triangle is : "+triangleHypotenuse(1,1));
document.write("Hypotenuse of triangle is : "+triangleHypotenuse(5,12));