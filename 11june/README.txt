https://www.w3schools.com/html/default.asp

why <!DOCTYPE html>
if we do not write his it will trigger what's known as "quirks mode."

Quirks mode => "Quirks mode is a compatibility mode that browsers use to render web pages that were written for older, non-standard-compliant browsers (like Netscape Navigator 4 or Internet Explorer 5)"

when a browser encounters an HTML document without a DOCTYPE, it assumes the page was created in an era before web standards were widely adopted.

if we write this It tells the browser to render the page in "standards mode."

Standart Mode=> "Standards mode" (or "no-quirks mode," as it's sometimes called in modern specifications) refers to the way web browsers render HTML and CSS according to the official specifications and recommendations set by organizations like the W3C (World Wide Web Consortium) and WHATWG (Web Hypertext Application Technology Working Group)."

Conclusion => While your HTML page might still "work" without <!DOCTYPE html>, you're essentially telling the browser to take its best guess at how to render your content, often leading to undesirable and unpredictable results.

Basics :
<html> root element defines the whole body
<head > meta info
<body> documents body 

elemments = tags with content
Some HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!

hr br img link are self closing tags

attributes = additional value to tags lije width,height ,tags 

for absolute url we can just take the image address for relative url we must save it in the device

alt in <img> is alternate text

lang attribute inside the <html> tag, to declare the language of the Web page.
the first two characters define the language of the HTML page, and the last two characters define the country.
like with html <html lang="hi-IN"> for hindi and INdia 
Why Lang?
Improve Search engine Optimization (SEO)
=>They can more accurately determine the primary language of your page's content.
=> This helps them serve your page to users who are searching in that specific language or who prefer content in that language, improving your page's relevance and ranking     
=>Translation Services: Many browsers offer built-in translation features. The lang attribute allows the browser to correctly identify the original language of the page,


CASING => The title attribute (and all other attributes) can be written with uppercase or lowercase like title or TITLE. but html Standard Recommendation is to use lowercase









