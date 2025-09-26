var date = new Date();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

let lastModified = date.parse(document.lastModified);
document.getElementById("lastmodified").innerHTML = lastModified