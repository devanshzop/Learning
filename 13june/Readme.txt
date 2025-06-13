project Assessment : https://zop.dev/integration
take care of command+k types  accessability , use json format


Javascript : https://www.kodekarma.dev/frontend/courses/30-days-of-javascript

js functions and their types ;

_______________________________________________________________
let x;
console.log(typeof x);         // Output: "undefined"
console.log(typeof undefined); // Output: "undefined"

let y = null;
console.log(typeof y);    // Output: "object" (This is a historical bug/quirk)
console.log(typeof null); // Output: "object" (This is a historical bug/quirk)
_______________________________________________________________

let globally = 20;

function check(){
    console.log(globally);
}

check();// 20
// 20 is getting printed  because the function in cheking in its local scope as well as its lexicall scope 

_______________________________________________________________

let myLet = 20;
const myConst = 30;

console.log(window.myLet);   // Output: undefined
console.log(window.myConst); // Output: undefined

console.log(myLet);          // Output: 20 (still accessible directly by name)
console.log(myConst);        // Output: 30 (still accessible directly by name)

because they reside in a separate global lexical environment rather than on the window object itself.



_______________________________________________________________

// Open your browser's console and paste this
let a = 10;
var b = 100;

console.log(this);      // In browser console, 'this' would be 'Window' object
console.log(this.a);    // Output: undefined (because 'let' doesn't attach to window)
console.log(this.b);    // Output: 100 (because 'var' DOES attach to window, and 'this' is 'window')

_______________________________________________________________

// your-script.js
'use strict'; // Or if the file is a module, strict mode is automatic
let a = 10;
var b = 100;

console.log(this);      // Output: undefined (in strict mode global context)
console.log(this.a);    // Output: undefined (because 'this' is undefined, and 'let' doesn't attach to window anyway)
console.log(this.b);    // Output: undefined (because 'this' is undefined, even though 'b' exists on window)


_______________________________________________________________

 Move the <script> tag to just before the closing </body> tag (Recommended for simple scripts)
 <!DOCTYPE html>
<html>
<head>
    <title>Button Click Example</title>
</head>
<body>

    <button id="mybutton">Click</button>

    <script>
        document.getElementById("mybutton").addEventListener('click', function() {
            console.log(this); // When the button is clicked, 'this' will refer to the <button> element itself.
        });
    </script>

</body>
</html>
_______________________________________________________________

 Use DOMContentLoaded event (More robust for scripts in <head>)
This waits for the entire HTML document to be fully loaded and parsed before executing your JavaScript.
<!DOCTYPE html>
<html>
<head>
    <title>Button Click Example</title>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // This code will only run once the HTML is fully loaded
            document.getElementById("mybutton").addEventListener('click', function() {
                console.log(this); // When the button is clicked, 'this' will refer to the <button> element itself.
            });
        });
    </script>
</head>
<body>

    <button id="mybutton">Click</button>

</body>
</html>

The Problem: When a browser loads a web page, it reads the HTML from top to bottom. If your JavaScript code (especially when placed in the <head> or directly in the <body> before the elements it targets) tries to interact with HTML elements that haven't been parsed yet, it will fail.
The Solution (DOMContentLoaded): The DOMContentLoaded event fires exactly when the browser has finished loading and parsing the HTML document, and the Document Object Model (DOM) is ready.
voiding the "Old School" window.onload
window.onload: There's an older event, window.onload, that also indicates that the page is ready. However, window.onload waits for everything on the page to fully load, including all images, stylesheets, and sub-frames.
DOMContentLoaded vs. window.onload:
DOMContentLoaded is generally preferred for DOM manipulation because it fires much earlier. Your JavaScript often doesn't need to wait for images or other assets; it just needs the HTML structure.
window.onload is still useful if your JavaScript specifically relies on all external resources (like image dimensions) being loaded before it performs certain actions.

____________________________________________

That is what defer do 
This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.
To achieve a similar effect for dynamically inserted scripts use async="false" instead. Scripts with the defer attribute will execute in the order in which they appear in the document.
Baseline icon Widely available across major browsers (Baseline since 2015)
_______________________________________________________________

PROTOTYPE

In JavaScript, a prototype is a mechanism that enables objects to inherit properties and methods 
from other objects. Each object in JavaScript has a hidden property called prototype, which can either point 
to another object or be null. This creates a prototype chain, allowing objects to access properties and methods defined 
in their prototypes.
