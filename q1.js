foo = 3;
bar = false;

// new Date() returns the date and time currently in the brower's timezone. 
const everyday = new Date();

// For the if statement to work, the value of foo must be 3.
// The if statement should also use three equals signs, "===", instead of two because we do not want any type conversions. 
// Having two equal signs will convert 3 into a string, which could cause unexpected results.
// The if statement should look like: if (foo === 3) 
if (foo == 'three') {
    var obj = { 
        hello: 123, 
        world: 456 
    };
    // For loops should have semicolons seperating each expression, instead of the comma at seperating the first and second expression.
    // The for loop should look like: for (let i = 0; i < obj.length; ++i)
    for (let i = 0; i < obj.length; ++i) {
        document.appendChild(document.createElement('div')); 

        // Are these getElementById codes necessary in the for loop? The styles will stay the same in each for loop iteration.
        // It is better to put these code outside of the for loop to follow best practices.
        document.getElementById('xyz').style.border = '1px solid #000'; 
        document.getElementById('xyza').style.color = 'white'; 
        document.getElementById('xyzab').style.marginTop = '160px'; 
        document.getElementById('xyzabc').style.border = '1px solid #123'; 

        // This while loop will never run because the first expression will always be false.
        // nodeName is a property of child, not a callable function.
        // Also, nodeName will return a string all in capital letters. 
        // For this while loop to work, the expression should be child.nodeName !== 'SPAN'.

        // This also leads to another problem, the while loop will be an infinite loop because there is currently no code 
        // to make the first expression true.

        // p = child.parentNode is also not being compared because it is using one equal sign instead of three.
        // However, p = child.parentNode is valid code, but this method, in my opinion, does not look good.
        // A better looking while loop would be:
        // while (child.nodeName() !== 'span') {
        //     p = child.parentNode;
        // }
        while (child.nodeName() !== 'span' && (p = child.parentNode));

        // foo will be undefined because the object, obj, does not have any keys that are integers.
        // The multply function is expected to return an integer.
        foo = obj[multiply(i, i - 3)];
    }
}

// multiply function should be declared at the beginning of the file because it needs to be initilaized before it is called..
const multiply = (x, y) => x * y;
