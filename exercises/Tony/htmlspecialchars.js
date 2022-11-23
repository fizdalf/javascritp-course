/*
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one)
who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more)
which contains form fields so visitors can send emails or leave a comment on your website with ease.
However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it
through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form
fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Your mission is to implement a function that converts the following potentially harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;
 */

let palabra = ">tony&";

new function () {
    let parabraArray = palabra.split("");
    for (let i = 0; i<palabraArray.length; i++){
        switch (palabraArray[i]) {
            case "<":
                palabraArray[i] = "&lt";
                break;
            case ">":
                palabraArray[i] = "&gt";
                break;
            case '"':
                palabraArray[i] = "&quot";
                break;
            case "&":
                palabraArray[i] = "&amp";
                break;
        }
        ;
    }
    ;

    let palabra = palabraArray.join("");
    return palabra;
};
