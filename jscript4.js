// nested4
//var m=1000; //global value
const m=1000; //global value
            function parent(p,q) //p,q parent values
            {
            //var a=10;//parent value or local value
            const a=10;//parent value or local value
            function child()
            {
            //var b=20;//local value
            const b=20;//local value
            document.write("Parent value of p "+p+"<br>");//<br>takes output to new line
            document.write("Parent value of q "+q+"<br>");
            document.write("Parent value of a "+a+"<br>");
            document.write("Local value of b "+b+"<br>");
            document.write("Global value of m "+m);
            }
            child();
            //parent(2,4);
            }
            parent(2,4);
            //child();
            //parent();