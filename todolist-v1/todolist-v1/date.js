
//jshint esversion: 6

//note calling the function in the code below. Just exporting the function so it can be used in the app.js file.
//module.exports is a javascript object so more than one function can be defined as properties of the object.
//each function can be defined as anonymous functions and declared like below in each property of the
//module.exports module
//module.exports is equal exports. export is an alias.
exports.getDate= function ()
{
var today = new Date();
//This defines the options of the toLocaleDateString method.
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}
//toLocaleDateString method gives you the current date formated according to the parameters. In this case format is en-US and
//output will have a weekday, day and month as defined by the options object.
return today.toLocaleDateString("en-US", options);

}

exports.getDay= function ()
{
var today = new Date();
//This defines the options of the toLocaleDateString method.
var options = {
  weekday: "long"

}
//toLocaleDateString method gives you the current date formated according to the parameters. In this case format is en-US and
//output will have a weekday, day and month as defined by the options object.
return today.toLocaleDateString("en-US", options);

}
