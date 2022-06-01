//JScript&formsInfoW1
//Test Input
function testResults (form) {
    var TestVar = form.inputbox.value;
    alert ("You typed: " + TestVar);
}
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