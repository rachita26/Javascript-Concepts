// Q19. How to create a cookie using JavaScript?
// The simplest way to create a cookie is to assign a string value to the document.cookie object, which looks like this-
// Syntax :document.cookie = "key1 = value1; key2 = value2; expires = date";

// Q20. How to read a cookie using JavaScript?
// Reading a cookie is just as simple as writing one, because the value of the document.cookie object is the cookie. So you can use this string whenever you want to access the cookie.
// The document.cookie string will keep a list of name = value pairs separated by semicolons, where name is the name of a cookie and value is its string value.
// You can use strings’ split() function to break the string into key and values.

// Q21. How to delete a cookie using JavaScript?
// If you want to delete a cookie so that subsequent attempts to read the cookie return nothing, you just need to set the expiration date to a time in the past. You should define the cookie path to ensure that you delete the right cookie. Some browsers will not let you delete a cookie if you don’t specify the path.

//Cookies are required because http is a stateless protocol and if some data is to be maintained even if the page is detroyed, cookies are used to store the info in the user's hard drive for use later when the page loads again.

//The values can be stored by escape() so that when they are split(';') later, there is uniformity.

function writeCookie(name) {
    var now = new Date();
    now.setMonth(now.getMonth() + 1);
    cookievalue = escape(name) + ";"

    document.cookie = "name=" + cookievalue;
    //ReferenceError: document is not defined because cookie can be set only in the browser webpage
    document.cookie = "expires=" + now.toUTCString() + ";"
    document.write("Setting Cookies : " + "name=" + cookievalue);
}
writeCookie("ABC");