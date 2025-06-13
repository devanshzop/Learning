

why   <meta charset="UTF-8"> ?
charset: This attribute specifies the character encoding for the HTML document.
UTF-8: This is a universal character encoding standard.
It's capable of encoding almost every character in the world's writing systems (including English, European languages with accents, Chinese, Japanese, Arabic, emojis, etc.).

<meta name="viewport" content="width=device-width, initial-scale=1.0">
content="width=device-width, initial-scale=1.0": This attribute provides instructions to the browser on how to control the viewport's size and scaling
width=device-width: This sets the width of the viewport to be equal to the width of the device's screen (in CSS pixels).
initial-scale=1.0: This sets the initial zoom level when the page is first loaded. 1.0 means there's no zoom (a 1:1 ratio), so the content appears at its actual size


BENTO grid


grid-template-columns: repeat(3, 1fr);
grid-template-columns: This property defines the number and width of columns in a grid.
repeat(3, 1fr): This is a shorthand that means “repeat 1fr three times,” so it creates three equal-width columns.
1fr: Stands for 1 fraction of the available space. If you have three columns each set to 1fr, they will each take one-third of the total width of the grid container.


Making bentogrid using tailwind
tailwind cheat sheet => https://nerdcave.com/tailwind-cheat-sheet

In Tailwind CSS, grid-template-rows: auto; is achieved using the grid-rows-none

____________________________________________

JAVASCRIPT  : https://www.w3schools.com/js/js_whereto.asp

When to use defer:
In HTML, the defer attribute is a boolean attribute that can be used on the <script> tag. It provides a way to control when an external JavaScript file should be executed by the browser.
Non-blocking HTML Parsing (Performance):, Ensuring DOM is Ready:,Execution Order:
defer is generally the recommended default for most external JavaScript files that:
Are not critical for the initial render of the page's content (i.e., the page can display its basic structure before the script runs).
Have dependencies on other deferred scripts (as their order is preserved).

Try all js object w3schools and its properties

As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.

https://stitch.withgoogle.com/ for site designs