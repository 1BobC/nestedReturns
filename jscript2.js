// nested2
function getAge(name,age)
            {
            document.write(name+" age is :"+age+" years"+"<br>");
            }
            function getName(name,age)
            {
            document.write("I am :"+name+"<br>");//document.write() prints output in a browser
            getAge(name,age);
            }
            getName("Amardeep",26);
            getName("Paramesh",24);
            getName("Jyothi",25);