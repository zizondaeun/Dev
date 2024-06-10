const myURL = new URL('http://example.org:8080/foo?username=choi#bar'); //"start" : "node url.js",

//console.log(myURL);
//console.log(myURL.hash);
console.log(myURL.search);
console.log(myURL.searchParams.get('username'));