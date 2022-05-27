// nested3
function addSum (a) {
    return function (b) {
    return a + b;
    };
    }
    var out = addSum(5);
    document.write(out(3));